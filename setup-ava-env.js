var aliases = require('./webpack.aliases.js');
var aliasesArr = Object.keys(aliases).map(function(key) {
  return {
    src: aliases[key],
    expose: key,
  };
});

require('babel-register')({
  "plugins": [
    ["module-alias", aliasesArr]
  ],
  extensions: [".es6", ".es", ".jsx", ".js", ".es6.js"]
});
require('babel-polyfill');
