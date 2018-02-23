var express = require('express');
const router = express.Router();
const MLABS = require('mongoose');

// Testing Mlabs below
const MONGO_URL = 'mongodb://Conor:softwaregroup10@ds145438.mlab.com:45438/globalusers';
var global = new MLABS();

global.connect(MONGO_URL, function(err){
    if(err){
        console.error("Error! " + err);
    }
});

router.get('/globalusers', function(req, res, next){
    console.log('Get request for all users');
    Video.find({})
    .exec(function(err, videos){
        if(err){
            res.send("Error retrieving users");
        }else{
            res.json(videos);
        }
    })
})