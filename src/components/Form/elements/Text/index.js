import { h } from 'preact'
import styled from 'styled-components'

import { shadeOf } from '../../../../global/utils'

import {
  color,
  fontSize,
  fontWeight,
  fontFamily,
} from '../../../../global/theme'

import { Error, Label, Wrapper } from '../'

// prettier-ignore
const Input = styled.input`
  font-size: ${fontSize.body};
  font-weight: ${fontWeight.regular};
  font-family: ${fontFamily.openSans};
  color: ${color.emperor};
  width: 100%;
  height: 45px;
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

const Text = ({
  autoComplete,
  alignRight,
  label,
  name,
  onChange,
  order,
  pattern,
  placeholder,
  required,
  size,
  type,
  valid,
  value,
}) => (
  <Wrapper alignRight={alignRight} order={order} size={size}>
    <Label htmlFor={name}>
      {label}
      {required && '*'}
    </Label>
    <Input
      autoComplete={autoComplete}
      invalid={!valid}
      onBlur={onChange}
      onChange={e => onChange(e)}
      pattern={pattern}
      placeholder={placeholder}
      type={type}
      value={value}
      required={required}
      name={name}
    />
    {!valid && <Error>The {label} field is required.</Error>}
  </Wrapper>
)

Text.defaultProps = {
  type: 'text',
  valid: true,
}

export default Text
