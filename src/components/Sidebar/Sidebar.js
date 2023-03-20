import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.scss';
import LogoS from '../../assets/images/logo-s.png';
import LogoSubtitle from '../../assets/images/logo_sub.png';

function Sidebar() {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoS} alt="logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="logo name" />
      </Link>
    </div>
  );
}

export default Sidebar;
