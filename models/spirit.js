var mongoose = require('mongoose');

var spiritSchema = new mongoose.Schema({
	name: String,
	vol: Number,
	category: String,
	color: String
	size: String
});

Spirit = mongoose.model('Spirits', spiritSchema);
module.exports = Spirit;