import { Apple } from '../../../global/icons'

const heroImage = '/img/care-services/nutrition-counseling/NutirtionHero.jpg'
const fruit = '/img/care-services/nutrition-counseling/fruit.png'

export const data = {
  hero: {
    copy: {
      links: [
        {
          path: '/contact-us',
          text: 'Make An Appointment',
        },
      ],
      subTitle: '',
      text: `
        <p>Our registered dietitian can help you stay healthy by teaching you and your family how to choose foods wisely and develop a healthy lifestyle. Balance, variety and moderation is key for the entire family. We don’t just treat the child, the entire family should be on board.</p>
      `,
      title: 'Nutrition Counseling',
    },
    image: heroImage,
  },
  howWeCanHelp: {
    copy: {
      text: `
        <h3>How we can help:</h3>
        <ul>
          <li>Weight management</li>
          <li>Meal planning</li>
          <li>Food allergies and intolerances</li>
          <li>Picky eaters</li>
          <li>Pediatric metabolic disorders</li>
          <li>Failure to thrive / infant feeding</li>
          <li>Diabetes</li>
          <li>Heart disease</li>
          <li>Kidney disease</li>
          <li>Sports nutrition</li>
        </ul>
      `,
    },
    image: fruit,
  },
  meta: {
    tags: [{ content: heroImage, property: 'og:image' }],
    title: 'Nutrition Counseling',
  },
  pickyEater: {
    icon: Apple,
    text: `
      <p>We can help everyone stay healthy by providing: healthy recipes, balanced meal plans and menus (from infants to adults), shopping tips, grocery lists and even breastfeeding support. Our Pediatric Nutritional and Dietary Counseling Services are provided by Registered Dietician Maria F. Butler, MS, RD, LD/N.</p>
    `,
    title: 'Is your child a picky eater?',
  },
}
