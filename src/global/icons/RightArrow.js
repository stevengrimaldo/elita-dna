import { h } from 'preact'
import PropTypes from 'prop-types'

const RightArrow = ({ fill }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 108.1 80.1" fill={fill}>
    <path d="M65.9 74.9c-1.4 1.4-1.4 3.3 0 4.2.5.5 1.4.9 2.4.9.9 0 1.4-.5 2.4-.9l36.7-36.7c.5-.5.5-.5.5-.9.5-.9.5-1.4 0-2.4 0-.5-.5-.9-.5-.9L70.1 1c-.9-1.4-3.3-1.4-4.2 0-1.4.9-1.4 3.3 0 4.2l32 31.5H3.3C1.4 36.7 0 38.1 0 40s1.4 3.3 3.3 3.3h94.6l-32 31.6z" />
  </svg>
)

RightArrow.propTypes = {
  fill: PropTypes.string,
}

export default RightArrow
