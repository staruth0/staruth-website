import { Link } from 'react-router-dom';
import logo from '../assets/icons/apple_logo.svg';

const Footer = ({ blurBackground }) => {
  return (
    <footer className="jim" id="footer">
      <div
        className={blurBackground ? 'blur-background container' : 'container'}
      >
        <nav>
          <div className="footer-column">
            <Link to="/" className="logo">
              <img src={logo} alt="" />
              <span>iSTORE</span>
            </Link>
            <div className="news-letter">
              <h3>Subscribe To Our Newsletter</h3>
              <form action="">
                <input type="text" placeholder="Enter your email" />
                <button type="submit" className="btn">
                  Subscribe
                </button>
              </form>
            </div>
            <div className="social-links">
              <Link to="/">
                <i className="bx bxl-facebook-square"></i>
              </Link>
              <Link to="/">
                <i className="bx bxl-instagram-alt"></i>
              </Link>
              <Link to="/">
                {' '}
                <i className="bx bxl-twitter"></i>
              </Link>
              <Link to="/">
                <i className="bx bxl-whatsapp-square"></i>
              </Link>
            </div>
          </div>

          <div className="footer-column">
            <h3>Products</h3>
            <div>
              <Link to="/">Mac</Link>
              <Link to="/">iPad</Link>
              <Link to="/">iPhone</Link>
              <Link to="/">Watch</Link>
              <Link to="/">Vsion</Link>
              <Link to="/">AirPods</Link>
              <Link to="/">TV & Home</Link>
            </div>
          </div>

          <div className="footer-column">
            <h3>Company</h3>
            <div>
              <Link to="about">About Us</Link>
              <Link to="/">Blogs</Link>
              <Link to="/">Guides</Link>
              <Link to="/">Promotions</Link>
            </div>
          </div>

          <div className="footer-column contact">
            <h3>Contact</h3>
            <div>
              <li>
                <Link to="contact">Contact Us</Link>
              </li>
              <li>
                <i className="bx bxs-envelope"></i>
                <p>support@istore.com</p>
              </li>
              <li>
                <i className="bx bxs-phone"></i>
                <p>
                  + 1 435 267 911 213
                  <br /> +1 626 383 923 391
                </p>
              </li>
              <li>
                <i className="bx bx-current-location"></i>
                <p>Princeton, New Jersey 08544, United States </p>
              </li>
            </div>
          </div>
        </nav>

        <div className="privacy-policy">
          <span>&copy; 2023 DevLab All Rights Reserved</span>

          <span>
            <Link to="/">Terms Of Service </Link> |
            <Link to="/"> Privacy Policy </Link> |
            <Link to="/"> Sales Terms</Link>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
