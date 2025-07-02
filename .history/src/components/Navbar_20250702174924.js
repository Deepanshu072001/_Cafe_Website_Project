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
       <a href="/gallery" target="_blank" rel="noopener noreferrer">Gallery</a>
       <a href="/menu" target="_blank" rel="noopener noreferrer">Menu</a>
       <a href="/about" target="_blank" rel="noopener noreferrer">About</a>
        <li><button onClick={() => handleScroll('contact')}>Contact</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
