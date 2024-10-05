import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { useEffect } from 'react';
//Pages
import HomePage from './pages/home';
import AboutPage from './pages/about';
import ServicesPage from './pages/services';
import ContactPage from './pages/contact_us/contact';
import TeamPage from './pages/teamOnClick/index';
import PortfolioPage from './pages/portfolio';

import ProjectDetail from './pages/PortfolioDetail/portfolioDetail';

//aos libray
import AOS from "aos";
import "aos/dist/aos.css";
import PortfolioDetailPage from './pages/portfolio/PortfolioDetailPage'; 

//Stylesheet
import './App.css';
import RootLayout from './layout/RootLayout';

function App() {

    useEffect(() => {
      AOS.init({
        offset: 120, 
        duration: 1500, 
        easing: "ease-in-out", 
        delay: 100, 
      });
    }, []);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="about/team/:id" element={<TeamPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="portfolio" element={<PortfolioPage />} />
          <Route path="portfolio/:id" element={<PortfolioDetailPage />} /> {/* Dynamic route */}
          <Route path="services" element={<ServicesPage />} />
          <Route path="portfolio/detail/:id" element={<ProjectDetail />} />
        </Route>
      </>
    )
  );

  return (
    <div className="main-body">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
