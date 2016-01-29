var express = require('express');
var app = express();
<<<<<<< HEAD
var path = require('path');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './client')))
require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);
app.listen(8000, function(){
    'Running on 8000!'
});
=======

app.use(express.static(__dirname))

app.get('/',function(req, res){
	res.render('index');
})

app.listen(8000, function(){
	console.log('THE GAME HAS BEGUN!!!!!!!')
})
>>>>>>> 315b919dc33896666aa77c09c103327187abb578

