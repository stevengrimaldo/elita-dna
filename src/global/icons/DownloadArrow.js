import { h } from 'preact'
import PropTypes from 'prop-types'

const DownloadArrow = ({ fill }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 77.7" fill={fill}>
    <path d="M60.6 40.6c.8-.8.8-2.1 0-3.1-.8-.8-2.1-.8-3.1 0L42.2 52.8V2.1c0-1.2-1-2.1-2.1-2.1S38 1 38 2.1v50.8L22.7 37.6c-.8-.8-2.3-.8-3.1 0s-.8 2.1 0 3.1l19.2 19.1c.8.8 2.1.8 3.1 0l18.7-19.2zm15.2 14c0-1.2 1-2.1 2.1-2.1s2.1 1 2.1 2.1v20.9c0 1.2-1 2.1-2.1 2.1H2.1c-1.2 0-2.1-1-2.1-2.1V54.6c0-1.2 1-2.1 2.1-2.1 1.2 0 2.1 1 2.1 2.1v18.8h71.4l.2-18.8z" />
  </svg>
)

DownloadArrow.propTypes = {
  fill: PropTypes.string,
}

export default DownloadArrow