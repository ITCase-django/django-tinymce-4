'use strict';

function DjangoFilebrowser (field_name, url, type, win) {

  var editor = win.tinyMCE.activeEditor;
  var cmsURL = '/admin/filebrowser/browse/?pop=2';

  cmsURL += '&type=' + type;

  editor.windowManager.open({
    'title': 'Django FileBrowser',
    'url': cmsURL,
    'width': 900,
    'height': 450
  }, {
    'window': win,
    'input': field_name,
    'editor_id': editor.editorId
  });

  return false;
}
