import styled from 'styled-components'

import fonts from './fonts'

import { color, fontStyle, fontWeight, type } from './theme'
import { fontGen, media } from './utils'

export const googleFonts =
  "@import url('//fonts.googleapis.com/css?family=Open+Sans:400,600,700');"

export const fontFaces = Object.keys(fonts)
  .filter(name => fonts[name])
  .map(name =>
    fonts[name]
      .map(
        font => `
          @font-face {
            font-family: '${name}';
            font-weight: ${font.weight};
            font-style: ${font.style};
            src: url('${font.src}') format('woff');
          }
        `
      )
      .join('')
  )
  .join('')

export const PageTitle = styled.h1`
  ${fontGen(type.pageTitle)}

  color: ${props => (props.inverted ? color.white : color.emperor)};

  ${media.down.lg`
    ${fontGen(type.mainHeadline)}
  `}
`

export const MainHeadline = styled.h2`
  ${fontGen(type.mainHeadline)}

  color: ${props => (props.inverted ? color.white : color.emperor)};

  ${media.down.lg`
    ${fontGen(type.headline)}
  `}
`

export const Headline = styled.h3`
  ${fontGen(type.headline)}

  color: ${props => (props.inverted ? color.white : color.emperor)};

  ${media.down.lg`
    ${fontGen(type.subHeadline)}
  `}
`

export const SubHeadline = styled.h4`
  ${fontGen(type.subHeadline)}

  color: ${props => (props.inverted ? color.white : color.emperor)};
`

export const CalloutText = styled.h5`
  ${fontGen(type.callout)}

  color: ${props => (props.inverted ? color.white : color.emperor)};
`

export const FeaturedText = styled.h6`
  ${props => fontGen(type.featured)}

  color: ${props => (props.inverted ? color.white : color.emperor)};
`

export const BodyText = styled.p`
  ${fontGen(type.body)}

  color: ${props => (props.inverted ? color.white : color.emperor)};

  strong,
  b {
    font-weight: ${fontWeight.bold};
  }

  a {
    color: ${props => (props.inverted ? color.white : color.persimmon)};
    text-decoration: none;

    &:hover {
      color: ${props => (props.inverted ? color.white : color.cinnabar)};
      text-decoration: underline;
    }
  }
`

export const LegalText = BodyText.extend`
  font-size: 12px;
`

export const Wysiwyg = styled.div`
  text-align: inherit;
  color: ${props => (props.inverted ? color.white : 'inherit')};

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  li,
  img {
    margin-bottom: 30px;
    padding-top: 30px;
  }

  p,
  li,
  img {
    padding-top: 0;
  }

  h1 {
    ${fontGen(type.pageTitle)};
  }

  h2 {
    ${fontGen(type.mainHeadline)};
  }

  h3 {
    ${fontGen(type.headline)};
  }

  h4 {
    ${fontGen(type.subHeadline)};
  }

  h5 {
    ${fontGen(type.callout)};
  }

  h6 {
    ${fontGen(type.featured)};
  }

  li,
  p {
    ${fontGen(type.body)};
  }

  ol,
  ul {
    margin-bottom: 30px;

    li {
      list-style-position: inside;
      padding-left: 20px;
      text-indent: -20px;
      margin-bottom: 10px;
    }
  }

  ol {
    li {
      list-style-type: decimal;
    }
  }

  ul {
    li {
      list-style-type: disc;
    }
  }

  em,
  i {
    font-style: ${fontStyle.italic};
  }

  strong,
  b {
    font-weight: ${fontWeight.bold};
  }

  small {
    font-size: 50%;
  }

  sup {
    vertical-align: super;
  }

  sub {
    vertical-align: sub;
  }

  img {
    display: block;
    max-width: 100%;

    &.align-center {
      margin-left: auto;
      margin-right: auto;
    }

    &.align-right {
      float: right;
      margin-left: 15px;
    }

    &.align-left {
      float: left;
      margin-right: 15px;
    }
  }

  a {
    color: ${props => (props.inverted ? color.white : color.persimmon)};
    text-decoration: none;

    &:hover {
      color: ${props => (props.inverted ? color.white : color.cinnabar)};
      text-decoration: underline;
    }
  }

  > *:first-child {
    padding-top: 0;
    margin-top: 0;
  }

  > *:last-child {
    padding-bottom: 0;
    margin-bottom: 0;
  }
`
