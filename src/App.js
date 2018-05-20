import { h, Component } from 'preact'
import Router from 'preact-router'
import AsyncRoute from 'preact-async-route'
import { Helmet } from 'react-helmet'

import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import AboutUs from './pages/AboutUs'
import AppliedBehaviorAnalysis from './pages/CareServices/AppliedBehaviorAnalysis'
import Careers from './pages/Careers'
import ContactUs from './pages/ContactUs'
import Forms from './pages/NewsResources/Forms'
import MentalHealth from './pages/CareServices/MentalHealth'
import NewsResources from './pages/NewsResources'
import OccupationalTherapy from './pages/CareServices/OccupationalTherapy'
import OurTeam from './pages/OurTeam'
import SpeechTherapy from './pages/CareServices/SpeechTherapy'
import Teletherapy from './pages/CareServices/Teletherapy'
import TranscranialMagneticStimulation from './pages/CareServices/TranscranialMagneticStimulation'

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
          <Router {...props} url={props.url} onChange={this.handleRoute}>
            <Home path="/" />
            <AsyncRoute component={AboutUs} path="/about-us" />
            <AsyncRoute
              component={AppliedBehaviorAnalysis}
              path="/care-services/applied-behavior-analysis"
            />
            <AsyncRoute component={Careers} path="/careers" />
            <AsyncRoute component={ContactUs} path="/contact-us" />
            <AsyncRoute component={Forms} path="/news-resources/forms" />
            <AsyncRoute
              component={MentalHealth}
              path="/care-services/mental-health"
            />
            <AsyncRoute component={NewsResources} path="/news-resources" />
            <AsyncRoute
              component={OccupationalTherapy}
              path="/care-services/occupational-therapy"
            />
            <AsyncRoute component={OurTeam} path="/our-team" />
            <AsyncRoute
              component={SpeechTherapy}
              path="/care-services/speech-therapy"
            />
            <AsyncRoute
              component={Teletherapy}
              path="/care-services/teletherapy"
            />
            <AsyncRoute
              component={TranscranialMagneticStimulation}
              path="/care-services/transcranial-magnetic-stimulation"
            />
          </Router>
        </div>
        <Footer year={year} />
      </div>
    )
  }
}

export default App
