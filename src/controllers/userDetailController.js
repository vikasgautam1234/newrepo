const userDocModel = require('../models/userDocModel')

let createUser = async (req, res) => {
    let userinfo = req.body
    let data = await userDocModel.create(userinfo)
    res.send({ newuser: data })

}


 module.exports.createUser=createUser


// const userDetail = async function(req,res){
//     const detail = req.body
//     const detailBody = await userDocModel.create(detail)
//     res.send({send : detailBody})
// }



// module.exports.userDetail = userDetail