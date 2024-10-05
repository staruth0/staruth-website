// import Card from '../../commons/Porfolio_card';
// import portfolioImage1 from '../../assets/images/applewatch.jpg';

// const PortfolioPage = () => {
//   return (
//     <div className="container">
//       <Card imageURL={portfolioImage1} />
//       <Card imageURL={portfolioImage1} />
//       <Card imageURL={portfolioImage1} />
//       <Card imageURL={portfolioImage1} />
//     </div>
//   );
// };

// export default PortfolioPage;

import React, { useEffect, useState } from 'react';
import ProjectCard from './Components/card/ProjectCard.jsx';
import './portfolio.css';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    const response = await fetch('https://staruthwebsite-api.vercel.app/projects/getProjects'); 
    const data = await response.json();
    setProjects(data);
    console.log(data)
  };

  return (
    <div className="project-list">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

export default ProjectList;

