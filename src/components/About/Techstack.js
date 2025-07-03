import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  
} from "react-icons/si";
// import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
          height="80"
          alt="csharp logo"
        />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg"
          height="80"
          alt="dotnetcore logo"
        />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img
          src="https://cdn.simpleicons.org/angular/DD0031"
          height="80"
          alt="angularjs logo"
        />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img
          src="https://cdn.simpleicons.org/typescript/3178C6"
          height="80"
          alt="typescript logo"
        />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg"
          height="80"
          alt="azure logo"
        />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a
          href="https://learn.microsoft.com/en-us/sql/ssms/sql-server-management-studio-ssms"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://www.edureka.co/blog/wp-content/uploads/2019/10/logo.png"
            alt="sql server management studio"
            width="80"
            height="80"
          />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img
          src="https://cdn.simpleicons.org/html5/E34F26"
          height="80"
          alt="html5 logo"
        />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img
          src="https://skillicons.dev/icons?i=css"
          height="80"
          alt="css3 logo"
        />
      </Col>
    </Row>
  );
}

export default Techstack;
