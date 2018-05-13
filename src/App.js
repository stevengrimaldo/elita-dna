import { h, Component } from 'preact'
import Router from 'preact-router'
import { Helmet } from 'react-helmet'
// import scrollIntoView from 'scroll-into-view'

import {
  AboutUs,
  AppliedBehaviorAnalysis,
  Careers,
  ContactUs,
  Forms,
  Home,
  MentalHealth,
  NewsResources,
  NutritionCounseling,
  OccupationalTherapy,
  OurTeam,
  SpeechTherapy,
  Teletherapy,
  TranscranialMagneticStimulation,
} from './pages'

import { Footer, Header } from './components'

import { navigation } from './global/data'

import './global'

const year = new Date().getFullYear()

class App extends Component {
  handleRoute = e => {
    if (
      e.previous !== undefined &&
      e.previous !== e.url &&
      window.pageYOffset > 1
    ) {
      window.scrollTo(0, 0)
      // scrollIntoView(document.body, {
      //   align: {
      //     top: 0,
      //   },
      //   time: 300,
      // })
    }
  }

  render(props) {
    return (
      <div>
        <Helmet>
          <meta charset="utf-8" />
          <meta httpequiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0"
          />
          <meta name="author" content="Elite DNA" />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:site_name" content="EliteDNA.us" />
          {props.url && (
            <meta
              property="og:url"
              content={`http://elitedna.us${props.url}}`}
            />
          )}
        </Helmet>
        <Header data={navigation} />
        <div class="components">
          <Router url={props.url} onChange={this.handleRoute}>
            <Home path="/" />
            <AboutUs path="/about-us" />
            <OurTeam path="/our-team" />
            <AppliedBehaviorAnalysis path="/care-services/applied-behavior-analysis" />
            <MentalHealth path="/care-services/mental-health" />
            <NutritionCounseling path="/care-services/nutrition-counseling" />
            <OccupationalTherapy path="/care-services/occupational-therapy" />
            <SpeechTherapy path="/care-services/speech-therapy" />
            <Teletherapy path="/care-services/teletherapy" />
            <TranscranialMagneticStimulation path="/care-services/transcranial-magnetic-stimulation" />
            <NewsResources path="/news-resources" />
            <Forms path="/news-resources/forms" />
            <Careers path="/careers" />
            <ContactUs path="/contact-us" />
          </Router>
        </div>
        <Footer year={year} />
      </div>
    )
  }
}

export default App
