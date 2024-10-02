import FooterComponent from './footer/footer';
import NavbarComponent from './navbar/navbar';
import { Outlet } from 'react-router-dom';
import ScrollToTop from './scrollToTop';
import { useState } from 'react';
import Contact from './contact';

const RootLayout = () => {
  const [whiteNavbar, setNavbarWhite] = useState(false);
  return (
    <>
      <ScrollToTop />
      <NavbarComponent whiteNavbar={whiteNavbar} />
      <Outlet />
      <Contact />
      <FooterComponent />
    </>
  );
};

export default RootLayout;
