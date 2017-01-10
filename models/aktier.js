var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var aktierSchema = new Schema({
	name: String,
	price: Number,
	ammount: Number
});

module.exports = mongoose.model('Aktie', aktierSchema);