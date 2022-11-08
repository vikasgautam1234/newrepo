const jwt = require("jsonwebtoken");

const mid1= async (req,res,next)=>{
    try{
    let token = req.headers["x-auth-token"];
    if (!token) token = req.headers["x-auth-token"];
    //If no token is present in the request header return error. This means the user is not logged in.
    if (!token)
    return res.send({ status: false, msg: "token must be present" });
    let decodedToken = jwt.verify(token, "functionup-plutonium-very-very-secret-key");
    if (!decodedToken)
      return res.send({ status: false, msg: "token is invalid" });
  
    next();
    }
    catch(error){
        res.status(500).send({msg:"somthing is wrong"})
    }
   
  
}
module.exports.mid1=mid1