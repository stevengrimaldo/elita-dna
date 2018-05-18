const path = require('path')
const moduleAlias = require('module-alias')

moduleAlias.addAliases({
  'create-react-class': path.resolve(__dirname, './create-preact-class'),
  react: 'preact-compat/dist/preact-compat.min',
  'react-dom': 'preact-compat/dist/preact-compat.min',
})
