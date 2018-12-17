/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  signup: () => {
    if (req.method == 'POST' && req.param('user', null) != null) {
        User.create(req.param('user'), (error, person) => {
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

