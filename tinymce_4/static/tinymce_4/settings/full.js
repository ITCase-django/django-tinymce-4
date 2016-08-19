/* eslint-disable */

'use strict';

if ($ === undefined) $ = django.jQuery;

if (typeof tinySettings === 'object') {
  if (typeof menu === 'object') {
    tinySettings.menu = menu;
  }
  if (typeof plugins === 'object') {
    tinySettings.plugins = plugins;
  }
  if (typeof externalPlugins === 'object') {
    tinySettings.external_plugins = externalPlugins;
  }
  if (typeof templates === 'object') {
    tinySettings.templates = templates;
  }
  tinymce.init(tinySettings);
} else {
  console.warn('tinySettings is not exists');
}
