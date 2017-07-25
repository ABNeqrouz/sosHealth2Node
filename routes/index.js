var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
Individu = mongoose.model('Individu');


/* GET home page. */
router.get('/individus', function(req, res){
    Individu.find({}, function(err, individu){
        if(err){
            res.send(err);
        }
        res.json(individu);
    });
}) 
      .post('/individus', function(req, res){
    var new_individu = new Individu(req.body);
    new_individu.save(function (err, individu){
       if(err){
           res.send(err);
       }
       res.json(individu);
    });
});

router.get('/individus/:individuId', function(req, res){
    Individu.findById(req.params.individuId, function(err, individu){
        if(err){
            res.send(err);
        }
        res.json(individu);
    });
})
      .put('/individus/:individuId', function(req, res){
          Individu.findOneAndUpdate({_id: req.params.individuId},req.body,{new: true},function(err, individu){
              if(err){
                  res.send(err);
              }
              res.json(individu);
          });
});

module.exports = router;