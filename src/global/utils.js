import { css } from 'styled-components'
import sanitizeHtml from 'sanitize-html'
import { rgba } from 'polished'

const sizes = {
  down: {
    lg: 1023,
    md: 959,
    sm: 666,
    xl: 1439,
    xs: 479,
    xxl: 1949,
  },
  up: {
    lg: 1024,
    md: 960,
    sm: 667,
    xl: 1440,
    xs: 480,
    xxl: 1950,
  },
}

// use em in breakpoints to work properly cross-browser and support users
// changing their browsers font-size: https://zellwk.com/blog/media-query-units/
// prettier-ignore
export const media = {
  down: Object.keys(sizes.down).reduce((accumulator, label) => {
    const emSize = sizes.down[label] / 16

    accumulator[label] = (...args) => css`
      @media (max-width: ${emSize}em) {
        ${css(...args)}
      }
    `
    return accumulator
  }, {}),
  up: Object.keys(sizes.up).reduce((accumulator, label) => {
    const emSize = sizes.up[label] / 16

    accumulator[label] = (...args) => css`
      @media (min-width: ${emSize}em) {
        ${css(...args)}
      }
    `
    return accumulator
  }, {}),
}

export const fontGen = (
  type,
  fontFamily,
  fontWeight,
  fontSize,
  fontStyle,
  textTransform,
  letterSpacing
) => {
  let css = ''

  if (type) {
    css = `
      font-family: ${type.fontFamily};
      font-weight: ${type.fontWeight};
      font-size: ${type.fontSize};
      line-height: ${type.lineHeight};
      letter-spacing: ${type.letterSpacing};
      text-transform: ${type.textTransform};
    `
  } else {
    css += fontFamily ? `font-family: ${fontFamily}` : ''
    css += fontWeight ? `font-weight: ${fontWeight}` : ''
    css += fontSize ? `font-size: ${toEms(fontSize)}` : ''
    css += fontStyle ? `font-style: ${fontStyle}` : ''
    css += textTransform ? `text-transform: ${textTransform}` : ''
    css += letterSpacing ? `letter-spacing: ${letterSpacing}` : ''
  }

  return css
}

export const truncate = width => `
  width: ${width};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const toEms = value => {
  const result = toUnitless(value)

  return result / 16 + 'em'
}

export const isPx = value => {
  return value.toString().indexOf('px') > -1
}

export const toUnitless = value => {
  return value.split('px')[0] * 1
}

export const convertLh = (value, fontSize) => {
  let result = value

  if (isPx(fontSize)) {
    result = toUnitless(fontSize)
    result = toUnitless(value) / result
    result = Math.round(result * 100) / 100
    return result
  }

  return toUnitless(result)
}

export const setWidth = (width, parentContext = 1800) => {
  let size = width

  if (isPx(width)) {
    size = toUnitless(width)
  }

  return `${size / parentContext * 100}%`
}

export const parseContent = content => {
  return {
    __html: sanitizeHtml(content, {
      allowedTags: sanitizeHtml.defaults.allowedTags.concat([
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'p',
        'img',
        'sup',
        'sub',
        'small',
      ]),
    }),
  }
}

export const maintainRatio = (width, height) => {
  const padding = height / width * 100

  return `
    position: relative;

    &:before {
      display: block;
      content: '';
      width: 100%;
      padding-top: ${padding}%;
    }

    > * {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      height: 100%;
      width: 100%;
    }
  `
}

export const shadeOf = (color, opacity) => rgba(color, opacity)

// for converting photoshop values
export const letterSpacing = (psValue, fontSize) => {
  return `${psValue * fontSize / 1000}px`
}
