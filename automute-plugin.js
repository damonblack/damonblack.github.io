videojs.plugin('pluginDev', function() {
  console.log('calling plugin');
  this.muted(true);
});
