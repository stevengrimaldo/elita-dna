import { h } from 'preact'
import PropTypes from 'prop-types'
import styled from 'preact-emotion'

import { baseSize, spacing } from '../../global/theme'

import { toUnitless, setWidth } from '../../global/utils'

// prettier-ignore
const Wrapper = styled.div`
  width: 100%;

  ${props => !props.unContain && `
    margin: 0 auto;
    max-width: ${baseSize + toUnitless(spacing.horizontalPadding) * 2}px;
    padding-left: ${setWidth(spacing.horizontalPadding)};
    padding-right: ${setWidth(spacing.horizontalPadding)};
  `}
`

const Container = ({ children, className, unContain }) => (
  <Wrapper className={className} unContain={unContain}>
    {children}
  </Wrapper>
)

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  unContain: PropTypes.bool,
}

export default Container
