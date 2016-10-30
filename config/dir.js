/**
========================================================================================================
  Private
========================================================================================================
**/

var path = require('path');
var server_root = __dirname.substring(0, __dirname.indexOf("/config"));

/**
========================================================================================================
  Exports
========================================================================================================
**/
exports.ROOT = path.join(server_root, '/'),
exports.CONFIG = path.join(server_root, '/config/'),
exports.CONTROLLER = path.join(server_root, 'app/controllers/'),
exports.MODEL = path.join(server_root, 'app/models/'),
exports.VIEW = path.join(server_root, 'app/views/'),
exports.UPLOAD = path.join(server_root, '/upload/');
