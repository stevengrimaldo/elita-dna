import { h } from 'preact'

import { Hero, Locations, Section } from '../../components'
import ContactForm from './contactForm'
import PageWrapper from '../../global/template'

// data
import { data } from './data'
import { locations } from '../../global/locations'

const ContactUs = () => (
  <PageWrapper className="contact-us" meta={data.meta}>
    <Hero bgColor="orange" data={data.hero} slantBottom="right" />
    <Section above bgColor="white" slantBottom="left" slantTop="left">
      <ContactForm />
    </Section>
    <Section bgColor="tan" slantTop="right" unContain>
      <Locations data={locations} />
    </Section>
  </PageWrapper>
)

export default ContactUs
