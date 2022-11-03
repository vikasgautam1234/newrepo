const productModel = require("../models/productDocModel");

let createProduct = async function (req, res) {
    let newProduct = req.body;
    let saveProduct = await productModel.create(newProduct);
    res.send({staus:true,data:saveProduct});
}

module.exports.createProduct=createProduct;

// const productDetail = async function(req,res){
// const body = req.body
// const data = await productModel.create(body)
// res.send ({send : data})
// }

// module.exports.productDetail= productDetail