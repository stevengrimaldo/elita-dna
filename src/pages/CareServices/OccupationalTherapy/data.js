import OccupationalHero from './img/OccupationalHero.jpg'
import OccupationalTherapy from './img/occupational-therapy.png'

import OccupationTherapyIntakeForm from '../../../global/pdfs/Occupational-Therapy-Intake-Form.pdf'

import { Toy } from '../../../global/icons'

export const data = {
  clientIntakeForms: {
    documents: [
      {
        image: OccupationalTherapy,
        link: OccupationTherapyIntakeForm,
        title: 'Occupational Therapy',
      },
    ],
    title: 'Client intake forms:',
  },
  enjoyLife: {
    icon: Toy,
    text: `
      <p>Each child differs in his/her ability to process sensory information, which impacts his/her development of fine motor, gross motor, visual motor, and resulting modulation/regulation skills for effective and appropriate interaction within his/her expected environments.Therapy can help your child overcome any challenges and enhance their ability to learn, interact with others and enjoy life.</p>
    `,
    title: 'Help your Child Enjoy Life!',
  },
  hero: {
    copy: {
      links: [
        {
          path: '/contact-us',
          text: 'Make An Appointment',
        },
        {
          path: OccupationTherapyIntakeForm,
          text: 'Download Intake Form',
          type: 'download',
        },
      ],
      subTitle: '',
      text: `
        <p>Occupational Therapy services allow for skilled evaluation and treatment of children with a variety of needs to facilitate achievement of age-appropriate developmental milestones and maximize participation in age-appropriate occupations.</p>
      `,
      title: 'Occupational Therapy',
    },
    image: OccupationalHero,
  },
  servicesAndSpecialties: {
    text: `
      <h3>Services Include:</h3>
      <ul>
        <li><strong>Initial </strong><strong>Screening</strong><br> Assess age-appropriate achievement of developmental milestones including: fine motor, gross motor, visual motor, sensory motor, sensory processing &amp; self help skills</li>
        <li><strong>Comprehensive </strong><strong>Evaluation</strong><br> Standardized assessments to establish baseline level for gross, fine, visual, sensory, and self-help skills</li>
        <li><strong>Plan of </strong><strong>Care</strong><br> Establishment of collaborative and child-centered plan of care addressing meangingful long and short-term goals</li>
        <li><strong>Comprehensive </strong><strong>Re-evaluation</strong><br> Addressing progress towards set goals</li>
      </ul>
      <h3>Specialty Areas:</h3>
      <ul>
        <li><strong>Sensory </strong><strong>Processing</strong><br> Sensory modulation, sensory integration, emotional regulation</li>
        <li><strong>Fine Motor </strong><strong>Skills</strong><br> Handwriting without tears, in-hand manipulation</li>
        <li><strong>Gross Motor </strong><strong>Skills</strong><br> Coordination and endurance training</li>
        <li><strong>Ergonomic Analysis</strong></li>
        <li><strong>Support for successful transitions</strong></li>
      </ul>
    `,
  },
}
