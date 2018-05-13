import { h } from 'preact'

import {
  FeaturedContent,
  Hero,
  Section,
  Solutions,
  Team,
} from '../../components'

import { team } from '../../global/team'
import { locations } from '../../global/locations'

// data
import { data } from './data'
import { solutions } from '../../global/data'

const admin = [
  {
    departments: ['Admin'],
    name: 'Our Team',
  },
]

const allLocations = admin.concat(locations)

const OurTeam = () => (
  <div class="components--our-team">
    <Hero data={data.hero} slantBottom="left" />
    <Section align="left" bgColor="white" slantTop="right" slantBottom="right">
      <Team team={team} locations={allLocations} />
    </Section>
    <Section
      intro={solutions.intro}
      bgColor="orange"
      slantTop="left"
      slantBottom="left">
      <Solutions data={solutions.content} inverted />
    </Section>
    <Section bgColor="white" image={data.nextSteps.image} slantTop="right">
      <FeaturedContent data={data.nextSteps.copy} />
    </Section>
  </div>
)

export default OurTeam
