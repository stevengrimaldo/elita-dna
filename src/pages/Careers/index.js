import { h } from 'preact'

import { FeaturedContent, Hero, Section } from '../../components'

import ApplicationForm from './applicationForm'

// data
import { data } from './data'

const Careers = () => (
  <div class="components--careers">
    <Hero bgColor="orange" data={data.hero} slantBottom="right" />
    <Section
      align="left"
      bgColor="white"
      image={data.benefits.image}
      slantBottom="left"
      slantTop="left">
      <FeaturedContent data={data.benefits.copy} split />
    </Section>
    <Section bgColor="tan" slantTop="right">
      <ApplicationForm />
    </Section>
  </div>
)

export default Careers
