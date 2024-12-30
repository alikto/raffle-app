import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

export const AddPerson = ({ onAddUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email) {
      onAddUser({ name, email });
      setName("");
      setEmail("");
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="add-person-form m-5">
      <Row className="mb-3">
        <Col xs={12}>
          <Form.Group controlId="name">
            <Form.Label className="text-light">Name</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter name"
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col xs={12}>
          <Form.Group controlId="email">
            <Form.Label className="text-light">Email</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col xs={12} className="d-flex justify-content-end">
          <Button type="submit" variant="primary">
            Add
          </Button>
        </Col>
      </Row>
    </Form>
  );
};
