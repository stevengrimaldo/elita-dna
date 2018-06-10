const heroImage = '/img/our-team/OurTeamHero.jpg'
const nextStepsImage = '/img/NextSteps.png'

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
  meta: {
    keywords: [
      'Elite Staff',
      'Counselor',
      'Therapist',
      'Psychiatrist',
      'Nurse Practitioner',
      'Mental Health Counselor',
      'Staff',
      'Administration',
      'Owner',
      'Human Resources',
      'Billing',
      'Admin',
      'Physician',
      'Cape Coral',
      'Fort Myers',
      'Naples',
      'Port Charlotte',
      'Venice',
      'Clewiston',
      'Hendry',
      'Glades',
      'Labelle',
      'Lee County',
      'Collier County',
      'Charlotte County',
      'President',
      'CEO',
      'COO',
      'Accounting',
      'Compliance',
      'Clinic Manager',
      'IT',
    ],
    tags: [{ content: heroImage, property: 'og:image' }],
    title: 'Our Team',
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
