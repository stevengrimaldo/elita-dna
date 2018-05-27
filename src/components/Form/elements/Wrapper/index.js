import styled from 'preact-emotion'

import { media } from '../../../../global/utils'

import { setSize } from './utils'

// prettier-ignore
const Wrapper = styled.div`
  ${props => setSize(props)}

  padding: 20px 10px;
  position: relative;

  ${props => media.down.md`
    ${props.size ? `
      ${props.size === 'double' ? `
        flex-basis: 50%;
      ` : ``}
    ` : `
      flex-basis: 50%;
    `}

    ${props.textArea ? `
      flex-basis: 100%;
    ` : ``}
  `}

  ${props => media.down.xs`
    flex-basis: 100%;
  `}
`

export default Wrapper
