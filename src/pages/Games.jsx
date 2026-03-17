import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import kilnPreview from "../images/KilnTitle.png"; // use your actual images
import sunderPreview from "../images/ProjSunderTitle.png";

const Games = () => {
  return (
    <Container className="py-5 px-3 text-light bg-dark">
      <Row className="text-center mb-5">
        <Col>
          <h1 className="display-4">🎮 Our Games</h1>
          <p className="lead">Two bold visions. One indie mission.</p>
        </Col>
      </Row>

      <Row className="g-4">
        <Col md={6}>
          <Card bg="secondary" text="light" className="h-100 shadow-lg">
            <Card.Img variant="top" src={kilnPreview} alt="KILN preview" />
            <Card.Body>
              <Card.Title>KILN</Card.Title>
              <Card.Text>
                A claymation boomer shooter where you battle failed AI art experiments in a rogue lab.
              </Card.Text>
              <Link to="/KilnGDD">
                <Button variant="outline-light">View GDD</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card bg="secondary" text="light" className="h-100 shadow-lg">
            <Card.Img variant="top" src={sunderPreview} alt="Project Sunder preview" />
            <Card.Body>
              <Card.Title>Project Sunder</Card.Title>
              <Card.Text>
                A story-driven Soulslike RPG that explores grief, memory, and descent into madness.
              </Card.Text>
              <Link to="/gdd/sunder">
                <Button variant="outline-light">View GDD</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-5 text-center">
        <Col>
          <p className="mt-4">More games coming soon. Stay tuned!</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Games;

