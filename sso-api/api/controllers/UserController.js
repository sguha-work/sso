/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
var bcrypt = require('bcrypt-nodejs');

module.exports = {
  signup: (req, res) => {
    if (req.method == 'POST' && req.param('user', null) != null) {
        var userData = req.param('user');
        console.log(userData);
        bcrypt.hash(userData.password, null, null, function(err, hash) {
            // Store hash in your password DB.
            userData.password = hash;
            User.create(userData, (error, person) => {
                if (error) {
                    res.send(error);
                } else {
                    res.send({
                        success: true,
                        status: 200,
                        message: 'Successfully created 1 row in database'
                    });
                }
            });
        });
        
    }
    else {
        res.send({
            success: false,
            status: 500,
            message: 'Wrong data'
        });
    }
  }

};

