import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import Contact from "./components/contact";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="App">
      <Hero />
      <About />
      <Menu />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
