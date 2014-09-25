var express = require('express');
var port = process.env.PORT || 3002;
var app = express();
 
app.get('/', function(req, res) {
	res.sendfile(__dirname + '/index.html');
}).listen(port);

app.get('/web/:yourname', function(req, res) {
	res.send('Hello ' + req.params.yourname)
});

app.get('/api/:yourname', function(req, res) {
	res.send({
		yourname: req.params.yourname, 
		age: 21
	});
});