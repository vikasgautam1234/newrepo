const BookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const getBooksData= async function (req, res) {
    let allBooks= await BookModel.find().select({authorName : 1, bookName :1 , _id : 0}) //problem 2
    // let allBooks= await BookModel.find()
    res.send({msg: allBooks})
}

const getBooksInYear = async function (req, res) {    //problem 3
    let query = req.body
    let allBooks= await BookModel.find(query)
    res.send({msg: allBooks})
}

const getParticularBooks = async function (req, res) {   //problem 4
    let queryObj = req.body
    let allBooks= await BookModel.find(queryObj)
    res.send({msg: allBooks})
}


const getXINRBooks = async function (req, res) {   //problem 5
    let allBooks= await BookModel.find({"prices.indianPrice":{$in:["100INR","200INR","500INR"]}})
    res.send({msg: allBooks})
}

const getRandomBooks = async function (req, res) {     //program 6
let allBooks= await BookModel.find({$or:[{totalPages:{$gt:500}},{stockAvailable : true }]}) 
// res.send({msg: allBooks})
}

module.exports.getBooksInYear= getBooksInYear
module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getParticularBooks= getParticularBooks
module.exports.getRandomBooks= getRandomBooks
module.exports.getXINRBooks =getXINRBooks