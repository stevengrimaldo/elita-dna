import { h } from 'preact'

import { FeaturedContent, Hero, Section } from '../../../components'
import PageWrapper from '../../../global/template'

// data
import { data } from './data'
import { haveQuestions } from '../../../global/data'

const NutritionCounseling = () => (
  <PageWrapper className="nutrition-counseling" meta={data.meta}>
    <Hero data={data.hero} />
    <Section bgColor="orange" slantBottom="right" slantTop="right">
      <FeaturedContent data={data.pickyEater} inverted />
    </Section>
    <Section
      align="left"
      image={data.howWeCanHelp.image}
      slantBottom="left"
      slantTop="left">
      <FeaturedContent data={data.howWeCanHelp.copy} split />
    </Section>
    <Section bgColor="tan" slantTop="right">
      <FeaturedContent data={haveQuestions} />
    </Section>
  </PageWrapper>
)

export default NutritionCounseling
