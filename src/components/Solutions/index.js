import { h } from 'preact'
import PropTypes from 'prop-types'
import styled from 'preact-emotion'

import { Icon } from '../'

import { FeaturedText, Wysiwyg } from '../../global/type'

import { color } from '../../global/theme'

import { parseContent } from '../../global/utils'

const Container = styled.div`
  text-align: center;
`

const Solution = styled.div`
  display: inline-block;
  vertical-align: top;
  max-width: 320px;
  width: 100%;
  text-align: center;
  padding: 20px;

  &:last-child {
    margin-right: 0;
  }
`

const IconContainer = styled(Icon)`
  margin-bottom: 30px;
  max-width: 70px;
  max-height: 70px;
  display: inline-block;

  svg {
    fill: ${color.white};
    width: 100%;
    height: 100%;
  }
`

const Title = styled(FeaturedText)`
  margin-bottom: 15px;
`

const Solutions = ({ data, inverted }) => (
  <Container>
    {data.map((solution, i) => (
      <Solution key={i}>
        <IconContainer Name={solution.icon} />
        <Title
          dangerouslySetInnerHTML={parseContent(solution.title)}
          inverted={inverted}
        />
        <Wysiwyg
          dangerouslySetInnerHTML={parseContent(solution.text)}
          inverted={inverted}
        />
      </Solution>
    ))}
  </Container>
)

Solutions.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.func,
      text: PropTypes.string,
      title: PropTypes.string,
    })
  ),
  inverted: PropTypes.bool,
}

export default Solutions
