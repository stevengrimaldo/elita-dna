import { h } from 'preact'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Wrapper = styled.div`
  svg {
    height: auto;
    width: auto;
    display: inline-block;
    vertical-align: top;
  }
`

const Icon = ({ className, Name }) => (
  <Wrapper className={className}>
    <Name />
  </Wrapper>
)

Icon.propTypes = {
  Name: PropTypes.func.isRequired,
  className: PropTypes.string,
}

export default Icon
