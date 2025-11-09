import React, { useRef, useState, useEffect } from "react";
import { Button, Modal, Form, Alert } from "react-bootstrap";
import emailjs from "@emailjs/browser";

// Initialize EmailJS
emailjs.init("SosnRVCQuY6Z5tI-P");

function HireMe() {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ show: false, message: "", variant: "" });
  const formRef = useRef();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_nm7gkaf", // Replace with your EmailJS service ID
        "template_ehjfu2i", // Replace with your EmailJS template ID
        formRef.current,
        "SosnRVCQuY6Z5tI-P" // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          setAlert({
            show: true,
            message: "Message sent successfully!",
            variant: "success",
          });
          formRef.current.reset();
          setTimeout(() => handleClose(), 2000);
        },
        (error) => {
          setAlert({
            show: true,
            message: "Failed to send message. Please try again.",
            variant: "danger",
          });
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <Button
        variant="primary"
        onClick={handleShow}
        style={{ 
          padding: "10px 50px",
          fontSize: "1.2rem",
          marginTop: "20px",
          background: "transparent",
          border: "2px solid #00e5ff",
          color: "#00e5ff",
          transition: "all 0.3s ease-in-out"
        }}
        onMouseOver={(e) => {
          e.target.style.background = "#00e5ff";
          e.target.style.color = "white";
        }}
        onMouseOut={(e) => {
          e.target.style.background = "transparent";
          e.target.style.color = "#00e5ff";
        }}
      >
        Hire Me!
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton style={{ background: "#1a2e2e", color: "white", border: "none" }}>
          <Modal.Title>Get In Touch</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ background: "#1a2e2e", color: "white" }}>
          {alert.show && (
            <Alert variant={alert.variant} onClose={() => setAlert({ ...alert, show: false })} dismissible>
              {alert.message}
            </Alert>
          )}
          <Form ref={formRef} onSubmit={sendEmail}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="user_name"
                required
                style={{ background: "#2a3e3e", color: "white", border: "1px solid #00e5ff" }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="user_email"
                required
                style={{ background: "#2a3e3e", color: "white", border: "1px solid #00e5ff" }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Subject</Form.Label>
              <Form.Control
                type="text"
                name="subject"
                required
                style={{ background: "#2a3e3e", color: "white", border: "1px solid #00e5ff" }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                name="message"
                required
                style={{ background: "#2a3e3e", color: "white", border: "1px solid #00e5ff" }}
              />
            </Form.Group>
            <Button 
              variant="primary" 
              type="submit"
              disabled={loading}
              style={{
                background: loading ? "#cccccc" : "#00e5ff",
                border: "none",
                width: "100%"
              }}
            >
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default HireMe;