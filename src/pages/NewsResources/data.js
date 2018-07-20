import { Pdf } from '../../global/icons'

const ArticleImageOne = '/img/news-resources/article-1.jpg'
const ArticleImageTwo = '/img/news-resources/article-2.jpg'
const ArticleImageThree = '/img/news-resources/article-3.jpg'
const ArticleImageFour = '/img/news-resources/article-4.jpg'
const ArticleImageFive = '/img/news-resources/article-5.jpg'
const ArticleImageSix = '/img/news-resources/article-6.jpg'

const IntegratedServices = '/pdfs/IntegratedServices-Ap2005.pdf'
const UDLFactSheet = '/pdfs/UDL-fact-sheet.pdf'
const QuarterThreeNewsletter = '/pdfs/2018-Q3-Newsletter.pdf'

export const data = {
  articles: [
    {
      image: ArticleImageOne,
      link: {
        external: true,
        path:
          'https://www.mother.ly/parenting/5-more-things-moms-must-add-to-their-to-do-list',
        text: 'Parent.co',
      },
      source: 'Parent.co',
      title: '5 Simple Things Moms Can Do to Care for Themselves',
    },
    {
      image: ArticleImageTwo,
      link: {
        external: true,
        path:
          'https://genomind.com/an-eastern-and-western-perspective-on-personalized-medicine',
        text: 'Genomind.com',
      },
      source: 'Genomind.com',
      title: 'An Eastern & Western Perspective on Personalized Medicine',
    },
    {
      image: ArticleImageThree,
      link: {
        external: true,
        path:
          'https://adaa.org/blog/helping-your-anxious-teen-cope-with-a-panic-attack',
        text: 'ADAA.org',
      },
      source: 'ADAA.org',
      title: 'Helping Your Anxious Teen Cope with a Panic Attack',
    },
    {
      image: ArticleImageFour,
      link: {
        external: true,
        path:
          'https://differentnotless.us/products/three-sided-toothbrush-special-needs-adultchild-toothbrush',
        text: 'differentnotless.us',
      },
      source: 'differentnotless.us',
      title: 'Electric Three Sided Toothbrush for Autism & Special Needs',
    },
    {
      image: ArticleImageFive,
      link: {
        external: true,
        path: 'https://theflipplan.com/nagging-much-video/',
        text: 'theflipplan.com',
      },
      source: 'theflipplan.com',
      title: 'The “No More Nagging” Chart',
    },
    {
      image: ArticleImageSix,
      link: {
        external: true,
        path: 'https://www.additudemag.com/slideshows/famous-people-with-adhd/',
        text: 'additudemag.com',
      },
      source: 'additudemag.com',
      title: "Can't Stop the (ADHD) Feeling!",
    },
  ],
  helpfulTools: {
    resources: [
      {
        copy: {
          link: {
            path: IntegratedServices,
            text: 'Download',
            type: 'download',
          },
          text: `
            <p>By R.A. McWilliam & Stacy Scott Here is a great research paper discussing the importance of integrating therapy into the classroom from the National Individualizing Preschool Inclusion Project.</p>
          `,
          title: 'Integrating Therapy Into The Classroom',
        },
        icon: Pdf,
      },
      {
        copy: {
          link: {
            path: UDLFactSheet,
            text: 'Download',
            type: 'download',
          },
          text: `
            <p>The UDL fact sheet is an excellent educational resource from the <strong><a href="https://www.aota.org/" target="_blank">American Occupational Therapy Association</a></strong>.</p>
          `,
          title: 'Universal Design for Learning (UDL)',
        },
        icon: Pdf,
      },
      {
        copy: {
          link: {
            path: QuarterThreeNewsletter,
            text: 'Download',
            type: 'download',
          },
          text: `
            <p>This is the third quarter edition of our newsletter.</p>
          `,
          title: '2018 Q3 Newsletter',
        },
        icon: Pdf,
      },
    ],
    title: 'Helpful Tools',
  },
  hero: {
    copy: {
      links: [],
      subTitle: '',
      text: `
        <p>We do our best to curate the most relevant and helpful articles and tools for you to reference on your journey to a happier life.</p>
      `,
      title: 'News & Resources',
    },
    image: '',
  },
  meta: {
    keywords: [
      'Articles',
      'Newsletter',
      'Email',
      'Tools',
      'News',
      'Resources',
      'Tips',
      'ADHD',
      'Anxiety',
      'Updates',
      'Contact',
    ],
    title: 'News & Resources',
  },
}
