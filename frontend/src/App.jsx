import React, { useState } from "react";
// React router dom
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";

//Pages
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import ServicesPage from "./pages/services";
import ContactPage from "./pages/contact_us/contact";
import TeamPage from "./pages/teamOnClick";
import NavbarComponent from "./components/navbar/navbar";
import FooterComponent from "./components/footer/footer";
import ScrollToTop from "./components/scrollToTop";

//Stylesheet

import "./App.css";

function App() {
  const [whiteNavbar, setNavbarWhite] = useState(false);

  return (
    <div className="main-body">
      <Router>
        <ScrollToTop/>
        <NavbarComponent whiteNavbar={whiteNavbar} />
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                whiteNavbar={whiteNavbar}
                setNavbarWhite={setNavbarWhite}
              />
            }
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about/team" element={<TeamPage />} />
        </Routes>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
