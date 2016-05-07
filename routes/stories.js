/**
 * Created by SUSHANT on 17-04-2016.
 */
module.exports = function(app){

    var Story = require('../app/models/stories');

    app.get('/api/stories',function(req,res){

        Story.find({}).populate('user').exec(function(err, stories) {
                if (err)
                    res.send(err);

                res.json(stories);
            });
    });
    app.get('/api/stories/:story_id',function(req, res) {
        Story.findOne({storyId:req.params.story_id}).populate('user').exec(function(err, story) {
            if (err)
                res.send(err);
            res.json(story);
        });
    });
    app.post('/api/stories',function(req,res){

        var story = new Story();
        story.title = req.body.title;
        story.description = req.body.description;
        story.created_at = req.body.created_at;
        story.user = req.body.user;

        //res.json({message:req.body});
        story.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Story created!' });
        });
    });
}