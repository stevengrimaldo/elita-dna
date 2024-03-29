import { h } from 'preact'
import PropTypes from 'prop-types'

const Pdf = ({ fill }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 58" fill={fill}>
    <path
      fill="#94607E"
      d="M44.4 12.2l-.8-.8L33.5 1.3l-.8-.8c-.4-.4-.8-.5-1.3-.6h-29C1.2-.1-.1.8-.1 2.8V56c.1 1 .9 1.7 1.8 1.9h41.5c1-.2 1.7-.9 1.8-1.9V14c.1-.7-.1-1.3-.6-1.8zm-3-.2H33V3.6l8.4 8.4zM2.5 56h-.2c-.2-.1-.3-.2-.3-.4V41h41v14.5c0 .2-.1.3-.3.4h-.2l-40 .1zM2 39V2.9c0-.2 0-.9.5-.9h28.6c0 .1-.1.3-.1.4V14h11.6c.1 0 .3 0 .4-.1v25L2 39zm13.5 5.7c-.3-.3-.7-.5-1.1-.6-.4-.1-.8-.2-1.3-.2h-2.9V54h1.6v-3.6H13c.5 0 1-.1 1.4-.2.4-.1.8-.4 1.1-.7s.6-.6.7-1c.2-.4.3-.9.3-1.4s-.1-.9-.3-1.3c-.1-.4-.3-.8-.7-1.1zm-.6 3.4c-.1.2-.2.5-.4.6s-.3.3-.5.3c-.2.1-.4.1-.6.1h-1.5v-4h1.2c.3 0 .7.1 1 .2.2.1.4.3.6.5l.3.6c0 .2.1.4.1.6 0 .4-.1.7-.2 1.1zm10.6-2.7c-.5-.5-1-.8-1.6-1.1-.7-.3-1.5-.4-2.2-.4h-3V54h4.4c.3 0 .6-.1.9-.2.3-.1.7-.3 1-.5.4-.3.7-.6.9-.9.3-.5.5-1 .7-1.5.2-.7.3-1.4.3-2.1 0-.6-.1-1.2-.3-1.8-.4-.6-.7-1.2-1.1-1.6zm-1.2 6.3c-.6.7-1.5 1.2-2.4 1.1h-1.6v-7.6h1c.7 0 1.3.1 1.9.3.4.2.8.5 1.2.8.3.3.5.7.6 1.1.1.4.2.8.2 1.2-.1 1.1-.4 2.2-.9 3.1zm4.8 2.3h1.7v-4.5H35v-1.1h-4.2v-3.2h4.6V44h-6.3v10zm2.8-31c-1.1 0-2.3.1-3.4.4-2-2.3-3.8-4.8-5.1-7.6 1.3-5.6.7-6.4.4-6.8-.3-.5-.7-.9-1.3-1-.3 0-.7.1-1 .2-.5.2-1 .7-1.1 1.2-.7 1.7.3 4.5 1.3 6.6-1 3.7-2.2 7.3-3.8 10.8-3.8 1.7-5.8 3.4-6 5.1-.1.9.4 1.8 1.1 2.2.3.2.6.3 1 .3.9 0 1.8-.7 2.8-2.1.9-1.3 1.7-2.8 2.4-4.3 2.8-1.2 5.8-2.2 8.8-2.8 1.6 1.5 3 2.3 4.2 2.3.9 0 1.7-.4 2.2-1.2.5-.6.7-1.4.4-2.2-.4-.8-1.3-1.1-2.9-1.1zM14 32.6c-.3-.1-.4-.4-.4-.7.1-.6.9-1.5 3.1-2.7-1.6 3-2.5 3.4-2.7 3.4zm8.2-22.9s1 1.1.1 3.2c-.8-.9-.9-2.2-.1-3.2zm-2 16c1-2.5 1.9-5 2.7-7.6 1.1 2 2.4 3.8 3.8 5.5-2.2.6-4.4 1.3-6.5 2.1zm12.9-.4c-.3.3-.8.5-1.2.4-.5 0-.7-.3-1.5-.9.6-.1 1.2-.1 1.8-.1.4-.1.8 0 1.2.2-.2.1-.2.2-.3.4z"
    />
  </svg>
)

Pdf.propTypes = {
  fill: PropTypes.string,
}

export default Pdf
