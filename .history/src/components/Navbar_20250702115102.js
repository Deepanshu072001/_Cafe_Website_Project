import React, { useState } from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigation = (path) => {
    navigate(path);
    setMenuOpen(false); // Close mobile menu after navigation
  };

  return (
    <nav className="navbar" data-aos="fade-down">
      <div className="logo">
        <i className="bi bi-cup-hot"></i> Mugly Cafe
      </div>
      <div
        className={`nav-toggle ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li><button onClick={() => handleNavigation('/')}>Home</button></li>
        <li><button onClick={() => handleNavigation('/menu')}>Menu</button></li>
        <li><button onClick={() => handleNavigation('/about')}>About</button></li>
        <li><button onClick={() => handleNavigation('/gallery')}>Gallery</button></li>
        <li><button onClick={() => handleNavigation('/contact')}>Contact</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
