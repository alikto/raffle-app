import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./App.css";
import { AddPerson } from "./components/AddPerson";
import { ListPerson } from "./components/ListPerson";

function App() {
  const [users, setUsers] = useState([]);
  const [showContainer, setShowContainer] = useState(false);

  const handleAddUser = (user) => {
    setUsers([...users, user]);
  };

  const toggleContainer = () => {
    setShowContainer(!showContainer);
  };

  return (
    <>
      {showContainer ? (
        <Container className="outer-container d-flex justify-content-center align-items-center">
          <Row className="row-container">
            <Col xs={12} md={6} className="left-col">
              <AddPerson onAddUser={handleAddUser} />
            </Col>
            <Col xs={12} md={6} className="right-col">
              <ListPerson users={users} onBack={toggleContainer} />
            </Col>
          </Row>
        </Container>
      ) : (
        <Container className="outer-container d-flex justify-content-center align-items-center">
          <Row className="row-container">
            <Col
              xs={12}
              className="main-col d-flex flex-column justify-content-center align-items-center"
            >
              <h3 className="text-center text-light mb-4">
                🎉 Çekilişe Hoş Geldin! 🎟️<br/> 
                🎊 Hazır mısın? 🎊<br/> 
                🍀 Şansını dene ve bakalım çekilişin kim olacak! 🍀<br/> 
                🚀 "Çekilişi Başlat" butonuna tıklayarak hemen başla! 🚀<br/> 
              </h3>
              <Button onClick={toggleContainer}>Çekilişi Başlat</Button>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
}

export default App;
