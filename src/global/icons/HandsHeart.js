import { h } from 'preact'
import PropTypes from 'prop-types'

const HandsHeart = ({ fill }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 83 80" fill={fill}>
    <path d="M83 43.3l-1.5-21.5c-.1-1.4-.8-2.7-1.8-3.6-2.2-1.9-5.5-1.7-7.4.6-.8 1-1.3 2.2-1.3 3.5l.1 17.5-7.7 9.8c-1.2 1.5-3.2 2.2-5.1 1.7l8.3-10.8c1.6-2.1 1.1-4.9-.9-6.5-2-1.5-4.7-1.2-6.3.7L47 49.8c-2.1 2.5-3.2 5.6-3.2 8.9l.2 20c0 .8.7 1.5 1.5 1.5h20.9c.4 0 .8-.2 1.1-.5s.4-.7.4-1.1l-.9-9.8 13.9-18.4c1.5-2.1 2.3-4.7 2.1-7.1zm-4.5 5.2L64.3 67.3c-.2.3-.3.7-.3 1l.8 8.8H46.9l-.2-18.6c0-2.6.9-5 2.5-7l12.5-14.9c.3-.4.7-.6 1.2-.6s.9.1 1.3.4c.7.6.8 1.6.2 2.3l-9.5 12.2c-.5.6-.4 1.6.3 2 0 0 .1 0 .1.1 3.5 2.3 8 1.5 10.5-1.7l8-10.2c.2-.3.3-.6.3-.9l-.2-18.1c0-1.3 1.1-2.4 2.4-2.4.6 0 1.1.2 1.5.6.5.4.8 1 .8 1.6l1.5 21.5c.1 1.8-.5 3.7-1.6 5.1zm-55-13.8c-1.7-2-4.5-2.3-6.5-.6-1.9 1.6-2.3 4.4-.7 6.4l8.3 10.8c-1.9.5-3.9-.2-5.1-1.7l-7.6-9.9.2-17.6c0-2.9-2.4-5.2-5.2-5.2-1.3 0-2.5.5-3.5 1.3-1.1.9-1.7 2.2-1.8 3.6L0 43.3c-.2 2.5.6 5 2.1 7L16 68.6l-.9 9.8c-.1.8.5 1.5 1.4 1.6h21c.8 0 1.5-.6 1.5-1.5l.2-20c0-3.3-1.1-6.4-3.2-8.9L23.5 34.7zM36.2 77H18.3l.8-8.8c0-.4-.1-.7-.3-1L4.6 48.4c-1.2-1.4-1.7-3.3-1.6-5l1.5-21.5c0-.6.3-1.2.8-1.6.4-.4 1-.6 1.5-.6H7c1.2.1 2.2 1.1 2.2 2.4L9 40.2c0 .3.1.7.3.9l8 10.2c2.6 3.2 7.1 4 10.5 1.7.7-.4.9-1.3.4-2 0 0 0-.1-.1-.1l-9.5-12.1c-.5-.7-.5-1.7.2-2.3.3-.3.8-.5 1.3-.4.5 0 .9.2 1.2.6l12.5 15c1.7 2 2.5 4.4 2.5 7L36.2 77zm27-64.4c0-3.4-1.3-6.6-3.7-9C54.8-1.2 47-1.3 42 3.4l-.2.2-.4.5-.4-.4c-4.7-4.8-12.5-4.9-17.5-.2l-.2.2c-4.8 4.9-4.8 12.9 0 17.9l17.3 17.6c.4.4 1.1.5 1.6 0l17.3-17.6c2.4-2.3 3.7-5.6 3.7-9zM41.5 36.7L25 20c-4-4-4-10.7 0-14.7s10.4-4 14.3-.2l.2.2 1.2 1.2c.4.4 1.1.4 1.6 0l1.2-1.1c4-4 10.4-4 14.3-.2l.2.2c4 4 4 10.7 0 14.7L41.5 36.7z" />
  </svg>
)

HandsHeart.propTypes = {
  fill: PropTypes.string,
}

export default HandsHeart
