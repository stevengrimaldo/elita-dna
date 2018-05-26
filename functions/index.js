require('./utils/patchPreact')
const { h } = require('preact')
const functions = require('firebase-functions')
const render = require('preact-render-to-string')
const Helmet = require('preact-helmet')
const { renderStylesToString } = require('emotion-server')
const nodemailer = require('nodemailer')
const cors = require('cors')({ origin: true })
const App = require('./src/App')

const gmailEmail = functions.config().gmail.email
const gmailPassword = functions.config().gmail.password
const transport = {
  auth: {
    pass: gmailPassword,
    user: gmailEmail,
  },
  port: 25,
  service: 'gmail',
}
const transporter = nodemailer.createTransport(transport)

exports.contactForm = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    const sender = '"Elite DNA" <no-reply@elitednatherapy.com>'
    const subject = 'New Contact Form Submission'
    const recipients = 'srgrimaldo@me.com'
    const body = `First Name: ${req.body.firstName} \n\n Last Name: ${
      req.body.lastName
    } \n\n Phone Number: ${req.body.phoneNumber} \n\n Category: ${
      req.body.category
    } \n\n Subject: ${req.body.subject} \n\n Message: \n\n ${req.body.message}`

    const email = {
      from: sender,
      subject: subject,
      text: body,
      to: recipients,
    }

    transporter.sendMail(email, (error, info) => {
      if (error) {
        res.send(error)
        return console.log(error)
      }
      res.send(info)
    })
  })
})

exports.careersForm = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    const sender = '"Elite DNA" <no-reply@elitednatherapy.com>'
    const subject = 'New Careers Form Submission'
    const recipients = 'srgrimaldo@me.com'
    const body = `First Name: ${req.body.firstName} \n\n Last Name: ${
      req.body.lastName
    } \n\n Phone Number: ${req.body.phoneNumber} \n\n Email Address: ${
      req.body.emailAddress
    } \n\n Degree: ${req.body.degree} \n\n Position Interested In: ${
      req.body.whatPositionAreYouInterestedIn
    } \n\n Desired Location: ${
      req.body.desiredLocation
    } \n\n Cover Letter: \n\n ${req.body.coverLetter}`

    const email = {
      from: sender,
      subject: subject,
      text: body,
      to: recipients,
    }

    transporter.sendMail(email, (error, info) => {
      if (error) {
        res.send(error)
        return console.log(error)
      }
      res.send(info)
    })
  })
})

exports.geocode = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    const googleMapsClient = require('@google/maps').createClient({
      Promise: Promise,
      key: 'AIzaSyCok5PyWTvryvbsRzaVAkJbpuZjfklnmJM',
    })

    googleMapsClient
      .geocode({ address: req.body.address })
      .asPromise()
      .then(response => {
        res.send({
          latLng: response.json.results[0].geometry.location,
        })
      })
      .catch(err => {
        res.send(`Geocode was not successful for the following reason: ${err}`)
      })
  })
})

exports.ssrapp = functions.https.onRequest((req, res) => {
  const body = renderStylesToString(render(h(App.default, { url: req.url })))
  const head = Helmet.rewind()

  res.send(
    `<!DOCTYPE html>
    <html ${head.htmlAttributes.toString()}>
      <head>
        ${head.title.toString()}
        ${head.meta.toString()}
        ${head.link.toString()}
      </head>
      <body>
        <div id="root">${body}</div>
        <script src="/dist/index.js"></script>
      </body>
    </html>`
  )
})
