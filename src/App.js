import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';

import Home from './pages/Home';
import About from './pages/About';
import Games from './pages/Games';
import Minigrants from './pages/Minigrants';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <Hero />
      <div className="container my-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<Games />} />
          <Route path="/about" element={<About />} />
          <Route path="/minigrants" element={<Minigrants />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
