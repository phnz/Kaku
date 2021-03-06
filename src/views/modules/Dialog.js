var $ = require('jquery');
var Bootstrap = require('bootstrap');
var Bootbox = require('bootbox');
var L10nManager = require('../../modules/L10nManager');

function Dialog() {}

[ 'alert',
  'confirm',
  'prompt',
  'setLocale'
].forEach((name) => {
  Dialog.prototype[name] = function() {
    Bootbox[name].apply(Bootbox, arguments);
  };
});

var dialog = new Dialog();

L10nManager.on('language-changed', (newLanguage) => {
  var transformedLanguage = newLanguage;

  // TODO
  // we have to make sure our language naming is the same with
  // bootbox's language.
  switch (newLanguage) {
    case 'zh-TW':
      transformedLanguage = 'zh_TW';
      break;

    default:
      transformedLanguage = 'en';
      break;
  }

  dialog.setLocale(transformedLanguage);
});

module.exports = dialog;
