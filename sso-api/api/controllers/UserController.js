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
            bcrypt.genSalt(10, function (error, salt) {
                if (error) {
                    res.send({
                        success: false,
                        data: error,
                        status: 500
                    })
                } else {
                    bcrypt.hash(userData.password, salt, null, function (err, hash) {
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
            });


        }
        else {
            res.send({
                success: false,
                status: 500,
                message: 'Wrong data'
            });
        }
    },

    checkUserAlreadyExistsOrNot: (req, res) => {
        if (req.method === 'POST' && req.param('email', null) !== null) {
            User.find({
                where: { email: req.param('email') },
                select: ['email']
            }).exec((error, data) => {
                if (data.length) {
                    res.send({
                        success: true,
                        userExists: true,
                        data: data,
                        status: 200
                    });
                } else {
                    res.send({
                        success: true,
                        userExists: false,
                        data: data,
                        status: 200
                    });
                }

            });
        } else {
            res.send({
                success: false,
                status: 500,
                messege: 'Wring data'
            })
        }
    },

    login: (req, res) => {
        if (req.method === 'POST' && req.param('user', null) !== null) {
            var userData = req.param('user', null);
            User.find({
                where: {
                    email: userData.email
                },
                select: ['email', 'password']
            }).then((data) => {
                // user exists need to check password
                let passwordFromDatabase = data[0].password;
                bcrypt.compare(userData.password, passwordFromDatabase, (err, match) => {
                    if (err) {
                        console.log("error", err);
                        res.send({
                            status: 500,
                            error: 'Something wrong',
                            data: err
                        });
                    }
                    if (match) {
                        res.send({
                            status: 200,
                            success: true,
                            error: null,
                            data: data
                        });
                    } else {
                        res.send({
                            status: 200,
                            success: false,
                            error: 'Password mismatch',
                            data: null
                        });
                    }
                })
            }).catch(() => {
                // user id not found sending false response
                res.send({
                    status: 200,
                    success: false,
                    error: "user not found",
                    data: null
                });
            });
        } else {
            res.send({
                success: false,
                error: 'insufficient or wrong data'
            });
        }
    }
};

