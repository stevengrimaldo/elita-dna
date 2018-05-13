import { h } from 'preact'

import { Documents, FeaturedContent, Hero, Section } from '../../../components'

// data
import { data } from './data'
import { haveQuestions } from '../../../global/data'

const MentalHealth = () => (
  <div class="components--mental-health">
    <Hero data={data.hero} slantBottom="left" />
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
  </div>
)

export default MentalHealth
