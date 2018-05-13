import { h, Component } from 'preact'
import styled from 'styled-components'

import { BodyText, Headline, SubHeadline } from '../../global/type'

import { fontWeight, fontFamily } from '../../global/theme'

import { Button } from '../'

import { Wrapper } from './elements'

const ContactInfo = Wrapper.extend`
  text-align: right;
  margin-top: 20px;
`

const Caption = styled.div`
  text-align: left;
`

const PhoneNumber = SubHeadline.extend`
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

const Title = Headline.extend`
  margin-bottom: 30px;
`

const ButtonWrapper = styled.div`
  text-align: left;
  margin-top: 30px;
  flex: 1 0 100%;
  width: 100%;
  clear: both;
`

class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: null,
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
    const isValid = Object.values(this.state.valid).every(v => v)
    const callback = this.props.submit.callback || null

    if (isValid) {
      if (callback) {
        e.preventDefault()

        callback(this.state.data)
      }
    } else {
      e.preventDefault()

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
            <Button data={{ text: props.submit.text, type: 'submit' }} />
          </ButtonWrapper>
        </FormWrapper>
      </div>
    )
  }
}

export default Form
