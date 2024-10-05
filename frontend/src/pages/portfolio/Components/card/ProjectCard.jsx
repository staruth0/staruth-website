import React from "react";
import HeroImageCarousel from "../Carousel/HeroImageCarousel.jsx";
import { ButtonPrimary } from "../../../../commons/Button.jsx";
import { useNavigate } from 'react-router-dom';
import "./ProjectCard.css";

const ProjectCard = ({ project,seeMore,longDesc }) => {
    const navigate = useNavigate();
      const handleSeeMore = () => {
    navigate(`/portfolio/detail/${project._id}`);
  };

	return (
		<div className="project-card">
			<HeroImageCarousel images={project.heroImages} />
			<div className="project-info">
				<div>
					<span className="project-card-title">{project.title}</span>
					<br /><br />
					<span className="project-card-description">
                        {!longDesc && (project.shortDescription)}
                        {longDesc && (project.longDescription)}
					</span>
					<h3>How we helped:</h3>
					<div className="tags">
						{project.category.map((cat, index) => (
							<span key={index} className="tag">
								{cat}
							</span>
						))}
					</div>
				</div>
				<div onClick={handleSeeMore}>
					{seeMore && (<ButtonPrimary title={"See more →"} />)}
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
