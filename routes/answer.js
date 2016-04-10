/**
 * Created by SUSHANT on 08-04-2016.
 */

module.exports = function(app){

    var Answer = require('../app/models/answer');
    var user = require('../app/models/user');

    app.get('/api/answer',function(req,res){

        Answer.find({}).populate('user').exec(function(err,answers){
            if (err)
                    res.send(err);

            res.json(answers);
        });
    });
    app.post('/api/answer',function(req,res){

        var answer = new Answer();      // create a new instance of the Bear model
        // set the bears name (comes from the request)
        answer.description = req.body.description;  // set the bears name (comes from the request)
        answer.user = req.body.user;  // s

        //res.json({message:req.body});
        answer.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Answer created!' });
        });
    });
}