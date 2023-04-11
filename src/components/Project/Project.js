import React from 'react';
import Loader from 'react-loaders';
import './Project.scss';
import Sidebar from '../Sidebar/Sidebar';
import bookstore from '../../assets/images/project/bookstore.png';
import mathMagician from '../../assets/images/project/calculator.png';
import cinemy from '../../assets/images/project/cinemy.png';
import crypto from '../../assets/images/project/crypto.png';
import dropdown from '../../assets/images/project/dropdown.png';
import leaderboard from '../../assets/images/project/leaderboard.png';
import surpriseKitchen from '../../assets/images/project/suprisekitchen.png';
import ultrawave from '../../assets/images/project/ultrawave.png';
import worldChef from '../../assets/images/project/worldchef.jpg';

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
