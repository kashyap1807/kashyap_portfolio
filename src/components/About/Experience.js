import React from 'react'
import {  Row, Col } from "react-bootstrap";

function Experience() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={7} md={5} className="tech-icons">
        <h2>
          <a href="https://www.tcs.com/">
            <strong className="purple">TCS Campus Ambassador</strong>
          </a>
        </h2>

        <h6>
          • Promoted TCS events, programs, and initiatives to students & Shared
          information and updates provided by TCS.
        </h6>
        <h6>• Acted as a bridge between students and TCS.</h6>
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
