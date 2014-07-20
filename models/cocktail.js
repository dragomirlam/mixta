var mongoose = require('mongoose');

var cocktailSchema = new mongoose.Schema({
	name: String,
	spirits: Array,
	category: String,
});

Cocktail = mongoose.model('Cocktails', cocktailSchema);
module.exports = Cocktail;