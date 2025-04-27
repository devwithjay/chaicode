import BharatUIImg from '@assets/images/bharat-ui.jpg';
import BoardifyImg from '@assets/images/boardify.jpg';
import BountiesImg from '@assets/images/bounties.jpg';
import ChocoUIImg from '@assets/images/choco-ui.jpg';
import CodingHostelImg from '@assets/images/coding-hostel.jpg';
import JKImg from '@assets/images/jk.png';
import LeetlabImg from '@assets/images/leetlab.jpg';
import PeerReviewImg from '@assets/images/peer-review.jpg';
import ProfessionalTeachingImg from '@assets/images/professional-teaching.jpg';
import RevisionClassImg from '@assets/images/revision-class.jpg';
import SnappyUIImg from '@assets/images/snappy-ui.jpg';
import SwingUIImg from '@assets/images/swing-ui.jpg';

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
    videoId: string;
    learnMoreText: string;
    learnMoreLink: string;
  }[];
};

type ReviewsData = {
  heading: string;
  subHeading: string;
  ctaText: string;
  ctaLink: string;
};

type UdemyData = {
  heading: string;
  subHeading: string;
  courses: {
    title: string;
    description: string;
    rating: string;
    price: number;
    originalPrice: number;
    videoId: string;
    learnMoreText: string;
    learnMoreLink: string;
  }[];
};

type BenefitsData = {
  heading: string;
  subHeading: string;
  benefits: {
    title: string;
    description: string;
    imageUrl: string;
  }[];
  alumni: {
    heading: string;
    description: string;
    imageUrls: string[];
  };
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
      videoId: 'Kjd-SWpe1do',
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
      videoId: 'VNb_LawBBWU',
      learnMoreText: 'Learn More',
      learnMoreLink:
        'https://courses.chaicode.com/learn/batch/about?bundleId=227321',
    },
    {
      title: 'DevOps for developers 1.0',
      description: 'Perfect guide to get started with DevOps',
      startDate: 'April 15, 2025',
      duration: '1-2 months',
      price: 4999,
      originalPrice: 7999,
      videoId: 'oBLpqSHc3lA',
      learnMoreText: 'Learn More',
      learnMoreLink:
        'https://courses.chaicode.com/learn/batch/about?bundleId=227963',
    },
    {
      title: 'Web Dev Cohort 1.0',
      description: 'Ultimate guide to build software on web.',
      startDate: 'January 11, 2025',
      duration: '6 months',
      price: 6999,
      originalPrice: 8999,
      videoId: 'yG8JMlldoCE',
      learnMoreText: 'Learn More',
      learnMoreLink:
        'https://courses.chaicode.com/learn/batch/about?bundleId=214297',
    },
    {
      title: 'Coding Hero 2025',
      description: 'Our Community focused program for students.',
      startDate: 'Starts Constantly going',
      duration: 'Always running',
      price: 299,
      originalPrice: 599,
      videoId: 'Fw3FezexzV0',
      learnMoreText: 'Learn More',
      learnMoreLink:
        'https://courses.chaicode.com/learn/batch/about?bundleId=226894',
    },
  ],
};

export const reviewsData: ReviewsData = {
  heading: 'Our Students Feedbacks',
  subHeading:
    'Explore the incredible advantages of enrolling in our courses and enhancing your skills.',
  ctaText: 'Join Live Cohorts Now',
  ctaLink: 'https://courses.chaicode.com/learn/view-all?show=batch&type=17',
};

export const udemyData: UdemyData = {
  heading: 'Our Courses on Udemy',
  subHeading:
    'Join thousands of students who have transformed their careers with our comprehensive courses.',
  courses: [
    {
      title: 'Complete web development course',
      description:
        'Only web development course that you will need. Covers HTML, CSS, Tailwind, Node, React, MongoDB, Prisma, Deployment etc.',
      rating: '4.7',
      price: 299,
      originalPrice: 599,
      videoId: 'KZ31wDjYleI',
      learnMoreText: 'Learn More',
      learnMoreLink:
        'https://courses.chaicode.com/learn/batch/about?bundleId=226894',
    },
    {
      title: 'Complete web development course',
      description:
        'Only web development course that you will need. Covers HTML, CSS, Tailwind, Node, React, MongoDB, Prisma, Deployment etc.',
      rating: '4.7',
      price: 299,
      originalPrice: 599,
      videoId: 'KZ31wDjYleI',
      learnMoreText: 'Learn More',
      learnMoreLink:
        'https://courses.chaicode.com/learn/batch/about?bundleId=226894',
    },
    {
      title: 'Complete web development course',
      description:
        'Only web development course that you will need. Covers HTML, CSS, Tailwind, Node, React, MongoDB, Prisma, Deployment etc.',
      rating: '4.7',
      price: 299,
      originalPrice: 599,
      videoId: 'KZ31wDjYleI',
      learnMoreText: 'Learn More',
      learnMoreLink:
        'https://courses.chaicode.com/learn/batch/about?bundleId=226894',
    },
  ],
};

export const benefitsData: BenefitsData = {
  heading: 'Key Benefits of Cohorts',
  subHeading:
    'Cohorts are best way to learn because you finish the course in a timely manner',
  benefits: [
    {
      title: 'Taught by Professionals',
      description:
        'Our cohorts are being taught by top industry experts and educators.',
      imageUrl: ProfessionalTeachingImg,
    },
    {
      title: 'Bounties',
      description:
        'Earn rewards, from Cash to MacBook. Keeps you motivated to work hard.',
      imageUrl: BountiesImg,
    },
    {
      title: 'Coding Hostels',
      description:
        'There is nothing like late night discussion with fellow learners and solving bugs.',
      imageUrl: CodingHostelImg,
    },
    {
      title: 'Peer Code Reviews',
      description:
        'With our internal tools like Masterji, every code assignment gets feedback to improve your code.',
      imageUrl: PeerReviewImg,
    },
    {
      title: 'Leet Lab',
      description:
        'Our in-house built LeetCode style platform that helps you to understand foundation of programming language.',
      imageUrl: LeetlabImg,
    },
    {
      title: 'Revision Classes',
      description:
        'We have so many peer classes by fellow learners that you get so many chances to learn that topic.',
      imageUrl: RevisionClassImg,
    },
  ],
  alumni: {
    heading: 'Alumni Network and Job Listings',
    description: `The alumni network that you always wished for in your college. We have a dedicated platform where students get to know each other, do projects, make agencies, and join Hackathons.\nOur HR team also posts regular job updates that you can apply directly whenever you are ready.`,
    imageUrls: [
      JKImg,
      'https://pbs.twimg.com/profile_images/1900208613383376896/vZFa9ezR_400x400.jpg',
      'https://pbs.twimg.com/profile_images/1743580215765590016/GABZN__C_400x400.jpg',
      'https://pbs.twimg.com/profile_images/1911152877298458624/S1urBdQX_400x400.jpg',
      'https://pbs.twimg.com/profile_images/1894995896145977346/AEs7pesh_400x400.jpg',
      'https://media.licdn.com/dms/image/v2/D4D03AQHx9vUumgZWLQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1731353865679?e=1751500800&v=beta&t=fBLCffr4NfZXg99l3f5zBwDtk_fpVyYFZDGdptwbiJ8',
      'https://pbs.twimg.com/profile_images/1879974632683683840/iL4zMCRJ_400x400.jpg',
      'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fHww',
      'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D',
      'https://plus.unsplash.com/premium_photo-1689977807477-a579eda91fa2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D',
      'https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D',
      'https://plus.unsplash.com/premium_photo-1689977871600-e755257fb5f8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE3fHxhdmF0YXJ8ZW58MHx8MHx8fDA%3D',
      'https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM3fHxhdmF0YXJ8ZW58MHx8MHx8fDA%3D',
    ],
  },
};
