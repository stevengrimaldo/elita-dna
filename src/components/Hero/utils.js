import { angleHeight, color, spacing } from '../../global/theme'

export const addSlant = ({ above, bgColor, image, slantBottom }) => {
  let css = ''
  let backgroundColor = ''

  if (above) {
    css += 'z-index: 3;'
  }

  if (bgColor && !image) {
    switch (bgColor) {
      case 'white':
        backgroundColor = `${color.white}`
        break
      case 'orange':
        backgroundColor = `${color.persimmon}`
        break
      case 'tan':
        backgroundColor = `${color.ecru}`
        break
      default:
        backgroundColor = 'transparent'
    }

    css += `background-color: ${backgroundColor};`
    css += `border-color: ${backgroundColor};`
  }

  css += `
    + section {
      margin-top: 0;
    }
  `

  if (image) {
    css += 'display: flex;'
    css += 'align-items: center;'
    css += 'justify-content: center;'
    css += 'overflow: hidden;'
    css += 'min-height: 600px;'

    if (slantBottom) {
      switch (slantBottom) {
        case 'left':
          css += `padding-bottom: ${spacing.verticalPadding};`
          css += 'margin-bottom: 0;'
          css += 'transform: skewY(-3.75deg);'
          css += 'transform-origin: left top;'
          css += `
            > * {
              transform: skewY(3.75deg);
              transform-origin: inherit;
            }

            &::after {
              content: none;
            }
          `
          break
        case 'right':
          css += `padding-bottom: ${spacing.verticalPadding};`
          css += 'margin-bottom: 0;'
          css += 'transform: skewY(3.75deg);'
          css += 'transform-origin: right top;'
          css += `
            > * {
              transform: skewY(-3.75deg);
              transform-origin: inherit;
            }
            &::after {
              content: none;
            }
          `
          break
        default:
          css += ''
      }
    }
  } else {
    css += 'width: 100%;'
    css += 'position: relative;'
    css += 'padding-bottom: 100px;'
    css += 'padding-top: 100px;'
    css += 'text-align: center;'
    css += 'margin-bottom: 100px;'

    if (slantBottom) {
      css += `
        &::after {
          width: 0;
          height: 0;
          position: absolute;
          left: 0;
          right: 0;
        }
      `

      switch (slantBottom) {
        case 'left':
          css += `
            &::after {
              content: '';
              border-top-width: ${angleHeight}px;
              border-top-style: solid;
              border-top-color: inherit;
              border-right: 100vw solid transparent;
              bottom: -${angleHeight}px;
            }
          `
          break
        case 'right':
          css += `
            &::after {
              content: '';
              border-top-width: ${angleHeight}px;
              border-top-style: solid;
              border-top-color: inherit;
              border-left: 100vw solid transparent;
              bottom: -${angleHeight}px;
            }
          `
          break
        default:
          css += ''
      }
    }
  }

  return css
}
