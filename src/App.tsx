import Achievements from '@/components/core-ui/achievements';
import Hero from '@/components/core-ui/hero';
import Navbar from '@/components/core-ui/navbar';
import Testimonials from '@/components/core-ui/testimonials';
import Cohorts from '@/components/core-ui/cohorts';
import Reviews from '@/components/core-ui/reviews';
import Udemy from '@/components/core-ui/udemy';
import Benefits from '@/components/core-ui/benefits';
import WhyChaiCode from '@/components/core-ui/why-chaicode';
import TopicsCloud from '@/components/core-ui/topics-cloud';
import Community from '@/components/core-ui/community';
import FreeAPI from '@/components/core-ui/free-api';
import ChaiApp from '@/components/core-ui/chai-app';
import Mentors from '@/components/core-ui/mentors';

import './App.css';

function App() {
  return (
    <>
      <header className="sticky top-0 left-0 z-50">
        <Navbar />
      </header>
      <main>
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
      </main>
    </>
  );
}

export default App;
