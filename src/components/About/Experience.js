import React from 'react'
import {  Row, Col } from "react-bootstrap";

function Experience() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={11} className="tech-icons">
        <h2>
          <a href="https://www.prudentcorporate.com/">
            <strong className="purple">Prudent</strong>
          </a>
        </h2>
        <h6>
          • Developed and maintained full-stack features and resolved bugs for
          FundzBazar, a production app serving 1.8+ million users, implementing
          comprehensive insurance modules that increased user engagement by 10%.
        </h6>
        <h6>
          • Architected 16+ custom reports with advanced filtering capabilities
          for PrudentPBD (MVC) & Admin (Desktop App), improving operational
          efficiency for 1000+ employees and reducing manual data processing
          time by 60%.
        </h6>
        <h6>
          • Optimized database performance by implementing efficient stored
          procedures and query optimization, resulting in 50% faster page load
          and 30% reduction in server response time.
        </h6>
        <h6>
          • Collaborated in agile sprints using ASP.NET Core, Angular, MVC, and
          SSMS, delivering 20+ features on schedule while maintaining a 95% code
          review approval rate.
        </h6>
      </Col>

      <Col xs={11} className="tech-icons">
        <h2>
          <a href="https://www.civica.com/">
            <strong className="purple">Civica</strong>
          </a>
        </h2>
        <h6>
          • Designed and developed a web app using ASP.NET Core, MVC, Angular,
          and Azure. Built 15+ RESTful APIs in .NET Core with comprehensive
          business logic and data access layers.
        </h6>
        <h6>
          • Utilized Entity Framework Core for both DB-First and Code-First
          approaches; managed 20+ DB migrations.
        </h6>
        <h6>
          • Implemented testing suite using xUnit for backend and Jasmine/Karma
          for frontend, achieving 90% code coverage and reducing regression bugs
          by 65%.
        </h6>
      </Col>

      <Col xs={11} className="tech-icons">
        <h2>
          <a href="https://www.tcs.com/">
            <strong className="purple">TCS Campus Ambassador</strong>
          </a>
        </h2>
        <h6>
          • Promoted TCS events, programs, and initiatives to students, and
          shared information and updates provided by TCS.
        </h6>
        <h6>• Acted as a bridge between students and TCS.</h6>
      </Col>
    </Row>
  );
}

export default Experience
