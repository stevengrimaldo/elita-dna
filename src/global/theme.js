import { toEms, convertLh } from './utils'

export const color = {
  black: '#000',
  cinnabar: '#e8523d',
  ecru: '#f9f6f0',
  emperor: '#4e4449',
  persimmon: '#ff6651',
  strikemaster: '#94607e',
  white: '#fff',
}

export const fontFamily = {
  museoSlab: "'MuseoSlab', serif",
  openSans: "'Open Sans', sans-serif",
}

export const fontWeight = {
  bold: '700',
  light: '300',
  regular: '400',
  semiBold: '600',
}

export const fontStyle = {
  italic: 'italic',
  normal: 'normal',
  oblique: 'oblique',
}

export const pxValues = {
  body: '16px',
  button: '18px',
  callout: '25px',
  featured: '20px',
  headline: '35px',
  mainHeadline: '45px',
  pageTitle: '65px',
  subHeadline: '30px',
}

export const fontSize = {
  body: toEms(pxValues.body),
  button: toEms(pxValues.button),
  callout: toEms(pxValues.callout),
  featured: toEms(pxValues.featured),
  headline: toEms(pxValues.headline),
  mainHeadline: toEms(pxValues.mainHeadline),
  pageTitle: toEms(pxValues.pageTitle),
  specChar: '50%',
  subHeadline: toEms(pxValues.subHeadline),
}

export const lineHeight = {
  body: convertLh('25px', pxValues.body),
  button: convertLh('20px', pxValues.button),
  callout: convertLh('30px', pxValues.callout),
  featured: convertLh('25px', pxValues.featured),
  headline: convertLh('40px', pxValues.headline),
  mainHeadline: convertLh('55px', pxValues.mainHeadline),
  pageTitle: convertLh('70px', pxValues.pageTitle),
  subHeadline: convertLh('35px', pxValues.subHeadline),
}

export const letterSpacing = {
  body: '0',
  button: '-0.16px',
  callout: '0',
  featured: '0',
  headline: '0',
  mainHeadline: '0',
  pageTitle: '-3.25px',
  subHeadline: '0',
}

export const textTransform = {
  body: 'none',
  button: 'none',
  callout: 'none',
  featured: 'none',
  headline: 'none',
  mainHeadline: 'none',
  pageTitle: 'none',
  subHeadline: 'none',
}

export const baseSize = 1800

export const vertSpace = 100

export const angleHeight = 100

export const spacing = {
  horizontalPadding: '100px',
  verticalPadding: `${vertSpace}px`,
  verticalPaddingHalf: `${vertSpace / 2}px`,
}

export const timing = {
  default: '400ms',
  fast: '200ms',
  slow: '800ms',
}

export const easing = {
  ease: 'ease',
  easeIn: 'ease-in',
  easeInOut: 'ease-in-out',
  easeOut: 'ease-out',
  linear: 'linear',
}

export const type = {
  body: {
    fontFamily: fontFamily.openSans,
    fontSize: fontSize.body,
    fontWeight: fontWeight.regular,
    letterSpacing: letterSpacing.body,
    lineHeight: lineHeight.body,
    textTransform: textTransform.body,
  },
  button: {
    fontFamily: fontFamily.openSans,
    fontSize: fontSize.button,
    fontWeight: fontWeight.bold,
    letterSpacing: letterSpacing.button,
    lineHeight: lineHeight.button,
    textTransform: textTransform.button,
  },
  callout: {
    fontFamily: fontFamily.museoSlab,
    fontSize: fontSize.callout,
    fontWeight: fontWeight.light,
    letterSpacing: letterSpacing.callout,
    lineHeight: lineHeight.callout,
    textTransform: textTransform.callout,
  },
  featured: {
    fontFamily: fontFamily.openSans,
    fontSize: fontSize.featured,
    fontWeight: fontWeight.semiBold,
    letterSpacing: letterSpacing.featured,
    lineHeight: lineHeight.featured,
    textTransform: textTransform.featured,
  },
  headline: {
    fontFamily: fontFamily.museoSlab,
    fontSize: fontSize.headline,
    fontWeight: fontWeight.light,
    letterSpacing: letterSpacing.headline,
    lineHeight: lineHeight.headline,
    textTransform: textTransform.headline,
  },
  mainHeadline: {
    fontFamily: fontFamily.museoSlab,
    fontSize: fontSize.mainHeadline,
    fontWeight: fontWeight.light,
    letterSpacing: letterSpacing.mainHeadline,
    lineHeight: lineHeight.mainHeadline,
    textTransform: textTransform.mainHeadline,
  },
  pageTitle: {
    fontFamily: fontFamily.museoSlab,
    fontSize: fontSize.pageTitle,
    fontWeight: fontWeight.light,
    letterSpacing: letterSpacing.pageTitle,
    lineHeight: lineHeight.pageTitle,
    textTransform: textTransform.pageTitle,
  },
  subHeadline: {
    fontFamily: fontFamily.museoSlab,
    fontSize: fontSize.subHeadline,
    fontWeight: fontWeight.bold,
    letterSpacing: letterSpacing.subHeadline,
    lineHeight: lineHeight.subHeadline,
    textTransform: textTransform.subHeadline,
  },
}

export default {
  angleHeight,
  baseSize,
  color,
  easing,
  fontFamily,
  fontSize,
  fontStyle,
  fontWeight,
  letterSpacing,
  lineHeight,
  spacing,
  textTransform,
  timing,
  type,
}
