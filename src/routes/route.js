const express = require('express');
const router = express.Router();///test-you
const lodash = require("lodash");
//importing a custom module
const xyz = require('../logger/logger.js');
const y = require("../validator/formatter.js");
const z = require("../util/helper.js");
//importing external package
const underscore = require('underscore');
const { unique, object } = require('underscore');

router.get('/test-me', function (req, res) {
    //Calling the components of a different custom module
    // console.log("Calling my function ",xyz.myFunction())
    // console.log("The value of the constant is ",xyz.myUrl)
    //Trying to use an external package called underscore
    let myArray = ['Akash', 'Pritesh', 'Sabiha']
    let result = underscore.first(myArray)
    console.log(`The result of underscores examples api is : ${result}`)

    // problem 4(a)

    const months =["jan","feb","mar","apr","may","june","jul","aug","sep","oct","nov","dec"];
    const new1 = lodash.chunk(months,4);
    console.log(new1) 
    //problem 4(b)

    const oddnumber = [1,3,5,7,9,11,13,15,17,19];
    const lastnumbers = lodash.tail(oddnumber,9);
    console.log(lastnumbers)

    //problem 4(c)

    const array = [1,22,22,3,4,]
    console.log(lodash.union(array))

    // problem4(d)

    const obj = [ ["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]
    console.log(lodash.fromPairs(obj));





    //problem number 1
    console.log(xyz.Function())

    // problem 2 
    console.log(z.date());
    console.log(z.month());
    console.log(z.batchinfo());

    //problem number 3
   console.log(y.trim());
   console.log(y.lowercase());
   console.log(y.uppercase());

   // problem 4 
    
    
    res.send('My first ever api!')

    //To be tried what happens if we send multiple response
    //res.send('My second api!')
});

module.exports = router;

