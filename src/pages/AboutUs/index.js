import { h } from 'preact'

import {
  Hero,
  Profile,
  Questions,
  Reviews,
  Section,
  Solutions,
} from '../../components'

// data
import { data } from './data'
import { faqs, solutions } from '../../global/data'

const AboutUs = () => (
  <div class="components--about-us">
    <Hero data={data.hero} slantBottom="left" />
    <Section>
      <Profile data={data.founder} />
    </Section>
    <Section
      intro={solutions.intro}
      bgColor="orange"
      slantTop="left"
      slantBottom="left">
      <Solutions data={solutions.content} inverted />
    </Section>
    <Section unContain>
      <Reviews data={data.reviews} />
    </Section>
    <Section bgColor="tan" padding="none" slantTop="left" unContain>
      <Questions data={faqs} />
    </Section>
  </div>
)

export default AboutUs
