import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';

import Home from './pages/Home';
import Worlds from './pages/Worlds'
import About from './pages/About';
import Games from './pages/Games';
import Minigrants from './pages/Minigrants';
import Contact from './pages/Contact';
import KilnGDD from './pages/KilnGDD';
import ProjectSunderGDD from './pages/SunderGDD';

function App() {
  return (
    <Router>
      <Navbar />
      <Hero />
      <div className="container my-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/worlds" element={<Worlds />} /> 
          <Route path="/games" element={<Games />} />
          <Route path="/about" element={<About />} />
          <Route path="/minigrants" element={<Minigrants />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gdd/kiln" element={<KilnGDD />} />
          <Route path="/gdd/sunder" element={<ProjectSunderGDD />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
