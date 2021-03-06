var EventEmitter = require('events').EventEmitter;
// var path = require('path');
// var rootPath = path.join('..', '..');
// var envInfo = require('../../env.json');

var KakuCore = function() {
  EventEmitter.call(this);

  this._title = '';
};

KakuCore.prototype = Object.create(EventEmitter.prototype);
KakuCore.constructor = KakuCore;

Object.defineProperty(KakuCore.prototype, 'title', {
  enumerable: true,
  configurable: true,
  set: function(title) {
    this._title = title;
    this.emit('titleUpdated', title);
  },
  get: function() {
    return this._title;
  }
});

// This means 'KakuApp/'
// KakuCore.prototype.getRootPath = function() {
//   return rootPath;
// };

// This means 'KakuApp/dist/' or 'KakuApp/src/'
// KakuCore.prototype.getAppRootPath = function() {
//   if (envInfo.env === 'production') {
//     return 'dist';
//   }
//   return 'src';
// };

// KakuCore.prototype.getEnvInfo = function() {
//   return envInfo;
// };

module.exports = new KakuCore();
