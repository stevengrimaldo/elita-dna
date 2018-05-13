import { h } from 'preact'

import { Hero, Locations, Section } from '../../components'
import ContactForm from './contactForm'

// data
import { data } from './data'
import { locations } from '../../global/locations'

const ContactUs = () => (
  <div class="components--contact-us">
    <Hero bgColor="orange" data={data.hero} slantBottom="right" />
    <Section above bgColor="white" slantBottom="left" slantTop="left">
      <ContactForm />
    </Section>
    <Section bgColor="tan" slantTop="right" unContain>
      <Locations data={locations} />
    </Section>
  </div>
)

export default ContactUs
