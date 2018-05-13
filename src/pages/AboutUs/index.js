import { h } from 'preact'

import {
  Hero,
  Profile,
  Questions,
  Reviews,
  Section,
  Solutions,
} from '../../components'

import PageWrapper from '../../global/template'

// data
import { data } from './data'
import { faqs, solutions } from '../../global/data'

const AboutUs = () => (
  <PageWrapper className="careers" meta={data.meta}>
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
  </PageWrapper>
)

export default AboutUs
