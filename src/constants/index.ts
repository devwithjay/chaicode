import BharatUIImg from '@assets/images/bharat-ui.jpg';
import BoardifyImg from '@assets/images/boardify.jpg';
import ChocoUIImg from '@assets/images/choco-ui.jpg';
import CHImg from '@assets/images/coding-hero.jpg';
import DSImg from '@assets/images/data-science.jpg';
import DevOpsImg from '@assets/images/devops.jpg';
import GenAiImg from '@assets/images/gen-ai.jpg';
import SnappyUIImg from '@assets/images/snappy-ui.jpg';
import SwingUIImg from '@assets/images/swing-ui.jpg';
import WDCImg from '@assets/images/webdevcohort.jpg';

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

type AchievementsData = {
  heading: string;
  subHeading: string;
  productsData: {
    id: string;
    imageUrl: string;
    title: string;
    description: string;
    websiteUrl: string;
    socialLinks?: {
      twitter?: string;
      linkedin?: string;
      github?: string;
    };
  }[];
};

type PricingData = {
  heading: string;
  subHeading: string;
  courses: {
    title: string;
    description: string;
    startDate: string;
    duration: string;
    price: number;
    originalPrice: number;
    imageUrl: string;
    learnMoreText: string;
    learnMoreLink: string;
  }[];
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
    'Content is everywhere, we provide a learning experience that is unmatched - bounties, peer learning, code reviews, virtual hostel, alumni network, doubt sessions, and group projects.',
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
    'https://www.youtube.com/embed/yG8JMlldoCE',
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

export const achievementsData: AchievementsData = {
  heading: 'Achievements',
  subHeading:
    'Our students are not only working in big tech companies but are now founders of funded startups and product creators.',
  productsData: [
    {
      id: '1',
      imageUrl: BharatUIImg,
      title: 'BharatUI',
      description: 'Powering Aatmanirbhar Design',
      websiteUrl: 'https://www.bharatui.com/',
      socialLinks: {
        twitter: 'https://x.com/bharatUI',
      },
    },
    {
      id: '2',
      imageUrl: ChocoUIImg,
      title: 'ChocoUI',
      description:
        'A curated collection of responsive, accessible React components.',
      websiteUrl: 'https://www.chocoui.live/',
      socialLinks: {
        twitter: 'https://x.com/chocoui001',
      },
    },
    {
      id: '3',
      imageUrl: SwingUIImg,
      title: 'SwingUI',
      description:
        'A modern Tailwind CSS component library that helps you sign sleek, responsive interfaces.',
      websiteUrl: 'https://swingui.com/',
      socialLinks: {
        twitter: 'https://x.com/swing_ui',
      },
    },
    {
      id: '4',
      imageUrl: SnappyUIImg,
      title: 'SnappyUI',
      description: 'A minimal and intuitive component library.',
      websiteUrl: 'https://snappyui.in/',
      socialLinks: {
        twitter: 'https://x.com/snappyui',
        linkedin: 'https://www.linkedin.com/company/snappyui/',
      },
    },
    {
      id: '5',
      imageUrl: BoardifyImg,
      title: 'Boardify',
      description: 'Better Kanban Board for your tasks.',
      websiteUrl: 'https://the-boardify.vercel.app',
      socialLinks: {
        twitter: 'https://x.com/devwithjay',
        linkedin: 'https://www.linkedin.com/in/devwithjay/',
        github: 'https://github.com/devwithjay/boardify',
      },
    },
  ],
};
export const pricingData: PricingData = {
  heading: 'Cohorts',
  subHeading: 'Live Training Classes',
  courses: [
    {
      title: 'Full Stack Data Science 1.0',
      description: 'From Python basics to project deployment.',
      startDate: 'April 12, 2025',
      duration: '6 months',
      price: 6999,
      originalPrice: 8999,
      imageUrl: DSImg,
      learnMoreText: 'Learn More',
      learnMoreLink:
        'https://courses.chaicode.com/learn/batch/about?bundleId=227817',
    },
    {
      title: 'GenAI with Python',
      description: 'Development side of AI application.',
      startDate: 'April 7, 2025',
      duration: '1-2 months',
      price: 4999,
      originalPrice: 7999,
      imageUrl: GenAiImg,
      learnMoreText: 'Learn More',
      learnMoreLink: 'https://courses.chaicode.com/learn/batch/about?bundleId=227321',
    },
    {
      title: 'DevOps for developers 1.0',
      description: 'Perfect guide to get started with DevOps',
      startDate: 'April 15, 2025',
      duration: '1-2 months',
      price: 4999,
      originalPrice: 7999,
      imageUrl: DevOpsImg,
      learnMoreText: 'Learn More',
      learnMoreLink: 'https://courses.chaicode.com/learn/batch/about?bundleId=227963',
    },
    {
      title: 'Web Dev Cohort 1.0',
      description: 'Ultimate guide to build software on web.',
      startDate: 'January 11, 2025',
      duration: '6 months',
      price: 6999,
      originalPrice: 8999,
      imageUrl: WDCImg,
      learnMoreText: 'Learn More',
      learnMoreLink: 'https://courses.chaicode.com/learn/batch/about?bundleId=214297',
    },
    {
      title: 'Coding Hero 2025',
      description: 'Our Community focused program for students.',
      startDate: 'Starts Constantly going',
      duration: 'Always running',
      price: 299,
      originalPrice: 599,
      imageUrl: CHImg,
      learnMoreText: 'Learn More',
      learnMoreLink: 'https://courses.chaicode.com/learn/batch/about?bundleId=226894',
    },
  ],
};
