type Navlinks = {
  title: string;
  link: string;
}[];

type HeroData = {
  heading: string;
  subheading: string;
  description: string;
  tagTitles: string[];
  ctaText: string;
  ctaLink: string;
};

export const heroData: HeroData = {
  heading: 'Consistency and Community',
  subheading: 'An unmatched Learning Experience for coding courses.',
  description:
    'Content is every where, we provide a learning experience that is unmatched - bounties, peer learning, code reviews, virtual hostel, alumni network, doubt sessions and group projects.',
  tagTitles: [
    'Peer Learning',
    'Code Reviews',
    'Virtual Hostel',
    'Doubt Sessions',
    'Bounties',
  ],
  ctaText: 'Check All Live Cohorts',
  ctaLink: 'https://courses.chaicode.com/learn/view-all?show=batch&type=17',
};

export const navlinks: Navlinks = [
  {
    title: 'Cohorts',
    link: 'https://courses.chaicode.com/learn',
  },
  {
    title: 'Udemy',
    link: 'https://www.udemy.com/course/web-dev-master',
  },
  {
    title: 'Docs',
    link: 'https://www.chaidocs.com',
  },
  {
    title: 'Reviews',
    link: 'https://www.chaicode.com/reviews',
  },
];
