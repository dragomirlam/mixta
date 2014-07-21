var mongoose = require('mongoose');

var partSchema = new mongoose.Schema({
	name: String,
	parts: Array,
	category: String,
});

Part = mongoose.model('Parts', partSchema);
module.exports = Part;