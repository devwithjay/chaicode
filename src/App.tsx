import Testimonials from '@/components/core-ui/testimonials';
import Hero from '@/components/core-ui/hero';
import Navbar from '@/components/core-ui/navbar';

import './App.css';

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <Testimonials />
      </main>
    </>
  );
}

export default App;
