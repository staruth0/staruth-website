import React from 'react';
import './hero.css';

const AboutHeroComponent = () => {
  return (
    <div className="about-hero-section">
      <div className="about-hero-section-contentOne" data-aos="fade-right">
        <h1>
          At Staruth, we collaborate with start-ups, brands, businesses, and
          founders to develop innovative tech products and systems that enable
          them to break through in the digital space. We believe in harnessing
          the power of technology to address real-world challenges, empowering
          individuals and organizations to make a lasting impact.
        </h1>
      </div>
      <div className="about-hero-section-contentTwo" data-aos="fade-left">
        <div>
          <h1>Our Vision</h1>
          <p>
            To create a future where empowered youths utilize technology to
            revolutionize industries, drive economic growth, and promote
            sustainable practices, while actively addressing global challenges
            such as poverty, climate change, food security, and access to
            quality education and healthcare. Through innovation, we aim to
            create solutions that not only meet immediate needs but also shape a
            better, more equitable world for future generations.
          </p>
        </div>
      </div>
      <div className="about-hero-section-contentOne" data-aos="fade-right">
        <h1 className="mission">
          Our mission is to equip young people with cutting-edge technological
          tools and skills that enable them to solve pressing global issues,
          from transforming agriculture to reducing poverty, fostering
          innovation in healthcare, and promoting education. We are committed to
          driving inclusivity and sustainability, empowering communities across
          Africa and beyond to harness technology for positive change and to
          bring the United Nations Sustainable Development Goals (SDGs) to life
          through tech-driven innovation.
        </h1>
      </div>
    </div>
  );
};
export default AboutHeroComponent;
