import React, { useState } from 'react';

import { NavLink, Link, Outlet } from 'react-router-dom';

import Faqs from './components/Faqs';

import RootLayout from '../../layout/RootLayout';

const Contact = () => {
  const [blurBackground, setBlurBackground] = useState(false);
  return (
    <>
      <div className="jim">
        <section className="main-contact-section">
          <div className="container">
            <h2>Contact Us</h2>
            <div className="contact-page-links">
              <NavLink to="general">General Inquiries</NavLink>
              <NavLink to="order">Shipping and Order</NavLink>
            </div>

            {/* outlet here */}
            <Outlet />
            <br />
            <h2>Contact Info</h2>
            <div className="contact-options">
              <div>
                <i className="bx bxs-phone"></i>
                <h3>Call Us</h3>
                <p>
                  Call Us Now At <br />
                  +44 2037 2344
                </p>
              </div>
              <div>
                <i className="bx bxs-envelope"></i>
                <h3>Email Us</h3>
                <p>
                  Email Us Now At <br />
                  support@istore.com
                </p>
              </div>
              <div>
                <i className="bx bxs-conversation"></i>
                <h3>Chat With Us</h3>
                <Link to="/" className="btn">
                  Start Chat
                </Link>
              </div>
            </div>

            {/* faqs */}
            <Faqs />
          </div>
        </section>
      </div>
      <RootLayout heroHeight={0} setBlurBackground={setBlurBackground} />
    </>
  );
};

export default Contact;
