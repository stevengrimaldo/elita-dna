import { h } from 'preact'

import { Hero, News, Resources, Section } from '../../components'
import PageWrapper from '../../global/template'

// data
import { data } from './data'

const NewsResources = () => (
  <PageWrapper className="news-resources" meta={data.meta}>
    <Hero bgColor="orange" data={data.hero} slantBottom="right" />
    <Section>
      <Resources data={data.helpfulTools} />
    </Section>
    <Section bgColor="tan" slantTop="right">
      <News data={data.articles} />
    </Section>
  </PageWrapper>
)

export default NewsResources
