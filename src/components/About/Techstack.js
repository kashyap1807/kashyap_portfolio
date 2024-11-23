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
        <SiCsharp />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
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
      </Col>
    </Row>
  );
}

export default Techstack;
