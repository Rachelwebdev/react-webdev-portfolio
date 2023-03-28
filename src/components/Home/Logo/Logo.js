import './Logo.scss';

import React from 'react';
import LogoS from '../../../assets/images/logo-s.png';

function Logo() {
  return (
    <div className="logo-container">
      <img src={LogoS} alt="S" className="solid-logo" />
      <svg
        width="559pt"
        height="897pt"
        version="1.0"
        viewBox="0 0 559 897"
        xmlns="http://www.w3.org/2000/svg"
      />
      <g
        className="svg-container"
        transform="translate(0 457) scale(.1 -.1)"
        fill="none"
      />
    </div>
  );
}

export default Logo;
