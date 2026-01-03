import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Github from "./Github";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={12} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              PROFESSIONAL <span className="purple"> SUMMARY </span>
            </h1>
            <p className="home-about-body">
              Result-Driven &nbsp;
              <i>
                <b className="purple">Full-stack Developer</b> &nbsp;
              </i>
              with 2+ year of experience working on enterprise-level
              applications using &nbsp;
              <i>
                <b className="purple">
                  .NET Core, Angular, Azure, SQL, Postgresql, CI/CD pipelines &
                  Agile Methodology
                </b>
              </i>
              <br />
              <br />
              with a focus on microservices architecture, secure authentication
              and cloud infrastructure.
              {/* <i>
                <b className="purple"> Full stack Development. </b>
              </i> */}
              <br />
              <br />
              &nbsp;
              {/* <i>
                <b className="purple">high code quality</b>
              </i> */}
              &nbsp; Contributing to projects that emphasize clean code,
              collaborative development, and robust deployment processes that
              driven
              <br />
              &nbsp;
              <i>
                <b className="purple">Business Growth</b>
              </i>
              <br />
              <br />
            </p>
          </Col>
        </Row>
        <Github />
      </Container>
    </Container>
  );
}
export default Home2;
