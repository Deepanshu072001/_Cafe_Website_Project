import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <nav className="navbar" data-aos="fade-down">
      <div className="logo" onClick={() => handleScroll('home')} style={{ cursor: 'pointer' }}>
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
        <li><button onClick={() => handleScroll('home')}>Home</button></li>
        <li><button onClick={() => handleScroll('menu')}>Menu</button></li>
        <li><button onClick={() => handleScroll('about')}>About</button></li>
        <li><button onClick={() => handleScroll('gallery')}>Gallery</button></li>
        <li><button onClick={() => handleScroll('contact')}>Contact</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
