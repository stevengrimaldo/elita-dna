import { h } from 'preact'

import { FeaturedContent, Hero, Section, Solutions } from '../../../components'

// data
import { data } from './data'
import { haveQuestions } from '../../../global/data'

const AppliedBehaviorAnalysis = () => (
  <div class="components--applied-behavior-analysis">
    <Hero bgColor="orange" data={data.hero} slantBottom="right" />
    <Section
      align="left"
      image={data.whatIsAba.image}
      slantBottom="left"
      slantTop="left">
      <FeaturedContent data={data.whatIsAba.copy} split />
    </Section>
    <Section bgColor="tan" slantBottom="right" slantTop="right">
      <FeaturedContent align="left" data={data.howWeHelp} full />
    </Section>
    <Section
      bgColor="orange"
      intro={data.teachingApproach.intro}
      slantBottom="left"
      slantTop="left">
      <Solutions data={data.teachingApproach.content} inverted />
    </Section>
    <Section bgColor="tan" slantTop="right">
      <FeaturedContent data={haveQuestions} />
    </Section>
  </div>
)

export default AppliedBehaviorAnalysis
