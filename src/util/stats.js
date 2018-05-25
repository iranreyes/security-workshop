const Stats = require('stats.js');

module.exports = function() {
  try {
    var stats = new Stats();
    stats.domElement.style.cssText = 'position:fixed;right:0;bottom:100px;z-index:10000';
    document.body.appendChild(stats.domElement);
    var loop = function() {
      stats.update();
      window.requestAnimationFrame(loop);
    };
    window.requestAnimationFrame(loop);
  } catch (e) {
    console.warn('Stats.js could not be loaded.');
  }
};