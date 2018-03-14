//import { decode } from 'punycode';

// Imports
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const config = require('../config/database');

module.exports = (router) => {

    router.post('/register', (req, res) => {
        // E-Mail
        if (!req.body.email) {
            res.json({ success: false, message: 'You must provide an E-Mail' });
        } else {
            if (!req.body.username) {
                res.json({ success: false, message: 'You must provide a username' });
            } else {
                if (!req.body.password) {
                    res.json({ success: false, message: 'You must provide a password' });
                } else {
                    let user = new User({
                     email: req.body.email.toLowerCase(),
                     username: req.body.username.toLowerCase(),
                     password: req.body.password,
                     avatar: 1,
                     aboutMe: "Hello",
                     isOnline: true
                    });
                    user.save((err) => {
                        if (err) {
                            if (err.code == 11000) {
                                res.json({ success: false, message: 'Username or e-mail already exist' });
                            } else {
                                if (err.errors){
                                    if (err.errors.email) {
                                        res.json({ success: false, message: err.errors.email.message })
                                    } else {
                                        if (err.errors.username) {
                                            res.json({ success: false, message: err.errors.username.message
                                            });
                                        } else {
                                            if (err.errors.password) {
                                                res.json({ success: false, message:
                                                err.errors.password.message});
                                            } else {
                                                res.json({ success: false, message: 'Could not save user. Error: ', err});
                                                }
                                        }
                                    }
                                }
                            }
                            
                        } else {
                            res.json({ success: true, message: 'Account Registered'});
                        }
                    });
                }
            }



            
    }
    });

    /* Route to check if user's email is available for registration */

    router.get('/checkEmail/:email', (req, res) => {
        // Check if email was provided in paramaters
        if (!req.params.email) {
          res.json({ success: false, message: 'E-mail was not provided' }); // Return error
        } else {
          // Search for user's e-mail in database;
          User.findOne({ email: req.params.email }, (err, user) => {
            if (err) {
              res.json({ success: false, message: err }); // Return connection error
            } else {
              // Check if user's e-mail is taken
              if (user) {
                res.json({ success: false, message: 'E-mail is already taken' }); // Return as taken e-mail
              } else {
                res.json({ success: true, message: 'E-mail is available' }); // Return as available e-mail
              }
            }
          });
        }
      });

      /* Route to check if user's username is available for registration */

    router.get('/checkUsername/:username', (req, res) => {
        // Check if username was provided in paramaters
        if (!req.params.username) {
          res.json({ success: false, message: 'Username was not provided' }); // Return error
        } else {
          // Look for username in database
          User.findOne({ username: req.params.username }, (err, user) => {
            // Check if connection error was found
            if (err) {
              res.json({ success: false, message: err }); // Return connection error
            } else {
              // Check if user's username was found
              if (user) {
                res.json({ success: false, message: 'Username is already taken' }); // Return as taken username
              } else {
                res.json({ success: true, message: 'Username is available' }); // Return as vailable username
              }
            }
          });
        }
      });

  /* ========
    LOGIN ROUTE
    ======== */
      router.post('/login', (req, res) => {
        // Check if username was provided
        if (!req.body.username) {
          res.json({ success: false, message: 'No username was provided' }); // Return error
        } else {
          // Check if password was provided
          if (!req.body.password) {
            res.json({ success: false, message: 'No password was provided.' }); // Return error
          } else {
            // Check if username exists in database
            User.findOne({ username: req.body.username.toLowerCase() }, (err, user) => {
              // Check if error was found
              if (err) {
                res.json({ success: false, message: err }); // Return error
              } else {
                // Check if username was found
                if (!user) {
                  res.json({ success: false, message: 'Username not found.' }); // Return error
                } else {
                  const validPassword = user.comparePassword(req.body.password); // Compare password provided to password in database
                  // Check if password is a match
                  if (!validPassword) {
                    res.json({ success: false, message: 'Password invalid' }); // Return error
                  } else {
                    const token = jwt.sign({ userId: user._id }, config.secret, { expiresIn: '24h' }); // Create a token for client
                    res.json({ success: true, message: 'Success!', token: token, user: { username: user.username }, email: { email: user.email }, avatar: { avatar: user.avatar }, isOnline: { isOnline: user.isOnline }, aboutMe: { aboutMe: user.aboutMe } }); // Return success and token to frontend
                    //res.json({ success: true, message: 'Success!', token: token, user: { user } }); // Return success and token to frontend                  
                  }
                }
              }
            });
          }
        }
      });
    

    return router;
}