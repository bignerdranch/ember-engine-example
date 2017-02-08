/*jshint node:true*/
var EngineAddon = require('ember-engines/lib/engine-addon');
module.exports = EngineAddon.extend({
  name: 'in-app-blog',
  lazyLoading: true,
  isDevelopingAddon: function() {
    return true;
  }
});
