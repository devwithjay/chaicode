import { Outlet } from 'react-router-dom';
import Navbar from '@/components/core-ui/navbar';
import Footer from '@/components/core-ui/footer';

const Layout = () => {
  return (
    <>
      <header className="sticky top-0 left-0 z-50">
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;