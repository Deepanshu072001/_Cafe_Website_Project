import React, { useState } from 'react';
import './Navbar.css';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigation = (id) => {
    const isHome = location.pathname === '/';

    if (isHome) {
      // Smooth scroll if already on homepage
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to homepage and then scroll after render
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // Small delay to allow page to load
    }

    setMenuOpen(false);
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
        <li><button onClick={() => handleNavigation('home')}>Home</button></li>
        <li><button onClick={() => handleNavigation('menu')}>Menu</button></li>
        <li><button onClick={() => handleNavigation('about')}>About</button></li>
        <li><button onClick={() => handleNavigation('gallery')}>Gallery</button></li>
        <li><button onClick={() => handleNavigation('contact')}>Contact</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
