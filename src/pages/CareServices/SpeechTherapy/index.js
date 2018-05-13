import { h } from 'preact'

import { Hero, Questions, Section } from '../../../components'

// data
import { data } from './data'

const SpeechTherapy = () => (
  <div class="components--occupational-therapy">
    <Hero data={data.hero} slantBottom="left" />
    <Section bgColor="orange" padding="none" slantTop="right" unContain>
      <Questions data={data.conditionSpecializations} inverted />
    </Section>
  </div>
)

export default SpeechTherapy
