/**
========================================================================================================
  Imports
========================================================================================================
**/
var path = require('path');
var dir = require('./config/dir.js');
var server = require( path.join(dir.CONFIG, 'server.js') )();   //server config, possible: manual override input
var ext = require( path.join(dir.CONFIG, 'ext.js') );          //external modules
var roam = require( path.join(dir.CONFIG, 'roam.js') );

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
var httpServer = app.listen(server.PORT, "0.0.0.0");
console.log('Server mode ' + server.MODE + ' listening port ' + server.PORT );

//Manual routing
app.get('/', function(req, res) {
  require( path.join(dir.CONTROLLER, 'home.js') )(req, res);
});

app.get('/generate', function(req, res) {
  require( path.join(dir.CONTROLLER, 'generate.js') )(req, res);
});

app.post('/upload', function(req, res) {
  require( path.join(dir.CONTROLLER, 'modules/upload.js') )(req, res);
});

app.get('/control', function(req, res) {
  require( path.join(dir.CONTROLLER, 'control.js') )(req, res);
});

app.get('/room/:roomCode/', function(req, res) {
  if (req.params.roomCode == roam.openRoom) {
    require( path.join(dir.CONTROLLER, 'room.js') )(req, res);
  }
  else {
    res.end("Not authorized b*tch")
  }
});

app.post('/play', function(req, res) {
  require (path.join(dir.CONTROLLER, 'modules/play.js') )(req, res);
});

app.post('/pause', function(req, res){

  console.log("pauseajax");

});

app.post('/resume', function(req, res) {

  console.log("resumejax");

});
