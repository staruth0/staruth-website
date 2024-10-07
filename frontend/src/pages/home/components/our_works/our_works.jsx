import './our_works.css';
import { ButtonOutlinedBlack } from '../../../../commons/Button';
import { Link } from 'react-router-dom';
import PortfolioGrid from '../../../../commons/portfolio/PortfolioGrid';
import { useState, useEffect } from 'react';
import Skeleton from '../../../../commons/portfolio/skeleton/Skeleton';

const HomeOurWroksSection = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await fetch(
        'https://staruthwebsite-api.vercel.app/projects/getProjects'
      );
      const data = await response.json();
      setProjects(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container home-our-work-section">
      <div className="home-our-work-section-header">
        <h1>Our Works</h1>
      </div>
      {loading ? <Skeleton /> : <PortfolioGrid items={projects} />}
      <Link to="/portfolio/">
        <ButtonOutlinedBlack title="more about us" />
      </Link>
    </div>
  );
};

export default HomeOurWroksSection;
