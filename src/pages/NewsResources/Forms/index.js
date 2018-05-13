import { h } from 'preact'

import { Documents, Hero, Questions, Section } from '../../../components'
import PageWrapper from '../../../global/template'

// data
import { data } from './data'
import { faqs } from '../../../global/data'

const Forms = () => (
  <PageWrapper className="forms" meta={data.meta}>
    <Hero bgColor="orange" data={data.hero} slantBottom="right" />
    <Section bgColor="white" slantBottom="left" slantTop="left">
      <Documents data={data.intakeForms} />
    </Section>
    <Section bgColor="tan" padding="none" slantTop="right" unContain>
      <Questions data={faqs} />
    </Section>
  </PageWrapper>
)

export default Forms
