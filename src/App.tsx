import { Outlet } from 'react-router-dom';

import Footer from '@/components/core-ui/footer';
import Navbar from '@/components/core-ui/navbar';

import './App.css';

function App() {
  return (
    <div className="bg-[var(--surface-primary)]">
      <header className="sticky top-0 left-0 z-40 bg-[var(--surface-primary)]">
        <Navbar />
      </header>
      <main
        className="flex-1 overflow-x-hidden"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
