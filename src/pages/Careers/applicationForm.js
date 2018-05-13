import { h, Component } from 'preact'
import axios from 'axios'

import Form from '../../components/Form'

import { data } from './data'

class ApplicationForm extends Component {
  handleSubmit = data => {
    axios
      .post('http://localhost:4000/api/mail/careers', data)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    return (
      <Form
        action="http://localhost:4000/api/mail/careers"
        elements={data.form.elements}
        intro={data.form.intro}
        method="POST"
        submit={{ text: 'Submit Application' }}
      />
    )
  }
}

export default ApplicationForm
