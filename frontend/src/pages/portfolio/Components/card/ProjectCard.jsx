import React from 'react';
import HeroImageCarousel from '../Carousel/HeroImageCarousel.jsx';
import './ProjectCard.css';

const ProjectCard = ({ project, longDesc }) => {
  return (
    <div className="project-card">
      <HeroImageCarousel images={project.heroImages} />
      <div className="project-info">
        <h2 className="project-card-title">{project.title}</h2>

        <span className="project-card-description">
          {!longDesc && project.shortDescription}
          {longDesc && project.longDescription}
        </span>
        <h3 style={{ marginBottom: '-10px' }}>How we helped:</h3>
        <div className="tags">
          {project.category.map((cat, index) => (
            <span key={index} className="tag">
              {cat}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
