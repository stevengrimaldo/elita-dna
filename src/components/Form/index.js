import { h, Component } from 'preact'
import styled from 'preact-emotion'

import {
  BodyText,
  FeaturedText,
  Headline,
  SubHeadline,
} from '../../global/type'

import { media } from '../../global/utils'

import { fontWeight, fontFamily } from '../../global/theme'

import { Button } from '../'

import { Wrapper } from './elements'

// prettier-ignore
const ContactInfo = styled(Wrapper)`
  text-align: right;
  margin-top: 20px;

  ${media.down.md`
    text-align: left;
  `}
`

const Caption = styled.div`
  text-align: left;
`

const PhoneNumber = styled(SubHeadline)`
  font-weight: ${fontWeight.regular};
  font-family: ${fontFamily.openSans};
`

const FormWrapper = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const Header = styled.div`
  margin-bottom: 30px;
  padding: 0 10px;
`

const Title = styled(Headline)`
  margin-bottom: 30px;
`

const ButtonWrapper = styled.div`
  text-align: left;
  margin-top: 30px;
  flex: 1 0 100%;
  width: 100%;
  clear: both;
`

const Loader = styled.div`
  display: inline-block;
  margin-left: 20px;
`

class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: null,
      loading: false,
      loadingText: 'Sending...',
      touched: null,
      valid: null,
    }

    props.elements.forEach((element, i) => {
      this.setState(state => ({
        data: {
          ...state.data,
          [element.name]: '',
        },
        touched: {
          ...state.touched,
          [element.name]: false,
        },
        valid: {
          ...state.valid,
          [element.name]: false,
        },
      }))
    })
  }

  handleSubmit = e => {
    e.preventDefault()

    const isValid = Object.values(this.state.valid).every(v => v)
    const callback = this.props.submit.callback || null

    if (isValid) {
      if (callback) {
        this.setState(
          { loading: true },
          callback(this.state.data, () => {
            this.setState(
              {
                loadingText: 'Sent!',
              },
              () => {
                setTimeout(() => {
                  this.setState({ loading: false })
                }, 2000)
              }
            )
          })
        )
      }
    } else {
      this.setState(state => ({
        touched: Object.keys(state.touched).reduce(
          (total, k) => ({ ...total, [k]: true }),
          {}
        ),
      }))
    }
  }

  onChange = e => {
    const { name, value } = e.currentTarget

    this.setState(state => ({
      data: {
        ...state.data,
        [name]: value,
      },
      touched: {
        ...state.touched,
        [name]: true,
      },
      valid: {
        ...state.valid,
        [name]: value && value.length > 0,
      },
    }))
  }

  render(props, state) {
    const elementCount = props.elements.length
    const elements = props.elements.map((element, i) => {
      const Element = element.type
      const order = element.orderLast ? elementCount : i
      const isValid = !element.required
        ? true
        : state.valid[element.name] || !state.touched[element.name]

      return (
        <Element
          alignRight={element.alignRight}
          autoComplete={element.name}
          key={i}
          label={element.label}
          name={element.name}
          onChange={this.onChange}
          options={element.options}
          order={order}
          placeholder={element.placeholder}
          required={element.required}
          size={element.size}
          type={element.textType}
          valid={isValid}
          value={state.data[element.name]}
          {...element.props}
        />
      )
    })

    return (
      <div>
        {props.intro && (
          <Header>
            {props.intro.title && <Title>{props.intro.title}</Title>}
            {props.intro.text && (
              <Caption>
                <BodyText>{props.intro.text}</BodyText>
              </Caption>
            )}
          </Header>
        )}
        <FormWrapper
          action={props.action}
          method={props.method}
          noValidate
          onSubmit={this.handleSubmit}>
          {elements}
          <ContactInfo>
            <PhoneNumber>P: (239) 223-2751</PhoneNumber>
            <br />
            <PhoneNumber>F: (239) 561-2933</PhoneNumber>
            <br />
            <BodyText>
              <a href="mailto:intake@elitednatherapy.com">
                intake@elitednatherapy.com
              </a>
            </BodyText>
          </ContactInfo>
          <ButtonWrapper>
            {state.loading ? (
              <Loader>
                <FeaturedText>{state.loadingText}</FeaturedText>
              </Loader>
            ) : (
              <Button data={{ text: props.submit.text, type: 'submit' }} />
            )}
          </ButtonWrapper>
        </FormWrapper>
      </div>
    )
  }
}

export default Form
