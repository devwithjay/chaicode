import Achievements from '@/components/core-ui/achievements';
import Hero from '@/components/core-ui/hero';
import Navbar from '@/components/core-ui/navbar';
import Testimonials from '@/components/core-ui/testimonials';
import Cohorts from '@/components/core-ui/cohorts';
import Reviews from '@/components/core-ui/reviews';
import Udemy from '@/components/core-ui/udemy';

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
        <Reviews />
        <Udemy />
      </main>
    </>
  );
}

export default App;
