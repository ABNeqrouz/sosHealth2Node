var mongoose = require('mongoose');
var schema = mongoose.Schema;


var visitSchema = new schema({
    Type: {
        type: String
    },
    dateVisit: {
        type: Date
    },
    medecin: {
        type: String
    },
    observDiag: {
        type: String
        }
});

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
        type: Date
    },
    Sexe: {
           type:[{
                 type: String,
                 enum: ['Masculin', 'Féminin']     
                }],
           default: 'Masculin'
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
           type:[{
                 type: String,
                 enum: ['Célibataire','Marié', 'Veuf', 'Séparé', 'Divorcé']    
                }],
           default: 'Célibataire'
      },
 
    Visit: {
        type: visitSchema
    }
});
module.exports = mongoose.model('Individu', individuSchema);