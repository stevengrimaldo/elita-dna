import { h } from 'preact'

const DirectionsLink = ({ address }) => {
  const link = `https://www.google.com/maps/dir//${encodeURIComponent(
    address
  )}/`
  return (
    <a href={link} target="_blank" native>
      Get Directions
    </a>
  )
}

export default DirectionsLink
