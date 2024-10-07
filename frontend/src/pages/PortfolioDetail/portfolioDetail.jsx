import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHandHoldingHeart,
  faWarning,
} from '@fortawesome/free-solid-svg-icons';
import ProjectCard from '../portfolio/Components/card/ProjectCard.jsx';
import './portfolioDetail.css'; // Add necessary styles

const ProjectDetail = () => {
  const { id } = useParams(); // Get the project ID from the URL
  const [project, setProject] = useState(null);

  useEffect(() => {
    // Fetch the project details using the project ID
    const fetchProject = async () => {
      try {
        const response = await fetch(
          `https://staruthwebsite-api.vercel.app/projects/getProject/${id}`
        ); // Replace with your backend URL
        const data = await response.json();
        setProject(data);
      } catch (error) {
        console.error('Error fetching project data:', error);
      }
    };

    fetchProject();
  }, [id]);

  if (!project) {
    return <p>Loading...</p>;
  }

  return (
    <div className="project-detail">
      <div className="project-hero-onclick">
        <ProjectCard
          project={project}
          seeMore={false}
          longDesc={project.longDescription}
        />
      </div>
      {/* Project Information */}
      <div className="project-info">
        {/**initial client request */}
        <section className="project-request">
          <div>
            <h1>Our Clients Initial Request</h1>
          </div>
          <div>
            <p>{project.initialRequest}</p>
          </div>
        </section>
        {/* Analysis Section */}
        <section className="project-analysis">
          <div>
            <h1>Analysis and Findings</h1>
          </div>
          <div>
            <p>{project.analysis}</p>
            <ul>
              {project.findings.map((finding, index) => (
                <li key={index}>
                  <span>
                    <FontAwesomeIcon icon={faWarning} />
                  </span>
                  {` `}
                  <span>{finding}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Solution Developed */}
        <section className="project-solution">
          <div>
            <h1>Solution Developed</h1>
          </div>
          <div>
            <p>{project.solutionDevelop.description}</p>
            <ul>
              {project.solutionDevelop.solutions.map((solution, index) => (
                <li key={index}>
                  <span>
                    <FontAwesomeIcon icon={faHandHoldingHeart} />
                  </span>
                  {` `}
                  <span>{solution}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Project in Numbers */}
        <section className="project-numbers">
          <div>
            <h1>Project in Numbers</h1>
          </div>
          <ul>
            {project.projectNumbers.map((number, index) => (
              <li key={index}>
                <div>{number.value}</div>
                <div>{number.metric}</div>
              </li>
            ))}
          </ul>
        </section>

        {/* Client Review */}
        <section className="project-review">
          <div>
            <h1>Client's Remark</h1>
          </div>
          <div>
            <p>{project.review}</p>
          </div>
        </section>

        {/* Demo Video */}
        <section className="project-video">
          <h2>Demo Video</h2>
          <video width="100%" controls>
            <source src={project.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </section>
      </div>
    </div>
  );
};

export default ProjectDetail;
