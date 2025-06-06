import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  SiCsharp,
  SiTypescript,
  SiMysql,
  SiMicrosoftsqlserver,
  SiAzuredevops,
} from "react-icons/si";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiJava,
  DiDotnet,
  DiAngularSimple,
  DiTypo3,
  DiSqllite,
  DiMysql,
  DiPostgresql,
  DiMsqlServer,
  DiBootstrap,
  
} from "react-icons/di";
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
          src="https://cdn.simpleicons.org/css3/1572B6"
          height="80"
          alt="css3 logo"
        />
      </Col>

      {/* <Col xs={4} md={2} className="tech-icons">
        <SiCsharp />        
      </Col> */}
      {/* <Col xs={4} md={2} className="tech-icons">
        <DiDotnet />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiAngularSimple />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiBootstrap />
      </Col> */}
    </Row>
  );
}

export default Techstack;
