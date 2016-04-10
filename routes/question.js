/**
 * Created by SUSHANT on 08-04-2016.
 */

module.exports = function(app){

    var Question = require('../app/models/question');

    app.get('/api/question',function(req,res){

        Question.find({}).populate('user').populate('tags').exec(function(err, questions) {
                if (err)
                    res.send(err);

                res.json(questions);
            });
    });
    app.post('/api/question',function(req,res){

        var question = new Question();
        question.title = req.body.title;
        question.description = req.body.description;
        question.created_at = req.body.created_at;
        question.user = req.body.user;
        question.tags = req.body.tag;

        //res.json({message:req.body});
        question.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Question created!' });
        });
    });
}