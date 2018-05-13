import { angleHeight, color, spacing } from '../../global/theme'

export const setSpacing = ({
  above,
  align,
  bgColor,
  image,
  padding,
  slantBottom,
  slantTop,
}) => {
  const slant = slantBottom || slantTop
  let css = ''
  let backgroundColor = ''

  if (above) {
    css += 'z-index: 3;'
  }

  if (align) {
    css += `text-align: ${align};`

    if (align === 'left') {
      css += `
        > div > * {
          margin-left: 0
        }
      `
    } else {
      css += `
        > div > * {
          margin-right: 0
        }
      `
    }
  } else {
    css += 'text-align: center;'
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

  if (image) {
    css += `padding-bottom: ${spacing.verticalPadding};`
    css += `padding-top: ${spacing.verticalPadding};`
  } else if (slant) {
    css += `
      &::before,
      &::after {
        width: 0;
        height: 0;
        position: absolute;
        left: 0;
        right: 0;
      }
    `

    if (slantTop) {
      switch (slantTop) {
        case 'left':
          css += `margin-top: ${angleHeight}px;`
          if (!padding && padding !== 'noTop') {
            css += `padding-top: ${spacing.verticalPadding};`
          }
          css += `
            &::before {
              content: '';
              border-bottom-width: ${angleHeight}px;
              border-bottom-style: solid;
              border-bottom-color: inherit;
              border-right: 100vw solid transparent;
              top: -${angleHeight}px;
            }
          `
          break
        case 'right':
          css += `margin-top: ${angleHeight}px;`
          if (!padding && padding !== 'noTop') {
            css += `padding-top: ${spacing.verticalPadding};`
          }
          css += `
            &::before {
              content: '';
              border-bottom-width: ${angleHeight}px;
              border-bottom-style: solid;
              border-bottom-color: inherit;
              border-left: 100vw solid transparent;
              top: -${angleHeight}px;
            }
          `
          break
        default:
          css += ''
      }

      if (!slantBottom) {
        if (!padding) {
          css += `padding-bottom: ${spacing.verticalPadding};`
        }
      }
    }

    if (slantBottom) {
      switch (slantBottom) {
        case 'left':
          css += `margin-bottom: ${angleHeight}px;`
          if (!padding && padding !== 'noBottom') {
            css += `padding-bottom: ${spacing.verticalPadding};`
          }
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
          css += `margin-bottom: ${angleHeight}px;`
          if (!padding && padding !== 'noBottom') {
            css += `padding-bottom: ${spacing.verticalPadding};`
          }
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

      if (!slantTop) {
        if (!padding) {
          css += `padding-top: ${spacing.verticalPadding};`
        }
      }
    }
  }

  if (padding) {
    switch (padding) {
      case 'half':
        css += `padding: 0 ${spacing.verticalPaddingHalf};`
        break
      case 'halfBottom':
        css += `padding-bottom: ${spacing.verticalPaddingHalf};`
        css += `padding-top: ${spacing.verticalPadding};`
        break
      case 'halfTop':
        css += `padding-bottom: ${spacing.verticalPadding};`
        css += `padding-top: ${spacing.verticalPaddingHalf};`
        break
      case 'none':
        css += 'padding: 0;'
        break
      case 'noBottom':
        css += 'padding-bottom: 0;'
        css += `padding-top: ${spacing.verticalPadding};`
        break
      case 'noTop':
        css += `padding-bottom: ${spacing.verticalPadding};`
        css += 'padding-top: 0;'
        break
      default:
        css += ''
    }
  }

  if (!slant && !padding) {
    css += `padding-bottom: ${spacing.verticalPadding};`
    css += `padding-top: ${spacing.verticalPadding};`
  }

  return css
}

export const setImageAlignment = ({
  align,
  bgColor,
  slantBottom,
  slantTop,
}) => {
  const singleSlant = slantBottom || slantTop
  const doubleSlant = slantBottom && slantTop
  let css = ''
  let backgroundColor = ''

  if (bgColor) {
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
  }

  if (slantBottom) {
    css += `bottom: -${angleHeight}px;`

    switch (slantBottom) {
      case 'left':
        css += 'left: 0;'
        css += 'background-position: right bottom;'
        break
      case 'right':
        css += 'right: 0;'
        css += 'background-position: left bottom;'
        break
      default:
        css += ''
    }
  }

  if (slantTop) {
    css += `top: -${angleHeight}px;`

    switch (slantTop) {
      case 'left':
        css += 'left: 0;'
        css += 'background-position: right top;'
        break
      case 'right':
        css += 'right: 0;'
        css += 'background-position: left top;'
        break
      default:
        css += ''
    }
  }

  if (!align) {
    css += 'background-size: cover;'
  } else {
    css += 'background-size: auto 100%;'
  }

  if (doubleSlant) {
    css += `height: calc(100% + ${angleHeight * 2}px);`
  } else if (singleSlant) {
    css += `height: calc(100% + ${angleHeight}px);`
  }

  return css
}
