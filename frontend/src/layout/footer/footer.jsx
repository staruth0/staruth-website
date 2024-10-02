import logo from '../../assets/icons/logoPNG 1.svg';
import facebook from '../../assets/icons/Facebook.svg';
import linkedIn from '../../assets/icons/linkedin.svg';
import github from '../../assets/icons/github.svg';
import twitter from '../../assets/icons/prime_twitter.svg';
import { Link, useLocation } from 'react-router-dom';
import './footer.css';

const FooterComponent = () => {
  const currentLocation = useLocation();

  return (
    <div className="footer-component">
      <div className="footer-component-first-section">
        <div className="footer-component-logo-label">
          <img src={logo} alt="logo" />
          <span>Staruth Technologies</span>
        </div>
        <p>Building solutions with the next big impact makers</p>
      </div>
      <div className="footer-component-second-section">
        <ul className="footer-component-second-section-upper">
          <li>
            <Link
              to={'/'}
              className={
                currentLocation.pathname == '/' ? 'active-footer-link' : ''
              }
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to={'/about'}
              className={
                currentLocation.pathname.includes('/about')
                  ? 'active-footer-link'
                  : ''
              }
            >
              About us
            </Link>
          </li>
          <li>
            <Link
              to={'/portfolio'}
              className={
                currentLocation.pathname.includes('/portfolio')
                  ? 'active-footer-link'
                  : ''
              }
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to={'/services'}
              className={
                currentLocation.pathname.includes('/services')
                  ? 'active-footer-link'
                  : ''
              }
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to={'/contact'}
              className={
                currentLocation.pathname.includes('/contact')
                  ? 'active-footer-link'
                  : ''
              }
            >
              Contact us
            </Link>
          </li>
        </ul>
        <div className="footer-component-second-section-lower">
          <ul className="footer-component-second-section-lower-social-links">
            <li>
              <a href="">
                <img src={linkedIn} alt="LinkedIn" />
                <span>LinkedIn</span>
              </a>
            </li>
            <li>
              <a href="">
                <img src={twitter} alt="Twitter" />
                <span>Twitter</span>
              </a>
            </li>
            <li>
              <a href="">
                <img src={facebook} alt="Facebook" />
                <span>Facebook</span>
              </a>
            </li>
            <li>
              <a href="">
                <img src={github} alt="Github" />
                <span>Github</span>
              </a>
            </li>
          </ul>
          <div className="footer-component-second-section-lower-copyright">
            <p>
              <span>&copy;</span> All Rights Reserved. 2024, Staruth
              Technologies
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
