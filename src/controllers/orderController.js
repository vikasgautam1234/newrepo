const orderDocModel = require('../models/orderDocModel')
const userDocModel = require('../models/userDocModel')
const productModel = require("../models/productDocModel");


const createOrder= async function (req, res) {
   
    let userId = req.body.userId;
    let productId = req.body.productId;
    let flag = req.headers["isfreeappuser"]

    if(!userId){
     return   res.send("User Id is required");
    }

   let  user = await userDocModel.findById(userId);
    if(!user){
      return  res.send(" This User Id is not present in Database")
    }

    if(!productId){
     return   res.send("Product Id is required")
    }

   let  product = await productModel.findById(productId);
    if(!product){
     return   res.send("This product Id is not present in Database")
    }

    else {

        if(flag == "true"){
            let order = await orderDocModel.updateOne(req.body ,{ $set : {amount : 0 , isFreeAppUser : flag}},{upsert : true , new : true});
            
            res.send({ msg : "Order Details has been updated" , order})
        }

        else {

            let priceObj = await productModel.findOne({_id : req.body.productId}).select({_id : 0 , price : 1});
            let updatedBalance = await userDocModel.updateOne({_id : req.body.userId} , {$inc : { balance : -priceObj.price }});
            let updatedOrder = await orderDocModel.updateOne(req.body,{$set : {amount : priceObj.price , isFreeAppUser : false}},{upsert : true , new : true})
          
            res.send({msg : "User and Order Info has been updated" , updatedBalance , updatedOrder})
        }

    }
   

}


module.exports.orderpurchase=createOrder