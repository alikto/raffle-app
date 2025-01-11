import React, { useState } from "react";
import { Container, Row, Col, ListGroup, ListGroupItem, Button, } from "react-bootstrap";
import { SuccessMailModal } from "./SuccessMailModal";

export const ListPerson = ({ users, onBack }) => {
  const [showModal, setShowModal] = useState(false);

  const handleSendMail = async () => {
    console.log(users)
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    onBack();
  };

  return (
    <Container className="list-person-container">
      <Row className="my-4">
        <Col>
          <h2 className="text-light">Kişi Listesi</h2>
          <div className="list-group-container">
            <ListGroup>
              {users.map((user, index) => (
                <ListGroupItem key={index} className="list-item">
                  𖹭 {user.name} ({user.email})
                </ListGroupItem>
              ))}
            </ListGroup>
          </div>
          <Col  xs={12} className="d-flex justify-content-end mt-3">
            <Button onClick={handleSendMail} variant="secondary">
              Mail Gönder
            </Button>
          </Col>
        </Col>
      </Row>

      <SuccessMailModal show={showModal} onHide={handleClose} />
    </Container>
  );
};
