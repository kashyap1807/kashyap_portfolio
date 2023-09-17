import React from 'react'
import { Container, Row, Col } from "react-bootstrap";

function Experience() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={7} md={5} className="tech-icons">
        <h2>
          <a href="https://byteparity.com/">
            <strong className="purple">ByteParity</strong>
          </a>
        </h2>

        <h6>• Explore Frontend Technologies like HTML, CSS, JS & ReactJS.</h6>
        <h6>• Created Restaurant Menu card’s using mapping method.</h6>
      </Col>

      <Col xs={7} md={5} className="tech-icons">
        <h2>
          <a href="http://technoguideinfo.com/">
            <strong className="purple">TecnoguideInfosoft</strong>
          </a>
        </h2>
        <h6>• Acquire proficiency in Node.js, Express.js, and MongoDB.</h6>
        <h6>
          • Using Backend Technology, I created Login System & Cart System of
          E-Commerce app.
        </h6>
      </Col>
    </Row>
  );
}

export default Experience
