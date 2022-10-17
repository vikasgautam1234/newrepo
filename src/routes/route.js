const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    res.send('My second ever api!')
});

router.get('/students', function (req, res){
    console.log("The path params in the request are : ", req.params)
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})


// Example 1 for path params
router.get('/students/:studentName', function(req, res){
    // ':' denotes that the following part of route is a variable
    // The value of this variable is what we are sending in the request url after /students
    // This value is set in the form of an object inside req.params
    // The object contain key value pairs
    // key is the variable in the route
    // value is whatever dynamic value sent in the request url
    let myParams = req.params

    // params attribute is fixed in a request object
    // params contains the path parameters object
    console.log("The path params in the request are : ", myParams)
    res.send('The full name is ' + myParams.studentName )
})

// Example 2 for path params
router.get('/student-details/:name', function(req, res){
    let requestParams = req.params
    console.log("This is the request ", requestParams)
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    res.send('Dummy response')
})

//problem 1.......................................................................................
router.get("/movies",function(req,res){
    const movies = ["Rang de basanti", "The shining", "Lord of the rings", "Batman begins"]
    res.send(movies)
})

//problem 2.......................................................................................

router.get("/movies/:indexNumber",function(req,res){
    const movies1 = ["Rang de basanti", "The shining", "Lord of the rings", "Batman begins"];
    const call = req.params.indexNumber
    // res.send(movies1[call])

    // problem 3 : error handling for ques2 ......................................................
    if(call>movies1.length){
    // res.send("error:use a valid number")
    }
})
 
//problem 4................................................................................

router.get("/films",function(req,res){
    const arrmovies = [ {
        "id": 1,
        "name": "The Shining"
       }, {
        "id": 2,
        "name": "Incendies"
       }, {
        "id": 3,
        "name": "Rang de Basanti"
       }, {
        "id": 4,
        "name": "Finding Nemo"
        
       }]
    //    res.send(arrmovies)
       
})
// problem 5.....................................................................................

router.get("/films/:filmId",function(req,res){
    const movies = [{
        "id": 1,
        "name": "The Shining"
       }, {
        "id": 2,
        "name": "Incendies"
       }, {
        "id": 3,
        "name": "Rang de Basanti"
       }, {
        "id": 4,
        "name": "Finding Nemo"
        
       }]

       const count =0
       for(i=0; i<movies.length; i++){
        if(movies[i].id==Number(req.params.filmId)){
            count++
            res.send(movies[i])
        }
       }
       if(count==0)
        res.send("id is not matching")
       
})

module.exports = router;