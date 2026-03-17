// ExampleGDD.jsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './gdd.css';

export default function ExampleGDD() {
  return (
    <Container className="gdd-section py-5 text-light">
      <Row className="mb-4">
        <Col>
          <h1 className="display-4">🎮 KILN: Game Design Document</h1>
          <p className="lead">A Claymation Boomer Shooter built in Unreal Engine 5</p>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <h2>🎨 Aesthetic & Theme</h2>
          <p>
            KILN is set in a failed underground art lab where AI-generated mascots went rogue. The world is claymation-inspired, with handcrafted textures and exaggerated character designs.
          </p>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <h2>🧪 Core Mechanics</h2>
          <ul>
            <li>First-person shooting with weapon crafting (à la Gummi Ship)</li>
            <li>Fast-paced enemy waves with procedural variety</li>
            <li>Snap-to-grid gun modding system</li>
            <li>Playable without VR, future compatibility with Quest 3</li>
          </ul>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <h2>👾 First Enemy: Scribble Bug</h2>
          <p>
            A chaotic AI scrap bug made of paperclips, slime, and broken logic. Fast, twitchy, and very noisy. Easy to kill, but comes in swarms.
          </p>
        </Col>
      </Row>
    </Container>
  );
}
