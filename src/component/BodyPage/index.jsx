import React,{} from 'react';

import Form_Product from '../Form_Product';
import Table from '../Table';
import './style.css';
//this is  component body of  the  page
class BodyPage extends React.Component{
    render() {
      return  (<div className={'bodypage'}>
            <Form_Product />
            <Table />
        </div>);
    }
}




export default BodyPage

