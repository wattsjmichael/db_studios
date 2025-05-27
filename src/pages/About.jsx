// src/pages/About.jsx
import React from 'react';
import './About.css';
import { Container, Row, Col } from 'react-bootstrap';

export default function About() {
  return (
    <div className="about-section">
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <h2>About DadBod Studios</h2>
            <p>
              At DadBod Studios, we believe in building games that feel good. 
              We're indie devs with a passion for tight gameplay, bold style, 
              and supporting creative voices in the game industry.
            </p>
            <p>
              Whether it's our own claymation-inspired FPS or helping other devs 
              publish their dream project, we show up, press start, and get to work.
            </p>
            <p>
              Built in the PNW, powered by coffee, kids' nap schedules, and relentless curiosity.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
