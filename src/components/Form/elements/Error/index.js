import styled from 'styled-components'

import {
  color,
  fontSize,
  fontWeight,
  fontFamily,
} from '../../../../global/theme'

const Error = styled.div`
  position: absolute;
  top: calc(100% - 10px);
  display: block;
  color: ${color.persimmon};
  font-size: ${fontSize.body};
  font-family: ${fontFamily.museoSlab};
  font-weight: ${fontWeight.light};
`

export default Error
