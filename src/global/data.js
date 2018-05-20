import { BrainStorm, GradCap, MedicalBag, ShieldPerson } from './icons'

export const faqs = {
  questions: [
    {
      text: `
        <p>Typical children’s occupation therapy at our Fort Myers clinic last 45 minutes. These sessions can be shortened or lengthened depending on your needs and the goals we are working to accomplish.</p>
        <p>Each child is different, so we will work to create at holistic plan to best support his or her therapy needs.</p>
      `,
      title: 'How long does a therapy question last?',
    },
    {
      text: `
        <p>Yes! A Registered dietitian can help you stay healthy by teaching you and your family how to choose foods wisely and develop a healthy lifestyle. Balance, variety and moderation is key for the entire family.</p>
        <p>We don’t just treat the child, the entire family should be on board. We can help everyone stay healthy by providing: • Healthy recipes • Balanced meal plans/menus (from infants to adults) • Shopping tips and grocery lists • Breastfeeding support</p>
      `,
      title:
        'Can a Registered Dietitian help my child and family if we are healthy?',
    },
    {
      text: `
        <p>A registered dietitian is a nutrition professional. Registered dietitians are your most credible, objective source of nutrition information. They are trained on using food to help manage or prevent disease.</p>
        <p>Look for the initials RD after your nutritionist’s name. These credentials indicate that the practitioner has completed an accredited 4-year educational program, 1200 hours of supervised practice, and passed a national exam.</p>
        <p>A Registered Dietitian can help with: • Weight management / childhood obesity • Meal planning, school lunches, and healthy snacks • Food allergies/intolerances • Picky eaters • Pediatric Metabolic disorders • Failure to thrive / infant feeding • Diabetes • Heart disease • Kidney disease • Sports nutrition • And more!</p>
      `,
      title: 'What is a Registered Dietitian?',
    },
  ],
  title: 'Frequently Asked Questions',
}

export const navigation = [
  {
    path: '/about-us',
    text: 'About Us',
  },
  {
    path: '/our-team',
    text: 'Our Team',
  },
  {
    links: [
      {
        path: '/care-services/applied-behavior-analysis',
        text: 'Applied Behavior Analysis',
      },
      {
        path: '/care-services/mental-health',
        text: 'Mental Health',
      },
      {
        path: '/care-services/occupational-therapy',
        text: 'Occupational Therapy',
      },
      {
        path: '/care-services/speech-therapy',
        text: 'Speech Therapy',
      },
      {
        path: '/care-services/teletherapy',
        text: 'Teletherapy',
      },
      {
        path: '/care-services/transcranial-magnetic-stimulation',
        text: 'Transcranial Magnetic Stimulation',
      },
    ],
    text: 'Care Services',
  },
  {
    links: [
      {
        path: '/news-resources/forms',
        text: 'Forms',
      },
    ],
    path: '/news-resources',
    text: 'News & Resources',
  },
  {
    path: '/careers',
    text: 'Careers',
  },
  {
    path: '/contact-us',
    text: 'Contact Us',
  },
]

export const haveQuestions = {
  links: [
    {
      path: '/contact-us',
      text: 'Contact Us',
    },
  ],
  text: `
    <p>We’d love to help you find the right journey on your path to success, we look forward to hearing from you! If you or someone you know is CURRENTLY in an acute crisis, then do not use this service; call 911 or Text START to 741-741.</p>
  `,
  title: 'Questions?',
}

export const solutions = {
  content: [
    {
      icon: GradCap,
      text: `
        <p>We were founded by professionals and want to provide the best results for our patients.</p>
      `,
      title: 'Founded & Managed by Therapists',
    },
    {
      icon: ShieldPerson,
      text: `
        <p>Meeting our patients therapeutically where they are, and getting them where they need to be.</p>
      `,
      title: 'We Maximize Each & Every Patient',
    },
    {
      icon: MedicalBag,
      text: `
        <p>Our patients can be confident they are in the trusted hands of a professional.</p>
      `,
      title: 'Only Therapists Treat Patients',
    },
    {
      icon: BrainStorm,
      text: `
        <p>No matter what specialty our patient is being seen, they always have access to the entire Elite DNA team.</p>
      `,
      title: 'Our Comprehensive Team Approach',
    },
  ],
  intro: {
    text: `
      <p>Our team of professional therapists are here to help.Come learn and build confidence knowing yourself or your child is in the right hands.</p>
    `,
    title: 'Why Choose Elite DNA Therapy?',
  },
}
