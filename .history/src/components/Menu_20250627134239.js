import React from 'react';
import './Menu.css';

const Menu = () => {
  return (
    <section id="menu" className="menu-section">
      <div className="menu-section" id="menu">

      <h2 className="section-title" data-aos="fade-up"> Our Specialties </h2>
      <div className="menu-items">
        <div className="menu-card" data-aos="zoom-in">
          <img src="/assets/coffee.png" alt="Coffee" />
          <p>Espresso</p>
        </div>
        <div className="menu-card">
          <img src="/assets/coffee3.png" alt="Coffee" />
          <p>Cold Brew</p>
        </div>
        <div className="menu-card">
          <img src="/assets/hero.jpg" alt="Coffee" />
          <p>Cappuccino</p>
        </div>
        <div className="menu-card">
          <img src="/assets/coffee.png" alt="Coffee" />
          <p>Latte</p>
          </div>

      </div>
      </div>

    </section>
      
  );
};

export default Menu;
