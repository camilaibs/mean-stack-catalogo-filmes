var express = require('express');
var path = require('path');
var routes = require('./routes');
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function(req, res){
	console.log("O servidor foi startado na porta " + server.address().port);
});

app.get('/', routes.index);