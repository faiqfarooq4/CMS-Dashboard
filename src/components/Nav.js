import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/faiqabc.jpg-removebg-preview.png';

// Corrected import paths with PascalCase naming convention
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Dashboard from '../dashboard/Dashboard';

const Nav = () => {
  return (
    <nav>
      <div className="nav-home">
      <div className="logo">
        <img src={logo} alt="Swift Backoffice Solutions Logo" />
      </div>
      <div className="nav-links">
        <Link to="/" className="nav-links">Home</Link>
        <Link to="/about" className="nav-links">About Us</Link>
        <Link to="/contact" className="nav-links">Contact Us</Link>
        <a href="/dashboard" target="_blank" rel="noopener noreferrer" className="nav-links">Dashboard</a>
      </div>
      <div className="search-container">
        <input type="text" id="search" placeholder="Search..." />
      </div>
      <div className="dropdown">
        <a href="#" className="nav-links">Signup for Free</a>
        <div className="dropdown-content">
        <Link to="/login" className="nav-link">Login</Link>
        <Link to="/signup" className="nav-link">Sign Up</Link>
        </div>
      </div>
      </div>
    </nav>
  );
}

export default Nav;
