import React from 'react';

import {
  FaDocker,
  FaGitAlt,
  FaHtml5,
  FaJs,
  FaLinux,
  FaNodeJs,
  FaPython,
  FaReact,
  FaServer,
} from 'react-icons/fa';
import {
  SiCplusplus,
  SiDjango,
  SiFlutter,
  SiGo,
  SiKubernetes,
  SiNextdotjs,
  SiTypescript,
  SiVuedotjs,
} from 'react-icons/si';

import {
  AndroidMockupImg,
  BharatUIImg,
  BoardifyImg,
  BountiesImg,
  ChocoUIImg,
  CodingHostelImg,
  CommunityImg,
  HCLaptop,
  HiteshChoudharyImg,
  IphoneMockupImg,
  JKImg,
  LeetlabImg,
  PeerReviewImg,
  ProfessionalTeachingImg,
  RevisionClassImg,
  SnappyUIImg,
  SwingUIImg,
} from '@/assets/images';
import {
  AkashImg,
  AnirudhImg,
  HiteshImg,
  PiyushImg,
  PriyaImg,
  RakeshImg,
} from '@/assets/mentors';

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
    alumniList: {
      url: string;
      website: string;
    }[];
  };
};

type WhyChaiCodeData = {
  heading: string;
  subHeading: string;
  cards: {
    title: string;
    description: string;
  }[];
  featured: {
    name: string;
    description: string;
    approachTitle: string;
    approachDescription: string;
    imageUrl: string;
    socialLinks: {
      github?: string;
      twitter?: string;
      linkedin?: string;
      instagram?: string;
      youtube?: string;
      discord?: string;
    };
  };
  ctaText: string;
  ctaLink: string;
};

type TopicsCloudData = {
  heading: string;
  subHeading: string;
  topics: {
    title: string;
    youtubeLink: string;
    icon: React.ReactNode;
  }[];
};

type CommunityData = {
  heading: string;
  subHeading: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  imageUrl: string;
};

type FreeApiData = {
  heading: string;
  subHeading: string;
  descriptionPoints: string[];
  ctaText: string;
  ctaLink: string;
  videoId: string;
};

type AppData = {
  heading: string;
  subHeading: string;
  description: string;
  descriptionPoints: string[];
  appStoreLink: string;
  playStoreLink: string;
  iphoneImageUrl: string;
  androidImageUrl: string;
};

type MentorData = {
  heading: string;
  subHeading: string;
  mentor: {
    id: string;
    name: string;
    slug: string;
    description?: string;
    workingAt: string;
    image: string;
  }[];
};

type YTData = {
  heading: string;
  subHeading: string;
  imageUrl: string;
  channels: {
    name: string;
    username: string;
    subscribers: string;
    videos: string;
    language: string;
    link: string;
  }[];
};

type FooterData = {
  about: {
    tagline: string;
    copyright: string;
    socialLinks: {
      label: string;
      url: string;
    }[];
  };
  products: {
    title: string;
    links: {
      name: string;
      url: string;
    }[];
  };
  resources: {
    title: string;
    links: {
      name: string;
      url: string;
    }[];
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
    link: '/reviews',
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
    'https://www.youtube.com/embed/dz5C-r0Z9AA',
  ],
};

export const testimonialsData: TestimonialsData = {
  heading: 'Tweet Love',
  subHeading: 'Love that we get from our community.',
};

export const tweetLoveIds = [
  '1893727198902726782',
  '1914586639445209258',
  '1913569806923497600',
  '1893719871722074340',
  '1894827186106048771',
  '1913298295587328118',
  '1916549464187076663',
  '1906390359841640771',
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
      websiteUrl: 'https://snappy-ui-240237131712.us-central1.run.app/',
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
      learnMoreText: 'View Details',
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
      learnMoreText: 'View Details',
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
      learnMoreText: 'View Details',
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
      learnMoreText: 'View Details',
      learnMoreLink:
        'https://courses.chaicode.com/learn/batch/about?bundleId=214297',
    },
    {
      title: 'DSA with C++ 1.0',
      description: 'Focus on DSA with C++ for interview preparation.',
      startDate: 'May 3, 2025',
      duration: '2-3 months',
      price: 5999,
      originalPrice: 7999,
      videoId: 'dz5C-r0Z9AA',
      learnMoreText: 'View Details',
      learnMoreLink:
        'https://courses.chaicode.com/learn/batch/about?bundleId=230409',
    },
    {
      title: 'Coding Hero 2025',
      description: 'Our Community focused program for students.',
      startDate: 'Starts Constantly going',
      duration: 'Always running',
      price: 299,
      originalPrice: 599,
      videoId: 'Fw3FezexzV0',
      learnMoreText: 'View Details',
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

export const feedbackTweetIds = [
  '1903057026202341688',
  '1913292313842921624',
  '1913921323585454332',
  '1913644463764668627',
  '1912186485433835980',
  '1909306717252313153',
  '1907859532208095374',
  '1906393735203836076',
  '1903337969823649812',
  '1902328406856831128',
  '1899207758282698862',
  '1898438250311692678',
  '1897710019765801384',
  '1895090434013306905',
  '1894830530904105454',
  '1894701847463461309',
  '1894354105037890003',
  '1893620097593298992',
  '1892842466287513736',
  '1892652656398659904',
  '1891770465015742856',
  '1891174927442583730',
  '1888654308872442244',
];

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
      learnMoreText: 'View Details',
      learnMoreLink:
        'https://www.udemy.com/course/web-dev-master/?couponCode=CHAIFRIDAY80',
    },
    {
      title: 'Complete web development course',
      description:
        'Only web development course that you will need. Covers HTML, CSS, Tailwind, Node, React, MongoDB, Prisma, Deployment etc.',
      rating: '5.0',
      price: 299,
      originalPrice: 599,
      videoId: 'KZ31wDjYleI',
      learnMoreText: 'View Details',
      learnMoreLink:
        'https://www.udemy.com/course/web-dev-master/?couponCode=CHAIFRIDAY80',
    },
    {
      title: 'Complete web development course',
      description:
        'Only web development course that you will need. Covers HTML, CSS, Tailwind, Node, React, MongoDB, Prisma, Deployment etc.',
      rating: '4.2',
      price: 299,
      originalPrice: 599,
      videoId: 'KZ31wDjYleI',
      learnMoreText: 'View Details',
      learnMoreLink:
        'https://www.udemy.com/course/web-dev-master/?couponCode=CHAIFRIDAY80',
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
    heading: 'Our Alumni, Our Pride',
    description: `We’ve built the kind of alumni network you wish your college had. From projects and peer learning to job updates and hackathons — it's all happening here.\nStudents collaborate, grow, and explore new opportunities, while our HR team regularly shares job listings to support your career.`,
    alumniList: [
      { url: JKImg, website: 'https://devwithjay.com' },
      {
        url: 'https://img.freepik.com/free-photo/close-up-portrait-young-bearded-man-white-shirt-jacket-posing-camera-with-broad-smile-isolated-gray_171337-629.jpg?t=st=1745999364~exp=1746002964~hmac=e90f19389ac83e03a1c6dd93724979bc00eef2a1984791beb6e3067fc4c3e142&w=1800',
        website: 'https://devwithjay.com',
      },
      {
        url: 'https://img.freepik.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129416.jpg',
        website: 'https://devwithjay.com',
      },
      {
        url: 'https://img.freepik.com/premium-photo/handsome-young-man-25-30-years-old-suit_131087-651.jpg',
        website: 'https://devwithjay.com',
      },
      {
        url: 'https://img.freepik.com/free-photo/portrait-handsome-young-man-closeup_176420-15568.jpg',
        website: 'https://devwithjay.com',
      },
      {
        url: 'https://images.unsplash.com/photo-1736194689767-9e3c4e7bd7f6?w=900',
        website: 'https://devwithjay.com',
      },
      {
        url: 'https://img.freepik.com/premium-photo/cheerful-young-man-smart-casual-wear_220507-9500.jpg',
        website: 'https://devwithjay.com',
      },
      {
        url: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=900',
        website: 'https://devwithjay.com',
      },
      {
        url: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=900',
        website: 'https://devwithjay.com',
      },
      {
        url: 'https://plus.unsplash.com/premium_photo-1689977807477-a579eda91fa2?w=900',
        website: 'https://devwithjay.com',
      },
      {
        url: 'https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?w=900',
        website: 'https://devwithjay.com',
      },
      {
        url: 'https://plus.unsplash.com/premium_photo-1689977871600-e755257fb5f8?w=900',
        website: 'https://devwithjay.com',
      },
      {
        url: 'https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?w=900',
        website: 'https://devwithjay.com',
      },
    ],
  },
};

export const whyChaiCodeData: WhyChaiCodeData = {
  heading: 'But Why ChaiCode?',
  subHeading: 'ChaiCode exists because we love tech and teaching',
  cards: [
    {
      title: 'Comprehensive Curriculum',
      description:
        'Master key concepts and hands-on skills with clarity and confidence. Learn what truly matters, the right way — thorough, practical, and easy to understand.',
    },
    {
      title: 'Code and Chill',
      description:
        'Coding should be fun, not frightening. It might feel tough at first, but with time and practice, everything starts to click and fall into place.',
    },
    {
      title: 'You finish it',
      description:
        'Our cohorts are a collaborative journey — students learn together, stay motivated, and complete the course on time as a community.',
    },
    {
      title: 'Improve Communication',
      description:
        'One of the best ways to boost communication skills is through practice. Our peer classes make it happen where co-learners teach, share, and grow together.',
    },
    {
      title: 'Industry Guests',
      description:
        'We’re connected with industry experts and regularly bring them into our classes for engaging, fun, and insightful sessions with students.',
    },
    {
      title: 'Bounties',
      description:
        'Every cohort comes with exciting cash prizes and even some MacBook giveaways! It’s our way of keeping motivation high and the learning fun.',
    },
  ],
  featured: {
    name: 'Hitesh Choudhary',
    description:
      'Retired from corporate and now a full-time YouTuber, founder of LCO (acquired), ex-CTO, and Sr. Director at PW. Built 2 YT channels (950k & 470k) and stepped into 43 countries.',
    approachTitle: 'Approach',
    approachDescription:
      'Project-based courses with peer learning, bounties, and fun activities to keep learning exciting and practical.',
    imageUrl: HiteshChoudharyImg,
    socialLinks: {
      github: 'https://github.com/hiteshchoudhary',
      twitter: 'https://twitter.com/hiteshdotcom',
      linkedin: 'https://www.linkedin.com/in/hiteshchoudhary/',
      instagram: 'https://www.instagram.com/hiteshchoudharyofficial/',
      youtube: 'https://www.youtube.com/@chaiaurcode',
      discord: 'https://discord.com/invite/WDrH3zuWFb',
    },
  },
  ctaText: 'Join Live Cohorts Now',
  ctaLink: 'https://courses.chaicode.com/learn/view-all?show=batch&type=17',
};

export const topicsCloudData: TopicsCloudData = {
  heading: 'Topics Cloud',
  subHeading: 'You can find videos and courses on topics and much more',
  topics: [
    {
      title: 'Django',
      youtubeLink:
        'https://youtube.com/playlist?list=PLu71SKxNbfoDOf-6vAcKmazT92uLnWAgy&feature=shared',
      icon: <SiDjango />,
    },
    {
      title: 'Python',
      youtubeLink:
        'https://youtube.com/playlist?list=PLu71SKxNbfoBsMugTFALhdLlZ5VOqCg2s&feature=shared',
      icon: <FaPython />,
    },
    {
      title: 'React',
      youtubeLink:
        'https://youtube.com/playlist?list=PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige&feature=shared',
      icon: <FaReact />,
    },
    {
      title: 'HTML',
      youtubeLink:
        'https://youtube.com/playlist?list=PLu71SKxNbfoDBNF5s-WH6aLbthSEIMhMI&feature=shared',
      icon: <FaHtml5 />,
    },
    {
      title: 'Javascript',
      youtubeLink:
        'https://youtube.com/playlist?list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&feature=shared',
      icon: <FaJs />,
    },
    {
      title: 'NextJS',
      youtubeLink:
        'https://youtube.com/playlist?list=PLu71SKxNbfoBAaWGtn9GA2PTw0HO0tXzq&feature=shared',
      icon: <SiNextdotjs />,
    },
    {
      title: 'C++',
      youtubeLink:
        'https://youtube.com/playlist?list=PLu71SKxNbfoCPfgKZS8UE0MDuwiKvL8zi&feature=shared',
      icon: <SiCplusplus />,
    },
    {
      title: 'MCP Server',
      youtubeLink: 'https://youtu.be/dZyQNy3-HjU?feature=shared',
      icon: <FaServer />,
    },
    {
      title: 'Kubernetes',
      youtubeLink: 'https://youtu.be/7XDeI5fyj3w?feature=shared',
      icon: <SiKubernetes />,
    },
    {
      title: 'React Native',
      youtubeLink:
        'https://youtube.com/playlist?list=PLu71SKxNbfoAKL_sTfg5CgCxlrpH5b2jS&feature=shared',
      icon: <FaReact />,
    },
    {
      title: 'Docker',
      youtubeLink:
        'https://youtube.com/playlist?list=PLRAV69dS1uWTJLvDP4Veld5F05rJAmOcp&feature=shared',
      icon: <FaDocker />,
    },
    {
      title: 'Backend',
      youtubeLink:
        'https://youtube.com/playlist?list=PLu71SKxNbfoBGh_8p_NS-ZAh6v7HhYqHW&feature=shared',
      icon: <FaNodeJs />,
    },
    {
      title: 'Git',
      youtubeLink:
        'https://youtube.com/playlist?list=PLRAV69dS1uWT4v4iK1h6qejyhGObFH9_o&feature=shared',
      icon: <FaGitAlt />,
    },
    {
      title: 'TypeScript',
      youtubeLink:
        'https://youtube.com/playlist?list=PLRAV69dS1uWRPSfKzwZsIm-Axxq-LxqhW&feature=shared',
      icon: <SiTypescript />,
    },
    {
      title: 'Vue JS',
      youtubeLink:
        'https://youtube.com/playlist?list=PLRAV69dS1uWTpHQgiV4rZFlnuS8XDl71A&feature=shared',
      icon: <SiVuedotjs />,
    },
    {
      title: 'Flutter',
      youtubeLink:
        'https://youtube.com/playlist?list=PLRAV69dS1uWT-ooTYHCqgxMTGA233JMrP&feature=shared',
      icon: <SiFlutter />,
    },
    {
      title: 'Linux',
      youtubeLink:
        'https://youtube.com/playlist?list=PLRAV69dS1uWSH1yebxsz5BVF2acAV5hhw&feature=shared',
      icon: <FaLinux />,
    },
    {
      title: 'Golang',
      youtubeLink:
        'https://youtube.com/playlist?list=PLRAV69dS1uWSR89FRQGZ6q9BR2b44Tr9N&feature=shared',
      icon: <SiGo />,
    },
  ],
};

export const communityData: CommunityData = {
  heading: 'Community',
  subHeading: '80,000+ Active Coders on Discord',
  description: 'Join our community where creativity thrives.',
  ctaText: 'Join our Discord',
  ctaLink: 'https://discord.com/invite/WDrH3zuWFb',
  imageUrl: CommunityImg,
};

export const freeApiData: FreeApiData = {
  heading: 'FreeAPI - Open Source',
  subHeading: 'Unlock Your Potential with Our API Hub',
  descriptionPoints: [
    'Our API Hub is designed to streamline your learning experience in API handling across various programming languages.',
    'With this resource, you can effortlessly build and showcase your front-end portfolio in both web and mobile applications.',
    'Join us to enhance your skills and take your coding projects to the next level!',
  ],
  ctaText: 'Check FreeAPI Docs',
  ctaLink: 'https://freeapi.app/',
  videoId: 'DxedlhTyR7Q',
};

export const appData: AppData = {
  heading: 'Learn on the go',
  subHeading: 'Take your coding journey anywhere with ChaiCode Mobile App.',
  description:
    'Access courses, join live sessions, and connect with the community — all from your pocket.',
  descriptionPoints: [
    'Offline course access',
    'Live session notifications',
    'Revision while commuting',
  ],
  appStoreLink: 'https://apps.apple.com/in/app/chaicode/id6504993143',
  playStoreLink:
    'https://play.google.com/store/apps/details?id=com.chaicode.courses&pcampaignid=web_share',
  iphoneImageUrl: IphoneMockupImg,
  androidImageUrl: AndroidMockupImg,
};

export const mentorsData: MentorData = {
  heading: 'Meet our Experts',
  subHeading:
    'Our team is filled with passionate teachers and mentors who love helping the next generation of developers grow fast.',
  mentor: [
    {
      id: '1',
      name: 'Hitesh Choudhary',
      slug: 'hitesh-choudhary',
      description:
        'Founder of ChaiCohort, passionate about building the next generation of developers.',
      workingAt: 'Founder of Chai Cohort',
      image: HiteshImg,
    },
    {
      id: '2',
      name: 'Piyush Garg',
      slug: 'piyush-garg',
      workingAt: 'Teacher at Chai Cohort',
      image: PiyushImg,
    },
    {
      id: '3',
      name: 'Priya Bhatia',
      slug: 'priya-bhatia',
      workingAt: 'Teacher at Chai Cohort',
      image: PriyaImg,
    },
    {
      id: '4',
      name: 'Rakesh K',
      slug: 'rakesh-k',
      workingAt: 'Teacher at Chai Cohort',
      image: RakeshImg,
    },
    {
      id: '5',
      name: 'Anirudh Jwala',
      slug: 'anirudh-jwala',
      workingAt: 'Teaching Assistant at Chai Cohort',
      image: AnirudhImg,
    },
    {
      id: '6',
      name: 'Akash Kadlag',
      slug: 'akash-kadlag',
      workingAt: 'Teaching Assistant at Chai Cohort',
      image: AkashImg,
    },
  ],
};

export const ytData: YTData = {
  heading: 'Explore Our Engaging YouTube Channels',
  subHeading: 'Follow our channels for free learning resources.',
  imageUrl: HCLaptop,
  channels: [
    {
      name: 'Chai aur Code',
      username: '@chaiaurcode',
      subscribers: '600K',
      videos: '545',
      language: 'हिंदी',
      link: 'https://www.youtube.com/@chaiaurcode',
    },
    {
      name: 'Hitesh Choudhary',
      username: '@HiteshCodeLab',
      subscribers: '987K',
      videos: '1.6K',
      language: 'English',
      link: 'https://www.youtube.com/@HiteshCodeLab',
    },
  ],
};

export const footerData: FooterData = {
  about: {
    tagline: 'Home for programmers',
    copyright: '© 2025 ChaiCode. All rights reserved.',
    socialLinks: [
      { label: 'YouTube', url: 'https://www.youtube.com/@chaiaurcode' },
      { label: 'Twitter', url: 'https://twitter.com/hiteshdotcom' },
      { label: 'GitHub', url: 'https://github.com/hiteshchoudhary' },
      {
        label: 'LinkedIn',
        url: 'https://www.linkedin.com/in/hiteshchoudhary/',
      },
      {
        label: 'Instagram',
        url: 'https://www.instagram.com/hiteshchoudharyofficial/',
      },
      { label: 'Discord', url: 'https://discord.com/invite/WDrH3zuWFb' },
    ],
  },
  products: {
    title: 'Products',
    links: [
      { name: 'Courses', url: 'https://courses.chaicode.com/learn' },
      {
        name: 'Cohorts',
        url: 'https://courses.chaicode.com/learn/view-all?show=batch&type=17',
      },
      {
        name: 'Coding Hero',
        url: 'https://courses.chaicode.com/learn/batch/about?bundleId=226894',
      },
      { name: 'FreeAPI', url: 'https://freeapi.app/' },
      { name: 'Masterji', url: 'https://masterji.co/login' },
    ],
  },
  resources: {
    title: 'Resources',
    links: [
      { name: 'Docs', url: 'https://docs.chaicode.com/' },
      { name: 'Privacy Policy', url: '/privacy-policy' },
      { name: 'Terms of Service', url: '/terms-of-service' },
      { name: 'Pricing Policy', url: '/pricing-policy' },
      { name: 'Refund Policy', url: '/refund-policy' },
    ],
  },
};
