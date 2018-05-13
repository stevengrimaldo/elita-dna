import { h } from 'preact'

import { FeaturedContent, Hero, Section } from '../../../components'
import PageWrapper from '../../../global/template'

// data
import { data } from './data'
import { haveQuestions } from '../../../global/data'

const Teletherapy = () => (
  <PageWrapper className="teletherapy" meta={data.meta}>
    <Hero bgColor="orange" data={data.hero} slantBottom="right" />
    <Section>
      <FeaturedContent data={data.whatIsTeletherapy} />
    </Section>
    <Section bgColor="tan" slantTop="right">
      <FeaturedContent data={haveQuestions} />
    </Section>
  </PageWrapper>
)

export default Teletherapy
