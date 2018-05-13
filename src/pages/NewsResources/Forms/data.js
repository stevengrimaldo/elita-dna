import AdultMentalHealth from './img/adult-mental-health.png'
import ChildMentalHealth from './img/child-mental-health.png'
import OccupationalTherapy from './img/occupational-therapy.png'

import OccupationTherapyIntakeForm from '../../../global/pdfs/Occupational-Therapy-Intake-Form.pdf'
// import SpeechTherapyIntakeForm from '../../../global/pdfs/Speech-Therapy-Intake-Form.pdf'
import MentalHealthIntakeFormAdult from '../../../global/pdfs/Mental-Health-Intake-Form-Adult.pdf'
import MentalHealthIntakeFormChild from '../../../global/pdfs/Mental-Health-Intake-Form-Child.pdf'

export const data = {
  hero: {
    copy: {
      links: [],
      subTitle: '',
      text: `
        <p>All new clients please print and fill out the intake forms for the discipline you or your child will be seeing. Thank you, and please feel free to call with any questions.</p>
      `,
      title: 'Intake Forms',
    },
    image: '',
  },
  intakeForms: {
    documents: [
      {
        image: OccupationalTherapy,
        link: OccupationTherapyIntakeForm,
        title: 'Occupational Therapy',
      },
      {
        image: AdultMentalHealth,
        link: MentalHealthIntakeFormAdult,
        title: 'Adult Intake Form',
      },
      {
        image: ChildMentalHealth,
        link: MentalHealthIntakeFormChild,
        title: 'Child Mental Health Form',
      },
    ],
    title: '',
  },
  meta: {
    title: 'Forms',
  },
}
