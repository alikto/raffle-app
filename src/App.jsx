import React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import "./App.css"; 
import { AddPerson } from "./components/AddPerson";
import { useState } from "react";
import { ListPerson } from "./components/ListPerson";

function App() {
  const [users, setUsers] = useState([]);

  const handleAddUser = (user) => {
    setUsers([...users, user]);
  };

  return (
    <>
      <Container
        className="outer-container d-flex justify-content-center align-items-center"
      >
        <Row className="row-container">
          <Col xs={12} md={6} className="left-col">
            <AddPerson onAddUser={handleAddUser} />
          </Col>
          <Col xs={12} md={6} className="right-col">
            <ListPerson users={users} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
