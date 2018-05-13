import { h } from 'preact'

import { Hero, Questions, Section } from '../../../components'
import PageWrapper from '../../../global/template'

// data
import { data } from './data'

const SpeechTherapy = () => (
  <PageWrapper className="occupational-therapy" meta={data.meta}>
    <Hero data={data.hero} slantBottom="left" />
    <Section bgColor="orange" padding="none" slantTop="right" unContain>
      <Questions data={data.conditionSpecializations} inverted />
    </Section>
  </PageWrapper>
)

export default SpeechTherapy
