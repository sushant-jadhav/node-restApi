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
}