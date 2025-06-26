import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Footer from './components/Footer';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div id="home"><Hero /></div>
      <div id="menu"><Menu /></div>
      <div id="about"><About /></div>
      <div id="gallery"><Gallery /></div>
      <div id="contact"><Contact /></div> 
      <Footer /> 
    </div>
  );
}

export default App;
