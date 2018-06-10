import { h } from 'preact'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'

const Meta = ({ children, data }) => (
  <Helmet
    defaultTitle="Elite DNA Therapy"
    titleTemplate="%s | Elite DNA Therapy"
    title={data.title}
    meta={data.tags}>
    {data.keywords && (
      <meta name="keywords" content={data.keywords.join(', ')} />
    )}
    {data.description && <meta name="description" content={data.description} />}
    {data.title && <meta property="og:title" content={data.title} />}
    {data.description && (
      <meta property="og:description" content={data.description} />
    )}
    {children}
  </Helmet>
)

Meta.propTypes = {
  children: PropTypes.node,
  data: PropTypes.shape({
    description: PropTypes.string,
    keywords: PropTypes.arrayOf(PropTypes.string),
    tags: PropTypes.arrayOf(
      PropTypes.shape({
        content: PropTypes.string,
        property: PropTypes.string,
      })
    ),
    title: PropTypes.string,
  }),
}

export default Meta
