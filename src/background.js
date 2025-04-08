browser.menus.create({
  id: 'blurify',
  title: 'Blur',
  contexts: ['selection']
})

browser.menus.create({
  id: 'fill',
  title: 'Fill',
  contexts: ['selection']
})

browser.menus.onClicked.addListener(function(info, tab) {
  if (info.menuItemId === 'blurify') {
    browser.tabs.executeScript(tab.id, {
      file: '/blurify.js'
    })
  } else if (info.menuItemId === 'fill') {
    browser.tabs.executeScript(tab.id, {
      file: '/fill.js'
    })
  }
})
