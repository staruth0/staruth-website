import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/icons/logoPNG 1.svg';
import './navbar.css';
import closeMenu from '../../assets/icons/close_menu_icon.png';

const NavbarComponent = ({ whiteNavbar }) => {
  const currentUrl = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle mobile menu open state
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className={`navbar-component ${whiteNavbar && 'white-navbar'}`}>
      <div className="navbar-component-logo-label">
        <img src={logo} alt="logo" />
        <span>Staruth tech</span>
      </div>

      {/* desktop nav */}
      <div className="navabar-component-navlinks-container">
        <ul className="navbar-component-navlinks">
          <li>
            <Link
              to={'/'}
              className={currentUrl.pathname == '/' ? 'active-navbar-link' : ''}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to={'/about'}
              className={
                currentUrl.pathname.includes('/about')
                  ? 'active-navbar-link'
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
                currentUrl.pathname.includes('/portfolio')
                  ? 'active-navbar-link'
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
                currentUrl.pathname.includes('/services')
                  ? 'active-navbar-link'
                  : ''
              }
            >
              Services
            </Link>
          </li>
        </ul>
        <div className="navbar-component-request-service">
          <Link className="navbar-component-request-service-link" to="/contact">
            Request service
          </Link>
        </div>
      </div>

      {/* mobile nav */}
      <div className="navbar-component-navlinks-container-mobile">
        <button className="menu-btn" onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div
          className={`menu-items-mobile ${isMobileMenuOpen ? 'active' : ''}`}
        >
          <button className="close_menu_icon" onClick={toggleMobileMenu}>
            <img src={closeMenu} width={45} />
          </button>
          <ul className="navbar-component-navlinks">
            <li>
              <Link
                to={'/'}
                className={
                  currentUrl.pathname == '/' ? 'active-navbar-link' : ''
                }
                onClick={toggleMobileMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={'/about'}
                className={
                  currentUrl.pathname.includes('/about')
                    ? 'active-navbar-link'
                    : ''
                }
                onClick={toggleMobileMenu}
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                to={'/portfolio'}
                className={
                  currentUrl.pathname.includes('/portfolio')
                    ? 'active-navbar-link'
                    : ''
                }
                onClick={toggleMobileMenu}
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to={'/services'}
                className={
                  currentUrl.pathname.includes('/services')
                    ? 'active-navbar-link'
                    : ''
                }
                onClick={toggleMobileMenu}
              >
                Services
              </Link>
            </li>
          </ul>
          <div className="navbar-component-request-service">
            <Link
              className="navbar-component-request-service-link"
              to="/contact"
              onClick={toggleMobileMenu}
            >
              Request service
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
