import { h } from 'preact'
import PropTypes from 'prop-types'

const PeerGroup = ({ fill }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 76.6 73.6" fill={fill}>
    <path d="M38.3 16.8c3.1 0 5.5-2.6 5.5-5.5 0-3.1-2.4-5.5-5.5-5.5s-5.5 2.4-5.5 5.5c0 3 2.4 5.5 5.5 5.5zm0-8.2c1.5 0 2.4 1.1 2.4 2.4 0 1.3-1.1 2.4-2.4 2.4-1.3 0-2.4-1-2.4-2.4 0-1.2.9-2.4 2.4-2.4zM15.8 47.7c-3.1 0-5.5 2.4-5.5 5.5s2.4 5.5 5.5 5.5c2.9 0 5.5-2.4 5.5-5.5 0-3-2.4-5.5-5.5-5.5zm0 7.8c-1.3 0-2.4-1.1-2.4-2.4 0-1.3 1-2.4 2.4-2.4 1.3 0 2.4 1.1 2.4 2.4.1 1.3-.9 2.4-2.4 2.4z" />
    <path d="M60.8 42c-5.2 0-9.7 2.4-12.6 6.2l-8.5-7.7v-9c8-.8 14.3-7.6 14.3-15.7C54 7 47 0 38.2 0S22.4 7.2 22.4 15.8c0 8.3 6.4 15 14.3 15.7v8.9l-8.5 7.8c-2.9-3.7-7.4-6.1-12.5-6.1-8.8 0-15.8 7-15.8 15.8s7.2 15.8 15.8 15.8 15.8-7 15.8-15.8c0-2.5-.6-4.9-1.6-7l8.2-7.6 8.3 7.6c-1 2.1-1.6 4.5-1.6 7 0 8.8 7.2 15.8 15.8 15.8 8.8 0 15.8-7 15.8-15.8S69.6 42 60.8 42zM8.7 68.3c.8-2.5 3-4.2 5.7-4.2h2.9c2.6 0 4.9 1.7 5.7 4.2-2 1.4-4.5 2.2-7.1 2.2-2.7 0-5.2-.8-7.2-2.2zm16.7-2.1c-1.5-2.9-4.6-5-8.1-5h-2.9c-3.6 0-6.7 1.9-8.1 4.9-1.9-2.2-3.1-5.1-3.1-8.3 0-7 5.7-12.7 12.7-12.7 6.8 0 12.7 5.7 12.7 12.7-.1 3.2-1.3 6.2-3.2 8.4zm12.9-37.7c-2.6 0-5.1-.8-7.1-2.2.8-2.5 3-4.2 5.7-4.2h2.9c2.6 0 4.9 1.7 5.7 4.2a13 13 0 0 1-7.2 2.2zM25.6 15.8c0-7 5.7-12.7 12.7-12.7S51 8.8 51 15.8c0 3.2-1.2 6.1-3.2 8.4-1.5-2.9-4.6-5-8.1-5h-2.9c-3.6 0-6.7 1.9-8.1 4.9-1.9-2.2-3.1-5.1-3.1-8.3zm28.1 52.5c.8-2.5 3-4.2 5.7-4.2h2.9c2.6 0 4.9 1.7 5.7 4.2-2 1.4-4.5 2.2-7.1 2.2-2.7 0-5.2-.8-7.2-2.2zm16.6-2.1c-1.5-2.9-4.6-5-8.1-5h-2.9c-3.6 0-6.7 1.9-8.1 4.9-1.9-2.2-3.1-5.1-3.1-8.3 0-7 5.7-12.7 12.7-12.7s12.7 5.7 12.7 12.7c0 3.2-1.2 6.2-3.2 8.4z" />
    <path d="M60.8 47.7c-3.1 0-5.5 2.4-5.5 5.5s2.4 5.5 5.5 5.5 5.5-2.4 5.5-5.5c0-3-2.4-5.5-5.5-5.5zm0 7.8c-1.3 0-2.4-1.1-2.4-2.4 0-1.3 1-2.4 2.4-2.4 1.5 0 2.4 1.1 2.4 2.4 0 1.3-.9 2.4-2.4 2.4z" />
  </svg>
)

PeerGroup.propTypes = {
  fill: PropTypes.string,
}

export default PeerGroup