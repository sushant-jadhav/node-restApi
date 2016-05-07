/**
 * Created by SUSHANT on 10-04-2016.
 */
module.exports = function(app){

    var Tag = require('../app/models/tag');

    app.get('/api/tag',function(req,res){

        Tag.find(function(err, tags) {
                if (err)
                    res.send(err);

                res.json(tags);
            });
    });
    app.post('/api/tag',function(req,res){

        var tag = new Tag();
        tag.name = req.body.name;

        //res.json({message:req.body});
        tag.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Tag created!' });
        });
    });
    app.get('/api/tag/:tag_id',function(req, res) {
        Tag.findOne({tagId:req.params.tag_id}, function(err, tag) {
            if (err)
                res.send(err);
            res.json(tag);
        });
    });
    app.delete('/api/tag/:tag_id',function(req, res) {
        Tag.remove({
            tagId: req.params.tag_id
        }, function(err, bear) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
    });
}