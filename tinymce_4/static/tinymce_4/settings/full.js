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

  if (typeof imageClassList === 'object') {
    tinySettings.image_class_list = imageClassList;
  }

  if (typeof languageUrl === 'string') {
    tinySettings.language_url = languageUrl
  }

  if (typeof tableClassList === 'object') {
    tinySettings.table_class_list = imageClassList;
  }

  if (typeof styleFormats === 'object') {
    tinySettings.style_formats = styleFormats.concat(customStyleFormats);
  }

  if (typeof templates === 'object') {
    tinySettings.templates = templates;
  }
} else {
  console.warn('tinyMCE 4 Settings is not exists');
}
