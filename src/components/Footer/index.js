import { h } from 'preact'
import styled from 'preact-emotion'
import PropTypes from 'prop-types'

import { BodyText } from '../../global/type'

import { media } from '../../global/utils'

import { color } from '../../global/theme'

const NoticeOfPrivacyPractices = '/pdfs/Notice-of-Privacy-Practices.pdf'

const Container = styled.footer`
  background-color: ${color.strikemaster};
  padding: 20px 0;
  text-align: center;
  color: ${color.white};
`

// prettier-ignore
const FooterText = styled(BodyText)`
  a {
    &:hover {
      text-decoration: underline;
    }
  }

  ${media.down.xxs`
    font-size: 12px;
  `}
`

const Footer = ({ year }) => (
  <Container>
    <FooterText inverted>
      &copy; {year} Elite DNA Therapy. All rights reserved.{' '}
      <strong>Compliance Hotline:</strong> 1-888-453-3114.
      <br />
      <a href={NoticeOfPrivacyPractices} download="" target="_blank" native>
        Notice of Privacy Practices
      </a>{' '}
      |{' '}
      <a href="mailto:compliance@elitednatherapy.com">
        Compliance@elitednatherapy.com
      </a>{' '}
      |{' '}
      <a href="mailto:privacy@elitednatherapy.com">
        Privacy@elitednatherapy.com
      </a>
    </FooterText>
  </Container>
)

Footer.propTypes = {
  year: PropTypes.string,
}

export default Footer
