import './about.css';
import { Link } from 'react-router-dom';
import strpattern from '../../../../assets/images/strpattern.png';
import { ButtonOutlinedBlack } from '../../../../commons/Button';

const HomePageAboutComponent = () => {
  return (
    <div className="container home-about-section-container">
      <div className="home-about-section-container-heading-underline">
        <h1 className="display-lg">This is who we are</h1>
      </div>
      <div className="home-about-section-container-about-box">
        <div className="home-about-section-container-about-box-text">
          <h3>About us</h3>
          <p>
            We are a tech start-up designing and building solutions that help
            the next big impact makers break out in the fast changing digital
            space. We build products- from strategic design, to mobile
            applications, web applications and more, that ease your processes,
            enhance your work, propel your profits and meet crucial needs. Lorem
            ipsum dolor sit <br />
            <br />
            Lorem ipsum dolor sit amet consectetur. Pretium augue et iaculis
            malesuada turpis dictum quam velit lectus. Eget mauris enim get
            mauris enim suspendisse gravida donec id sed ante. auris enim get
            mauris enim suspendisse gravida donec id sed ante
          </p>
          <Link to={'/portfolio'}>
            <ButtonOutlinedBlack title="see our works" />
          </Link>
        </div>
        <div className="home-about-section-container-about-box-pattern">
          <img src={strpattern} alt="strpattern" />
        </div>
      </div>
    </div>
  );
};

export default HomePageAboutComponent;
