import heroImage from './img/HomepageHero.jpg'

import OccupationTherapyIntakeForm from '../../global/pdfs/Occupational-Therapy-Intake-Form.pdf'
// import SpeechTherapyIntakeForm from '../../global/pdfs/Speech-Therapy-Intake-Form.pdf'
import MentalHealthIntakeFormAdult from '../../global/pdfs/Mental-Health-Intake-Form-Adult.pdf'
import MentalHealthIntakeFormChild from '../../global/pdfs/Mental-Health-Intake-Form-Child.pdf'

import {
  Apple,
  ShieldHeart,
  Blocks,
  SpeechBubble,
  PuzzlePieces,
} from '../../global/icons'

export const data = {
  getInTouch: {
    icon: null,
    links: [],
    text: `
      <p>6360 Techster Blvd, Suites 1 & 2 , Fort Myers, FL 33966<br />
      (239) 223-2751<br />
      <strong><a href="mailto:info@elitednatherapy.com">info@elitednatherapy.com</a></strong></p>
    `,
    title: 'Get in Touch!',
  },
  hero: {
    copy: {
      links: [
        {
          path: '/contact-us',
          text: 'New patient Sign Up',
        },
      ],
      subTitle: "Tackle Today's Concerns with Our",
      text: '',
      title: 'Comprehensive<br />Approach',
    },
    image: heroImage,
  },
  mainResources: {
    resources: [
      {
        copy: {
          link: {
            path: '/care-services/occupational-therapy',
            text: 'Discover More',
            type: 'resource',
          },
          text: `
            <p>We can help your child overcome sensory challenges and enhance their ability to learn, interact with others and enjoy life.</p>
          `,
          title: 'Occupational Therapy',
        },
        icon: Blocks,
      },
      {
        copy: {
          link: {
            path: '/care-services/nutrition-counseling',
            text: 'Discover More',
            type: 'resource',
          },
          text: `
            <p>Let us help you and your child stay healthy, how to choose foods wisely and maintain a healthy lifestyle.</p>
          `,
          title: 'Nutrition Counseling',
        },
        icon: Apple,
      },
      {
        copy: {
          link: {
            path: '/care-services/speech-therapy',
            text: 'Discover More',
            type: 'resource',
          },
          text: `
            <p>We can help you grow communication skills which is fundamental in order interact and connect with others.</p>
          `,
          title: 'Speech & Language',
        },
        icon: SpeechBubble,
      },
      {
        copy: {
          link: {
            path: '/care-services/applied-behavior-analysis',
            text: 'Discover More',
            type: 'resource',
          },
          text: `
            <p>Applied Behavior Analysis (ABA) uses the scientific principles of learning and motivation in order to effectively teach.</p>
          `,
          title: 'ABA Therapy',
        },
        icon: PuzzlePieces,
      },
    ],
  },
  mainTools: [
    {
      link: OccupationTherapyIntakeForm,
      title: 'Occupational Therapy Intake Form',
    },
    {
      link: '#',
      title: 'Speech Therapy Intake Form',
    },
    {
      link: MentalHealthIntakeFormAdult,
      title: 'Mental Health Intake Form (Adult)',
    },
    {
      link: MentalHealthIntakeFormChild,
      title: 'Mental Health Intake Form (Child)',
    },
  ],
  mentalHealthServices: {
    icon: ShieldHeart,
    links: [
      {
        path: '/care-services/mental-health',
        text: 'Discover More',
        type: 'resource',
      },
    ],
    text: `
      <p>We specialize in combining psychotherapy with practical, hands on approaches, along with goal setting strategies in order to make progress with various psychological issues.</p>
    `,
    title: 'Mental Health Services',
  },
}
