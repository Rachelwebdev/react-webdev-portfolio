import React, { useState } from 'react';
import Loader from 'react-loaders';
import './Projects.scss';
import { Link } from 'react-router-dom';
import data from '../data';
import Project from '../Project/Project';

function Projects() {
  const [projects, setProjects] = useState(data);

  const handleClick = () => {
    setProjects([]);
  };
  return (
    <>
      <div className="container project-page">
        <div className="text-zone">
          <h1 className="h1-recent-works">Recent works</h1>
          <div className="project-container">
            <Project projects={projects} />
          </div>
          <Link
            className="button"
            to="/contact"
            type="button"
            onClick={() => handleClick()}
          >
            Let`s have a chat
          </Link>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
}

export default Projects;
