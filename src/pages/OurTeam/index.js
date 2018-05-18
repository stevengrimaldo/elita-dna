import { h, Component } from 'preact'

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

const admin = [
  {
    departments: ['Admin'],
    name: 'Our Team',
  },
]

const allLocations = admin.concat(locations)

class OurTeam extends Component {
  state = {
    team: null,
  }

  componentWillMount() {
    // this is uuuuugggee - so we want to dynamically import this instead
    import('../../global/team').then(({ team }) => {
      this.setState({ team })
    })
  }

  render(props, state) {
    return (
      <PageWrapper className="our-team" meta={data.meta}>
        <Hero data={data.hero} />
        <Section
          align="left"
          bgColor="white"
          slantTop="right"
          slantBottom="right">
          {state.team ? (
            <Team team={state.team} locations={allLocations} />
          ) : (
            <p>loading...</p>
          )}
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
      </PageWrapper>
    )
  }
}

export default OurTeam
