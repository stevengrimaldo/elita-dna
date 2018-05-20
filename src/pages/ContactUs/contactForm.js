import { h, Component } from 'preact'
import axios from 'axios'

import Form from '../../components/Form'

import { data } from './data'

class ContactForm extends Component {
  handleSubmit = (data, callback) => {
    axios
      .post(
        'https://us-central1-elite-dna-therapy.cloudfunctions.net/contactForm',
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

  render(props, state) {
    return (
      <Form
        elements={data.form.elements}
        intro={data.form.intro}
        submit={{ callback: this.handleSubmit, text: 'Send Message' }}
      />
    )
  }
}

export default ContactForm
