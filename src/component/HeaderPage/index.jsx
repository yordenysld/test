import React,{} from 'react';
import {connect} from 'react-redux';
import  './style.css';

//this  is  component  is  hearder  of  de  main  Page
const HeaderPage = ({user})=>{
    return (
        <div className={"header"}>
            <h1>Agency of Product Test</h1>
            <h1>{user?"User online: "+user.correo:""}</h1>
        </div>
    );
}

//this is  funtion  map  state  to property for the  componet
const mapStateToProp = (state)=>({
    prodects:state.user
})

//this is  funtion  map  Distpatch  to property for the  componet
const mapDispatchToProp = (dispatch)=>({
    craeteUser(user){
        dispatch({
            type:"crateUser",
            object:"user",
            user
        })
    }
})


export default connect(mapStateToProp, mapDispatchToProp)(HeaderPage)