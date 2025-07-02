import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './Hero';
import Navbar from './Navbar';
import Footer from './Footer';
import GalleryPage from './pages/GalleryPage';
import MenuPage from './pages/MenuPage';
import AboutPage from './pages/AboutPage';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            {/* You can add Gallery, Menu here too if you want in landing */}
          </>
        } />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
