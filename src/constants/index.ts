import bookIcon from '@/assets/icons/book.svg';
import cohortIcon from '@/assets/icons/cohort.svg';
import docsIcon from '@/assets/icons/docs.svg';
import starIcon from '@/assets/icons/star.svg';

type Navlinks = {
  title: string;
  link: string;
  icon: string;
}[];

export const navlinks: Navlinks = [
  {
    title: 'Cohorts',
    link: 'https://www.chaicode.com/learn',
    icon: cohortIcon,
  },
  {
    title: 'Udemy',
    link: 'https://www.udemy.com/course/web-dev-master',
    icon: bookIcon,
  },
  {
    title: 'Docs',
    link: 'https://www.chaidocs.com',
    icon: docsIcon,
  },
  {
    title: 'Reviews',
    link: 'https://www.chaicode.com/reviews',
    icon: starIcon,
  },
];
