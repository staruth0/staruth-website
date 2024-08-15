import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/icons/logoPNG 1.svg";
import "./navbar.css";

const NavbarComponent = () => {

    const currentUrl = useLocation();

  return (
    <nav className="navbar-component">
      <div className="navbar-component-logo-label">
        <img src={logo} alt="logo" />
        <span>Staruth tech</span>
      </div>
      <ul className="navbar-component-navlinks">
        <li>
          <Link
            to={"/"}
            className={currentUrl.pathname=="/" ? "active-navbar-link" : ""}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to={"/about"}
            className={currentUrl.pathname.includes("/about") ? "active-navbar-link" : ""}
          >
            About us
          </Link>
        </li>
        <li>
          <Link
            to={"/portfolio"}
            className={
              currentUrl.pathname.includes("/portfolio") ? "active-navbar-link" : ""
            }
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            to={"/services"}
            className={
              currentUrl.pathname.includes("/services") ? "active-navbar-link" : ""
            }
          >
            Services
          </Link>
        </li>
      </ul>
      <div className="navbar-component-request-service">
        <a className="navbar-component-request-service-link" href="">
          Request service
        </a>
      </div>
    </nav>
  );
};

export default NavbarComponent;
