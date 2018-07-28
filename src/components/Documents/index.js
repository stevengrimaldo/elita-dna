import { h } from 'preact'
import PropTypes from 'prop-types'
import styled from 'preact-emotion'

import { Button } from '../'

import { color } from '../../global/theme'

import { FeaturedText, Headline } from '../../global/type'

import { media, shadeOf } from '../../global/utils'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`

// prettier-ignore
const Document = styled.div`
  flex: 1 1 ${1 / 3 * 100}%;
  max-width: 415px;
  text-align: center;
  padding: 30px;

  ${media.down.xs`
    flex-basis: 100%;
    margin: auto;
  `}
`

const DocumentdButton = styled(Button)`
  margin-top: 10px;
`

const Image = styled.div`
  margin-bottom: 25px;

  img {
    box-shadow: 0 0 8px 0px ${shadeOf(color.black, 0.3)};
    width: 100%;
  }
`

const Header = styled.div`
  text-align: left;
  margin-bottom: 50px;
`

const Documents = ({ data }) => (
  <div>
    {data.title && (
      <Header>
        <Headline>{data.title}</Headline>
      </Header>
    )}
    <Container>
      {data.documents.map((document, i) => (
        <Document>
          <Image>
            <img src={document.image} alt="" />
          </Image>
          <FeaturedText>{document.title}</FeaturedText>
          <DocumentdButton
            data={{ path: document.link, text: 'Download', type: 'download' }}
          />
        </Document>
      ))}
    </Container>
  </div>
)

Documents.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      documents: PropTypes.arrayOf(
        PropTypes.shape({
          image: PropTypes.string,
          link: PropTypes.string,
          title: PropTypes.string,
        })
      ),
      title: PropTypes.string,
    })
  ),
}

export default Documents
