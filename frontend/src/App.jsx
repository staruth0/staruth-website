import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

//Pages
import HomePage from './pages/home';
import AboutPage from './pages/about';
import ServicesPage from './pages/services';
import ContactPage from './pages/contact_us/contact';
import TeamPage from './pages/teamOnClick/index';
import PortfolioPage from './pages/portfolio';
import ProjectDetail from './pages/PortfolioDetail/portfolioDetail';

//Stylesheet
import './App.css';
import RootLayout from './layout/RootLayout';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<RootLayout />}>
          <Route te index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="about/team/:id" element={<TeamPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="portfolio" element={<PortfolioPage />} />
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
