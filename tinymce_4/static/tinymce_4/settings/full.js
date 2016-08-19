/* eslint-disable */

'use strict';

if ($ === undefined) $ = django.jQuery;

if (typeof tinySettings === 'object') {
  if (typeof externalPlugins === 'object') {
    tinySettings.external_plugins = externalPlugins;
  }
  if (typeof templates === 'object') {
    tinySettings.templates = templates;
  }
  if (typeof plugins === 'object') {
    tinySettings.plugins = plugins;
  }
  tinymce.init(tinySettings);
} else {
  console.warn('tinySettings is not exists');
}
