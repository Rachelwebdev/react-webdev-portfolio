import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CgBrowser } from 'react-icons/cg';
import { BiCodeBlock } from 'react-icons/bi';
import './Project.scss';

function Project({ projects }) {
  const [readMore, setReadMore] = useState(false);

  return (
    <>
      {projects.map((project) => {
        const {
          id, name, image, description, liveLink, sourceCode,
        } = project;

        return (
          <div key={id} className="project-card">
            <img className="project-image" src={image} alt="project" />
            <h3 className="project-title">{name}</h3>
            <p className="description">
              {readMore ? description : `${description.substring(0, 200)}...`}
              <button type="button" onClick={() => setReadMore(!readMore)}>
                {readMore ? 'show less' : 'read more'}
              </button>
            </p>
            <div className="buttons">
              <a href={sourceCode} className="project-btn" type="button">
                <span> Source</span>
                <span>
                  <BiCodeBlock />
                </span>
              </a>
              <a href={liveLink} className="project-btn" type="button">
                Live
                <CgBrowser />
              </a>
            </div>
          </div>
        );
      })}
    </>
  );
}

Project.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      liveLink: PropTypes.string.isRequired,
      sourceCode: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Project;
