const AdultMentalHealth = '/img/news-resources/forms/adult-mental-health.png'
const ChildMentalHealth = '/img/news-resources/forms/child-mental-health.png'
const OccupationalTherapy = '/img/news-resources/forms/occupational-therapy.png'

const OccupationTherapyIntakeForm = '/pdfs/Occupational-Therapy-Intake-Form.pdf'
// const SpeechTherapyIntakeForm = '/pdfs/Speech-Therapy-Intake-Form.pdf'
const MentalHealthIntakeFormAdult = '/pdfs/Mental-Health-Intake-Form-Adult.pdf'
const MentalHealthIntakeFormChild = '/pdfs/Mental-Health-Intake-Form-Child.pdf'

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
