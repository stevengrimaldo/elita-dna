import { h } from 'preact'
import PropTypes from 'prop-types'

const BrainStorm = ({ fill }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill={fill}>
    <path d="M74.9 13.2v-9L78 6.5l1.5-2.1L73.6 0l-5.9 4.4 1.5 2.1 3.1-2.3v9c0 3.5-2.9 6.4-6.4 6.4h-5.1c-4.1 0-7.5 2.6-8.6 6.4h-1.8v2.6h1.5v4c-.6-.1-1.3-.2-1.9-.2-3 0-5.9 1-8.2 2.8-1.7-1.8-4.1-2.8-6.6-2.8-.9 0-1.7.1-2.6.4v-8.1c0-4.3-3.5-7.7-7.7-7.7h-1.4v-2.6h-2.6V17H17c-4.3 0-7.7 3.5-7.7 7.7v2.6c0 1.4-1.2 2.6-2.6 2.6H4.1l2.3-3.1-2.1-1.5-4.4 5.9 4.4 5.9 2.1-1.5-2.3-3.1h2.6c2.8 0 5.1-2.3 5.1-5.1v-2.6c0-2.8 2.3-5.1 5.1-5.1h7.7c2.8 0 5.1 2.3 5.1 5.1v9.3c-.6.4-1.1.8-1.5 1.4-1-.3-2-.4-3-.4-5.5 0-10.1 4.1-10.8 9.4-4.6 1.4-7.8 5.6-7.8 10.5 0 2.3.7 4.5 2 6.3-.5 1.3-.7 2.6-.7 3.9 0 6 4.9 10.9 10.9 10.9.5 0 1 0 1.4-.1h.3c.5-.1.9-.2 1.4-.3 1.8 1.1 3.8 1.7 5.9 1.7 2.4 0 4.6-.7 6.5-2.1 2 2.9 5.3 4.7 9 4.7 3.4 0 6.5-1.5 8.5-4.1 1.7 1 3.6 1.6 5.6 1.6 6 0 10.9-4.9 10.9-10.9 0-1.3-.2-2.6-.7-3.8 2.1-2 3.3-4.8 3.3-7.8 0-.7-.1-1.3-.2-1.9h.2v-2.6h-1c-1.3-2.8-3.7-5.1-6.8-6-.6-5.3-4.1-9.6-8.9-11.2v-4.6c0-3.5 2.9-6.4 6.4-6.4h5.1c5.1-.1 9.2-4.2 9.2-9.1zM60.7 45.5v1l1 .2c2.3.5 4.2 1.9 5.4 3.8V53h1c.2.6.3 1.3.3 1.9 0 2-.7 4-2.1 5.5-1.8-2.5-4.8-4.1-8.1-4.3l-.2 2.4c4.3.3 7.6 3.4 7.8 8.3-.2 4.5-3.8 8.1-8.3 8.1-1.9 0-3.6-.6-5.1-1.8l-.5-.4c-1.6-1.4-2.6-3.4-2.7-5.6l-2.6.2c.2 2.7 1.4 5.2 3.3 7.1-1.6 2-3.9 3.1-6.5 3.1-3.2 0-6.1-1.8-7.5-4.7l-.8-1.6-1.3 1.3c-1.6 1.6-3.7 2.4-5.9 2.4-1 0-2-.2-2.9-.6 2.9-2 4.9-5.3 4.9-9.1 0-.3 0-.5-.1-.8 2-.4 4-1.3 5.5-2.7l-1.7-1.9c-1.2 1.1-2.7 1.8-4.3 2.1-.9-2.7-2.7-5-5.3-6.3l-1.2 2.3c2.8 1.5 4.5 4.3 4.5 7.4 0 3.6-2.3 6.7-5.5 7.8-.5.2-.9.3-1.4.4h-.1c-.5.1-.9.1-1.4.1-4.6 0-8.4-3.7-8.4-8.4 0-1.2.3-2.4.8-3.6l.4-.7-.5-.6C10 58.8 9.3 56.9 9.3 55c0-4 2.8-7.4 6.7-8.2l1-.2v-1c.1-2.8 1.6-5.2 3.8-6.6v2.5h2.6v-3.6c.6-.1 1.3-.2 1.9-.2 1 0 2 .2 2.9.5l.9.3.6-.8s0-.1.1-.1V44h2.6v-8.4c.8-.4 1.7-.6 2.6-.6 1.8 0 3.5.7 4.7 2-2.2 2.5-3.7 5.6-3.7 8.9 0 7.4 6.7 13.5 13.2 13.5v-2.6c-5.1 0-10.6-4.9-10.6-10.9 0-2.7 1.2-5.3 2.9-7.3l.7-.6c2.1-2 4.8-3 7.5-3 .7 0 1.3.1 2 .2v5c0 3.5-2.9 6.4-6.4 6.4H44v2.6h1.3c5 0 9-4 9-9V36c3.7 1.6 6.2 5.2 6.4 9.5z" />
    <path d="M59.4 50.4h3.9V53h-3.9zM65.9 26h3.9v2.6h-3.9zm-20 1.4l1.3-2.2c-.9-.5-1.7-1.3-2.3-2.2l-2.2 1.3c.8 1.2 1.9 2.3 3.2 3.1zm-4.5-7.8v.4l2.6-.3v-4h-2.6v3.9zm0-11.6H44v3.9h-2.6zm32.7 41.7l1.2 2.3c1.3-.7 2.4-1.8 3.3-3l-2.2-1.4c-.6.8-1.4 1.5-2.3 2.1zm3.3-5.7v.5l2.6.2v-4.5h-2.6V44zM58.2 26h3.9v2.6h-3.9zm21.5 6.7l-2.5.7c.1.5.2 1.1.2 1.7v1.3H80V35c0-.8-.1-1.6-.3-2.3zm-2.2-3.9c-1-1.1-2.3-1.9-3.8-2.4l-.8 2.4c1 .3 2 .9 2.7 1.7l1.9-1.7zM41.4 4.2H44l3.1 2.3 1.5-2.1L42.7 0l-5.9 4.4 1.6 2.1zM20.9 6.7h2.6v3.9h-2.6zm0 23.2h2.6v3.9h-2.6zm0-7.7h2.6v3.9h-2.6zm0 23.1h2.6v3.9h-2.6zm1.3-42.1l4.3 3.3 1.6-2.1L22.2 0l-5.9 4.4 1.5 2.1z" />
  </svg>
)

BrainStorm.propTypes = {
  fill: PropTypes.string,
}

export default BrainStorm
