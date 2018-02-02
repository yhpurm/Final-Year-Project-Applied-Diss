var express = require('express');
var router = express.Router();
const fs = require('fs');

var Profile = require('../models/profileModel');

// Index Page
router.get('/index', function (req, res, next) {
    res.render('index.html');
});

// Opening page called home.html
router.get('/', function (req, res, next) {
    res.render('users/home.html');
});

// Register Page
router.get('/register', function (req, res, next) {
    res.render('users/register.html');
});

// Getting crypto files
router.get('/Crypto/profile', function(req, res, next) {
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