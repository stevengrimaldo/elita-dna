import { h } from 'preact'
import PropTypes from 'prop-types'

const LeftArrow = ({ fill }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 108.1 80.1" fill={fill}>
    <path d="M42.4 5c1.4-1.4 1.4-3.3 0-4.2C41.9.4 41 0 40 0c-.9 0-1.4.5-2.4.9L.9 37.6c-.5.5-.5.5-.5.9-.5.9-.5 1.4 0 2.4 0 .5.5.9.5.9L38.2 79c.9 1.4 3.3 1.4 4.2 0 1.4-.9 1.4-3.3 0-4.2l-32-31.5H105c1.9 0 3.3-1.4 3.3-3.3s-1.4-3.3-3.3-3.3H10.4L42.4 5z" />
  </svg>
)

LeftArrow.propTypes = {
  fill: PropTypes.string,
}

export default LeftArrow
