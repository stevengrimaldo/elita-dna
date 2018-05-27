import { color, type as font } from '../../global/theme'

import { fontGen } from '../../global/utils'

const downloadIcon = '/svg/download-arrow.svg'
const rightArrowIcon = '/svg/right-arrow.svg'

export const genButton = ({ type }) => {
  let css = ''

  css += fontGen(font.button)

  switch (type) {
    case 'inline':
      css += `color: ${color.persimmon};`
      css += `
        &:hover {
          color: ${color.cinnabar};
        }
      `
      break
    case 'download':
      css += 'background-size: 16px auto;'
      css += 'background-position: right center;'
      css += 'padding-right: 26px;'
      css += 'background-repeat: no-repeat;'
      css += `background-image: url(${downloadIcon}), none;`
      css += `color: ${color.persimmon};`
      css += `
        &:hover {
          color: ${color.cinnabar};
        }
      `
      break
    case 'resource':
      css += 'background-size: 16px auto;'
      css += 'background-position: right center;'
      css += 'padding-right: 26px;'
      css += 'background-repeat: no-repeat;'
      css += `background-image: url(${rightArrowIcon}), none;`
      css += `color: ${color.persimmon};`
      css += `
        &:hover {
          color: ${color.cinnabar};
        }
      `
      break
    default:
      css += `background-color: ${color.persimmon};`
      css += 'border-radius: 35px;'
      css += `color: ${color.white};`
      css += 'padding: 20px 50px;'
      css += 'display: inline-block;'
      css += `color: ${color.white};`
      css += 'transition-duration: 400ms;'
      css += 'transition-property: background-color;'
      css += 'transition-timing-function: ease;'
      css += 'cursor: pointer;'
      css += `
        &:hover {
          background-color: ${color.cinnabar};
        }
      `
  }

  return css
}
