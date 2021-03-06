var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var routes = require('./routes');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', routes.index);
app.get('/lista', routes.lista);
app.post('/grava', routes.grava);

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function(req, res){
	console.log("O servidor foi startado na porta " + server.address().port);
});