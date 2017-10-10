var express = require('express');
var router = express.Router();
const fs = require('fs');

router.get('/', function (req, res, next) {
    res.render('index.html');
});

router.get('/URL/GET', function(req, res, next) {
   // Get Something
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