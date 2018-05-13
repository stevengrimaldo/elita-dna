import { Select, Text, TextArea } from '../../components/Form/elements'

import Desk from './img/desk.png'

export const data = {
  benefits: {
    copy: {
      text: `
        <h3>Benefits Include:</h3>
        <ul>
          <li>Competitive compensation; salary plus productivity bonus.</li>
          <li>Medical, vision, dental, STD, LTD.</li>
          <li>PTO, CME allowance, Allocated CME days.</li>
          <li>Minimal clerical duties; we are fully electronic.</li>
          <li>Traditional outpatient office: no mandatory nights or weekends.</li>
          <li>Staff events and appreciation days.</li>
        </ul>
        <p>Please check back here regularly to see updated open positions <strong><a href="https://elitedna.apscareerportal.com/jobs/" target="_blank">here</a></strong>.</p>
      `,
    },
    image: Desk,
  },
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
        autocomplete: 'email',
        label: 'Email Address',
        name: 'emailAddress',
        required: true,
        textType: 'email',
        type: Text,
      },
      {
        label: 'Degree',
        name: 'degree',
        required: true,
        size: 'double',
        type: Text,
      },
      {
        label: 'What Position are you Interested in?',
        name: 'whatPositionAreYouInterestedIn',
        required: true,
        size: 'double',
        type: Text,
      },
      {
        label: 'Desired Location',
        name: 'desiredLocation',
        options: [
          {
            label: 'Fort Myers',
            value: 'Fort Myers',
          },
          {
            label: 'Cape Coral',
            value: 'Cape Coral',
          },
          {
            label: 'Naples',
            value: 'Naples',
          },
          {
            label: 'Port Charlotte - Harbour',
            value: 'Port Charlotte Harbour',
          },
          {
            label: 'Port Charlotte - Cochran Blvd.',
            value: 'Port Charlotte Cochran',
          },
          {
            label: 'Venice',
            value: 'Venice',
          },
        ],
        type: Select,
      },
      {
        label: 'Cover Letter',
        name: 'coverLetter',
        required: true,
        size: 'double',
        type: TextArea,
      },
    ],
    intro: {
      text: 'All fields marked with an asterisk (*) are required',
      title: 'Online Employment Application',
    },
  },
  hero: {
    copy: {
      links: [],
      subTitle: '',
      text: `
        <p>Elite DNA Therapy Services is committed to providing a friendly, collegial work environment.</p>
      `,
      title: 'Careers',
    },
    image: '',
  },
  meta: {
    keywords: [
      'Nurse Practitioner',
      'Medical Assistant',
      'Psychiatrist',
      'Physician',
      'Physician Assistant',
      'Staff',
      'Career',
      'Job',
      'Front Desk',
      'Admin',
      'Billing',
      'Human Resources',
      'Compensation',
      'Salary',
      'Benefits',
      'Medical',
      'Vision',
      'Dental',
      'STD',
      'LTD',
      'Paid Time Off',
      'PTO',
      'CME Allowance',
      'EMR',
      'Electronic Medical Records',
      'Outpatient',
      'Events',
      'Application',
      'Apply',
      'Resume',
      'Cover Letter',
    ],
    title: 'Careers',
  },
}
