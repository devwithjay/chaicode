import Achievements from '@/components/core-ui/achievements';
import Hero from '@/components/core-ui/hero';
import Navbar from '@/components/core-ui/navbar';
import Testimonials from '@/components/core-ui/testimonials';
import Cohorts from '@/components/core-ui/cohorts';

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
      </main>
    </>
  );
}

export default App;
