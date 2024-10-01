import FooterComponent from './footer/footer';
import NavbarComponent from './navbar/navbar';
import { Outlet } from 'react-router-dom';
import ScrollToTop from './scrollToTop';
import { useState } from 'react';
import Contact from './contact';
import './rootLayout.css'

const RootLayout = () => {
  const [whiteNavbar, setNavbarWhite] = useState(false);
  return (
    <div className='root-layout-main'>
      <ScrollToTop />
      <NavbarComponent whiteNavbar={whiteNavbar} />
      <Outlet />
      <Contact />
      <FooterComponent />
    </div>
  );
};

export default RootLayout;
