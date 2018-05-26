import { h } from 'preact'
import styled from 'preact-emotion'
import PropTypes from 'prop-types'

import { BodyText } from '../../global/type'

import { color } from '../../global/theme'

const Container = styled.footer`
  background-color: ${color.strikemaster};
  padding: 20px 0;
  text-align: center;
  color: ${color.white};
`

const Footer = ({ year }) => (
  <Container>
    <BodyText inverted>
      &copy; {year} Elite DNA Therapy. All rights reserved.
    </BodyText>
  </Container>
)

Footer.propTypes = {
  year: PropTypes.string,
}

export default Footer
