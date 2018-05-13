import heroImage from './img/OurTeamHero.jpg'
import nextStepsImage from '../../global/img/NextSteps.png'

export const data = {
  hero: {
    copy: {
      links: [],
      subTitle: '',
      text: `
        <h3>Committed to you and your Family.</h3>
        <p>Our company exists thanks to the wonderful staff and administrators who run the day-to-day operations helping families with their children.</p>
      `,
      title: 'Our Team',
    },
    image: heroImage,
  },
  nextSteps: {
    copy: {
      links: [
        {
          path: '/contact-us',
          text: 'Make An Appointment',
        },
        {
          path: '/news-resources/forms',
          text: 'View Our Intake Forms',
          type: 'resource',
        },
      ],
      title: 'Ready to Take the Next Step?',
    },
    image: nextStepsImage,
  },
}
