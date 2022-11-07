
const mongoose=require('mongoose');

let productSchema=new mongoose.Schema({
name:{
    type:String,
    required:true
},
category: {
    type : String,
    required : true,
},
price:{
 type:Number,
 required:true   
}
},{timestamps:true});

module.exports=module.exports = mongoose.model('product', productSchema)