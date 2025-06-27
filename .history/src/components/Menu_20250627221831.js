import React from 'react';
import './Menu.css';

const Menu = () => {
  return (
    <section id="menu" className="menu-section">
      <h2 className="section-title">Our Specialties</h2>
      <div className="menu-grid">
        <div className="menu-list">
          <img src="/assets/coffee.png" alt="Espresso" />
          <p>Espresso</p>
        </div>
        <div className="menu-list">
          <img src="/assets/coffee3.png" alt="Cold Brew" />
          <p>Cold Brew</p>
        </div>
        <div className="menu-list">
          <img src="/assets/hero.jpg" alt="Cappuccino" />
          <p>Cappuccino</p>
        </div>
        <div className="menu-list">
          <img src="/assets/coffee.png" alt="Latte" />
          <p>Latte</p>
        </div>
      </div>
    </section>
  );
};

export default Menu;
