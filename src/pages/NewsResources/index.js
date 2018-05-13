import { h } from 'preact'

import { Hero, News, Resources, Section } from '../../components'

// data
import { data } from './data'

const NewsResources = () => (
  <div class="components--news-resources">
    <Hero bgColor="orange" data={data.hero} slantBottom="right" />
    <Section>
      <Resources data={data.helpfulTools} />
    </Section>
    <Section bgColor="tan" slantTop="right">
      <News data={data.articles} />
    </Section>
  </div>
)

export default NewsResources
