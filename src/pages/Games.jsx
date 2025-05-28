import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const Games = () => {
  return (
    <Container className="text-center mt-5 mb-5 px-3">
      <Row>
        <Col>
          <h1 className="display-4">🎮 Our Games</h1>
          <p className="lead">
            We're in the lab crafting something special.
          </p>
        </Col>
      </Row>

      <Row className="justify-content-center mt-4">
        <Col xs={12} md={8} lg={6}>
          <Image
            src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExOW9xemdxN21zOGkwbDJwbjl2N3RiYXBhcndiNWU5YzI5MTJ3OW9zbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26BRLGB7eWATEI1Ik/giphy.gif"
            alt="Coming Soon"
            fluid
            rounded
            loading="lazy"
            aria-label="Animated lab beaker bubbling"
          />
          <h2 className="mt-4">Coming Soon...</h2>
          <p>
            Follow us on socials or check back soon for updates on our debut title.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Games;

