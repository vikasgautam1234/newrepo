const bookSch = require('../models/userschema')

const createNewBook = async function(req,res){
    const data = req.body
    const bookData = await bookSch.create(data)
        res.send({msg:bookData})

}
const getNewBook = async function(req,res){
    const newData = await bookSch.find()
    res.send({msg:newData})

}

module.exports.createNewBook = createNewBook;
module.exports.getNewBook= getNewBook