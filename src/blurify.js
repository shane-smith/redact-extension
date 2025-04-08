(function () {
  const selection = window.getSelection()
  const range = selection.getRangeAt(0)
  const blurrySpan = document.createElement('span')
  blurrySpan.style = 'filter: blur(0.2rem)'
  range.surroundContents(blurrySpan)
})()
