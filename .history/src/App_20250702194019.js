import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/contact';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

// Home Page: Only Hero, About, Contact
const HomePage = () => (
  <>
    <Navbar />
    <div id="home"><Hero /></div>
    <div id="about"><About /></div>
    <div id="contact"><Contact /></div>
    <Footer />
  </>
);

// Menu Page: Only Menu section
const MenuPage = () => (
  <>
    <Navbar />
    <Menu />
    <Footer />
  </>
);

// Gallery Page: Only Gallery section
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
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
    </Router>
  );
}

export default App;
