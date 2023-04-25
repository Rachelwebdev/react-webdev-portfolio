import React, { useState } from 'react';
import './Sidebar.scss';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faUser,
  faEnvelope,
  // faFileDownload,
  faSuitcase,
  // faBars,
  // faClose,
} from '@fortawesome/free-solid-svg-icons';
// import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import LogoS from '../../assets/images/logo-s.png';

function Sidebar() {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoS} alt="logo" className="R-logo" />
      </Link>
      <nav className={showNav ? 'mobile-show' : ''}>
        <NavLink
          exact="true"
          activeclassname="active"
          to="/"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="portfolio-link"
          to="/projects"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
        {/* <FontAwesomeIcon
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="#ffd700"
          size="3x"
          className="close-icon"
        /> */}
        {/* <ul>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              className="linkedin-link"
              href="https://www.linkedin.com/in/rachelisaac13/"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                color="#4d4d4e"
                className="anchor-icon"
              />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              className="github-link"
              href="https://www.linkedin.com/in/rachelisaac13/"
            >
              <FontAwesomeIcon
                icon={faGithub}
                color="#4d4d4e"
                className="anchor-icon"
              />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              className="resume-link"
              href="https://docs.google.com/document/d/1O0iYmCCtfvmwrUSw1KS9il9L4cI1vzwjFkWGlBlwYRI/edit?usp=share_link"
            >
              <FontAwesomeIcon
                icon={faFileDownload}
                color="#4d4d4e"
                className="anchor-icon"
              />
            </a>
          </li>
        </ul> */}
        {/* <FontAwesomeIcon
          onClick={() => setShowNav(true)}
          icon={faBars}
          color="#ffd700"
          size="3x"
          className="hamburger-icon"
        /> */}
      </nav>
    </div>
  );
}

export default Sidebar;
