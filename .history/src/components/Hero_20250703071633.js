import React, { useEffect, useState } from 'react';
import './Hero.css';

const images = [
  '/images/interior1.png',
  '/assets/burger.png',
  '/assets/drinks.png',
  '/images/interior2.png',
  '/assets/coffee.png',
  '/assets/coffee3.png',
  '/assets/coffee4.png',
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Hero Banner (image only) */}
      <section className="hero-section" id="home">
        <div className="hero-carousel">
          <div
            className="hero-slide"
            style={{
              backgroundImage: `url(${images[currentSlide]})`,
            }}
          ></div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="welcome-section">
        <div className="welcome-content">
          <h2>Welcome to Mugly Cafe</h2>
          <p>Your Favourite Hangout Place</p>
          <button
            className="hero-button"
            onClick={() => window.open('/about', '_blank')}
          >
            About Us <i className="bi bi-arrow-right-circle"></i>
          </button>
        </div>
      </section>

      {/* Open Hours */}
      <section className="open-hours">
        <h2 className="open-title">🕐 Open Hours</h2>
        <div className="hours-grid">
          <div>Mon – Fri: <strong>10:00 AM – 11:00 PM</strong></div>
          <div>Saturday: <strong>10:00 AM – 11:00 PM</strong></div>
          <div>Sunday: <strong>10:30 AM – 11:00 PM</strong></div>
        </div>
      </section>
    </>
  );
};

export default Hero;
