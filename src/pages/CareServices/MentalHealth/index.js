import { h } from 'preact'

import { Documents, FeaturedContent, Hero, Section } from '../../../components'
import PageWrapper from '../../../global/template'

// data
import { data } from './data'
import { haveQuestions } from '../../../global/data'

const MentalHealth = () => (
  <PageWrapper className="mental-health" meta={data.meta}>
    <Hero data={data.hero} />
    <Section bgColor="orange" slantBottom="right" slantTop="right">
      <FeaturedContent data={data.counselingPsychiatry} inverted />
    </Section>
    <Section bgColor="white" slantTop="left">
      <FeaturedContent align="left" data={data.commonTreatmentIssues} full />
    </Section>
    <Section bgColor="white" slantBottom="left">
      <Documents data={data.clientIntakeForms} />
    </Section>
    <Section bgColor="tan" slantTop="right">
      <FeaturedContent data={haveQuestions} />
    </Section>
  </PageWrapper>
)

export default MentalHealth
