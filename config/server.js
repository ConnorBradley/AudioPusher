/**
========================================================================================================
  Private
========================================================================================================
**/
var tier = {
  //Individual, small teams, isolation
  dev: {
    MODE: 'dev',
    PORT: 8080
  },

  //Combining code changes
  integration: {
    MODE: 'integration',
    PORT: 8080
  },

  //Simulating production environment
  staging: {
    MODE: 'staging',
    PORT: 8080
  },

  //Real implementation
  production: {
    MODE: 'production',
    PORT: 8080
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
