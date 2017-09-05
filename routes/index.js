var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
Individu = mongoose.model('Individu');
Visit = mongoose.model('Visit');
/* GET home page. */
router.get('/getIndividus', function(req, res){
    Individu.find({}, function(err, individu){
        if(err){
            res.send(err);
        }
        res.json(individu);
    });
}) 
      .post('/postIndividu', function(req, res){
    var new_individu = new Individu(req.body);
    new_individu.save(function (err, individu){
       if(err){
           res.send(err);
       }
       res.json(individu);
    });
});

router.get('/getIndividus/:individuId', function(req, res){
    Individu.findById(req.params.individuId, function(err, individu){
        if(err){
            res.send(err);
        }
        res.json(individu);
    });
})
      .put('/getIndividus/:individuId', function(req, res){
          Individu.findOneAndUpdate({_id: req.params.individuId},req.body,{new: true},function(err, individu){
              if(err){
                  res.send(err);
              }
              res.json(individu);
          });
});

router.get('/getIndividuVisit/:individuId', function (req, res) {
   Individu.findById({_id: req.params.individuId})
       .populate('individuVisits')
       .exec(function (err, individu) {
           if(err) {
               res.send(err);
           }
           res.json(individu.individuVisits);
       })
})
    .post('/postIndividuVisit/:individuId', function (req, res) {

        Individu.findById({_id: req.params.individuId}, function (err, individu) {
            if(err){
                res.send(err);
            }
            var new_visit = new Visit(req.body);
            new_visit._individu = req.params.individuId;
            Visit.create(new_visit, function (err, visit) {
                if(err){
                    res.send(err);
                }
                individu.individuVisits.push(visit);
                individu.save(function (err, individu) {
                    if(err) {
                        res.send(err);
                    }
                });
                res.json(visit);
            });

        });
    });

module.exports = router;