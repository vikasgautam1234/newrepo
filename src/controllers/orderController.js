const orderDocModel = require('../models/orderDocModel')
const userDocModel = require('../models/userDocModel')
const productModel = require("../models/productDocModel");
const { isValidObjectId } = require('mongoose');
const { populate } = require('../models/orderDocModel');


const createOrder = async function(req,res){
    const userId= req.body.userId
    const productId = req.body.productId   

if(!userId || !productId){
res.send({msg : "please enter the userId or productId"})

}
if(!isValidObjectId(userId)){
    res.send({msg : "productId is not a valid objectId"})
}
if(!isValidObjectId(productId)){
    res.send({msg : "userId is not a valid objectId"})
}
const userDetails = await orderDocModel.findById(userId)
if(!userDetails){
    res.send({msg : "user not found"})
}
const productDetails = await orderDocModel.findById(productId)
if(!productDetails){
    res.send({msg : "product not found"})
}


const isFreeAppUser = req.isFreeAppUser
if(isFreeAppUser){
    const orderDetails = {
        userId : userId,
        productId : productId,
        amount : 0,
        isFreeAppUser : isFreeAppUser,
        date : new Date()

    }
    const order = await orderDocModel.create(orderDetails)
    return res.send({data : order})
}else{
    if(userDetails.balance < productDetails.price)
    return res.send({message : "user don't have enough balance" })



    const orderDetails = {
        userId : userId,
        productId : productId,
        amount : productDetails.price,
        isFreeAppUser : isFreeAppUser,
        date : new Date()
    }

    const order = await orderDocModel.create(orderDetails)
    const User = await userDocModel.findByIdAndUpdate(userId, {$inc:{balance: -productDetails.price}})  
                                                         // $inc means increment operator
    return res.send({data:order})
}

}








// const createOrder= async function (req, res) {
   
//     let userId = req.body.userId;
//     let productId = req.body.productId;
//     let flag = req.headers["isfreeappuser"]

//     if(!userId){
//      return   res.send("User Id is required");
//     }

//    let  user = await userDocModel.findById(userId);
//     if(!user){
//       return  res.send(" This User Id is not present in Database")
//     }

//     if(!productId){
//      return   res.send("Product Id is required")
//     }

//    let  product = await productModel.findById(productId);
//     if(!product){
//      return   res.send("This product Id is not present in Database")
//     }

//     else {

//         if(flag == "true"){
//             let order = await orderDocModel.updateOne(req.body ,{ $set : {amount : 0 , isFreeAppUser : flag}},{upsert : true , new : true});
            
//             res.send({ msg : "Order Details has been updated" , order})
//         }

//         else {

//             let priceObj = await productModel.findOne({_id : req.body.productId}).select({_id : 0 , price : 1});
//             let updatedBalance = await userDocModel.updateOne({_id : req.body.userId} , {$inc : { balance : -priceObj.price }});
//             let updatedOrder = await orderDocModel.updateOne(req.body,{$set : {amount : priceObj.price , isFreeAppUser : false}},{upsert : true , new : true})
          
//             res.send({msg : "User and Order Info has been updated" , updatedBalance , updatedOrder})
//         }

//     }
   

// }


module.exports.orderpurchase=createOrder