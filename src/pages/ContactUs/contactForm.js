import { h, Component } from 'preact'
import axios from 'axios'

import Form from '../../components/Form'

import { data } from './data'

class ContactForm extends Component {
  handleSubmit = data => {
    axios
      .post('http://localhost:4000/api/mail/contact', data)
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
        action="http://localhost:4000/api/mail/contact"
        elements={data.form.elements}
        method="POST"
        intro={data.form.intro}
        submit={{ text: 'Send Message' }}
      />
    )
  }
}

export default ContactForm
