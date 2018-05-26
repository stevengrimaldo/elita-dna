import 'babel-polyfill'
import { h, render } from 'preact'
import { ThemeProvider } from 'emotion-theming'

import App from './App'
import theme from './global/theme'

if (typeof document !== 'undefined') {
  const appElement = document.getElementById('root')
  const content = (
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  )

  render(content, appElement, appElement.lastChild)

  // Hot Module Replacement
  if (module.hot) {
    module.hot.accept()
  }
}
