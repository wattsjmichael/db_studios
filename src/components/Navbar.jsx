import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold" to="/">DadBod Studios</Link>
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item"><Link className="nav-link" to="/games">Games</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/minigrants">Minigrants</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
