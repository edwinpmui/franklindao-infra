import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Nav.css';
import logo from '../logo.svg';

function Nav({ className }) {
  return (
    <nav className={`Nav ${className}`}>
      <div className="Nav-left">
        <img src={logo} alt="Logo" className="Nav-logo" />
        <span className="Nav-text">Infra@FranklinDAO</span>
      </div>
      <div className="Nav-right">
        <Link to="/login" className="Nav-link">
          <button className="Nav-button">Login</button>
        </Link>
      </div>
    </nav>
  );
}

export default Nav;