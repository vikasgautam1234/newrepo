// const mongoose = require("mongoose")

// const userDocSchema = new mongoose.Schema({
//     name : String,
//     balance : {
//         type : Number,
//         default : 100
//     },
//     address : String,
//     age : Number,
//     gender : {
//         type : String,
//         enum : ["male", "female", "other"]
//     },
//     isFreeAppUser : {
//         type : Boolean,
//         default : false
//     }

// })


const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    balance: {
        type: Number,
        default:100
    },
    address: String,
    age: Number,
    gender: {
        tyep: String,
        enum: ["male", "female", "other"]
    },
    isFreeAppUser:{
        type:Boolean,
        default:false,
    }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema) //user

// module.exports = mongoose.model("userDocModel",userDocSchema)