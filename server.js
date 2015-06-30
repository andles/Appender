var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');

var port = 1337;
var mongoUri = 'mongodb://localhost:27017/appender';

var app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(express.static(__dirname+'/public'));

mongoose.connect(mongoUri);
mongoose.connection.once('open', function() {
  console.log('Connected to MongoDB at ', mongoUri);
});

app.listen(port, function(){
	console.log('now listening on port ' + port);
});