import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";

const Contact = () => {
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.target);

    const response = await fetch("https://formspree.io/f/xqaqrpjp", {
      method: "POST",
      headers: {
        Accept: "application/json"
      },
      body: formData,
    });

    const result = await response.json();

    if (response.ok) {
      setMessage("Thanks for reaching out! We'll get back to you soon.");
      setStatus("success");
      e.target.reset();
    } else {
      setMessage("Oops! Something went wrong. Try again later.");
      setStatus("error");
    }
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <h2 className="mb-4 text-center">Contact Us</h2>
          <p className="text-center mb-4">
            Got a game idea? Want to collaborate? Drop us a message!
          </p>

          {status === "success" && <Alert variant="success">{message}</Alert>}
          {status === "error" && <Alert variant="danger">{message}</Alert>}

          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="name" className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Your name"
                required
              />
            </Form.Group>

            <Form.Group controlId="email" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Your email"
                required
              />
            </Form.Group>

            <Form.Group controlId="message" className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                name="message"
                rows={5}
                placeholder="What's on your mind?"
                required
              />
            </Form.Group>

            <div className="text-center">
              <Button variant="primary" type="submit" disabled={status === "sending"}>
                {status === "sending" ? "Sending..." : "Send Message"}
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
