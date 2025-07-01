import React from "react";
import { Col, Row } from "react-bootstrap";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img
          src="https://cdn.simpleicons.org/bootstrap/7952B3"
          height="80"
          alt="bootstrap logo"
        />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
          height="80"
          alt="git logo"
        />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img
          src="https://skillicons.dev/icons?i=github"
          height="80"
          alt="github logo"
        />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"
          height="80"
          alt="npm logo"
        />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img
          src="https://cdn.simpleicons.org/nuget/004880"
          height="80"
          alt="nuget logo"
        />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img
          src="https://cdn.simpleicons.org/postman/FF6C37"
          height="80"
          alt="postman logo"
        />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg"
          height="80"
          alt="visualstudio logo"
        />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
          height="80"
          alt="vscode logo"
        />
      </Col>
    </Row>
  );
}

export default Toolstack;
