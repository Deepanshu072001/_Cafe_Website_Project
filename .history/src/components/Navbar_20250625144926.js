import React from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleScroll = (id) => {
    navigate('/');
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  return (
    <nav className="navbar">
      <div className="logo">Mugly Cafe</div>
      <ul className="nav-links">
        <li><button onClick={() => handleScroll('home')}>Home</button></li>
        <li><button onClick={() => handleScroll('menu')}>Menu</button></li>
        <li><button onClick={() => handleScroll('about')}>About</button></li>
        <li><button onClick={() => handleScroll('contact')}>Contact</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
