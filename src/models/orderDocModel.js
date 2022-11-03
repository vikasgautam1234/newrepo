// const mongoose = require('mongoose')
// const ObjectId = mongoose.Schema.Types.ObjectId
// const orderDocSchema = new mongoose.Schema({
//     userId:{
//         type : ObjectId,
//         ref : "userDocModel"
//     } ,
// 	productId: {
//         type : ObjectId,
//         ref : "productDoc"

//     },
// 	amount: Number,
// 	isFreeAppUser: Boolean
	
// },{ timestamps: true })

// module.exports = mongoose.Schema('orderDoc',orderDocSchema)

const mongoose=require('mongoose'); 
const objectId=mongoose.Schema.Types.ObjectId;  

let orderSchema=new mongoose.Schema({
userId:{
    type:objectId,
    ref:"User"
},
productId:{
    type:objectId,
    ref:"Product"
},
amount:Number,
isFreeAppUser:{
    type:Boolean,
    default:true
},
date:{
    type:String
}

},{timestamps:true})

module.exports=mongoose.model('Order', orderSchema)