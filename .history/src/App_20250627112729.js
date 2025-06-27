import React, {useEffect} from 'react';
import './App.css';
import AOS from "aos";
import 'aos/dist/aos.css'; // Import AOS styles

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Footer from './components/Footer';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/contact';
import "./App.css";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
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
