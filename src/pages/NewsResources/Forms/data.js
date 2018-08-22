const AdultIntakePacketThumb =
  '/img/news-resources/forms/adult-intake-packet-thumb.jpg'
const ChildIntakePacketThumb =
  '/img/news-resources/forms/child-intake-packet-thumb.jpg'
const RequestForRecordsTHumb =
  '/img/news-resources/forms/request-for-records-form-thumb.jpg'
const NoticeOfPrivacyPracticesThumb =
  '/img/news-resources/forms/notice-of-privacy-practices-thumb.jpg'

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
        image: AdultIntakePacketThumb,
        link: AdultIntakePacket,
        title: 'Adult Intake Packet',
      },
      {
        image: ChildIntakePacketThumb,
        link: ChildIntakePacket,
        title: 'Child Intake Packet',
      },
      {
        image: RequestForRecordsTHumb,
        link: RequestForRecords,
        title: 'Request for Medical Records Form',
      },
      {
        image: NoticeOfPrivacyPracticesThumb,
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
