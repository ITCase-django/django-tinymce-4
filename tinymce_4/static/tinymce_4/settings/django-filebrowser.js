'use strict';

function DjangoFilebrowser (callback, value, meta) {
  var fbUrl = '/admin/filebrowser/browse/?pop=2&type=' + meta.filetype;
  tinyMCE.activeEditor.windowManager.openUrl({
    title: 'Django FileBrowser',
    url: fbUrl,
    onMessage: function (api, data) {
      if (data.mceAction === 'insertFBFileUrl') {
        callback(data.url);
        api.close();
      }
    }
  });
}
