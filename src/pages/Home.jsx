import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Home = () => {
  return (
    <Container className="text-center mt-5">
      <Row>
        <Col>
          <img
            src="/logo512.png" // You can replace this with your actual logo path
            alt="DadBod Studios Logo"
            width="300"
            className="mb-4"
          />
          <h1>Welcome to DadBod Studios</h1>
          <p className="lead">
            Indie games. DIY spirit. Built with biceps and brain cells.
          </p>
          <Button variant="primary" href="/games">
            Check Out Our Games
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
