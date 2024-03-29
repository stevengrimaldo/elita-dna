import { h } from 'preact'
import PropTypes from 'prop-types'
import styled from 'preact-emotion'

import { Button, buttonData } from '../../'

import { MainHeadline, Wysiwyg } from '../../../global/type'

import { spacing } from '../../../global/theme'

import { media, parseContent } from '../../../global/utils'

const marginBottom = `margin-bottom: 30px;`

// prettier-ignore
const IntroTitle = styled(MainHeadline)`
  ${marginBottom}
`

// prettier-ignore
const IntroText = styled(Wysiwyg)`
  ${marginBottom}
`

// prettier-ignore
const Wrapper = styled.div`
  max-width: 750px;
  width: 100%;
  margin: auto;

  + div {
    margin-top: ${spacing.verticalPadding};
  }

  ${media.down.sm`
    + div {
      margin-top: ${spacing.verticalPaddingHalf};
    }
  `}
`

const Intro = ({ bgColor, data }) => (
  <Wrapper>
    {data.title && (
      <IntroTitle
        inverted={bgColor === 'orange'}
        dangerouslySetInnerHTML={parseContent(data.title)}
      />
    )}
    {data.text && (
      <IntroText
        inverted={bgColor === 'orange'}
        dangerouslySetInnerHTML={parseContent(data.text)}
      />
    )}
    {data.link && <Button data={data.link} />}
  </Wrapper>
)

export const introData = {
  link: PropTypes.shape(buttonData),
  text: PropTypes.string,
  title: PropTypes.string,
}

Intro.propTypes = {
  bgColor: PropTypes.oneOf(['white', 'orange', 'tan']),
  data: PropTypes.shape(introData),
}

export default Intro
