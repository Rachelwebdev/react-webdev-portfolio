import './About.scss';

import React from 'react';
import Loader from 'react-loaders';
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BsGithub } from 'react-icons/bs';
import { FaAngellist } from 'react-icons/fa';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { CgFileDocument } from 'react-icons/cg';

function About() {
  return (
    <>
      <div className="container about-page">
        <div className="left-container">
          <div className="text-zone">
            <h1>About me</h1>
          </div>
          <div className="paragraph-about">
            <p>
              I am a dynamic and driven full-stack developer who is eager to
              collaborate with top-tier IT organizations and work on compelling
              projects that leverage cutting-edge technology.
            </p>
            <p>
              As a collaborative and team-oriented full-stack developer, I
              thrive in environments where teamwork and pair programming are
              essential components of success.
            </p>
            <p>
              I possess a unique blend of technical expertise, leadership
              skills, and a creative approach to problem-solving, making me a
              valuable asset to any team.
            </p>
          </div>
          <div className="online-links">
            <a href="https://github.com/Rachelwebdev">
              Github
              <span>
                <BsGithub />
              </span>
            </a>
            <a href="https://www.linkedin.com/in/rachelisaac13/">
              Linkedin
              <span>
                <AiOutlineLinkedin />
              </span>
            </a>
            <a href="https://wellfound.com/u/rachelisaac13">
              Angellist
              <span>
                <FaAngellist />
              </span>
            </a>
            <a href="https://bit.ly/3oUt416">
              Resume
              <span>
                <CgFileDocument />
              </span>
            </a>
          </div>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
}

export default About;
