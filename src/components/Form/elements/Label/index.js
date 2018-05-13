import styled from 'styled-components'

import {
  color,
  fontSize,
  fontFamily,
  fontWeight,
} from '../../../../global/theme'

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  color: ${color.emperor};
  font-size: ${fontSize.body};
  font-family: ${fontFamily.openSans};
  font-weight: ${fontWeight.semiBold};
  text-align: left;
`

export default Label
