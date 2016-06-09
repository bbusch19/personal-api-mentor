'use strict'
let user = {
    username: 'bbusch',
    pin: '1234'
};

module.exports = {
    addHeaders: function(req, res, next) {
    res.status(200).set({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
      'X-XSS-Protection': '1; mode=block',
      'X-Frame-Options': 'SAMEORIGIN',
      'Content-Security-Policy': "default-src 'self' devmountain.github.io"
    });

    next();
    },
    verifyUser: (req, res, next) => {
        let username = req.params.username;
        let pin = req.params.pin;
        if (username === user.username && pin === user.pin) {
            next(req);
        } else {
            res.status(401).json('Please enter valid credentials');
        }
    }

}
