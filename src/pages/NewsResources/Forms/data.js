const AdultMentalHealth = '/img/news-resources/forms/adult-mental-health.png'
const ChildMentalHealth = '/img/news-resources/forms/child-mental-health.png'
const OccupationalTherapy = '/img/news-resources/forms/occupational-therapy.png'

const AdultIntakePacket = '/pdfs/Adult-Intake-Packet.pdf'
const ChildIntakePacket = '/pdfs/Child-Intake-Packet.pdf'
const RequestForRecords = '/pdfs/Request-for-Records-Form.pdf'
const NoticeOfPrivacyPractices = '/pdfs/Notice-of-Privacy-Practices.pdf'

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
        image: AdultMentalHealth,
        link: AdultIntakePacket,
        title: 'Adult Intake Packet',
      },
      {
        image: ChildMentalHealth,
        link: ChildIntakePacket,
        title: 'Child Intake Packet',
      },
      {
        image: OccupationalTherapy,
        link: RequestForRecords,
        title: 'Request for Records Form',
      },
      {
        image: OccupationalTherapy,
        link: NoticeOfPrivacyPractices,
        title: 'Notice of Privacy Practices',
      },
    ],
    title: '',
  },
  meta: {
    title: 'Forms',
  },
}
