'use strict';

if ($ === undefined) $ = django.jQuery;

function initTinyMCE (elem) {
  var areas = [elem];

  if (!elem) {
    areas = document.getElementsByClassName('tinymce4');
  }

  for (var i = 0; i < areas.length; i++) {
    var area = areas[i];

    if (!(area.id.indexOf('__prefix__') + 1)) {
      tinymce.init(Object.assign({}, { target: area }, tinySettings));
    }
  }
}

// Use MutationObserver to track adding or removing Django admin inline formsets
// to add adn remove TinyMCE editor widgets.
var tinyMCEObserver = new MutationObserver(function (mutations) {
  $(mutations).each(function (i, mutation) {
    $(mutation.addedNodes).each(function (i, node) {
      // Add TinyMCE widgets to new textareas.
      $(node).find('textarea.tinymce4').each(function (i, elem) {
        // $(elem).css('display') != 'none' &&
        initTinyMCE(elem);
      });
    }); // End addedNodes

    $(mutation.removedNodes).each(function (i, node) {
      // Remove TinyMCE widgets from textareas inside removed nodes.
      $(node).find('textarea.tinymce4').each(function (i, elem) {
        $(tinymce.EditorManager.editors).each(function (i, editor) {
          if (editor.id == elem.id) {
            editor.remove();
          }
        });
      });

      // Refresh remaining TinyMCE editors to return them to consistent state
      // After removing an inline formset, Django admin scripts
      // change IDs of remaining textareas,
      // so textarea ID != TinyMCE instance ID attached to it.
      $(tinymce.EditorManager.editors).each(function (i, editor) {
        var elem = editor.getElement();
        if (editor.id != elem.id) {
          editor.remove();
          initTinyMCE(elem);
        }
      });
    }); // End removedNodes
  }); // End mutations
}); // End MutationObserver

$(document).ready(() => {
  if (typeof tinySettings === 'undefined') {
    console.warn('tinyMCE 4 Settings is not exists');
    return null;
  }

  initTinyMCE();

  var inlineGroup = document.getElementsByClassName('inline-group')[0];

  if (inlineGroup) {
    tinyMCEObserver.observe(inlineGroup, { childList: true, subtree: true });
  }
});
