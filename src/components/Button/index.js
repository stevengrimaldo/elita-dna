import { h } from 'preact'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { type } from '../../global/theme'

import { fontGen } from '../../global/utils'

import { genButton } from './utils'

const Container = styled.div`
  display: inline-block;
`

// prettier-ignore
const Text = styled.button`
  ${fontGen(type.button)}
  ${props => genButton(props)}
`

// prettier-ignore
const Link = Text.withComponent('a')

const Button = ({ className, data, onClick }) => {
  const isDownload = data.type === 'download'
  const target = isDownload || data.external ? '_blank' : data.target

  return (
    <Container className={className}>
      {data.path ? (
        <Link
          href={data.path}
          download={isDownload}
          target={target}
          type={data.type}>
          {data.text}
        </Link>
      ) : (
        <Text type={data.type} onClick={onClick}>
          {data.text}
        </Text>
      )}
    </Container>
  )
}

export const buttonData = {
  path: PropTypes.string,
  target: PropTypes.string,
  text: PropTypes.string,
  type: PropTypes.oneOf(['inline', 'download', 'resource', 'submit']),
}

Button.propTypes = {
  className: PropTypes.string,
  data: PropTypes.shape(buttonData),
  onClick: PropTypes.func,
}

export default Button
