import { h } from 'preact'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Icon } from '../'

import { color } from '../../global/theme'

import { FeaturedText } from '../../global/type'

import { setWidth } from '../../global/utils'

import { DownloadArrow } from '../../global/icons'

const Container = styled.div`
  margin-left: -30px;
  margin-top: -30px;
  z-index: 4;
  white-space: nowrap;
  text-align: left;
`

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
  padding: 0 18%;
`

const Title = FeaturedText.extend`
  margin-bottom: 15px;
`

const Tool = styled.div`
  text-align: center;
  display: inline-block;
  position: relative;
  width: 100%;
  white-space: normal;
  vertical-align: top;

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
    transform: translate3d(0, -100px, 0);
    margin-right: ${setWidth(100)};
  }

  &:nth-child(3) {
    max-width: ${setWidth(380)};
    margin-right: ${setWidth(50)};
  }

  &:nth-child(4) {
    max-width: ${setWidth(350)};
    transform: translate3d(0, 200px, 0);
  }
`

const ToolIcon = styled(Icon)`
  width: 30px;
  height: 30px;

  svg {
    fill: ${color.white};
  }
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
