type Navlinks = {
  title: string;
  link: string;
}[];

type HeroData = {
  heading: string;
  subHeading: string;
  description: string;
  tagTitles: string[];
  ctaText: string;
  ctaLink: string;
  videoLinks: string[];
};

type TestimonialsData = {
  heading: string;
  subHeading: string;
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

export const heroData: HeroData = {
  heading: 'Consistency and Community',
  subHeading: 'An unmatched Learning Experience for coding courses.',
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
  videoLinks: [
    'https://www.youtube.com/embed/Kjd-SWpe1do',
    'https://www.youtube.com/embed/VNb_LawBBWU',
    'https://www.youtube.com/embed/mV3VvMG4jzw',
    'https://www.youtube.com/embed/oBLpqSHc3lA',
  ],
};

export const testimonialsData: TestimonialsData = {
  heading: 'Tweet Love',
  subHeading: 'Love that we get from our community.',
};

export const tweetIds = [
  '1903057026202341688',
  '1893727198902726782',
  '1914586639445209258',
  '1913569806923497600',
  '1893719871722074340',
  '1894827186106048771',
  '1893355231586529741',
  '1907859532208095374',
  '1906393735203836076',
];
