/**
========================================================================================================
  Private
========================================================================================================
**/

var path = require('path');
var dir = require('./dir.js');
var ext = require( path.join(dir.CONFIG, 'ext.js') );
var cons = require( path.join(dir.CONFIG, 'cons.js') );

var tier = {
  //Individual, small teams, isolation
  dev: {
    MODE: 'dev',
    PORT: cons.PORT_DEV       //quick dirty hack
  },

  //Combining code changes
  integration: {
    MODE: 'integration',
    PORT: cons.PORT_INTEG
  },

  //Simulating production environment
  staging: {
    MODE: 'staging',
    PORT: cons.PORT_STAG
  },

  //Real implementation
  production: {
    MODE: 'production',
    PORT: cons.PORT_PROD
  }
};

/**
========================================================================================================
  Exports
========================================================================================================
**/

module.exports = function(override_mode) {
  var cli_mode = process.argv[2];

  return tier[override_mode || cli_mode || 'dev'] || tier['dev'];
};
