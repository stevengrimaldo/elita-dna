require('./utils/patchPreact')
const { h } = require('preact')
const { ServerStyleSheet } = require('styled-components')
const { https } = require('firebase-functions')
const render = require('preact-render-to-string')
const App = require('./src/App')

exports.ssrapp = https.onRequest((req, res) => {
  // creating out stylesheet
  const sheet = new ServerStyleSheet()
  // collecting styles
  const body = render(sheet.collectStyles(h(App.default, { url: req.url })))
  // getting all the tags from the sheet
  const styles = sheet.getStyleTags()

  res.send(
    `<!DOCTYPE html><html><head>${styles}</head><body><div id="root">${body}</div><script src="/dist/index.js"></script></body></html>`
  )
})
