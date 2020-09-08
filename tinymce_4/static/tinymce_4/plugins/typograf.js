/* global tinymce */

tinymce.PluginManager.add('typograf', function (editor, url) {
  editor.addMenuItem('typograf', {
    text: 'Process through "Typograf"',
    context: 'tools',
    onclick: () => {
      // $.ajax({
      //   url: '/typograf_url/',
      //   type: 'POST',
      //   dataType: 'json',
      //   data: { content: editor.getContent() },
      //   success: (json) => {
      //     console.log(json);
      //   },
      //   error: (err) => {
      //     console.error(err);
      //   }
      // });
    }
  });
});
