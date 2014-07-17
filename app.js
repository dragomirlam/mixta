
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var mongoose = require('mongoose');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(require('less-middleware')(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect("mongodb://localhost/mixta");

var spiritSchema = new mongoose.Schema({
	name: String,
	vol: Number,
	category: String,
	color: String

});

Spirits = mongoose.model('Spirits', spiritSchema);

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', function(req, res){
	res.render("index.jade");
});

app.get('/users', user.list);

app.get('/spirits', function(req, res){
	Spirits.find({}, function(err, docs){
		res.render('spirits.jade', { spirits: docs });
	});
	// res.render("spirits.jade");
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
