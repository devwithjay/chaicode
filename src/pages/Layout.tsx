import { Outlet } from 'react-router-dom';

import Footer from '@/components/core-ui/footer';
import Navbar from '@/components/core-ui/navbar';

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
