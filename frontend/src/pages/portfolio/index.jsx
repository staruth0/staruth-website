import React, { useEffect, useState } from 'react';
import './portfolio.css';
import PortfolioGrid from '../../commons/portfolio_dark/PortfolioGrid.jsx';
import Skeleton from '../../commons/portfolio_dark/skeleton/Skeleton.jsx';

const ProjectList = () => {
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
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="project-list ">
      {loading ? <Skeleton /> : <PortfolioGrid items={projects} />}
    </div>
  );
};

export default ProjectList;
