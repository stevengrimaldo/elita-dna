import { h } from 'preact'
import PropTypes from 'prop-types'
import styled from 'preact-emotion'

import { CalloutText, Wysiwyg } from '../../global/type'

import { media, parseContent } from '../../global/utils'

import { fontFamily, fontWeight } from '../../global/theme'

// prettier-ignore
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  ${media.down.md`
    flex-direction: column;
  `}
`

// prettier-ignore
const ImageContainer = styled.div`
  border-radius: 50%;
  overflow: hidden;
  margin-right: 50px;
  flex: 0 1 385px;
  min-width: 200px;
  max-width: 385px;
  width: 100%;
  position: relative;

  &::before {
    display: block;
    content: '';
    width: 100%;
    padding-top: 100%;
  }

  ${media.down.md`
    flex-basis: auto;
    margin-right: 0;
    margin-bottom: 50px;
  `}
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

// prettier-ignore
const Content = styled.div`
  flex: 1 1 1195px;
  text-align: left;

  ${media.down.md`
    text-align: center;
    flex-basis: auto;
  `}
`

const Title = styled(CalloutText)`
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
