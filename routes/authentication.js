const User = require('../models/user');

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
                    console.log(req.body);
                    res.send('Hello World donal mcgahon');
                }
            }



            
    }
    });
    

    return router;
}