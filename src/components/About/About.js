import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
// import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import Experience from "./Experience";
import Projects from "../Projects/Projects";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        {/* <Row style={{ justifyContent: "center" }}>
          <Col>
            <h1 style={{ justifyContent: "center", paddingBottom: "5px" }}>
              What <strong className="purple">I'M</strong>
            </h1>
            
          </Col>
          <Col>            
          </Col>
        </Row> */}

        <h1 className="project-heading">
          Experie<strong className="purple">nce</strong>
        </h1>

        <Experience />

        <Projects />

        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        {/* <Github /> */}
      </Container>
    </Container>
  );
}

export default About;
