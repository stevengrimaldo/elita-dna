import { h, Component } from 'preact'
import PropTypes from 'prop-types'
import styled from 'preact-emotion'

import { Button } from '../'

import { BodyText, FeaturedText, Headline } from '../../global/type'

import { buttonData } from '../Button'

const Articles = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`

const Article = styled.div`
  max-width: 385px;
  flex: 1 1 auto;
  text-align: center;
  padding: 30px;
`

const ArticleButton = styled(Button)`
  margin-top: 10px;
`

const Source = styled(BodyText)`
  margin-bottom: 10px;
`

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
`

const Header = styled(Headline)`
  margin-bottom: 60px;
`

const LoadMoreButton = styled(Button)`
  margin-top: 60px;
`

class News extends Component {
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
        <Articles>
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
        </Articles>
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

News.propTypes = {
  date: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      link: PropTypes.shape(buttonData),
      source: PropTypes.string,
      title: PropTypes.string,
    })
  ),
}

export default News
