import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProjectCard from '../portfolio/Components/card/ProjectCard.jsx';
import './portfolioDetail.css';
import AOS from 'aos';

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await fetch(
          `https://staruthwebsite-api.vercel.app/projects/getProject/${id}`
        );
        const data = await response.json();
        setProject(data);
      } catch (error) {
        console.error('Error fetching project data:', error);
        setLoading(true);
      }
    };

    fetchProject();
  }, [id]);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  if (loading) {
    return (
      <div className="container portfolio-detail-loading">
        <p></p>
      </div>
    );
  }

  return project ? (
    <div className="project-detail">
      <div className="project-hero-onclick container">
        <ProjectCard
          project={project}
          seeMore={false}
          longDesc={project.longDescription}
        />
      </div>
      {/* Project Information */}
      <div className="container">
        {/**initial client request */}
        <section
          className="project-request"
          data-aos="fade-up"
          data-aos-once="true"
        >
          <div>
            <h2>Our Clients Initial Request</h2>
          </div>
          <div>
            <p>{project.initialRequest}</p>
          </div>
        </section>

        {/* Analysis Section */}
        <section
          className="project-analysis"
          data-aos="fade-up"
          data-aos-once="true"
        >
          <div>
            <h2>Analysis and Findings</h2>
          </div>
          <div>
            <p>{project.analysis}</p>
            <ul>
              {project.findings.map((finding, index) => (
                <li key={index}>
                  <span>{finding}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Solution Developed */}
        <section
          className="project-solution"
          data-aos="fade-up"
          data-aos-once="true"
        >
          <div>
            <h2>Solution Developed</h2>
          </div>
          <div>
            <p>{project.solutionDevelop.description}</p>
            <ul>
              {project.solutionDevelop.solutions.map((solution, index) => (
                <li key={index}>
                  <span>{solution}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Project in Numbers */}
        <section
          className="project-numbers"
          data-aos="fade-up"
          data-aos-once="true"
        >
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
        <section
          className="project-review"
          data-aos="fade-up"
          data-aos-once="true"
        >
          <div>
            <h2 data-aos="fade-up" data-aos-once="true">
              Client's Remark
            </h2>
          </div>
          <div data-aos="fade-up" data-aos-once="true">
            <p>{project.review}</p>
          </div>
        </section>

        {/* Demo Video */}
        <section>
          <h2 data-aos="fade-up" data-aos-once="true">
            Demo Video
          </h2>
          <video data-aos="zoom-in" data-aos-once="true" width="100%" controls>
            <source src={project.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </section>
      </div>
    </div>
  ) : (
    <div className="container portfolio-detail-loading">
      <p></p>
    </div>
  );
};

export default ProjectDetail;
