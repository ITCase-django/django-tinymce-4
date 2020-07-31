// overridden from "django-filebrowser 3.9.2"

'use strict';

var FileBrowserDialogue = {
  init: function () {
    // remove tinymce stylesheet.
    var allLinks = document.getElementsByTagName('link');
    var lastLink = allLinks[allLinks.length - 1];
    lastLink.parentNode.removeChild(lastLink);
  },
  fileSubmit: function (fileURL) {
    window.parent.postMessage({
      mceAction: 'insertFBFileUrl',
      url: fileURL,
    }, '*');
    // close popup window
    // tinyMCEPopup.close();
  }
}

// tinyMCEPopup.onInit.add(FileBrowserDialogue.init, FileBrowserDialogue);
