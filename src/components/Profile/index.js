import { h } from 'preact'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { CalloutText, Wysiwyg } from '../../global/type'

import { parseContent } from '../../global/utils'

import { fontFamily, fontWeight } from '../../global/theme'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const ImageContainer = styled.div`
  border-radius: 50%;
  overflow: hidden;
  margin-right: 50px;
  flex: 1 1 385px;
  position: relative;

  &::before {
    display: block;
    content: '';
    width: 100%;
    padding-top: 100%;
  }
`

const Image = styled.img`
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  top: 0;
  left: 50%;
  transform: translate3d(-50%, 0, 0);
  position: absolute;
  object-fit: cover;
`

const Content = styled.div`
  flex: 1 1 1195px;
  text-align: left;
`

const Title = CalloutText.extend`
  margin-bottom: 20px;
  font-family: ${fontFamily.openSans};
  font-weight: ${fontWeight.bold};
`

const Profile = ({ data }) => (
  <Container>
    <ImageContainer>
      <Image src={data.image} alt="" />
    </ImageContainer>
    <Content>
      <Title>{data.title}</Title>
      <Wysiwyg dangerouslySetInnerHTML={parseContent(data.text)} />
    </Content>
  </Container>
)

Profile.propTypes = {
  image: PropTypes.string,
  text: PropTypes.string,
  title: PropTypes.string,
}

export default Profile
