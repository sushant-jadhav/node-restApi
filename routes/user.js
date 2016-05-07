/**
 * Created by SUSHANT on 03-04-2016.
 */
/*var express = require('express');
var router = express.Router();
console.log('in user route')
// on routes that end in /bears
// ----------------------------------------------------
router.route('/user')

    // create a bear (accessed at POST http://localhost:8080/api/bears)
    .post(function(req, res) {

        var bear = new User();      // create a new instance of the Bear model
        bear.name = req.body.name;  // set the bears name (comes from the request)

        // save the bear and check for errors
        bear.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'User created!' });
        });

    })
    .get(function(req, res) {
            Bear.find(function(err, bears) {
                if (err)
                    res.send(err);

                res.json(bears);
            });
        });
router.route('/user/:user_id')

    // get the bear with that id (accessed at GET http://localhost:8080/api/bears/:bear_id)
    .get(function(req, res) {
        Bear.findById(req.params.bear_id, function(err, bear) {
            if (err)
                res.send(err);
            res.json(bear);
        });
    })
    // update the bear with this id (accessed at PUT http://localhost:8080/api/bears/:bear_id)
    .put(function(req, res) {

        // use our bear model to find the bear we want
        Bear.findById(req.params.user_id, function(err, bear) {

            if (err)
                res.send(err);

            bear.name = req.body.name;  // update the bears info

            // save the bear
            bear.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Bear updated!' });
            });

        });
    })
    // delete the bear with this id (accessed at DELETE http://localhost:8080/api/bears/:bear_id)
    .delete(function(req, res) {
        Bear.remove({
            _id: req.params.bear_id
        }, function(err, bear) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
    });

module.exports = router;*/
module.exports = function(app)
{

     var User = require('../app/models/user');

    app.get('/api/user',function(req,res){
        User.find(function(err, users) {
                if (err)
                    res.send(err);

                res.json(users);
            });
     });
    app.post('/api/user',function(req, res) {

        var user = new User();
        user.name = req.body.name;
        user.email = req.body.email;
        user.password = req.body.password;
        console.log(user);
        //user.mobile_no = req.body.mobile_no;

        // save the bear and check for errors
        user.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'User created!' });
        });

    });
    app.get('/api/user/:user_id',function(req, res) {
        User.findOne({userId:req.params.user_id}, function(err, user) {
            if (err)
                res.send(err);
            res.json(user);
        });
    });
    app.delete('/api/user/:user_id',function(req, res) {
        User.remove({
            userId: req.params.user_id
        }, function(err, user) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
    });

}
