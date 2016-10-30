/**
========================================================================================================
  Imports
========================================================================================================
**/
var path = require('path');
var dir = require('./config/dir.js');
var server = require( path.join(dir.CONFIG, 'server.js') )();   //server config, possible: manual override input
var ext = require( path.join(dir.CONFIG, 'ext.js') );          //external modules
var express = require('express');
var app = express();
var formidable = require('formidable');
var fs = require('fs');
/**
========================================================================================================
  App : Server & Router
========================================================================================================
**/

//Start app
var app = ext.express();

//Serve : Public Assets
app.use('/public', ext.express.static('public'));  // serve public files
app.use('/vendors', ext.express.static('vendors'));
console.log('Public assets ready to be served.');

//Express.js server
var httpServer = app.listen(server.PORT);
console.log('Server mode ' + server.MODE + ' listening port ' + server.PORT );

//Manual routing
app.get('/', function(req, res) {
  require( path.join(dir.CONTROLLER, 'home.js') )(req, res);
});

app.get('/generate', function(req, res) {
  require( path.join(dir.CONTROLLER, 'generate.js') )(req, res);
});

app.get('/room', function(req, res) {
  require( path.join(dir.CONTROLLER, 'room.js') )(req, res);
});

app.get('/control', function(req, res) {
  require( path.join(dir.CONTROLLER, 'control.js') )(req, res);
});

app.post('/upload', function(req, res){

  // create an incoming form object
  var form = new formidable.IncomingForm();

  // specify that we want to al;low the user to upload multiple files in a single request
  form.multiples = true;

  // store all uploads in the /uploads directory
  form.uploadDir = path.join(__dirname, '/upload');

  // every time a file has been uploaded successfully,
  // rename it to it's orignal name
  form.on('file', function(field, file) {
    fs.rename(file.path, path.join(form.uploadDir, file.name));
  });

  // log any errors that occur
  form.on('error', function(err) {
    console.log('An error has occured: \n' + err);
  });

  // once all the files have been uploaded, send a response to the client
  form.on('end', function() {
    res.end('success');
  });

  // parse the incoming request containing the form data
  form.parse(req);

});

app.post('/pause', function(req, res){

  // create an incoming form object
  var form = new formidable.IncomingForm();

  // specify that we want to al;low the user to upload multiple files in a single request
  form.multiples = true;

  // store all uploads in the /uploads directory
  form.uploadDir = path.join(__dirname, '/pause');

  // every time a file has been uploaded successfully,
  // rename it to it's orignal name
  form.on('file', function(field, file) {
    fs.rename(file.path, path.join(form.uploadDir, file.name));
  });

  // log any errors that occur
  form.on('error', function(err) {
    console.log('An error has occured: \n' + err);
  });

  // once all the files have been uploaded, send a response to the client
  form.on('end', function() {
    res.end('success');
  });

  // parse the incoming request containing the form data
  form.parse(req);

});

app.post('/resume', function(req, res){

  // create an incoming form object
  var form = new formidable.IncomingForm();

  // specify that we want to al;low the user to upload multiple files in a single request
  form.multiples = true;

  // store all uploads in the /uploads directory
  form.uploadDir = path.join(__dirname, '/pause');

  // every time a file has been uploaded successfully,
  // rename it to it's orignal name
  form.on('file', function(field, file) {
    fs.rename(file.path, path.join(form.uploadDir, file.name));
  });

  // log any errors that occur
  form.on('error', function(err) {
    console.log('An error has occured: \n' + err);
  });

  // once all the files have been uploaded, send a response to the client
  form.on('end', function() {
    res.end('success');
  });

  // parse the incoming request containing the form data
  form.parse(req);

});
