import heroImage from './img/AboutUsHero.jpg'
import FounderProfile from './img/ElizabethDosoretz.jpg'

export const data = {
  founder: {
    image: FounderProfile,
    text: `
      <p>It had always been a life long goal of Elizabeth Dosoretz to work with children and their families. However, it wasn’t until she had her own children that she realized how hard parenting can be– and just how significant it is to have support, advocacy and resources.</p>
    `,
    title: 'More About Our Founder',
  },
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
        <h3>Life is Art. Paint Your Dreams.</h3>
        <p>Our unique interdisciplinary model allows our clinicians to evaluate a situation in it’s entirety. No better model for success exists.</p>
        <p>Bumps along the way shouldn’t be seen as a weakness, disaster or failure. It is our goal to use these moments to support, encourage and help our families. We can then develop stronger mechanisms and strategies to successfully grow and interact in social environments.</p>
      `,
      title: 'About Us',
    },
    image: heroImage,
  },
  reviews: [
    {
      author: 'Ashley',
      date: 'May 7th, 2017',
      text:
        "I could not have gotten through my sons diagnosis without them. Both Stephanie's, Azlund, Kristie-Leigh, and Erica are the most compassionate, kind, genuine people I have ever met! I would never get services from anyone else! Love you guys!",
    },
    {
      author: 'Tina',
      date: 'April 18th, 2017',
      text:
        'They are very friendly and professional. I would recommend then to anyone. Jaime McKenzie is so intelligent and understanding and I enjoy my therapy sessions with her. I always come out of there feeling better than when I went in.',
    },
    {
      author: 'Mariangela',
      date: 'April 1st, 2017',
      text:
        'I think the staff here is great. My family feels at peace knowing our loved one is getting the attention he deserves.',
    },
    {
      author: 'Casey',
      date: 'Dec 29th, 2016',
      text:
        'I go to the Cape and see Yanet and Lily...amazing people. I have been other places and this is by far my favorite.',
    },
  ],
}
