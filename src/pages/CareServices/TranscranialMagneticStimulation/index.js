import { h } from 'preact'

import {
  FeaturedContent,
  Hero,
  Reviews,
  Section,
  Video,
} from '../../../components'
import PageWrapper from '../../../global/template'

// data
import { data } from './data'
import { haveQuestions } from '../../../global/data'

const TranscranialMagneticStimulation = () => (
  <PageWrapper className="transcranial-magnetic-stimulation" meta={data.meta}>
    <Hero bgColor="orange" data={data.hero} slantBottom="right" />
    <Section>
      <FeaturedContent data={data.tmsServices} />
    </Section>
    <Section padding="noTop">
      <Video videoId={data.video.id} />
    </Section>
    <Section align="left" bgColor="tan" slantBottom="right" slantTop="right">
      <FeaturedContent data={data.interestingFacts} full />
    </Section>
    <Section unContain>
      <Reviews data={data.reviews} />
    </Section>
    <Section bgColor="tan" slantTop="right">
      <FeaturedContent data={haveQuestions} />
    </Section>
  </PageWrapper>
)

export default TranscranialMagneticStimulation
