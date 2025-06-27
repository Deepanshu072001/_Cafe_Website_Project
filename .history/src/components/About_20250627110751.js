import React from "react";
import "./About.css";
import { FaCoffee, FaSmile, FaUsers } from "react-icons/fa";

function About() {
  return (
    <section id="about" className="about-section">
      <h2 className="section-title" data-aos="fade-up">About Us</h2>
      <div className="about-content">
        <div className="about-text" data-aos="fade-right">
          <p>
            Mugly Café offers a cozy escape for coffee lovers and foodies.
            Enjoy handcrafted beverages and snacks in a friendly space.
          </p>
          <div className="features">
            <div><FaCoffee /> Finest Beans</div>
            <div><FaSmile /> Happy Customers</div>
            <div><FaUsers /> Friendly Staff</div>
          </div>
        </div>
        <div className="about-image" data-aos="fade-left">
          <img src="/assets/cafe-interior.png" alt="Cafe Interior" />
        </div>
      </div>
    </section>
  );
}

export default About;
