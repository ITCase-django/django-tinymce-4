/* global tinymce */

tinymce.PluginManager.add('insertzoomimage', function (editor, url) {
  function openDialog () {
    const selfData = tinymce.activeEditor.selection.getNode()
    editor.windowManager.open({
      title: 'Insert Zoomable Image',
      body: [
        {
          name: 'src',
          type: 'filepicker',
          filetype: 'image',
          label: 'Image',
          autofocus: true,
          value: selfData.getAttribute('data-mce-src') || null
        },
        {
          name: 'zoomableSrc',
          type: 'filepicker',
          filetype: 'image',
          label: 'Zoomable Image',
          value: selfData.getAttribute('data-image-path') || null
        }
      ],
      onSubmit: (e) => {
        editor.insertContent(
          '<img src="' + e.data.src + '"' + 'data-image-path="' + e.data.zoomableSrc + '"' + 'class="image_action_open-popup" />'
        )
      }
    })
  }

  editor.addMenuItem('insertzoomimage', {
    text: 'Insert zoomable image',
    context: 'insert',
    icon: 'browse',
    onClick: () => {
      openDialog()
    }
  })

  editor.addButton('insertzoomimage', {
    icon: 'browse',
    tooltip: 'Insert zoomable image',
    stateSelector: 'img',
    onClick: () => {
      openDialog()
    }
  })
})
