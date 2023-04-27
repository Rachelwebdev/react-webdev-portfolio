import React, { useState } from 'react';
import './Sidebar.scss';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import {
  faHome,
  faUser,
  faEnvelope,
  // faFileDownload,
  faSuitcase,
  faBars,
  // faClose,
} from '@fortawesome/free-solid-svg-icons';
// import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
// import LogoS from '../../assets/images/logo-s.png';
import Rachel from '../../assets/images/rachel.img.jpg';

function Sidebar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <Stack direction="row" className="avatar">
          <Avatar alt="Remy Sharp" src={Rachel} />
        </Stack>
        {/* <img src={LogoS} alt="logo" className="R-logo" /> */}
      </Link>
      <nav className={isNavExpanded ? 'navBar expanded' : 'navBar'}>
        <ul>
          <li>
            <NavLink
              exact="true"
              activeclassname="active"
              className="home-link"
              to="/"
              onClick={() => setIsNavExpanded(false)}
            >
              <FontAwesomeIcon icon={faHome} color="#fff" />
            </NavLink>
          </li>
          <li>
            <NavLink
              exact="true"
              activeclassname="active"
              className="about-link"
              to="/about"
              onClick={() => setIsNavExpanded(false)}
            >
              <FontAwesomeIcon icon={faUser} color="#fff" />
            </NavLink>
          </li>
          <li>
            <NavLink
              activeclassname="active"
              className="portfolio-link"
              to="/projects"
              onClick={() => setIsNavExpanded(false)}
            >
              <FontAwesomeIcon icon={faSuitcase} color="#fff" />
            </NavLink>
          </li>
          <li>
            <NavLink
              exact="true"
              activeclassname="active"
              className="contact-link"
              to="/contact"
              onClick={() => setIsNavExpanded(false)}
            >
              <FontAwesomeIcon icon={faEnvelope} color="#fff" />
            </NavLink>
          </li>
          {/* <FontAwesomeIcon
            onClick={() => setIsNavExpanded(false)}
            icon={faClose}
            color="#36b37e"
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
        </ul>
      </nav>
      <FontAwesomeIcon
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
        icon={faBars}
        color="#36b37e"
        size="3x"
        className="hamburger-icon"
      />
    </div>
  );
}

export default Sidebar;
