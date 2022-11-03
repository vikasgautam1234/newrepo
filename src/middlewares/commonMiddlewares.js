
const mid1= function ( req, res, next) {
    req.falana= "hi there. i am adding something new to the req object"
    console.log("Hi I am a middleware named Mid1")
    next()
}

const mid2= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid2")
    next()
}

const mid3= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid3")
    next()
}

const mid4= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid4")
    next()
}

const myMiddleware = function(req, res, next){
    req.month = "November"
    console.log('I am inside a middleware!')
    next()
}

const myOtherMiddleware = function(req, res, next){
    // Setting an attribute 'wantsJson' in request
    // The header value comparison is done once and
    // the result can be used directly wherever required.
    let acceptHeaderValue = req.headers["accept"]

    if(acceptHeaderValue == "application/json") {
        req.wantsJson = true
    } else {
        req.wantsJson = false
    }
    next()
}
//PROBLEM 2 HEADERVALIDATION-------------------------------------------------------------------------
// const headerValidation = function(req,res,next){
//    const checkHeader = req.headers["isfreeappuser"]
// if(checkHeader){
//     if(checkHeader=="true"){
//         req.isfreeappuser=true
//     }else{
//         req.isfreeappuser=false
//     }
//     next();
// }else{
//     res.send({data:"header missing"})
// }
// }

const letCheckIsFreeAppUser = async function(req,res,next){               
   
    let data=req.headers
    let validinfo=data["isfreeappuser"]
    if(validinfo){
        if(validinfo=="true"){
            req.isfreeappuser=true
        }else{
            req.isfreeappuser=false
        }
        next();
    }else{
        res.send({data:"header missing"})
    }
    }




    module.exports.mid=letCheckIsFreeAppUser
// module.exports.headerValidation = headerValidation
module.exports.mid1= mid1
module.exports.mid2= mid2
module.exports.mid3= mid3
module.exports.mid4= mid4
module.exports.myMiddleware = myMiddleware
module.exports.myOtherMiddleware = myOtherMiddleware
