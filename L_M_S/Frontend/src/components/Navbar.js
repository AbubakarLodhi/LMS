import React from 'react';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-icon">📚</span>
          LMS Academy
        </Link>

        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/courses" className="nav-link" onClick={() => setIsOpen(false)}>
            Courses
          </Link>
          <Link to="/admin/courses" className="nav-link" onClick={() => setIsOpen(false)}>
            Admin
          </Link>
          <Link to="/activity" className="nav-link" onClick={() => setIsOpen(false)}>
            Activity
          </Link>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          {isOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
