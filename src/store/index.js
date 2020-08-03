import {createStore} from 'redux';
import {Add_Product,Delete_Product,Update_Product,List_product} from '../models/product.model'

//initial values state
const initialstate = { 
    product:{ key:"",
    Name:"  ",
    Type:" ",
    Release_Date:" ",
    Insert_Date:" ",
    Number_of_Views:0,
    Abbreviation:" "},
    products:[],
    user:{}
}

//this  is action 
const action_funtion = {
    //this is  action  delete  product
    
    delete(state,Product){
        Delete_Product(Product);
        return{
            ...state,
            products:Delete_Product(Product,1,10),
            user:state.user,
            product:state.product
        }
    },

    //this is  action  update  product
    update(state,Product){
        return{
            ...state,
            products:Update_Product(Product,1,10),
            user:state.user,
            product:state.product
        }
    },

    //this is  action  add  product
   async add(state, Product){
        return{
            ...state,
            products:(await Add_Product(Product,1,10)),
            user:state.user,
            product:state.product
        }
    },

    //this is  action  create user
    crateUser(state,user){
        return{
            ...state,
            user,
            product:state.product,
            products:state.products
        }
    },

    //this is  action  list  all  product
    list_product(state,product){
        return{
            ...state,
            products:List_product(),
            user:state.user,
            product:state.product,
        }
    },

    //this is action  is  update product in the form from table
    updateui(state,product){
        return {
            ...state,
            products:state.products,
            product,
            user:state.user
        }
    }
}

//this  is  function  reducerp
const reducer = (state=initialstate,action) => {
    if (action )
       if (action_funtion[action.type])
        return action_funtion[action.type](state,action.object != "user"?action.product:action.user);
    return state;
}

export default createStore(reducer);