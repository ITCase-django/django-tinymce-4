/* global tinymce */

tinymce.PluginManager.add('insertzoomimage', function (editor, url) {
  function openDialog () {
    const selfData = tinymce.activeEditor.selection.getNode()
    editor.windowManager.open({
      title: 'Insert Zoomable Image',
      body: {
        type: 'panel',
        items: [
          {
            name: 'src',
            type: 'urlinput',
            filetype: 'image',
            label: 'Image',
            autofocus: true,
            value: selfData.getAttribute('data-mce-src') || null
          },
          {
            name: 'zoomableSrc',
            type: 'urlinput',
            filetype: 'image',
            label: 'Zoomable Image',
            value: selfData.getAttribute('data-image-path') || null
          }
        ],
      },
      buttons: [
        {
          type: 'cancel',
          text: 'Close',
        },
        {
          type: 'submit',
          text: 'Save',
          primary: true,
        }
      ],
      onSubmit: (api) => {
        var data = api.getData();
        var src = data.src.value;
        var zoomableSrc = data.zoomableSrc.value;
        editor.insertContent(
          '<img src="' + src + '"' + 'data-image-path="' + zoomableSrc + '"' + 'class="image_action_open-popup" />'
        )
      }
    })
  }

  editor.ui.registry.addMenuItem('insertzoomimage', {
    text: 'Insert zoomable image',
    context: 'insert',
    icon: 'browse',
    onAction: openDialog
  })

  editor.ui.registry.addButton('insertzoomimage', {
    icon: 'browse',
    tooltip: 'Insert zoomable image',
    stateSelector: 'img',
    onAction: openDialog
  })
})
