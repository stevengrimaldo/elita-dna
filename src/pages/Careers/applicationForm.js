import { h, Component } from 'preact'
import axios from 'axios'

import Form from '../../components/Form'

import { data } from './data'

class ApplicationForm extends Component {
  handleSubmit = (data, callback) => {
    axios
      .post(
        'https://us-central1-elite-dna-therapy.cloudfunctions.net/careersForm',
        data
      )
      .then(() => {
        if (callback) {
          callback()
        }
      })
      .catch(error => {
        console.log(error)
        if (callback) {
          callback()
        }
      })
  }

  render() {
    return (
      <Form
        elements={data.form.elements}
        intro={data.form.intro}
        submit={{ callback: this.handleSubmit, text: 'Submit Application' }}
      />
    )
  }
}

export default ApplicationForm
