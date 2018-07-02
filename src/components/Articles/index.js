import { h, Component } from 'preact'
import PropTypes from 'prop-types'
import styled from 'preact-emotion'

import { Button } from '../'

import { BodyText, FeaturedText, Headline } from '../../global/type'

import { media } from '../../global/utils'

import { buttonData } from '../Button'

const ArticlesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`

// prettier-ignore
const Article = styled.div`
  max-width: 385px;
  flex: 1 1 ${1 / 3 * 100}%;
  text-align: center;
  padding: 30px;

  ${media.down.md`
    flex-basis: 50%;
    margin: auto;
  `}

  ${media.down.xs`
    flex-basis: 100%;
  `}
`

const ArticleButton = styled(Button)`
  margin-top: 10px;
`

const Source = styled(BodyText)`
  margin-bottom: 10px;
`

// prettier-ignore
const Image = styled.figure`
  margin-bottom: 40px;
  overflow: hidden;
  border-radius: 50%;
  position: relative;

  &::before {
    display: block;
    content: '';
    width: 100%;
    padding-top: 100%;
  }

  img {
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    position: absolute;
    object-fit: cover;
  }

  ${media.down.md`
    margin-bottom: 20px;
  `}
`

const Header = styled(Headline)`
  margin-bottom: 60px;
`

const LoadMoreButton = styled(Button)`
  margin-top: 60px;
`

class Articles extends Component {
  state = {
    offsetItemsShown: 6,
  }

  loadMore = () => {
    this.setState(state => ({
      offsetItemsShown: state.offsetItemsShown + 3,
    }))
  }

  render(props, state) {
    const hasMore = state.offsetItemsShown < props.data.length
    const news = hasMore
      ? props.data.slice(0, state.offsetItemsShown)
      : props.data

    return (
      <div>
        <Header>Noteworthy Articles</Header>
        <ArticlesWrapper>
          {news.map((article, i) => {
            Object.assign(article.link, { type: 'resource' })
            return (
              <Article key={i}>
                <Image>
                  <img src={article.image} alt="" />
                </Image>
                {article.source && <Source>Source: {article.source}</Source>}
                <FeaturedText>{article.title}</FeaturedText>
                <ArticleButton data={article.link} />
              </Article>
            )
          })}
        </ArticlesWrapper>
        {hasMore && (
          <LoadMoreButton
            data={{ text: 'Load More' }}
            onClick={this.loadMore}
          />
        )}
      </div>
    )
  }
}

Articles.propTypes = {
  date: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      link: PropTypes.shape(buttonData),
      source: PropTypes.string,
      title: PropTypes.string,
    })
  ),
}

export default Articles
