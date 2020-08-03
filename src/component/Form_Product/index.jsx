import React from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import { Button, ButtonGroup } from '@material-ui/core';
import { Add_Product, Update_Product, update_product_ui, list_product } from '../../Redux/Actions';
import './style.css'
//this is  component body of  the  page
class Form_Product extends React.Component {
    Nameref = React.createRef();
    Typeref = React.createRef();
    Release_Dateref = React.createRef();
    Insert_Dateref = React.createRef();
    Number_of_Viewsref = React.createRef();
    Abbreviationref = React.createRef();
    render() {
        return <div>
            <form className={'form'}>
                <TextField className={'input'} required inputRef={this.Nameref} onChange={() => { this.generate_Abbreviation(); }} id="Name" label="Name" defaultValue="" />
                <TextField className={'input'} required inputRef={this.Typeref} id="Type" label="Type" defaultValue=" " />
                <TextField className={'input'} id="Release_Date" inputRef={this.Release_Dateref} label="Release Date" type="date" defaultValue="2017-05-24" InputLabelProps={{ shrink: true, }} />
                <TextField className={'input'} id="Insert_Date" inputRef={this.Insert_Dateref} label="Insert Date" type="date" defaultValue="2017-05-24" InputLabelProps={{ shrink: true, }} />
                <TextField className={'input'} required inputRef={this.Number_of_Viewsref} id="Number_of_Views" label="Number of  Views" defaultValue=" " />
                <TextField className={'input'} required inputRef={this.Abbreviationref} id="Abbreviation" label="Abbreviation" defaultValue=" " />
            </form>

            <ButtonGroup className={'groupbutton'} variant="contained" color="primary" aria-label="contained primary button group">
                <Button onClick={() => { this.Add_Or_Update_Product() }}>Add</Button>
            </ButtonGroup>
        </div>
    }

    //function Add and Update
    Add_Or_Update_Product() {
        this.props.Add_Product(this.get_values_form(), this.props.pagin, this.props.size);
        this.props.list_product(this.props.pagin, this.props.size)
    }

    //generate key
    generate_id() {
        var data = new Date();
        return String(data.getDay()) + String(data.getMonth()) + String(data.getFullYear()) + String(data.getHours()) + String(data.getMinutes()) + String(data.getSeconds()) + String(data.getMilliseconds());
    }

    //get value  of  the form
    get_values_form() {
        return {
            Name: this.Nameref.current.value,
            Type: this.Typeref.current.value,
            Release_Date: this.Release_Dateref.current.value,
            Insert_Date: this.Insert_Dateref.current.value,
            Number_of_Views: this.Number_of_Viewsref.current.value,
            Abbreviation: this.Abbreviationref.current.value
        };
    }

    //generate Abbreviation
    generate_Abbreviation() {
        var split = this.Nameref.current.value.split(" ");
        if (split.length == 1) {
            if (split[0].length > 3) {
                this.Abbreviationref.current.value = split[0].slice(0, 3).toUpperCase();
            }
            else {
                this.Abbreviationref.current.value = split[0].toUpperCase();;
            }
        }
        else if (split.length > 1) {
            var abbrevia = "";
            split.forEach(element => {
                if (element !== "")
                    abbrevia = abbrevia + (element[0].length > 1 ? element[0][0] : element[0]).toUpperCase();
            });
            this.Abbreviationref.current.value = abbrevia
        }
    }
}

//this is it funtion  map  state  to property for the  componet
const mapStateToProp = (state) => ({
    products: state.products,
    product: state.product,
    pagin: state.pagin,
    size: state.size
})

//this is it funtion  map  Distpatch  to property for the  componet
const mapDispatchToProp = {
    Add_Product,
    Update_Product,
    update_product_ui,
    list_product
}

export default connect(mapStateToProp, mapDispatchToProp)(Form_Product)