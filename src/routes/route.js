const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const userSchema = require("../models/userschema.js")
const bookcontroller = require("../controllers/bookcontroller.js")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)

router.post("/createBookData",bookcontroller.createNewBook)

router.get("/getBookData",bookcontroller.getNewBook)



module.exports = router;