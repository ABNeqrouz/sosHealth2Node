var mongoose = require('mongoose');
var schema = mongoose.Schema;


var visitSchema = new schema({
    Type: {
        type: String
    },
    dateVisit: {
        type: String
    },
    timeVisit: {
        type: String
    },
    medecin: {
        type: String
    },
    _individu : {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Individu'
    }

});

var Visit = mongoose.model('Visit', visitSchema);
module.exports = Visit;

var individuSchema = new schema({
    Nom: {
        type: String,
        required: 'Entrer un nom'
         },
    Prenom:{
        type: String,
        required: 'Enter un prénom'
    },
    dateNaissance: {
        type: String
    },
    Sexe: {
        type: String
      },
      
    CNI: {
        type: String
    },
    Adress: {
        type: String
    },
    Telephone: {
        type: String
    },
    etatMatrimonial: {
        type: String
      },
 
    individuVisits: [{
        type: schema.Types.ObjectId,
        ref: 'Visit'
    }]
});
module.exports = mongoose.model('Individu', individuSchema);