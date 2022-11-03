// const mongoose = require("mongoose")

// const productDocSchema= new mongoose.Schema({
//     name : String,
//     category : String,
//     price : {
//         type : Number,
//         require : true,
//     }
//     })

//     module.exports = mongoose.model('productDoc',productDocSchema)



const mongoose=require('mongoose');

let productSchema=new mongoose.Schema({
name:{
    type:String,
    required:true
},
category:String,
price:{
 type:Number,
 required:true   
}
},{timestamps:true});

module.exports=module.exports = mongoose.model('product', productSchema)