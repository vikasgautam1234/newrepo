const express = require('express');
const moment = require("moment");
const IP = require("ip");
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
// const moment = require('moment/moment.js');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://vikasgautam:8279787711@cluster0.anirnnm.mongodb.net/mongodbmiddleware", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )


    const globalApi = function (req, res, next) {
        var CurrentDate = moment().format('YYYY-MM-DD'+" "+ 'h:m:s'+" , "+IP.address());
        console.log("heated api path:", req.originalUrl);
        console.log(CurrentDate);
        next();
    }

  app.use(globalApi);  //it will log everytime whenever would be any API(post,get,put,etc) hits

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
