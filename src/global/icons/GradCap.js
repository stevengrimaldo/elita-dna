import { h } from 'preact'
import PropTypes from 'prop-types'

const GradCap = ({ fill }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 74.7" fill={fill}>
    <path d="M56.3 66.7c-.7-.2-1.4.3-1.6 1L53.4 73c-.2.7.3 1.4 1 1.6h.3c.6 0 1.1-.4 1.3-1l1.3-5.3c.2-.7-.3-1.4-1-1.6zM40 40c.2 0 .3 0 .5-.1l14.7-6.1c.7-.3 1-1.1.7-1.7-.3-.7-1.1-1-1.7-.7L40 37.3 2.7 21.9v-.6c0-.7-.6-1.3-1.3-1.3s-1.3.6-1.3 1.3v1.3c0 .5.3 1 .8 1.2l38.7 16c.1.1.2.2.4.2zm15.9 13.6c-.3-.7-1.1-.9-1.8-.6-2.5 1.3-6.8 2.7-12.7 2.9v-12c0-.7-.6-1.3-1.3-1.3s-1.3.6-1.3 1.3v11.9c-16.6-.5-21.9-10.6-22.7-12.2v-9.1c0-.7-.6-1.3-1.3-1.3s-1.3.6-1.3 1.3v9.3c0 .2 0 .3.1.5.2.6 5.9 14.2 26.6 14.2 7.2 0 12.3-1.8 15.3-3.2.4-.2.7-1 .4-1.7zM60 68c-.7 0-1.3.6-1.3 1.3v4c0 .7.6 1.3 1.3 1.3s1.3-.6 1.3-1.3v-4c0-.7-.6-1.3-1.3-1.3z" />
    <path d="M78.7 20c-.7 0-1.3.6-1.3 1.3v.4l-16 6.6v-2.4l17.8-7.4c.5-.2.8-.7.8-1.2s-.3-1-.8-1.2L40.5.1c-.3-.1-.7-.1-1 0L.8 16.1c-.5.2-.8.7-.8 1.2s.3 1 .8 1.2l38.7 16c.2.1.3.1.5.1s.3 0 .5-.1l14-5.8c.7-.3 1-1.1.7-1.7-.3-.7-1.1-1-1.7-.7L40 31.9 4.8 17.3 40 2.7l35.2 14.6-15.3 6.3-14.7-5.5c.1-.3.1-.6.1-.9 0-2.2-2.3-4-5.3-4s-5.3 1.8-5.3 4 2.3 4 5.3 4c1.3 0 2.5-.4 3.5-1l15.2 5.7v33c-1.5.6-2.7 2-2.7 3.8 0 2.2 1.8 4 4 4s4-1.8 4-4c0-1.7-1.1-3.2-2.7-3.8v-7.6c3.8-2.9 5.2-6.7 5.3-6.9 0-.1.1-.3.1-.4v-9.3c0-.7-.6-1.3-1.3-1.3s-1.3.6-1.3 1.3v9.1c-.2.6-1 2.3-2.7 4V31.2l17.8-7.3c.5-.2.8-.7.8-1.2v-1.4c0-.7-.6-1.3-1.3-1.3zM40 18.6c-1.6 0-2.7-.8-2.7-1.3s1-1.3 2.7-1.3 2.7.8 2.7 1.3-1.1 1.3-2.7 1.3zM60 64c-.7 0-1.3-.6-1.3-1.3s.6-1.3 1.3-1.3 1.3.6 1.3 1.3S60.7 64 60 64zm5.3 3.6c-.2-.7-.9-1.1-1.6-1-.7.2-1.1.9-1 1.6l1.3 5.3c.2.6.7 1 1.3 1h.3c.7-.2 1.1-.9 1-1.6l-1.3-5.3z" />
  </svg>
)

GradCap.propTypes = {
  fill: PropTypes.string,
}

export default GradCap
