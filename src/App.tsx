import { Outlet } from 'react-router-dom';

import Footer from '@/components/core-ui/footer';
import Navbar from '@/components/core-ui/navbar';

import './App.css';

function App() {
  return (
    <div className="bg-[var(--surface-primary)]">
      <header className="sticky top-0 z-50 bg-[var(--surface-primary)]">
        <Navbar />
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
