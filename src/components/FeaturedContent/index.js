import { h } from 'preact'
import PropTypes from 'prop-types'
import styled from 'preact-emotion'

import { Button, Icon } from '../'

import { buttonData } from '../Button'

import { Wysiwyg, MainHeadline } from '../../global/type'

import { media, parseContent } from '../../global/utils'

import { color } from '../../global/theme'

// prettier-ignore
const Container = styled.div`
  width: 100%;

  ${props => !props.full && `
    max-width: 675px;
    margin-left: auto;
    margin-right: auto;
  `}

  ${props => props.align && `
    text-align: ${props.align};
  `}
`

const FeaturedContentIcon = styled(Icon)`
  margin-bottom: 30px;
  max-width: 70px;
  max-height: 70px;
  display: inline-block;

  svg {
    fill: ${props => (props.inverted ? color.white : color.strikemaster)};
    width: 100%;
    height: 100%;
  }
`

const FeaturedContentImage = styled.img`
  max-width: 60%;
  display: inline-block;
  margin-bottom: 30px;
`

// prettier-ignore
const Text = styled(Wysiwyg)`
  ${props => props.full && `
    ul {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;

      li {
        flex-basis: calc(((1 / 3) * 100%) - 25px);
        display: inline-block;
        vertical-align: top;
        padding-left: calc((25 / 1440) * 100%);
      }
    }
  `}

  ul {
    li {
      margin-bottom: 15px;
      list-style-position: initial;
      list-style-type: none;
      text-indent: 0;
      position: relative;

      &::before {
        content: '';
        width: 8px;
        height: 8px;
        background-color: ${color.persimmon};
        border-radius: 50%;
        top: 8px;
        margin-left: -15px;
        position: absolute;
      }
    }
  }

  ${props => media.down.md`
    ${props.full ? `
      ul {
        li {
          flex-basis: calc(((1 / 2) * 100%) - 25px);
        }
      }
    ` : ``}
  `}

  ${props => media.down.xs`
    ${props.full ? `
      ul {
        li {
          flex-basis: calc(((2 / 2) * 100%) - 25px);
        }
      }
    ` : ``}
  `}
`

const Title = styled(MainHeadline)`
  margin-bottom: 20px;
`

const FeaturedContentButton = styled(Button)`
  margin-top: 30px;
  display: block;
`

const FeaturedContent = ({ align, data, full, inverted }) => (
  <Container align={align} full={full}>
    {data.icon && <FeaturedContentIcon inverted={inverted} Name={data.icon} />}
    {data.image && <FeaturedContentImage src={data.image} />}
    {data.title && (
      <Title
        dangerouslySetInnerHTML={parseContent(data.title)}
        inverted={inverted}
      />
    )}
    {data.text && (
      <Text
        align={align}
        dangerouslySetInnerHTML={parseContent(data.text)}
        full={full}
        inverted={inverted}
      />
    )}
    {data.links &&
      data.links.map((link, i) => (
        <FeaturedContentButton data={link} key={i} />
      ))}
  </Container>
)

FeaturedContent.propTypes = {
  align: PropTypes.oneOf(['left', 'right']),
  data: PropTypes.shape({
    icon: PropTypes.func,
    image: PropTypes.string,
    links: PropTypes.arrayOf(PropTypes.shape(buttonData)),
    text: PropTypes.string,
    title: PropTypes.string,
  }),
  full: PropTypes.bool,
  inverted: PropTypes.bool,
}

export default FeaturedContent
