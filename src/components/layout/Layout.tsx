import { Outlet } from 'react-router-dom';
import OverlayProvider from '@/components/overlays/OverlayProvider';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = () => {
  return (
    <OverlayProvider>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </OverlayProvider>
  );
};

export default Layout;
