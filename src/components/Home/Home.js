import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';
import LogoTitle from '../../assets/images/logo-s.png';

function Home() {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          Hi,
          <br />
          I&rsquo;m
          <img src={LogoTitle} alt="developer" />
          lobadan
          <br />
          web developer
        </h1>
        <h2>Frontend Developer / React Expert</h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
    </div>
  );
}

export default Home;
