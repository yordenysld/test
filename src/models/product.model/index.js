const fetch = require('node-fetch');
const { light } = require('@material-ui/core/styles/createPalette');
const { jssPreset } = require('@material-ui/core');


//this is  a function is  add  product
exports.AddProduct = async (Product, pag, size) => {
  fetch("http://127.0.0.1:7000/Product/insert_product", {
    method: "post",
    body: "Name=" + Product.Name + "&Type=" + Product.Type + "&Release_Date=" + Product.Release_Date + "&Insert_Date=" + Product.Insert_Date + "&Number_of_Views=" + Product.Number_of_Views + "&Abbreviation=" + Product.Abbreviation + "&key=" + Product.key,
    headers: { "Content-Type": "application/x-www-form-urlencoded" }
  })
}

//this is  a function is  delete  product
exports.DeleteProduct = async (key, pag, size) => {
  fetch("http://127.0.0.1:7000/Product/delete_product", {
    method: "post",
    body: "key=" + key,
    headers: { "Content-Type": "application/x-www-form-urlencoded" }
  });
}

//this  is     a  function is  update products
exports.UpdateProduct = async (Product, pag, size) => {
  fetch("http://127.0.0.1:7000/Product/update_product", {
    method: "post",
    body: "Name=" + Product.Name + "&Type=" + Product.Type + "&Release_Date=" + Product.Release_Date + "&Insert_Date=" + Product.Insert_Date + "&Number_of_Views=" + Product.Number_of_Views + "&Abbreviation=" + Product.Abbreviation + "&key=" + Product.key,
    headers: { "Content-Type": "application/x-www-form-urlencoded" }
  });
}

//this  is a fuction  is  list  products
exports.Listproduct = async (pag = 1, size = 10) => {
  return (await fetch("http://127.0.0.1:7000/Product/list_of_product", {
    method: "post",
    body: "pag=" + String(pag) + "&size=" + String(size),
    headers: { "Content-Type": "application/x-www-form-urlencoded" }
  }).then(data => data.json()));
}

//this  is a fuction  is  count  products
exports.productcount = async () => {
  return parseInt((await fetch("http://127.0.0.1:7000/Product/count_product", {
    method: "post",
    headers: { "Content-Type": "application/x-www-form-urlencoded" }
  }).then(data => data.json())).result);
}
