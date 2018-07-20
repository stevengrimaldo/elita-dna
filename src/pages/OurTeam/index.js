import { h } from 'preact'

import {
  FeaturedContent,
  Hero,
  Section,
  Solutions,
  Team,
} from '../../components'
import PageWrapper from '../../global/template'

// data
import { data } from './data'
import { solutions } from '../../global/data'
import { locations } from '../../global/locations'
import { team } from '../../global/team'

const admin = [
  {
    departments: ['Admin'],
    name: 'Our Team',
  },
]

const allLocations = admin.concat(locations)

const OurTeam = () => (
  <PageWrapper className="our-team" meta={data.meta}>
    <Hero data={data.hero} />
    <Section align="left" bgColor="white" slantTop="right" slantBottom="right">
      <Team team={team} locations={allLocations} />
    </Section>
    <Section
      intro={solutions.intro}
      bgColor="orange"
      slantTop="left"
      slantBottom="left"
    >
      <Solutions data={solutions.content} inverted />
    </Section>
    <Section bgColor="white" image={data.nextSteps.image} slantTop="right">
      <FeaturedContent data={data.nextSteps.copy} />
    </Section>
  </PageWrapper>
)

export default OurTeam
