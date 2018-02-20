var express = require('express');
const router = express.Router();
const fs = require('fs');
const apiCode = "2cc22b66-ee2f-43b7-a8cc-13ce557feaf4";
var Profile = require('../models/profileModel');
const authentication = require('../routes/authentication')(router);
const bodyParser = require('body-parser');

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
/*router.get('/register', function (req, res, next) {
    res.render('client/app/register.component.html');
});*/

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

// Middleware for authenication
var app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/authentication', authentication);
// Middleware for authenication


// Patches below are for the Settings page
// Update Username
router.patch('/login/profile/user/:username', function (req, res) {
    console.log('PATCH request to homepage');
      var username = req.params.username;
      console.log(username);
    Products.update({username: username}, function(err, values) {
          if (!err) {
              res.json("okay");
          } else {
              res.write("fail");
          }
      });
  });

// Update About Me
router.patch('/login/profile/user/:aboutMe', function (req, res) {
    console.log('PATCH request to homepage');
      var aboutMe = req.params.aboutMe;
      console.log(aboutMe);
    Products.update({aboutMe: aboutMe}, function(err, values) {
          if (!err) {
              res.json("okay");
          } else {
              res.write("fail");
          }
      });
  });

// Update avatar
router.patch('/login/profile/user/:avatar', function (req, res) {
    console.log('PATCH request to homepage');
      var avatar = req.params.avatar;
      console.log(avatar);
    Products.update({avatar: avatar}, function(err, values) {
          if (!err) {
              res.json("okay");
          } else {
              res.write("fail");
          }
      });
  });

// Update Online status
router.patch('/login/profile/user/:isOnline', function (req, res) {
    console.log('PATCH request to homepage');
      var isOnline = req.params.isOnline;
      console.log(isOnline);
    Products.update({isOnline: isOnline}, function(err, values) {
          if (!err) {
              res.json("okay");
          } else {
              res.write("fail");
          }
      });
  });

// Update bitcoin address
router.patch('/login/profile/user/:address', function (req, res) {
    console.log('PATCH request to homepage');
      var bitcoinAddress = req.params.bitcoinAddress;
      console.log(bitcoinAddress);
    Products.update({bitcoinAddress: bitcoinAddress}, function(err, values) {
          if (!err) {
              res.json("okay");
          } else {
              res.write("fail");
          }
      });
  });

  // Update bitcoin email
router.patch('/login/profile/user/:email', function (req, res) {
    console.log('PATCH request to homepage');
      var email= req.params.email;
      console.log(email);
    Products.update({email: email}, function(err, values) {
          if (!err) {
              res.json("okay");
          } else {
              res.write("fail");
          }
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
});

router.patch('/URL/PATCH', function (req, res) {
    // Patch Something..
});

router.post('/URL/POST', function(req, res, next) {
    // Post Something
});

router.put('/URL/PUT', function (req, res) {
   // Put Something
});

router.delete('/URL/DELETE', function (req, res) {
    // Delete Something
});

module.exports = router;