import './our_works.css';
import { ButtonOutlinedBlack } from '../../../../commons/Button';
import { Link } from 'react-router-dom';
import PortfolioGrid from '../../../../commons/portfolio/PortfolioGrid';
import { useState,useEffect } from 'react';

const HomeOurWroksSection = () => {


    const [projects, setProjects] = useState([]);

    useEffect(() => {
      fetchProjects();
    }, []);

    const fetchProjects = async () => {
      const response = await fetch(
        "https://staruthwebsite-api.vercel.app/projects/getProjects"
      );
      const data = await response.json();
      setProjects(data);
      console.log(data);
  };
  
  const portfolioItems = [
    {
      title: 'Project One',
      description: 'Description for project one.',
      category: ['Web Design', 'UI/UX Design'],
      images: [
        'https://via.placeholder.com/400x200?text=Image+1',
        'https://via.placeholder.com/400x200?text=Image+2',
        'https://via.placeholder.com/400x200?text=Image+3',
      ],
    },
    {
      title: 'Project Two',
      description: 'Description for project two.',
      category: ['Graphic Design', 'Mobile Development'],
      images: [
        'https://via.placeholder.com/400x200?text=Image+1',
        'https://via.placeholder.com/400x200?text=Image+2',
        'https://via.placeholder.com/400x200?text=Image+3',
      ],
    },
  ];
  return (
    <div className="container home-our-work-section">
      <div className="home-our-work-section-header">
        <h1>Our Works</h1>
      </div>
      <PortfolioGrid items={projects} />
      <Link to="/portfolio/">
        <ButtonOutlinedBlack title="more about us" />
      </Link>
    </div>
  );
};

export default HomeOurWroksSection;
