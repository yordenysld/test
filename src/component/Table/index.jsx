import React, { } from 'react';
import { connect } from 'react-redux';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableFooter,
    TableRow,
    Button,
    ButtonGroup,
    Select
} from '@material-ui/core'
import Pagination from '@material-ui/lab/Pagination';
import {
    list_product,
    delete_product,
    Add_Product,
    Update_Product,
    update_product_ui,
    count_paging,
    update_paging,
    set_size_paging,
    set_size_paging1
} from '../../Redux/Actions';

import './style.css';

//this is  component table of  the  page
class Tabla extends React.Component {

    state={valueSelect:10};
    //get  values  of the table for  update form
    get_value_table(e) {
        this.key = e.currentTarget.id;
        document.querySelector("#Name").value = e.currentTarget.children[1].innerHTML;
        document.querySelector("#Type").value = e.currentTarget.children[2].innerHTML;
        document.querySelector("#Release_Date").value = e.currentTarget.children[3].innerHTML;
        document.querySelector("#Insert_Date").value = e.currentTarget.children[4].innerHTML;
        document.querySelector("#Number_of_Views").value = e.currentTarget.children[5].innerHTML;
        document.querySelector("#Abbreviation").value = e.currentTarget.children[6].innerHTML;
    }
    //
    update_object_product() {
        if (this.key != "")
            return {
                key: this.key,
                Name: document.querySelector("#Name").value,
                Type: document.querySelector("#Type").value,
                Release_Date: document.querySelector("#Release_Date").value,
                Insert_Date: document.querySelector("#Insert_Date").value,
                Number_of_Views: document.querySelector("#Number_of_Views").value,
                Abbreviation: document.querySelector("#Abbreviation").value
            }
        else {
            return {}
            alert("You is have that  select of  de row in the  table");
        }
    }

    componentWillMount() {
        this.props.list_product(this.props.pagin, this.props.size);
        this.props.count_paging(10);
    }

    render() {
        return (<div className="table">
            <ButtonGroup className={'ButtonGroup'} variant="contained" color="primary" aria-label="contained primary button group">
                <Button onClick={() => (this.props.delete_product(this.key, this.props.pagin, this.props.size))}>Delete</Button>
                <Button onClick={() => { this.props.Update_Product(this.update_object_product(), this.props.pagin, this.props.size) }}>Update</Button>
            </ButtonGroup>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>#</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Type</TableCell>
                            <TableCell>Release_Date</TableCell>
                            <TableCell>Insert_Date</TableCell>
                            <TableCell>Number_Of_Views</TableCell>
                            <TableCell>Abbreviation</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.props.products.map((element, i) => (<TableRow id={element._id} hover={true} selected={false} onClick={e => { this.get_value_table(e); }}>
                            <TableCell>{i}</TableCell>
                            <TableCell>{element.Name}</TableCell>
                            <TableCell>{element.Type}</TableCell>
                            <TableCell>{element.Release_Date}</TableCell>
                            <TableCell>{element.Insert_Date}</TableCell>
                            <TableCell>{element.Number_of_Views}</TableCell>
                            <TableCell>{element.Abbreviation}</TableCell>
                        </TableRow>))}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TableCell  colSpan={7} style={{ flexDirection: "row" }}>
                                <Pagination style={{marginLeft:'5px'}} className={'footer'} count={this.props.all_page} page={this.props.pagin} onChange={this.change_of_paging.bind(this)} />
                                <Select 
                                    className={'footer'}
                                    id="demo-customized-select-native"
                                    value={this.state.valueSelect}
                                    onChange={this.change_of_value_select_size_pagin.bind(this)}

                                >
                                    <option aria-label="None" value={"none"} />
                                    <option value={10}>10</option>
                                    <option value={20}>20</option>
                                    <option value={30}>30</option>
                                </Select>
                            </TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            </TableContainer>
        </div >)
    }

    change_of_paging(event, value) {
        this.props.update_paging(value);
        this.props.list_product(this.props.pagin, this.props.size);
    }

    change_of_value_select_size_pagin(event) {
        this.props.set_size_paging1(event.target.value);
        this.setState({valueSelect:event.target.value})
        //this.props.list_product(this.props.pagin, this.props.size);
    }
}

//this is it funtion  map  state  to property for the  componet
const mapStateToProp = (state) => ({
    products: state.products,
    pagin: state.pagin,
    size: state.size,
    all_page: state.all_page
})

//this is it funtion  map  Distpatch  to property for the  componet
const mapDispatchToProp = {
    list_product,
    delete_product,
    Add_Product,
    Update_Product,
    update_product_ui,
    count_paging,
    update_paging, set_size_paging, set_size_paging1
}

export default connect(mapStateToProp, mapDispatchToProp)(Tabla)