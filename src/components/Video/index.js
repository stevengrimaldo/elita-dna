import { h } from 'preact'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { maintainRatio } from '../../global/utils'

// prettier-ignore
const Container = styled.div`
  max-width: 950px;
  margin: 0 auto;

  ${props => maintainRatio(16, 9)}
`

const Frame = styled.iframe`
  width: 100%;
`

const Video = ({ videoId }) => {
  const embedUrl = `//www.youtube.com/embed/${videoId}?rel=0&showinfo=0`

  return (
    <Container>
      <Frame src={embedUrl} allowFullScreen />
    </Container>
  )
}

// properties
Video.propTypes = {
  videoId: PropTypes.string,
}

export default Video
