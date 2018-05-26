import { h } from 'preact'
import styled from 'preact-emotion'

import { shadeOf } from '../../../../global/utils'

import {
  color,
  fontSize,
  fontWeight,
  fontFamily,
} from '../../../../global/theme'

import { Error, Label, Wrapper } from '../'

// prettier-ignore
const Textarea = styled.textarea`
  font-size: ${fontSize.body};
  font-weight: ${fontWeight.regular};
  font-family: ${fontFamily.openSans};
  color: ${color.emperor};
  resize: none;
  width: 100%;
  height: 500px;
  background-color: ${color.white};
  border: 1px solid ${shadeOf(color.emperor, 0.3)};
  padding: 10px;

  ${props => props.invalid && `
    border-color: ${color.persimmon};
  `}

  &:focus {
    border-color: ${color.strikemaster};
  }

  &::placeholder {
    color: black;
  }
`

const TextArea = ({
  autoComplete,
  alignRight,
  label,
  name,
  onChange,
  order,
  placeholder,
  required,
  size,
  valid,
  value,
}) => (
  <Wrapper alignRight={alignRight} order={order} size={size}>
    <Label htmlFor={name}>
      {label}
      {required && '*'}
    </Label>
    <Textarea
      autoComplete={autoComplete}
      value={value}
      onBlur={onChange}
      onChange={e => onChange(e)}
      invalid={!valid}
      name={name}
      required={required}
      placeholder={placeholder}
    />
    {!valid && <Error>The {label} field is required.</Error>}
  </Wrapper>
)

TextArea.defaultProps = {
  valid: true,
}

export default TextArea
