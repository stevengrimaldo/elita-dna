import { h } from 'preact'

import { Documents, FeaturedContent, Hero, Section } from '../../../components'

// data
import { data } from './data'
import { haveQuestions } from '../../../global/data'

const OccupationalTherapy = () => (
  <div class="components--occupational-therapy">
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
  </div>
)

export default OccupationalTherapy
