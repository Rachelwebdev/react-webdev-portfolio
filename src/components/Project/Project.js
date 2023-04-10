import React from 'react';
import Loader from 'react-loaders';
import './Project.scss';
import Sidebar from '../Sidebar/Sidebar';

function Project() {
  return (
    <>
      <Sidebar />
      <div className="container project-page">
        <div className="text-zone">
          <h1>Recent works</h1>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
}

export default Project;
