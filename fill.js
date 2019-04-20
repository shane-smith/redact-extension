(function () {
  const selection = window.getSelection()
  const range = selection.getRangeAt(0)
  const blurrySpan = document.createElement('span')
  blurrySpan.style = 'background: black; color: black;'
  range.surroundContents(blurrySpan)
})()
