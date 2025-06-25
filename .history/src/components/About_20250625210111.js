import React from 'react';
import './About.css';
import { FaCoffee, FaSmile, FaUsers } from 'react-icons/fa';

function About() {
  return (
    <div className="about-section" id="about">
      <div className="about-container">
        <div className="about-image">
          <img src="/assets/cafe-interior.png" alt="Mugly Cafe Interior" />
        </div>
        <div className="about-content">
          <h1><FaUsers /> About Us</h1>
          <p style={{ fontSize: '1.5rem' }}>
            At <strong>Mugly Café</strong>, we serve high-quality coffee and delicious pastries in a peaceful atmosphere.
          </p>

          <h2><FaCoffee /> A Cozy Place for Coffee Lovers</h2>
          <p>
            Welcome to Mugly Café, your cozy escape from the everyday rush. We're more than just a coffee shop — we're a community space where rich aromas, handcrafted drinks, and warm smiles come together.
          </p>
          <p>
            From perfectly brewed espressos to indulgent desserts, every item on our menu is made with love and quality ingredients.
          </p>
          <p>
            Whether you're catching up with friends, working remotely, or just craving a moment of peace, Mugly Café is your go-to spot for comfort, creativity, and caffeine. <FaSmile />
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
