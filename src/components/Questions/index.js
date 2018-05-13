import { h, Component } from 'preact'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Container } from '../'

import { color } from '../../global/theme'

import { shadeOf, parseContent } from '../../global/utils'

import { FeaturedText, MainHeadline, Wysiwyg } from '../../global/type'

const Wrapper = styled.div`
  background-color: ${color.white};
  text-align: left;
`

const Question = styled.article`
  border-bottom: 1px solid ${shadeOf(color.emperor, 0.4)};
`

// prettier-ignore
const Title = styled.div`
  position: relative;
  cursor: pointer;
  padding: 40px 0;

  &::before,
  &::after {
    content: '';
    border-radius: 100px;
    position: absolute;
    right: 0;
    background-color: ${color.persimmon};
    top: 50%;
    transform: translateY(-50%);
  }

  &::before {
    width: 30px;
    height: 2px;
    top: 50%;
  }

  &::after {
    width: 2px;
    right: 15px;
    transition-duration: 300ms;
    transition-propery: height;
    transition-timing-function: ease-in;
  }

  ${props => props.active ? `
    &::after {
      height: 0;
    }
  ` : `
    &::after {
      height: 30px;
    }
  `}
`

// prettier-ignore
const Answer = Wysiwyg.extend`
  padding-bottom: 40px;
  padding-right: 40px;
  transition-duration: 300ms;
  transition-property: height;
  transition-timing-function: ease-in;

  ${props => props.active ? `
    height: auto;
    opacity: 1;
    display: block;
  ` : `
    height: 0;
    opacity: 0;
    display: none;
  `}
`

const Header = styled.div`
  padding: 40px 0;
  text-align: center;
`

class Questions extends Component {
  state = {
    activeQuestion: 0,
  }

  openQuestion = i => {
    this.setState({ activeQuestion: i })
  }

  render(props, state) {
    return (
      <div>
        <Header>
          <MainHeadline inverted={props.inverted}>
            {props.data.title}
          </MainHeadline>
        </Header>
        <Wrapper>
          {props.data.questions.map((question, i) => (
            <Question key={i}>
              <Container>
                <Title
                  active={this.state.activeQuestion === i}
                  onClick={() => this.openQuestion(i)}>
                  <FeaturedText>{question.title}</FeaturedText>
                </Title>
                <Answer
                  active={this.state.activeQuestion === i}
                  dangerouslySetInnerHTML={parseContent(question.text)}
                />
              </Container>
            </Question>
          ))}
        </Wrapper>
      </div>
    )
  }
}

Questions.propTypes = {
  data: PropTypes.shape({
    questions: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string,
        title: PropTypes.string,
      })
    ),
    title: PropTypes.string,
  }),
  inverted: PropTypes.bool,
}

export default Questions
