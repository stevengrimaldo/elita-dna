import { h } from 'preact'

// components
import {
  FeaturedContent,
  Hero,
  Resources,
  Section,
  Tools,
} from '../../components'

// data
import { data } from './data'

// component
const Home = () => (
  <div class="components--home">
    <Hero data={data.hero} slantBottom="right" />
    <Section>
      <FeaturedContent data={data.mentalHealthServices} />
    </Section>
    <Section bgColor="tan" slantTop="right" slantBottom="right">
      <Resources data={data.mainResources} />
    </Section>
    <Section unContain padding="none" above>
      <Tools data={data.mainTools} />
    </Section>
    <Section align="left" padding="halfTop">
      <FeaturedContent data={data.getInTouch} />
    </Section>
  </div>
)

export default Home
