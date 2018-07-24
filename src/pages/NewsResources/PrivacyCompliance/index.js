import { h } from 'preact'

import { FeaturedContent, Hero, Section } from '../../../components'
import PageWrapper from '../../../global/template'

// data
import { data } from './data'
import { haveQuestions } from '../../../global/data'

const Forms = () => (
  <PageWrapper className="privacy" meta={data.meta}>
    <Hero bgColor="orange" data={data.hero} slantBottom="right" />
    <Section bgColor="white" slantBottom="left" slantTop="left">
      <FeaturedContent align="left" data={data.privacyPolicy} />
    </Section>
    <Section bgColor="tan" slantTop="right">
      <FeaturedContent data={haveQuestions} />
    </Section>
  </PageWrapper>
)

export default Forms
