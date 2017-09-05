/**
 * Created by DELL on 24/08/2017.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var individuSchema = new Schema({
    Nom : {
        type : String,
        required:[true, 'l attribut nom est requis']
    },
    Prenom : {
        type : String
    },
    dateNaissance : {
        type : Date
    }
});

var Individu = mongoose.model('individu', individuSchema);

module.exports = Individu;

