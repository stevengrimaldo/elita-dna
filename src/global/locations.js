import { departments } from './departments'

export const locationNames = {
  capeCoral: 'Cape Coral',
  fortMeyers: 'Fort Myers',
  metroGardens: 'Fort Myers - Metro Gardens',
  naples: 'Naples',
  ourTeam: 'Our Team',
  parkRoyal: 'Fort Myers - Park Royal',
  portCharlotte: 'Port Charlotte',
  venice: 'Venice',
}

export const locations = [
  {
    address: '2721 Del Prado Blvd Suite 200, Cape Coral, FL 33904',
    departments: [
      departments.care,
      departments.psychiatry,
      departments.psychotherapy,
      departments.speech,
    ],
    name: locationNames.capeCoral,
  },
  {
    address: '6360 Techster Blvd Suite 1 & 2, Fort Myers, FL 33966',
    departments: [
      departments.behavior,
      departments.care,
      departments.occupational,
      departments.psychiatry,
      departments.psychotherapy,
      departments.speech,
    ],
    name: locationNames.fortMeyers,
  },
  {
    address: '2830 Winkler Ave Suite 207, Fort Myers, FL 33916',
    departments: [departments.psychiatry],
    name: locationNames.metroGardens,
  },
  {
    address: '9241 Park Royal Dr, Fort Myers, FL 33908',
    departments: [],
    name: locationNames.parkRoyal,
  },
  {
    address: '2230 Venetian Ct, Naples, FL 34109',
    departments: [
      departments.occupational,
      departments.psychiatry,
      departments.psychotherapy,
    ],
    name: locationNames.naples,
  },
  {
    address: '3191 Harbor Blvd Suite A & B, Port Charlotte, FL 33952',
    departments: [departments.psychiatry, departments.psychotherapy],
    name: locationNames.portCharlotte,
  },
  {
    address: '421 Commercial Ct Suite B, Venice, FL 34292',
    departments: [departments.psychiatry],
    name: locationNames.venice,
  },
]
