import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./App.css"; // Import the CSS for styling

function App() {
  return (
    <div className="app-container">
      <Container className="custom-container">
        <Row className="justify-content-center align-items-center">
          <Col xs={12} md={6} className="left-col">
            <h2 className="text-light">SOLDAKİ COL</h2>
          </Col>
          <Col xs={12} md={6} className="right-col">
            <h2 className="text-dark">SAĞDAKİ COL</h2>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
