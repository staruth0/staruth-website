import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProjectCard from '../portfolio/Components/card/ProjectCard.jsx';
import './portfolioDetail.css';  // Add necessary styles

const ProjectDetail = () => {
  const { id } = useParams();  // Get the project ID from the URL
  const [project, setProject] = useState(null);

  useEffect(() => {
    // Fetch the project details using the project ID
    const fetchProject = async () => {
      try {
        const response = await fetch(`https://staruthwebsite-api.vercel.app/projects/getProject/${id}`);  // Replace with your backend URL
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
     
    <ProjectCard project={project}/>

      {/* Project Information */}
      <div className="project-info">
        {/* Analysis Section */}
        <section className="project-analysis">
          <h2>Analysis and Findings</h2>
          <ul>
            {project.findings.map((finding, index) => (
              <li key={index}>{finding}</li>
            ))}
          </ul>
        </section>

        {/* Solution Developed */}
        <section className="project-solution">
          <h2>Solution Developed</h2>
          <p>{project.solutionDevelop.description}</p>
          <ul>
            {project.solutionDevelop.solutions.map((solution, index) => (
              <li key={index}>{solution}</li>
            ))}
          </ul>
        </section>

        {/* Project in Numbers */}
        <section className="project-numbers">
          <h2>Project in Numbers</h2>
          <ul>
            {project.projectNumbers.map((number, index) => (
              <li key={index}>
                {number.metric}: {number.value}
              </li>
            ))}
          </ul>
        </section>

        {/* Client Review */}
        <section className="project-review">
          <h2>Client's Remark</h2>
          <p>{project.review}</p>
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
