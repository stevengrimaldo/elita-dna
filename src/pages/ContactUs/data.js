import { Select, Text, TextArea } from '../../components/Form/elements'

export const data = {
  form: {
    elements: [
      {
        autocomplete: 'given-name',
        label: 'First Name',
        name: 'firstName',
        required: true,
        type: Text,
      },
      {
        autocomplete: 'family-name',
        label: 'Last Name',
        name: 'lastName',
        required: true,
        type: Text,
      },
      {
        autocomplete: 'tel-national',
        label: 'Phone Number',
        name: 'phoneNumber',
        textType: 'number',
        type: Text,
      },
      {
        label: 'Subject',
        name: 'subject',
        size: 'double',
        type: Text,
      },
      {
        label: 'Category',
        name: 'category',
        options: [
          {
            label: 'Applied Behavioral Analyst',
            value: 'Applied Behavioral Analyst',
          },
          {
            label: 'Mental Health',
            value: 'Mental Health',
          },
          {
            label: 'Occupational Therapy',
            value: 'Occupational Therapy',
          },
          {
            label: 'Speech Therapy',
            value: 'Speech Therapy',
          },
          {
            label: 'Transcranial Magnetic Stimulation',
            value: 'Transcranial Magnetic Stimulation',
          },
        ],
        required: true,
        type: Select,
      },
      {
        label: 'Message',
        name: 'message',
        required: true,
        size: 'double',
        type: TextArea,
      },
    ],
    intro: {
      text: 'All fields marked with an asterisk (*) are required',
    },
  },
  hero: {
    copy: {
      links: [],
      subTitle: '',
      text: `
        <p>Send us a message below and one of our licensed professionals will be in touch, or call us at (239) 223-2751. If you or someone you know is CURRENTLY in an acute crisis, then do not use this service; call 911 or Text START to 741-741.</p>
      `,
      title: 'Contact Us',
    },
    image: '',
  },
  meta: {
    description:
      'Send us a message below and one of our licensed professionals will be in touch.',
    keywords: [
      'Elite DNA Contact',
      'Contact Us',
      'Licensed professional contacts',
      'Health Services locations',
      'Newsletter',
      'Updates',
      'Information Sharing',
    ],
    title: 'Contact Us',
  },
}
