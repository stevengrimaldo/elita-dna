import { h } from 'preact'
import PropTypes from 'prop-types'
import styled from 'preact-emotion'

import { Button, Icon } from '../'

import { FeaturedText, Headline, Wysiwyg } from '../../global/type'

import { baseSize, color } from '../../global/theme'

import { media, parseContent } from '../../global/utils'

import { buttonData } from '../Button'

// prettier-ignore
const Resource = styled.div`
  margin-bottom: 40px;
  text-align: left;
  display: flex;

  &:last-child {
    margin-bottom: 0;
  }

  ${media.down.xxs`
    flex-direction: column;
    text-align: center;
  `}
`

// prettier-ignore
const ResourceIcon = styled(Icon)`
  margin-right: ${70 / baseSize * 100}%;
  flex: 1 0 50px;
  max-width: 100px;
  width: 100%;

  svg {
    fill: ${color.strikemaster};
  }

  ${media.down.xxs`
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 30px;
  `}
`

// prettier-ignore
const Copy = styled.div`
  flex: 1 1 100%;
  vertical-align: top;

  ${media.down.xxs`
    flex-basis: auto;
  `}
`

const Title = styled(FeaturedText)`
  margin-bottom: 5px;
`

const ResourceButton = styled(Button)`
  margin-top: 15px;
`

const Header = styled(Headline)`
  margin-bottom: 50px;
`

const Resources = ({ data, inverted }) => (
  <div>
    {data.title && <Header>{data.title}</Header>}
    {data.resources.map((resource, i) => (
      <Resource key={i}>
        {resource.icon && <ResourceIcon Name={resource.icon} />}
        {resource.copy && (
          <Copy>
            {resource.copy.title && (
              <Title
                dangerouslySetInnerHTML={parseContent(resource.copy.title)}
                inverted={inverted}
              />
            )}
            {resource.copy.text && (
              <Wysiwyg
                align="left"
                dangerouslySetInnerHTML={parseContent(resource.copy.text)}
                inverted={inverted}
              />
            )}
            {resource.copy.link && <ResourceButton data={resource.copy.link} />}
          </Copy>
        )}
      </Resource>
    ))}
  </div>
)

Resources.propTypes = {
  data: {
    resources: PropTypes.arrayOf(
      PropTypes.shape({
        copy: PropTypes.shape({
          link: PropTypes.shape(buttonData),
          text: PropTypes.string,
          title: PropTypes.string,
        }),
        icon: PropTypes.func,
      })
    ),
    title: PropTypes.string,
  },
  inverted: PropTypes.bool,
}

export default Resources
