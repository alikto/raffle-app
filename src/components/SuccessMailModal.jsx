import React from "react";
import { Button, Modal } from "react-bootstrap";

export const SuccessMailModal = ({ show, onHide }) => {
  return (
    <Modal className="success-modal" show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Yeeyy!! 🎉</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Mailler başarıyla gönderildi! ✉️</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>Kapat</Button>
      </Modal.Footer>
    </Modal>
  );
};
