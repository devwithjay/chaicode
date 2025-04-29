import {
  Achievements,
  Benefits,
  ChaiApp,
  Cohorts,
  Community,
  FreeAPI,
  Hero,
  Mentors,
  Reviews,
  Testimonials,
  TopicsCloud,
  Udemy,
  WhyChaiCode,
} from '@/components/core-ui';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Testimonials />
      <Achievements />
      <Cohorts />
      <Mentors />
      <Reviews />
      <Udemy />
      <Benefits />
      <WhyChaiCode />
      <TopicsCloud />
      <Community />
      <FreeAPI />
      <ChaiApp />
    </>
  );
};

export default HomePage;
