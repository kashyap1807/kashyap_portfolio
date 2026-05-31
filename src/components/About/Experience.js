import React from "react";
import { Row, Col, Card, Image } from "react-bootstrap";
import "./Experience.css"; // custom CSS for hover effect
import PruLogo from "../../Assets/Projects/pruLogo.png";
import CivicaLogo from "../../Assets/Projects/civicaLogo.jpg";
import TCSLogo from "../../Assets/Projects/tcsLogo.jpg";
import magnusmindLogo from "../../Assets/Projects/magnusmindLogo.jfif";

function Experience() {
  const experiences = [
    {
      company: "MagnusMinds IT Solution",
      url: "https://www.magnusminds.net/",
      logo: magnusmindLogo,
      details: [
        "Developed and maintained enterprise insurance, enrollment, billing, client, and policy management applications supporting global operations across 40+ countries and serving thousands of enterprise clients.",
        "Delivered 35+ production defects, enhancements, and business-critical features for insurance application, managing the complete software development lifecycle from requirement analysis, development to deployment and production validation.",
        "Optimized SQL Server stored procedures, views, and reporting components using query refactoring, indexing, temporary tables, locking optimizations, improving query performance by up to 40% and reducing database contention.",
        "Authored and deployed 75+ pull requests using Azure DevOps, Git, and enterprise branching strategies while collaborating with a 14-member cross-functional Agile team of developers, QA engineers, business analysts, product owners, and engineering managers.",
        "Supported weekly production releases and monthly major deployments across multiple environments (DEV, QA, UAT, Production), ensuring reliable delivery of business-critical enhancements and system stability.",
        "Adopted AI-assisted software development practices using GitHub Copilot, ChatGPT, and Claude to accelerate feature development, production troubleshooting, performance optimization and improving productivity by an estimated 20 to 30%.",
      ],
    },
    {
      company: "Prudent Corporate Advisory Services Ltd.",
      url: "https://www.prudentcorporate.com/",
      logo: PruLogo,
      details: [
        "Implemented and enhanced full-stack features and resolved bugs for FundzBazar, a production app serving 1.9+ million users, implementing comprehensive insurance modules that increased user engagement by 10%.",
        "Architected 16+ custom reports with advanced filtering capabilities for PrudentPBD (MVC) & Admin (Desktop App), improving operational efficiency for 1000+ employees and reducing manual data processing time by 60%.",
        "Optimized database performance by implementing efficient stored procedures and query optimization, resulting in 50% faster page load and 30% reduction in server response time.",
        "Collaborated in agile sprints using ASP.NET Core, Angular, MVC, and SSMS, delivering 20+ features on schedule while maintaining a 95% code review approval rate.",
      ],
    },
    {
      company: "Civica Resource Pvt. Ltd.",
      url: "https://www.civica.com/",
      logo: CivicaLogo,
      details: [
        "Designed and developed a web app using ASP.NET Core, MVC, Angular, and Azure. Built 15+ RESTful APIs in .NET Core with comprehensive business logic and data access layers.",
        "Utilized Entity Framework Core for both DB-First and Code-First approaches; managed 20+ DB migrations.",
        "Implemented testing suite using xUnit for backend and Jasmine/Karma for frontend, achieving 90% code coverage and reducing regression bugs by 65%.",
      ],
    },
    {
      company: "TCS Campus Ambassador",
      url: "https://www.tcs.com/",
      logo: TCSLogo,
      details: [
        "Promoted TCS events, programs, and initiatives to Bvm college students and the wider community.",
        "Shared information and updates provided by TCS, keeping the audience informed.",
        "Assisted in organizing and facilitating campus placement recruitment drives.",
        "Acted as a bridge between Bvm students and TCS, addressing inquiries and fostering engagement.",
      ],
    },
  ];

  return (
    <Row className="justify-content-center py-4">
      {experiences.map((exp, index) => (
        <Col xs={11} md={10} lg={8} className="mb-4" key={index}>
          <Card className="experience-card shadow-sm border-0 rounded-3 p-3">
            <Card.Body>
              <div className="d-flex align-items-center mb-3">
                <Image
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  roundedCircle
                  width={50}
                  height={50}
                  className="me-3 border"
                />
                <Card.Title as="h3" className="mb-0">
                  <a
                    href={exp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none"
                    style={{ color: "#00e5ff" }}
                  >
                    <strong>{exp.company}</strong>
                  </a>
                </Card.Title>
              </div>
              <ul className="list-unstyled ms-2">
                {exp.details.map((detail, i) => (
                  <li key={i} className="mb-2">
                    <span className="me-2">•</span> {detail}
                  </li>
                ))}
              </ul>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Experience;
