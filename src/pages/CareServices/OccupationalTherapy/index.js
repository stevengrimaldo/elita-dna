import { h } from 'preact'

import { Documents, FeaturedContent, Hero, Section } from '../../../components'
import PageWrapper from '../../../global/template'

// data
import { data } from './data'
import { haveQuestions } from '../../../global/data'

const OccupationalTherapy = () => (
  <PageWrapper className="occupational-therapy" meta={data.meta}>
    <Hero data={data.hero} slantBottom="left" />
    <Section bgColor="orange" slantBottom="right" slantTop="right">
      <FeaturedContent data={data.enjoyLife} inverted />
    </Section>
    <Section align="left">
      <FeaturedContent data={data.servicesAndSpecialties} full />
    </Section>
    <Section>
      <Documents data={data.clientIntakeForms} />
    </Section>
    <Section bgColor="tan" slantTop="right">
      <FeaturedContent data={haveQuestions} />
    </Section>
  </PageWrapper>
)

export default OccupationalTherapy
