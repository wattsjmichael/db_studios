import React from 'react';
import { Container, Button } from 'react-bootstrap';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-section text-center text-light d-flex align-items-center justify-content-center">
      <Container>
        <h1 className="display-3 animate-pop">DadBod Studios</h1>
        <p className="lead animate-fade">
          Indie game publishing with real dev energy — no dad jokes, just action.
        </p>

      </Container>
    </div>
  );
};

export default Hero;
