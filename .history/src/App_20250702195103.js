import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/contact';
import Menu from './components/Menu';
import Gallery from './components/Gallery';

// Home only
const HomePage = () => (
  <>
    <Navbar />
    <div id="home"><Hero /></div>
    <div id="about"><About /></div>
    <div id="contact"><Contact /></div>
    <Footer />
  </>
);

// Menu only
const MenuPage = () => (
  <>
    <Navbar />
    <Menu />
    <Footer />
  </>
);

// Gallery only
const GalleryPage = () => (
  <>
    <Navbar />
    <Gallery />
    <Footer />
  </>
);

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/menu" element={<MenuPage />} />
      <Route path="/gallery" element={<GalleryPage />} />
    </Routes>
  );
}

export default App;
