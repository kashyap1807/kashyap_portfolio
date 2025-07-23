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
              LET ME <span className="purple"> INTRODUCE </span> MY SELF
            </h1>
            <p className="home-about-body">
              <i>
                <b className="purple">Full-stack developer</b> &nbsp;
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
              &nbsp; and testing standards. &nbsp;
              <br />
              <br />
            </p>
          </Col>
        </Row>
        <Github />
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/kashyap1807"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Kashyapp_01"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/kashyap-chudasama-a17a6b238/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
