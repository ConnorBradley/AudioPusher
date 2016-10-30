/**
========================================================================================================
  Imports
========================================================================================================
**/

var path = require('path');
var dir = require('../../../config/dir.js');
var ext = require( path.join(dir.CONFIG, 'ext.js') );
var cons = require( path.join(dir.CONFIG, 'cons.js') );
var roam = require( path.join(dir.CONFIG, 'roam.js') );

/**
========================================================================================================
  Helpers
========================================================================================================
**/
module.exports = function (req, res) {

  var Pusher = require('pusher');

  var pusher = new Pusher({
    appId: '264623',
    key: '71596f81b8099ad40225',
    secret: 'ecc86c4187fbffc4ec29',
    cluster: 'eu',
    encrypted: true
  });

  pusher.trigger(roam.openRoom, 'my_event', {
    "message": "hello world"
  });
};
/**
========================================================================================================
  Processing
========================================================================================================
**/
