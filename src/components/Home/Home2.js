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
              with 1.5+ year of experience building scalable web applications
              using
              <br />
              <i>
                <b className="purple">
                  ASP.NET Core, Angular, Azure, CI/CD pipelines & SQL.
                </b>
              </i>
              <br />
              <br />
              Strong focus on performance optimization, secure authentication,
              and cloud-native deployment.
              {/* <i>
                <b className="purple"> Full stack Development. </b>
              </i> */}
              <br />
              <br />
              Proven ability to deliver robust features with &nbsp;
              <i>
                <b className="purple">high code quality</b>
              </i>
              &nbsp; and testing standards that driven &nbsp;
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
