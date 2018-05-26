import { h } from 'preact'
import PropTypes from 'prop-types'
import styled from 'preact-emotion'

import Intro, { introData } from './Intro'

import { Container } from '../'

import { setImageAlignment, setSpacing } from './utils'

// prettier-ignore
const Wrapper = styled.section`
  width: 100%;
  position: relative;

  ${props => setSpacing(props)}
`

// prettier-ignore
const Image = styled.div`
  background-image: url(${props => props.image});
  position: absolute;
  background-repeat: no-repeat;
  width: 100%;
  z-index: -1;

  ${props => setImageAlignment(props)}
`

const Section = ({
  above,
  align,
  bgColor,
  children,
  className,
  image,
  intro,
  padding,
  slantBottom,
  slantTop,
  unContain,
}) => (
  <Wrapper
    above={above}
    align={align}
    className={className}
    bgColor={bgColor}
    image={image}
    padding={padding}
    slantBottom={slantBottom}
    slantTop={slantTop}>
    <Container unContain={unContain}>
      {intro && <Intro bgColor={bgColor} data={intro} />}
      {children}
    </Container>
    {image && (
      <Image
        align={align}
        bgColor={bgColor}
        image={image}
        slantBottom={slantBottom}
        slantTop={slantTop}
      />
    )}
  </Wrapper>
)

Section.propTypes = {
  above: PropTypes.bool,
  align: PropTypes.oneOf(['left', 'right']),
  bgColor: PropTypes.oneOf(['white', 'orange', 'tan']),
  children: PropTypes.node,
  className: PropTypes.string,
  image: PropTypes.string,
  intro: PropTypes.shape(introData),
  padding: PropTypes.oneOf([
    'half',
    'halfBottom',
    'halfTop',
    'none',
    'noBottom',
    'noTop',
  ]),
  slantBottom: PropTypes.oneOf(['left', 'right']),
  slantTop: PropTypes.oneOf(['left', 'right']),
  unContain: PropTypes.bool,
}

export default Section
