import './about.css';
import { Link } from 'react-router-dom';
import strpattern from '../../../../assets/images/strpattern.png';
import { ButtonOutlinedBlack } from '../../../../commons/Button';
import { useEffect } from 'react';
import AOS from 'aos';

const HomePageAboutComponent = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="container home-about-section-container">
      <div
        className="home-about-section-container-heading-underline"
        data-aos="fade-up"
        data-aos-once="true"
      >
        <h1 className="display-lg">This is who we are</h1>
      </div>
      <div className="home-about-section-container-about-box">
        <div className="home-about-section-container-about-box-text">
          <h3 data-aos="fade-up" data-aos-once="true">
            About us
          </h3>
          <p data-aos="fade-up" data-aos-once="true">
            We are a tech start-up passionate about designing and building
            innovative solutions that empower the next generation of impact
            makers to thrive in a fast-changing digital landscape. From
            strategic design to mobile and web applications, we create products
            that streamline your processes, boost productivity, and drive
            profits, while addressing crucial needs.
            <br />
            <br />
            Our dedication goes beyond technology—we are eager to contribute to
            global causes, supporting the United Nations Sustainable Development
            Goals (SDGs). Through advancements in agrotech, environmental
            sustainability solutions, and technologies to combat poverty, we aim
            to shape a better and more sustainable future for all
          </p>
          <Link to={'/portfolio'}>
            <ButtonOutlinedBlack
              title="see our works"
              data-aos="fade-up"
              data-aos-once="true"
            />
          </Link>
        </div>
        <div
          className="home-about-section-container-about-box-pattern"
          data-aos="zoom-in"
          data-aos-once="true"
        >
          <img src={strpattern} alt="strpattern" />
        </div>
      </div>
    </div>
  );
};

export default HomePageAboutComponent;
