import React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import "./App.css"; // Import the CSS for styling
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
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh", minWidth: "100vw", backgroundColor: "#bebebe"}}
      >
        <Row className="" style={{backgroundColor: "#cecece", minWidth: "80vw", minHeight: "50vh"}}>
          <Col xs={12} md={6} className="left-col" style={{backgroundColor: "#aeaeae"}}>
            <AddPerson onAddUser={handleAddUser} />
          </Col>
          <Col xs={12} md={6} className="right-col" style={{backgroundColor: "#eaeaea"}}>
            <ListPerson users={users} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
