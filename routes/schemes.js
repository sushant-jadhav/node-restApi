/**
 * Created by SUSHANT on 17-04-2016.
 */
module.exports = function(app){

    var Scheme = require('../app/models/schemes');

    app.get('/api/schemes',function(req,res){

        Scheme.find({}).exec(function(err, schemes) {
                if (err)
                    res.send(err);

                res.json(schemes);
            });
    });
    app.get('/api/schemes/:scheme_id',function(req, res) {
        Scheme.findOne({schemeId:req.params.scheme_id}).exec(function(err, scheme) {
            if (err)
                res.send(err);
            res.json(scheme);
        });
    });
    app.post('/api/schemes',function(req,res){

        var scheme = new Scheme();
        scheme.title = req.body.title;
        scheme.description = req.body.description;
        scheme.information = req.body.information;
        scheme.created_at = req.body.created_at;

        //res.json({message:req.body});
        scheme.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Scheme created!' });
        });
    });
}