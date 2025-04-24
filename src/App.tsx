import Hero from '@/components/hero';
import Navbar from '@/components/navbar';

import './App.css';

function App() {
  return (
    <main className="min-h-screen bg-[var(--surface-primary)]">
      <Navbar />
      <Hero />
    </main>
  );
}

export default App;
