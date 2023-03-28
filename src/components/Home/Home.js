import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';
import LogoTitle from '../../assets/images/logo-s.png';
import Logo from './Logo/Logo';

function Home() {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          Hi,
          <br />
          I&rsquo;m
          <img src={LogoTitle} alt="developer" />
          achel
          <br />
          software developer
        </h1>
        <h2>Frontend Developer / Reactjs / Ruby on Rails</h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
      <Logo />
    </div>
  );
}

export default Home;
