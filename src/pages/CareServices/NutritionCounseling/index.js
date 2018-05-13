import { h } from 'preact'

import { FeaturedContent, Hero, Section } from '../../../components'

// data
import { data } from './data'
import { haveQuestions } from '../../../global/data'

const NutritionCounseling = () => (
  <div class="components--nutrition-counseling">
    <Hero data={data.hero} slantBottom="left" />
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
  </div>
)

export default NutritionCounseling
