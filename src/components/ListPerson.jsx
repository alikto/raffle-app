import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";

export const ListPerson = ({ users }) => {
  return (
    <Container className="list-person-container">
      <Row className="my-4">
        <Col>
          <h2 className="text-dark">Users List</h2>
          <ListGroup>
            {users.map((user, index) => (
              <ListGroupItem key={index}>
                {user.name} ({user.email})
              </ListGroupItem>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};
