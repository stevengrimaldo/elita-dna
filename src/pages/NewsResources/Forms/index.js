import { h } from 'preact'

import { Documents, Hero, Questions, Section } from '../../../components'

// data
import { data } from './data'
import { faqs } from '../../../global/data'

const Forms = () => (
  <div class="components--forms">
    <Hero bgColor="orange" data={data.hero} slantBottom="right" />
    <Section bgColor="white" slantBottom="left" slantTop="left">
      <Documents data={data.intakeForms} />
    </Section>
    <Section bgColor="tan" padding="none" slantTop="right" unContain>
      <Questions data={faqs} />
    </Section>
  </div>
)

export default Forms
