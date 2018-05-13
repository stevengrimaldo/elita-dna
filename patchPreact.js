import path from 'path'
import moduleAlias from 'module-alias'

moduleAlias.addAliases({
  'create-react-class': path.resolve(__dirname, './create-preact-class'),
  react: 'preact-compat/dist/preact-compat.min',
  'react-dom': 'preact-compat/dist/preact-compat.min',
})
