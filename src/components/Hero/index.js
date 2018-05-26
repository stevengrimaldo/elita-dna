import { h } from 'preact'
import PropTypes from 'prop-types'
import styled from 'preact-emotion'

import { buttonData } from '../Button'

import { Button, Container } from '../'

import { color } from '../../global/theme'

import { CalloutText, PageTitle, Wysiwyg } from '../../global/type'

import { parseContent } from '../../global/utils'

import { addSlant } from './utils'

// prettier-ignore
const Wrapper = styled.section`
  ${props => addSlant(props)}
`

const Content = styled.div`
  text-align: center;
  width: 100%;
  max-width: 750px;
  margin: 0 auto;
  color: ${color.emperor};
`

const Image = styled.div`
  background-image: url(${props => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
`

const SubTitle = styled(CalloutText)`
  margin-bottom: 15px;
`

const HeroButton = styled.div`
  margin-top: 30px;
`

const Text = styled(Wysiwyg)`
  margin-top: 15px;
`

const Hero = ({ above, bgColor, data, slantBottom }) => (
  <Wrapper
    above={above}
    bgColor={bgColor}
    image={data.image}
    unContain
    slantBottom={slantBottom}>
    {data.copy && (
      <Container>
        <Content>
          {data.copy.subTitle && (
            <SubTitle
              inverted={bgColor === 'orange'}
              dangerouslySetInnerHTML={parseContent(data.copy.subTitle)}
            />
          )}
          {data.copy.title && (
            <PageTitle
              inverted={bgColor === 'orange'}
              dangerouslySetInnerHTML={parseContent(data.copy.title)}
            />
          )}
          {data.copy.text && (
            <Text
              inverted={bgColor === 'orange'}
              dangerouslySetInnerHTML={parseContent(data.copy.text)}
            />
          )}
          {data.copy.links &&
            data.copy.links.map((link, i) => (
              <HeroButton key={i}>
                <Button data={link} />
              </HeroButton>
            ))}
        </Content>
      </Container>
    )}
    {data.image && <Image image={data.image} />}
  </Wrapper>
)

Hero.propTypes = {
  above: PropTypes.bool,
  bgColor: PropTypes.oneOf(['white', 'orange', 'tan']),
  data: PropTypes.shape({
    copy: PropTypes.shape({
      links: PropTypes.arrayOf(PropTypes.shape(buttonData)),
      subTitle: PropTypes.string,
      text: PropTypes.string,
      title: PropTypes.string,
    }),
    image: PropTypes.string,
  }),
  slantBottom: PropTypes.oneOf(['left', 'right']),
}

export default Hero
