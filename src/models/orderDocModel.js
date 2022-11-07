
const mongoose=require('mongoose'); 
// const objectId=mongoose.Schema.Types.ObjectId;  

let orderSchema=new mongoose.Schema({
userId:{
    type : mongoose.Schema.Types.ObjectId,
    ref:"User123"
},
productId:{
    type : mongoose.Schema.Types.ObjectId,
    ref:"Product"
},
amount : {
    type : Number,
    required : true,
},
isFreeAppUser:{
    type:Boolean,
    default:true
},
date : Date
},{timestamps:true})

module.exports=mongoose.model('Order', orderSchema)