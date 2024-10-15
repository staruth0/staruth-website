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
import TeamPage from './pages/teamOnClick/index';
import PortfolioPage from './pages/portfolio';

import ProjectDetail from './pages/PortfolioDetail/portfolioDetail';

//aos libray
import 'aos/dist/aos.css';
import PortfolioDetailPage from './pages/portfolio/PortfolioDetailPage';

//Stylesheet
import './App.css';
import RootLayout from './layout/RootLayout';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="about/team/:id" element={<TeamPage />} />
          <Route path="contact" element={<></>} />
          <Route path="portfolio" s element={<PortfolioPage />} />
          <Route path="portfolio/:id" element={<PortfolioDetailPage />} />{' '}
          {/* Dynamic route */}
          <Route path="services" element={<ServicesPage />} />
          <Route path="portfolio/detail/:id" element={<ProjectDetail />} />
        </Route>
      </>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
