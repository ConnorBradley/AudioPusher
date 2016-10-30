/**
========================================================================================================
  Private
========================================================================================================
**/

var path = require('path');
var dir = require('./dir.js');
var ext = require( path.join(dir.CONFIG, 'ext.js') );

/**
========================================================================================================
  Exports
========================================================================================================
**/
var Pusher =  ext.pusher;

exports.openRoom = 0;
exports.pusher = new Pusher({
  appId: '264623',
  key: '71596f81b8099ad40225',
  secret: 'ecc86c4187fbffc4ec29',
  cluster: 'eu',
  encrypted: true
});

exports.numClients = 20;
exports.numDownloadsFinished = 0;
