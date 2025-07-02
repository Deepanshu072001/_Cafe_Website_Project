import React, { useEffect } from 'react';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/contact';
import Footer from './components/Footer';

// Pages for individual routes
const HomePage = () => (
  <>
    <Navbar />
    <div id="home"><Hero /></div>
    <div id="menu"><Menu /></div>
    <div id="about"><About /></div>
    <div id="gallery"><Gallery /></div>
    <div id="contact"><Contact /></div>
    <Footer />
  </>
);

const GalleryPage = () => (
  <>
    <Navbar />
    <Gallery />
    <Footer />
  </>
);

const MenuPage = () => (
  <>
    <Navbar />
    <Menu />
    <Footer />
  </>
);

const AboutPage = () => (
  <>
    <Navbar />
    <About />
    <Footer />
  </>
);

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
