import React from 'react';
import '../css/Banner.css';
import logo from '../logo.svg';

function Banner() {
  // Animation removed — static hero
  return (
    <div id="home" className="Banner">
      <div className="Banner-inner">
        <div className="Banner-brand">
          <img src={logo} alt="FranklinDAO logo" className="Banner-logo" />
          <h1 className="Banner-title">
            <span className="Brand-main">FranklinDAO</span>
            <span className="Brand-sep">/</span>
            <span className="Brand-sub">Infrastructure Team</span>
          </h1>
        </div>
      </div>
      {/* canvas removed: keep empty container for backward compatibility but hide via CSS */}
      <div className="content--canvas" aria-hidden="true"></div>
    </div>
  );
}

export default Banner;