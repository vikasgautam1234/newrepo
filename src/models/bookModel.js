const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: String, 
    authorName: String, 
    tags: [String],
    
    stockAvailable: Boolean,
    totalPages : Number,
    prices: {
        indianPrice: String,
        europePrice: String,
    },
    year: {type: Number, default: 2021}  
}, { timestamps: true }); 


module.exports = mongoose.model('Boook', bookSchema) //users

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
