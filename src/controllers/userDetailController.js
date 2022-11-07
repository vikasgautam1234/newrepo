const userDocModel = require('../models/userDocModel')

let createUser = async (req, res) => {
    let userinfo = req.body
    let data = await userDocModel.create(userinfo)
    res.send({ newuser: data })

}


 module.exports.createUser=createUser


