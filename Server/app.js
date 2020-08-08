const express = require('express');
const cors = require('cors');
var bodyparser = require('body-parser');

var app = new express();
app.use(cors());
app.use(bodyparser.json());


app.get("/pets",function(req,res){
    res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Methods: GET,POST,PUT,DELETE,OPTIONS")
    PetData.find()
                .then(function(pets){
                    res.send(pets);
                });
});




app.listen(3000,function(){
    console.log('listening to port 3000');
});