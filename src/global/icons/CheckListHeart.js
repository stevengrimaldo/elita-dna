import { h } from 'preact'
import PropTypes from 'prop-types'

const CheckListHeart = ({ fill }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 73.2 80" fill={fill}>
    <path d="M73.1 57.9c-.5-5.6-4.8-9.7-10-9.7-3.3 0-6.1 2-7.9 4.4-1.8-2.5-4.6-4.4-7.9-4.4-5.3 0-9.5 4.1-10 9.7-.2 1.3 0 2.6.3 3.7.8 3.1 2.6 5.9 5 7.9l11.6 9.9c.3.3.7.4 1 .4.4 0 .8-.2 1.1-.4l11.6-9.8c2.5-2 4.3-4.9 5-7.9.3-1.4.4-2.6.2-3.8zm-3 3c-.7 2.6-2.1 4.9-4.2 6.6l-10.8 9.2-10.8-9.2c-2-1.7-3.5-4-4.2-6.6-.3-.9-.3-1.7-.3-2.6v-.2c.3-3.6 3-7.2 7.3-7.2 3.1 0 5.5 2.5 6.6 4.9l1.3 2.8 1.3-2.8c1.1-2.5 3.6-4.9 6.6-4.9 4.3 0 7 3.7 7.3 7.4.3.8.2 1.8-.1 2.6zm-60.6-36h18c.8 0 1.4-.6 1.4-1.4s-.6-1.4-1.4-1.4H9.4c-.8 0-1.4.6-1.4 1.4 0 .7.6 1.4 1.5 1.4zm0 38.5c-.8 0-1.4.6-1.4 1.4s.6 1.4 1.4 1.4h15.2c.8 0 1.4-.6 1.4-1.4s-.6-1.4-1.4-1.4H9.5zm40.1-33H9.4c-.8 0-1.4.6-1.4 1.4s.6 1.4 1.4 1.4h40.2c.8 0 1.4-.6 1.4-1.4.1-.8-.5-1.4-1.4-1.4.1 0 .1 0 0 0zM34.4 48.3c0-.8-.6-1.4-1.4-1.4H9.4c-.8 0-1.4.6-1.4 1.4 0 .8.6 1.4 1.4 1.4h23.7c.7-.1 1.3-.7 1.3-1.4zm-4.2 8.2c0-.8-.6-1.4-1.4-1.4H9.4c-.8 0-1.4.6-1.4 1.4 0 .8.6 1.4 1.4 1.4h19.5c.7.1 1.3-.6 1.3-1.4zM9.5 41.4h19.4c.8 0 1.4-.6 1.4-1.4s-.6-1.4-1.4-1.4H9.5c-.8 0-1.4.6-1.4 1.4 0 .8.6 1.4 1.4 1.4zm40.1-2.8h-9.7c-.8 0-1.4.6-1.4 1.4 0 .8.6 1.4 1.4 1.4h9.7c.8 0 1.4-.6 1.4-1.4.1-.8-.6-1.4-1.4-1.4zM35.7 40c0-.3-.2-.7-.4-1-.5-.5-1.4-.5-2 0-.5.5-.6 1.4 0 2 .3.3.6.4.9.4 1 0 1.5-.6 1.5-1.4zm3.1 37.3h-36V11.1h9.7v2.7c0 .8.6 1.4 1.4 1.4h31.8c.8 0 1.4-.6 1.4-1.4v-2.7h9.7V40c0 .8.7 1.4 1.4 1.4.8 0 1.4-.6 1.4-1.4V9.6c0-.8-.6-1.4-1.4-1.4H47.1V5.5c0-.8-.6-1.4-1.4-1.4h-8.3V1.4C37.4.6 36.8 0 36 0H23.5c-.8 0-1.4.6-1.4 1.4v2.7h-8.3c-.8 0-1.4.6-1.4 1.4v2.7H1.3c-.8.1-1.4.7-1.4 1.4v68.9c0 .9.6 1.4 1.4 1.4h37.4c.8 0 1.4-.6 1.4-1.4 0-.6-.5-1.2-1.3-1.2zM24.9 2.7h9.7v5.5h-9.7V2.7zm-9.7 4.2h6.9v2.7c0 .8.6 1.4 1.4 1.4h12.4c.8 0 1.4-.6 1.4-1.4V6.9h6.9v5.5H15.3l-.1-5.5z" />
  </svg>
)

CheckListHeart.propTypes = {
  fill: PropTypes.string,
}

export default CheckListHeart
