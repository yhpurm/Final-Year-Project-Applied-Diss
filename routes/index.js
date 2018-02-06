var express = require('express');
var router = express.Router();
const fs = require('fs');
const apiCode = "2cc22b66-ee2f-43b7-a8cc-13ce557feaf4";
var Profile = require('../models/profileModel');

// Index Page, this is the router view for angular 2 this loads all the html pages that are in the client
router.get('/index', function (req, res, next) {
    res.render('index.html');
});

// Login Page for user
router.get('/', function (req, res, next) {
    res.render('login/login.component.html');
});

// Opening page called home.html
router.get('/donalsloginhome', function (req, res, next) {
    res.render('users/home.html');
});

// Register Page
router.get('/register', function (req, res, next) {
    res.render('register/register.component.html');
});

// Getting crypto profile from db
router.get('/login/profile/:username', function(req, res, next) {
    Profile.find(function(err, messages) {
        console.log(messages);
        if (err) {
            return res.status(500).json({
                message: 'Error while fetching data!'
            });
        }
        res.status(200).json({
            data: messages
        });
    });
});

// Saving a new profile to mongo
router.post('/Register/Profile', function(req, res, next) {
    
     var profile = new Profile({
        username: req.body.username,
        aboutMe: req.body.aboutMe,
        avatar: req.body.avater,
        statusCount: req.body.statusCount,
        friendCount: req.body.friendCount,
        isOnline: req.body.isOnline,
        bitcoinAddress: req.body.bitcoinAddress,
        email: req.body.email,
        lat: req.body.lat,
        long: req.body.long
     });

     console.log(profile);
     profile.save(function(err, result) {
         if (err) {
             console.log("ERROR");
             return res.status(500).json({
                 message: 'Error while creating profile!'
             });
         }
         console.log("SUCCESS");
         console.log(result);
         res.status(201).json({
             message: 'Created profile successfully'
         });
     });
 });

/* Below are the calls to the blockchain API node,
run blockchain-wallet-service start --port 4000 to start this apps
node. We run it on port 4000 cause our app is already is using 3000
*/

// The call for creating the a new wallet, this can be linked to the registration page
router.post('http://localhost:4000/api/v2/create?password=:pass&email=:emailAddress&label=:username$api_code=' + apiCode, function (req, res) {
console.log(req.body); 
if (err) {
    return res.status(500).json({
        message: 'Error while fetching data!'
    });
}
res.status(200).json({
    data: wallet
});

router.patch('/URL/PATCH', function (req, res) {
    // Patch Something..
});

router.post('/URL/POST', function(req, res, next) {
    // Post Something
});

router.put('/URL/PUT', function (req, res) {
   // Put Something
})

router.delete('/URL/DELETE', function (req, res) {
    // Delete Something
});


module.exports = router;