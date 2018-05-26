import { h } from 'preact'
import PropTypes from 'prop-types'
import styled from 'preact-emotion'

import { Button } from '../'

import { FeaturedText, Headline } from '../../global/type'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Document = styled.div`
  flex: 0 1 415px;
  text-align: center;
  padding: 0 50px;
`

const DocumentdButton = styled(Button)`
  margin-top: 10px;
`

const Image = styled.div`
  margin-bottom: 25px;

  img {
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
