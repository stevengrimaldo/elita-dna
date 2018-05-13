import { h } from 'preact'
import PropTypes from 'prop-types'

import Meta from './meta'

const PageWrapper = ({ children, className, meta }) => (
  <div className={`components--${className}`}>
    {meta && <Meta data={meta} />}
    {children}
  </div>
)

PageWrapper.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  meta: PropTypes.shape({
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

export default PageWrapper
