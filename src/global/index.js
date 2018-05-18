import { injectGlobal } from 'styled-components'
import { fontFaces, googleFonts } from './type'
import { resetCSS } from './reset'
import sig from './sig'

const backgroundImage = '/img/polkadots-bg.jpg'

console.log(sig)

injectGlobal`
  ${googleFonts}
  ${fontFaces}
  ${resetCSS}

  body {
    background-image: url(${backgroundImage});
    background-position: center;
    background-attachment: fixed;
  }

  img, object, embed, video, iframe {
    border: 0 none;
    height: auto;
    max-width: 100%;
    vertical-align: middle;
    width: 100%;
    display: inline-block;
  }
`
