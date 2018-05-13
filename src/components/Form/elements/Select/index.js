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

import selectIcon from '../../../../global/img/select-icon.png'

// prettier-ignore
const SelectMenu = styled.select`
  background-image: url(${selectIcon});
  background-position: 97% center;
  background-repeat: no-repeat;
  background-size: auto 12px;
  font-size: ${fontSize.body};
  font-weight: ${fontWeight.regular};
  font-family: ${fontFamily.openSans};
  background-color: ${color.white};
  border: 1px solid ${shadeOf(color.emperor, 0.3)};
  color: ${color.emperor};
  width: 100%;
  height: 45px;
  padding: 10px;

  ${props => props.invalid && `
    border-color: ${color.persimmon};
  `}

  &:focus {
    border-color: ${color.strikemaster};
  }
`

const Select = ({
  alignRight,
  autoComplete,
  label,
  name,
  onChange,
  options,
  order,
  required,
  size,
  valid,
}) => (
  <Wrapper alignRight={alignRight} order={order} size={size}>
    <Label htmlFor={name}>
      {label}
      {required && '*'}
    </Label>
    <SelectMenu
      autoComplete={autoComplete}
      name={name}
      required={required}
      invalid={!valid}
      onBlur={onChange}
      onChange={e => onChange(e)}>
      <option value="">Select a {label}</option>
      {options.map((option, i) => (
        <option key={i} value={option.value}>
          {option.label}
        </option>
      ))}
    </SelectMenu>
    {!valid && <Error>The {label} field is required.</Error>}
  </Wrapper>
)

export default Select
