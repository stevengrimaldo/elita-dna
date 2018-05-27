import { h } from 'preact'
import PropTypes from 'prop-types'
import styled from 'preact-emotion'

import { Icon } from '../'

import { color } from '../../global/theme'

import { FeaturedText } from '../../global/type'

import { media, setWidth } from '../../global/utils'

import { DownloadArrow } from '../../global/icons'

// prettier-ignore
const Container = styled.div`
  margin-left: -3vw;
  margin-top: -3vw;
  z-index: 4;
  white-space: nowrap;
  text-align: left;

  ${media.down.sm`
    white-space: normal;
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    justify-content: center;
    margin: 0;
  `}
`

// prettier-ignore
const Link = styled.a`
  background-color: ${color.persimmon};
  border-radius: 50%;
  color: ${color.white};
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  padding: 0 3vw;

  ${media.down.xxs`
    padding: 0 10vw;
  `}
`

// prettier-ignore
const Title = styled(FeaturedText)`
  margin-bottom: 1.5vw;
  font-size: 1.5vw;
  transition: all 200ms;

  ${media.down.sm`
    margin-bottom: 2.5vw;
    font-size: 3vw;
  `}

  ${media.down.xxs`
    margin-bottom: 5.5vw;
    font-size: 6vw;
  `}
`

// prettier-ignore
const Tool = styled.div`
  text-align: center;
  display: inline-block;
  position: relative;
  width: 100%;
  white-space: normal;
  vertical-align: top;
  transition: all 200ms;

  &::before {
    display: block;
    content: '';
    width: 100%;
    padding-top: 100%;
  }

  > * {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  &:nth-child(1) {
    max-width: ${setWidth(330)};
    margin-right: ${setWidth(90)};
  }

  &:nth-child(2) {
    max-width: ${setWidth(300)};
    transform: translate3d(0, -8vw, 0);
    margin-right: ${setWidth(100)};
  }

  &:nth-child(3) {
    max-width: ${setWidth(380)};
    margin-right: ${setWidth(50)};
  }

  &:nth-child(4) {
    max-width: ${setWidth(350)};
    transform: translate3d(0, 18vw, 0);
  }

  ${media.down.sm`
    flex: 0 1 40vw;
    margin: 4vw;

    &:nth-child(1),
    &:nth-child(2),
    &:nth-child(3),
    &:nth-child(4) {
      margin: 4vw;
      max-width: 65%;
      transform: none;
    }
  `}

  ${media.down.xxs`
    flex-basis: 100vw;
    margin: 3vw;

    &:nth-child(1),
    &:nth-child(2),
    &:nth-child(3),
    &:nth-child(4) {
      margin: 3vw;
    }
  `}
`

// prettier-ignore
const ToolIcon = styled(Icon)`
  width: 2.5vw;
  height: 2.5vw;
  transition: all 200ms;

  svg {
    fill: ${color.white};
  }

  ${media.down.sm`
    width: 5vw;
    height: 5vw;
  `}

  ${media.down.xxs`
    width: 10vw;
    height: 10vw;
  `}
`

const Tools = ({ data }) => (
  <Container>
    {data.map((tool, i) => (
      <Tool key={i}>
        <Link href={tool.link} target="_blank" download="" native>
          <Title inverted>{tool.title}</Title>
          <ToolIcon Name={DownloadArrow} />
        </Link>
      </Tool>
    ))}
  </Container>
)

Tools.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string,
      title: PropTypes.string,
    })
  ),
}

export default Tools
