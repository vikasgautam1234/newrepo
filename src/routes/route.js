const express = require('express');
const router = express.Router();
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")
const commonMW = require ("../middlewares/commonMiddlewares")
const productController = require("../controllers/productController")
const orderController = require("../controllers/orderController")
const userDocController = require('../controllers/userDetailController')


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

//Can we set the 'next' input parameter in a route handler?
//What is the primary difference between a middleware and a route handler?
router.post("/createBook", commonMW.myMiddleware,BookController.createBook, function(req, res, next){
    res.send("Ending the cycle")
}  )

router.post("/createUser1", commonMW.myMiddleware, UserController.createUser1)

router.get("/dummy1", commonMW.myOtherMiddleware, UserController.dummyOne)

router.get("/dummy2", commonMW.myOtherMiddleware, UserController.dummyTwo)

router.get("/basicRoute", commonMW.mid1, commonMW.mid2, commonMW.mid3, commonMW.mid4, UserController.basicCode)


// router.post("/product-details",productController.productDetail)
// router.post('/user-details', commonMW.headerValidation, userDocController.userDetail)
// router.post('orderpurchase', commonMW.headerValidation, orderController.orderpurchase)

router.post('/createUser',commonMW.mid,userDocController.createUser)
router.post('/createProduct',productController.createProduct)
router.post('/orderpurchase',commonMW.mid,orderController.orderpurchase)


module.exports = router;



