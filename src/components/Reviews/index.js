import { h, Component } from 'preact'
import Slider from 'react-slick'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Icon } from '../'

import { ChatBubble } from '../../global/icons'

import { convertLh, fontGen, setWidth, toEms } from '../../global/utils'

import {
  color,
  fontFamily,
  fontWeight,
  spacing,
  type,
} from '../../global/theme'

import { FeaturedText, MainHeadline } from '../../global/type'

const Container = styled.div`
  .slick {
    &-slider {
      position: relative;
      display: block;
      box-sizing: border-box;
      -webkit-touch-callout: none;
      user-select: none;
      touch-action: pan-y;
      -webkit-tap-highlight-color: transparent;
    }

    &-list {
      position: relative;
      overflow: hidden;
      display: block;
      margin: 0;
      padding: 0;
      transform: translate3d(0, 0, 0);
    }

    &-track {
      position: relative;
      left: 0;
      top: 0;
      display: block;
      transform: translate3d(0, 0, 0);

      &::before,
      &::after {
        content: '';
        display: table;
      }
    }

    &-slide {
      float: left;
      height: auto;
      min-height: 1px;
      display: none;
    }

    &-initialized {
      .slick-slide {
        display: block;
      }
    }

    &-arrow {
      position: absolute;
      top: 50%;
      transform: translateY(-100%);
      font-size: 0;
      height: 60px;
      width: 28px;
      cursor: pointer;
      z-index: 10;

      &::before,
      &::after {
        content: '';
        width: 2px;
        height: 30px;
        background-color: ${color.persimmon};
        position: absolute;
        border-radius: 100px;
      }

      &::before {
        bottom: 25px;
        right: 13px;
        transform: rotate(45deg);
        left: auto;
        top: auto;
      }

      &::after {
        transform: rotate(-45deg);
        bottom: auto;
        right: 13px;
        left: auto;
        top: 25px;
      }
    }

    &-prev {
      left: 5.5555555556%;
    }

    &-next {
      right: 5.5555555556%;
      transform: translateY(-100%) rotate(180deg);
    }

    &-dots {
      display: inline-block;
      font-size: 0;
      margin-top: 60px;

      li {
        display: inline-block;
        vertical-align: top;
        margin: 0 15px;
        font-size: 0;

        button {
          background-color: transparent;
          height: 15px;
          width: 15px;
          border-radius: 30px;
          border: 1px solid ${color.persimmon};
          cursor: pointer;
          transition: background-color 250ms;
        }

        &:hover,
        &.slick-active {
          button {
            background-color: ${color.persimmon};
          }
        }
      }
    }
  }
`

const Author = FeaturedText.extend`
  font-size: ${toEms('22px')};
  font-weight: ${fontWeight.bold};
`

const Review = styled.div`
  width: 100%;
  flex: 1 1 auto;
`

const Quote = styled.blockquote`
  max-width: calc(1060px + 5.555555555555555% * 2);
  width: 100%;
  font-family: ${fontFamily.museoSlab};
  font-size: ${toEms('26px')};
  line-height: ${convertLh('36px', '26px')};
  font-weight: ${fontWeight.light};
  margin: 0 auto;
  quotes: '“' '”' '‘' '’';
  padding-left: ${setWidth(spacing.horizontalPadding)};
  padding-right: ${setWidth(spacing.horizontalPadding)};

  &::before {
    content: open-quote;
  }

  &::after {
    content: close-quote;
  }
`

// prettier-ignore
const Time = styled.time`
  ${fontGen(type.body)}

  margin-top: 10px;
`

const Signature = styled.div`
  margin-top: 30px;
  width: 100%;
`

const Intro = styled.div`
  margin-bottom: 40px;
`

const IntroIcon = styled(Icon)`
  margin-bottom: 20px;
  display: inline-block;
  vertical-align: top;
  width: 70px;
  height: 70px;

  svg {
    fill: ${color.strikemaster};
  }
`

class Reviews extends Component {
  sliding = 0
  startClientX = 0
  startPixelOffset = 0
  pixelOffset = 0
  currentSlide = 0
  slideNr = 0
  slideCount = 0

  state = {
    pixelOffset: 0,
    release: false,
  }

  componentDidMount() {
    this.windowWidth = window.innerWidth
    this.slideCount = this.props.data.length
    this.containerWidth = this.windowWidth * this.slideCount
  }

  mouseDown = e => {
    if (this.sliding === 0) {
      this.sliding = 1
      this.startClientX = e.clientX
    }

    this.setState({ release: false })
  }

  mouseLeave = () => {
    this.mouseUp()
  }

  mouseMove = e => {
    e.preventDefault()

    const deltaSlide = e.clientX - this.startClientX

    if (this.sliding === 1 && this.deltaSlide !== 0) {
      this.sliding = 2
      this.startPixelOffset = this.state.pixelOffset
    }

    if (this.sliding === 2) {
      let touchPixelRatio = 1

      if (
        (this.currentSlide === 0 && e.clientX > this.startClientX) ||
        (this.currentSlide === this.slideCount - 1 &&
          e.clientX < this.startClientX)
      ) {
        touchPixelRatio = 3
      }

      this.setState({
        pixelOffset: this.startPixelOffset + deltaSlide / touchPixelRatio,
      })
    }
  }

  mouseUp = () => {
    if (this.sliding === 2) {
      const oldPixelOffset = this.state.pixelOffset

      this.sliding = 0
      this.currentSlide =
        this.state.pixelOffset < this.startPixelOffset
          ? this.currentSlide + 1
          : this.currentSlide - 1
      this.currentSlide = Math.min(
        Math.max(this.currentSlide, 0),
        this.slideCount - 1
      )

      this.setState(
        {
          pixelOffset: this.currentSlide * -this.windowWidth,
          release: true,
        },
        () => {
          if (this.state.pixelOffset < oldPixelOffset) {
            this.slideNr += 1
          } else if (this.state.pixelOffset > oldPixelOffset) {
            this.slideNr -= 1
          }
        }
      )
    }
  }

  render(props, state) {
    const settings = {
      adaptiveHeight: true,
      dots: true,
    }

    return (
      <div>
        <Intro>
          <IntroIcon Name={ChatBubble} />
          <MainHeadline>Featured Reviews</MainHeadline>
        </Intro>
        <Container>
          <Slider {...settings}>
            {props.data.map((review, i) => (
              <Review key={i}>
                <Quote>{review.text}</Quote>
                <Signature>
                  <Author>{review.author}</Author>
                  <Time>{review.date}</Time>
                </Signature>
              </Review>
            ))}
          </Slider>
        </Container>
      </div>
    )
  }
}

Reviews.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string,
      date: PropTypes.string,
      text: PropTypes.string,
    })
  ),
}

export default Reviews