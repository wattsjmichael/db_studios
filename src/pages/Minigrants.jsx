import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";

const MiniGrants = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/xwpoglzj", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: data,
    });

    if (response.ok) {
      setSubmitted(true);
      form.reset();
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <Container className="mt-5 mb-5">
      <Row className="mb-4">
        <Col>
          <h1 className="text-center">🎮 DadBod MiniGrants</h1>
          <p className="lead text-center">
            Small grants for big ideas. Apply below to get $100–$500 toward your indie game.
          </p>
        </Col>
      </Row>

      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          {submitted ? (
            <Alert variant="success">
              ✅ Thank you for applying! We'll review your submission and follow up soon.
            </Alert>
          ) : (
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" name="name" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="project">
                <Form.Label>Tell us about your game</Form.Label>
                <Form.Control
                  as="textarea"
                  name="project"
                  rows={5}
                  placeholder="What are you building? What stage is it in?"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="amount">
                <Form.Label>Requested Amount ($100–$500)</Form.Label>
                <Form.Control type="number" name="amount" min="100" max="500" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="links">
                <Form.Label>Links (GitHub, demo, etc.)</Form.Label>
                <Form.Control
                  type="text"
                  name="links"
                  placeholder="Optional but helpful!"
                />
              </Form.Group>

              <div className="d-grid">
                <Button type="submit" variant="primary">
                  Submit Application
                </Button>
              </div>
            </Form>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default MiniGrants;

