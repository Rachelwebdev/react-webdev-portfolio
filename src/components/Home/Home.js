import React from 'react';
import { Link } from 'react-router-dom';
import Loader from 'react-loaders';
import './Home.scss';
import headerIllustration from '../../assets/images/header-image.png';
import profilePicture from '../../assets/images/rachel.img.jpg';

function Home() {
  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            Hi,
            <br />
            I&rsquo;m Rachel,
            <br />
            <span>a software developer</span>
          </h1>
          <h2 className="h2-heading">
            Full-Stack Web Developer. JavaScript | Rails | React | Redux.
          </h2>
          <h3 className="h3-text">
            I can help you build a product, feature or website. Look through
            some of my work and experience! If you like what you see and have a
            project you need coded, don&rsquo;t hestiate to contact me.
          </h3>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <div className="image">
          <img
            src={headerIllustration}
            alt="header illustration"
            className="header-illustration"
          />
          <img src={profilePicture} alt="Rachel" className="profile-picture" />
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
}

export default Home;
