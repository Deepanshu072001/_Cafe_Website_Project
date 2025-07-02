import React, { useEffect, useState } from 'react';
import './Hero.css';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section" id="home">
      <div className="hero-carousel">
        <div
          className="hero-slide"
          style={{
            backgroundImage: `url(${images[currentSlide]})`,
            transition: 'background-image 1s ease-in-out',
          }}
        >
          <div className="hero-overlay">
            <h1>Welcome to Mugly Cafe</h1>
            <p>Your Favourite Hangout Place</p>
            <button className="hero-button" onClick={() => navigate('/about')}>
              About US <i className="bi bi-arrow-right-circle"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
