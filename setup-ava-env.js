var aliases = require('./webpack.aliases.js');
var aliasesArr = Object.keys(aliases).map(function(key) {
  return {
    src: aliases[key],
    expose: key,
  };
});

require('babel-register')
({
  "plugins": [
    ["module-alias", aliasesArr]
  ]
});
require('babel-polyfill');
