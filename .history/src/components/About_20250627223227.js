import React from 'react';
import './About.css';
import { FaCoffee, FaSmile, FaUsers } from 'react-icons/fa';

function About() {
  return (
    <section id="about" className="about-section">
      <h2 className="section-title" data-aos="fade-up">
        <FaUsers /> About Us
      </h2>
      <div className="about-container">
        
        <div className="about-content" data-aos="fade-right">
          <p className="intro">
            At <strong>Mugly Café</strong>, we serve high-quality coffee and delicious pastries in a peaceful atmosphere.
          </p>
          <h2><FaCoffee /> A Cozy Place for Coffee Lovers</h2>
          <p>
            Welcome to Mugly Café, your cozy escape from the everyday rush. We're more than just a coffee shop — we're a community space where rich aromas, handcrafted drinks, and warm smiles come together <i className="bi bi-heart-fill" style={{ color: "red" }}></i>.
          </p>
          <p>
            From perfectly brewed espressos to indulgent desserts, every item on our menu is made with love and quality ingredients.
          </p>
          <p>
            Whether you're catching up with friends, working remotely, or just craving a moment of peace, Mugly Café is your go-to spot for comfort, creativity, and caffeine. <FaSmile />
          </p>
        </div>

        <div className="about-image" data-aos="fade-left">
          <img src="/assets/cafe-interior.png" alt="Mugly Cafe Interior" />
        </div>
      </div>
    </section>
  );
}

export default About;
