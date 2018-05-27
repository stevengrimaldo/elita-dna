import { h } from 'preact'
import styled from 'preact-emotion'
import PropTypes from 'prop-types'

import { BodyText } from '../../global/type'

import { media } from '../../global/utils'

import { color } from '../../global/theme'

const PrivacyPolicy = '/pdfs/privacy-policy.pdf'

const Container = styled.footer`
  background-color: ${color.strikemaster};
  padding: 20px 0;
  text-align: center;
  color: ${color.white};
`

// prettier-ignore
const FooterText = styled(BodyText)`
  a {
    text-decoration: underline;
  }

  ${media.down.xxs`
    font-size: 12px;
  `}
`

const Footer = ({ year }) => (
  <Container>
    <FooterText inverted>
      &copy; {year} Elite DNA Therapy. All rights reserved.{' '}
      <a href={PrivacyPolicy} download="" target="_blank" native>
        Privacy Policy
      </a>.
    </FooterText>
  </Container>
)

Footer.propTypes = {
  year: PropTypes.string,
}

export default Footer
