var express = require('express');
const router = express.Router();
const fs = require('fs');
const apiCode = "2cc22b66-ee2f-43b7-a8cc-13ce557feaf4";
var Profile = require('../models/profileModel');
var Friend = require('../models/friendsModel');
var Wallet = require('../models/myWalletModel');
var Status= require('../models/statusModel');
var BalStatus= require('../models/statusBalModel');
var StatsStatus= require('../models/blockstatsModel');
var Balance= require('../models/balanceModel');
var PoolStatus= require('../models/statusPoolModel');
var PriceStatus= require('../models/statusPriceModel');
var FlagStatus= require('../models/FlagStatusModel');
var ReqStatus= require('../models/requestModal');
const authentication = require('../routes/authentication')(router);
const bodyParser = require('body-parser');
const cors = require('cors');
const MLABS = require('mongoose').Mongoose;
const request = require('request');
const MongoClient = require('mongodb').MongoClient;
const blogs = require('./blog')(router);

// Testing Mlabs below
const MONGO_URL = 'mongodb://Conor:softwaregroup10@ds145438.mlab.com:45438/globalusers';
var global = new MLABS();
var database;

MongoClient.connect(MONGO_URL, (err, db) => {  
    if(err){
        console.error("Error! " + err);
    }else{
        console.log("Connected to online server");
        database = db;
    }
});


// Create a new wallet and add it to the wallets collection
router.post('/newWallet', function (req, res, next) {
    var response;
    var pass = req.body.walletpass;
    var label = req.body.label;
    var walletpass;
    var walletlabel;
    var walletaddress;
    var resjson;
    wallet = new Wallet;
    console.log("Request new wallet pass:" + pass);
    console.log("Request new wallet label:" + label);

    function processRequest(json) {
        var j = JSON.parse(json);
        console.log("j obj: " + j);
        this.walletguid = j.body.guid;
        this.walletaddress = j.body.address;
        this.walletlabel = j.body.label; 

        var wallet = new Wallet({
            guid: this.walletguid,
            address: this.walletaddress,
            label: this.walletlabel
        });
   
       console.log("wallet: ");
       console.log(wallet);
       wallet.save(function(err, result) {
           if (err) {
               console.log(err);
               return res.status(500).json({
                   message: 'Error while saving data!'
               });
           }
           console.log("SUCCESS");
           console.log(result);
           res.status(201).json({
               message: 'Saved data successfully'
           });
       });
    }

    request('http://127.0.0.1:3001/api/v2/create?password=' + pass + '&label=:' + label + '&api_code=' + apiCode, { json: true }, (err, resp, body) => {
        if (err) { return console.log(err); }
        response = resp;
        this.resjson = JSON.stringify(resp);
        processRequest(this.resjson);
    });

});

router.delete('/Tx/Status/Remove/:title', function (req, res) {
    console.log(req.params.title);
    Status.remove({title: req.params.title}, function(err, message) {
      if(err) { 
         return res.send({status: "200", response: "fail"});
      }else{
          console.log("it worked?");
      } 
   }); 
});

router.delete('/Tx/BalStatus/Remove/:title', function (req, res) {
    console.log(req.params.title);
    BalStatus.remove({title: req.params.title}, function(err, message) {
      if(err) { 
         return res.send({status: "200", response: "fail"});
      }else{
          console.log("it worked?");
      } 
   }); 
});

router.delete('/Tx/StatsStatus/Remove/:title', function (req, res) {
    console.log(req.params.title);
    StatsStatus.remove({title: req.params.title}, function(err, message) {
      if(err) { 
         return res.send({status: "200", response: "fail"});
      }else{
          console.log("it worked?");
      } 
   }); 
});

router.delete('/Tx/PoolStatus/Remove/:title', function (req, res) {
    console.log(req.params.title);
    PoolStatus.remove({title: req.params.title}, function(err, message) {
      if(err) { 
         return res.send({status: "200", response: "fail"});
      }else{
          console.log("it worked?");
      } 
   }); 
});

router.delete('/Tx/PriceStatus/Remove/:title', function (req, res) {
    console.log(req.params.title);
    PriceStatus.remove({title: req.params.title}, function(err, message) {
      if(err) { 
         return res.send({status: "200", response: "fail"});
      }else{
          console.log("it worked?");
      } 
   }); 
});

router.delete('/Tx/FlagStatus/Remove/:title', function (req, res) {
    console.log(req.params.title);
    FlagStatus.remove({title: req.params.title}, function(err, message) {
      if(err) { 
         return res.send({status: "200", response: "fail"});
      }else{
          console.log("it worked?");
      } 
   }); 
});

router.delete('/Tx/ReqStatus/Remove/:title', function (req, res) {
    console.log(req.params.title);
    ReqStatus.remove({title: req.params.title}, function(err, message) {
      if(err) { 
         return res.send({status: "200", response: "fail"});
      }else{
          console.log("it worked?");
      } 
   }); 
});

// Create a new wallet and add it to the wallets collection
router.post('/Wallet/balance', function (req, res, next) {
    var pass = req.body.password;
    var guid = req.body.guid;
    var balance = new Balance;
    var walletbal;
    console.log("Request pass:" + pass);
    console.log("Request guid:" + guid);

    function processRequest(json) {
        var j = JSON.parse(json);
        console.log("j obj: " + j);
        this.walletbal = j.body.balance;

        this.balance = ({
            balance: this.walletbal
        });
   
       console.log("balance: ");
       console.log(this.balance);
       res.json(this.balance);
    }

    request('http://127.0.0.1:3001/merchant/' + guid + '/balance?password=' + pass + '&api_code=' + apiCode, { json: true }, (err, resp, body) => {
        if (err) { return console.log(err); }
        response = resp;
        var resjson = JSON.stringify(resp);
        console.log(resjson);
        processRequest(resjson);
    });

    

});

router.post('/AddFriend', function(req, res, next) {
    console.log(req.body.username);
    console.log(req.body.aboutMe);
    console.log("avatar: " + req.body.avatar);
    console.log(req.body.statusCount);
    console.log(req.body.friendCount);
    console.log(req.body.isOnline);
    console.log(req.body.bitcoinAddress);
    console.log(req.body.email);
    console.log(req.body.lat);
    console.log(req.body.long);

    var friend = new Friend({
        username: req.body.username,
        aboutMe: req.body.aboutMe,
        avatar: req.body.avatar,
        statusCount: req.body.statusCount,
        friendCount: req.body.friendCount,
        isOnline: req.body.isOnline,
        bitcoinAddress: req.body.bitcoinAddress,
        email: req.body.email,
        lat: req.body.lat,
        long: req.body.long
    });
    
    friend.save(function(err, result) {
        if (err) {
            console.log(err);
            return res.status(500).json({
                message: 'Error while saving data!'
            });
        }
        console.log("SUCCESS");
        console.log(result);
        res.status(201).json({
            message: 'Saved data successfully'
        });
    });
});

// Get friends
router.get('/Friends', function(req, res, next) {
    Friend.find(function(err, messages) {
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

// Getting crypto profile from db
router.get('/globalstatus', function(req, res, next) {
    console.log("gothere!!!");

    function processResponse(resp) {
        res.json(resp);
        console.log("process mlabs done");
    }

    database.collection("status").find().toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        processResponse(result);
    });

});

// Getting crypto profile from db
router.get('/globalusers', function(req, res, next) {
    console.log("gothere!!!");

    function processResponse(resp) {
        res.json(resp);
        console.log("process mlabs done");
    }

    database.collection("users").find().toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        processResponse(result);
    });
});

// Getting crypto profile from db
router.get('/globalusers/:username', function(req, res, next) {
    console.log("gothere!!!");
    var username = req.params.username;
    console.log(username);

    function processResponse(resp) {
        console.log(resp);
        res.json(resp);
        console.log("process mlabs done");
    }

    var search = '.*' + username + '*.';
    console.log(search);
    database.collection("users").find({ username: {'$regex': search, '$options' : 'i'}}).toArray(function(err, result) {
        if (err) throw err;
        processResponse(result);
    });
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

// Get wallets
router.get('/wallets/all', function(req, res, next) {
    Wallet.find(function(err, messages) {
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

// Index Page, this is the router view for angular 2 this loads all the html pages that are in the client
router.get('/', function (req, res, next) {
    res.render('index.html');
});

// status routes below

router.post('/Tx/Status/reg', function(req, res, next) {

    var status = new Status({
        username: req.body.username,
        date: req.body.date,
        title: req.body.title,
        text: req.body.text,
        valueAtTime: req.body.valueAtTime,
        sentAmount: req.body.sentAmount,
        bitcoinAddress: req.body.bitcoinAddress,
        receivingAddress: req.body.receivingAddress,
        lat: req.body.lat,
        long: req.body.long,
    });
    console.log(status);
    status.save(function(err, result) {
        if (err) {
            console.log(err);
            return res.status(500).json({
                message: 'Error while saving data!'
            });
        }
        console.log("SUCCESS");
        console.log(result);
        res.status(201).json({
            message: 'Saved data successfully'
        });
    });
});

router.post('/Tx/Status/bal', function(req, res, next) {

    var statusBal = new BalStatus({
        username: req.body.username,
        date: req.body.date,
        title: req.body.title,
        text: req.body.text,
        balance: req.body.balance,
        lat: req.body.lat,
        long: req.body.long,
    });
    console.log(statusBal);
    statusBal.save(function(err, result) {
        if (err) {
            console.log(err);
            return res.status(500).json({
                message: 'Error while saving data!'
            });
        }
        console.log("SUCCESS");
        console.log(result);
        res.status(201).json({
            message: 'Saved data successfully'
        });
    });
});

router.post('/Tx/Status/stats', function(req, res, next) {
    console.log(req.body.market_price_usd);
    var statusStats = new StatsStatus({
        username: req.body.username,
        date: req.body.date,
        title: req.body.title,
        text: req.body.text,
        market_price_usd: req.body.market_price_usd,
        hash_rate: req.body.hash_rate,
        total_fees_btc: req.body.total_fees_btc,
        n_btc_mined: req.body.n_btc_mined, 
        n_tx: req.body.n_tx,
        n_blocks_mined: req.body.n_blocks_mined,
        totalbc: req.body.totalbc,
        n_blocks_total: req.body.n_blocks_total, 
        estimated_transaction_volume_usd: req.body.estimated_transaction_volume_usd,
        blocks_size: req.body.blocks_size,
        miners_revenue_usd: req.body.miners_revenue_usd, 
        nextretarget: req.body.nextretarget,
        difficulty: req.body.difficulty,
        estimated_btc_sent: req.body.estimated_btc_sent,
        miners_revenue_btc: req.body.miners_revenue_btc,
        total_btc_sent: req.body.total_btc_sent,
        trade_volume_btc:  req.body.trade_volume_btc,
        trade_volume_usd: req.body.trade_volume_usd,
        timestamp: req.body.timestamp,
        lat: req.body.lat,
        long: req.body.long
    });

    console.log(statusStats);
    statusStats.save(function(err, result) {
        if (err) {
            console.log(err);
            return res.status(500).json({
                message: 'Error while saving data!'
            });
        }
        console.log("SUCCESS");
        console.log(result);
        res.status(201).json({
            message: 'Saved data successfully'
        });
    });
});

router.post('/Tx/Status/pool', function(req, res, next) {

    var statusPool = new PoolStatus({
        username: req.body.username,
        date: req.body.date,
        title: req.body.title,
        text: req.body.text,
        Unknown: req.body.Unknown,
        GBMiners: req.body.GBMiners,
        SlushPool: req.body.SlushPool,
        KanoCKPool: req.body.KanoCKPool,
        BitFury: req.body. BitFury,
        AntPool: req.body.AntPool,
        F2Pool: req.body.F2Pool,
        ViaBTC: req.body.ViaBTC,
        lat: req.body.lat,
        long: req.body.long
    });

    console.log(statusPool);
    statusPool.save(function(err, result) {
        if (err) {
            console.log(err);
            return res.status(500).json({
                message: 'Error while saving data!'
            });
        }
        console.log("SUCCESS");
        console.log(result);
        res.status(201).json({
            message: 'Saved data successfully'
        });
    });
});

router.post('/Tx/Status/price', function(req, res, next) {

    var statusPrice = new PriceStatus({
        username: req.body.username,
        date: req.body.date,
        title: req.body.title,
        text: req.body.text,
        symbol: req.body.symbol,
        last: req.body.last,
        buy: req.body.buy,
        sell: req.body.sell,
        lat: req.body.lat,
        long: req.body.long
    });
    console.log(statusPrice);
    statusPrice.save(function(err, result) {
        if (err) {
            console.log(err);
            return res.status(500).json({
                message: 'Error while saving data!'
            });
        }
        console.log("SUCCESS");
        console.log(result);
        res.status(201).json({
            message: 'Saved data successfully'
        });
    });
});

router.post('/Tx/Status/flag', function(req, res, next) {

    console.log(req.body.locationName);
    var statusFlag= new FlagStatus({
        username: req.body.username,
        date: req.body.date,
        title: req.body.title,
        text: req.body.text,
        locationName: req.body.locationName,
        contact: req.body.contact,
        lat: req.body.lat,
        long: req.body.long
    });
    
    console.log(statusFlag);
    statusFlag.save(function(err, result) {
        if (err) {
            console.log(err);
            return res.status(500).json({
                message: 'Error while saving data!'
            });
        }
        console.log("SUCCESS");
        console.log(result);
        res.status(201).json({
            message: 'Saved data successfully'
        });
    });
});

router.post('/Tx/Status/request', function(req, res, next) {

    var statusReq= new ReqStatus({
        username: req.body.username,
        date: req.body.date,
        title: req.body.title,
        text: req.body.text,
        amount: req.body.amount,
        address: req.body.address,
        lat: req.body.lat,
        long: req.body.long
    });
    
    console.log(statusReq);
    statusReq.save(function(err, result) {
        if (err) {
            console.log(err);
            return res.status(500).json({
                message: 'Error while saving data!'
            });
        }
        console.log("SUCCESS");
        console.log(result);
        res.status(201).json({
            message: 'Saved data successfully'
        });
    });
});

// Get logged in statuses
router.get('/Tx/Local/:user', function(req, res, next) {
    Status.find(function(err, messages) {
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

// Get logged in statuses
router.get('/Tx/Local/bal/:user', function(req, res, next) {
    BalStatus.find(function(err, messages) {
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

// Get logged in statuses
router.get('/Tx/Local/stats/:user', function(req, res, next) {
    StatsStatus.find(function(err, messages) {
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

// Get logged in statuses
router.get('/Tx/Local/pools/:user', function(req, res, next) {
    StatsStatus.find(function(err, messages) {
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

// Get logged in statuses
router.get('/Tx/Local/price/:user', function(req, res, next) {
    PriceStatus.find(function(err, messages) {
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

// Get logged in statuses
router.get('/Tx/Local/flag/:user', function(req, res, next) {
    FlagStatus.find(function(err, messages) {
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

// Get logged in statuses
router.get('/Tx/Local/requests/:user', function(req, res, next) {
    ReqStatus.find(function(err, messages) {
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

app.use(cors({
    origin: 'http://localhost:3000'
}));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/authentication', authentication);
app.use('/blogs', blogs);

// Start Server: Listen on port 8080
app.listen(8080, () => {
    console.log('Listening on port 8080');
  });
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
    Proile.update({aboutMe: aboutMe}, function(err, values) {
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

/*
router.get('/http://localhost:4000', function(req, res, next){
    console.log('Get request for all users');
    Profile.find({})
    .exec(function(err, profile){
        if(err){
            res.send("Error retrieving users");
        }else{
            res.json(profile);
        }
    })
}); */

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