import React, { useState } from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (id) => {
    navigate('/');
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        setMenuOpen(false); 
        window.history.replaceState(null, '', '/'); 

      }
    }, 50);
  };

  return (
    <nav className="navbar" data-aos="fade-out">
      <div className="logo">Mugly Cafe</div>
      <div className={`nav-toggle ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
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
