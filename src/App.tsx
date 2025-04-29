import { Outlet } from 'react-router-dom';
import Footer from '@/components/core-ui/footer';
import Navbar from '@/components/core-ui/navbar';
import './App.css';

function App() {
  return (
    <div className="min-h-screen w-full bg-[var(--surface-primary)] flex flex-col">
      <header className="sticky top-0 left-0 z-50">
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