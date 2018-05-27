export const setSize = ({ size }) => {
  let css = ''

  if (size) {
    switch (size) {
      case 'double':
        css += `flex: 1 1 ${2 / 3 * 100}%;`
        break
      case 'full':
        css += 'flex: 1 1 100%;'
        break
      default:
        css += ''
    }
  } else {
    css += `flex: 1 1 ${1 / 3 * 100}%;`
  }

  return css
}
