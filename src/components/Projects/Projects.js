import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import mec from "../../Assets/Projects/mecommerce.png";
import carr from "../../Assets/Projects/carent.png";
import blog from "../../Assets/Projects/blog.png";
import img from "../../Assets/Projects/imagecomp.png";
import pb from "../../Assets/Projects/phonebook.png";
import em from "../../Assets/Projects/employeeMaster.png"
import edv from "../../Assets/Projects/eduverse.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>These are a few projects I've worked.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={edv}
              isBlog={false}
              title="Edu-Verse"
              description="• Built and deployed EduVerse, a full-stack educational platform using .NET Core 8, EF Core, Angular 18, and Azure services.Integrated Azure AD B2C for authentication and used Azure Functions for role-based authorization and claims.Set up CI/CD pipelines in Azure DevOps with YAML files, private agent pools, build artifacts, and release stages.Enabled Serilog logging, API health checks, Application Insights, and stored images using Azure Blob Storage."
              demoLink="https://eduversebykashyap.azurewebsites.net/home"
              ghLink="https://github.com/kashyap1807/EduVerseAngular"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pb}
              isBlog={false}
              title="PhoneBook"
              description="• Developed contacts management app using ASP.NET, MVC & Angular 16, Test it using xUnit and Jasmin Karma. 
•        Implemented features such as CRUD operation, Searching, Sorting, Pagination, Authentication and Authorization. Profile Management, use store procedure for reports.
"
              ghLink="https://github.com/kashyap1807/PhonebookAppMain"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={em}
              isBlog={false}
              title="EmployeeMaster"
              description="• Worked on update employee component and UI Designing part of application.
•         Set up business logic in API for basic on Salary. Check all API & front-end validations. 
"
              ghLink="https://github.com/kashyap1807/CivicaEmployeeMaster"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mec}
              isBlog={false}
              title="MEcommerce"
              description="MEcommerce is e-commerce platform designed for buying products. Use Node/Express.js as a backend, for frontend use React.js.also implemented JWT authentication , Braintree payment gateway And SEO."
              ghLink="https://github.com/kashyap1807/M_Ecommerce"
              demoLink="https://m-ecommerce-frontend.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={carr}
              isBlog={false}
              title="CarRent"
              description="CarRent is car-rental system where user rent a car within a time limit.Build an Admin panel who manage whole cars & Consumer can book the cars. use Stripe for payment. Here also we use MERN technology."
              ghLink="https://github.com/kashyap1807/CarRent"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="KBlog"
              description="KBlog is a simple blog-website. where you can write, edit, delete your blogs & also publish it. This web app build using React.js."
              ghLink="https://github.com/kashyap1807/Blog_Website"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={img}
              isBlog={false}
              title="Image Compressor"
              description="The Image Compressor Website is a powerful and user-friendly online tool built using React and JSX for efficiently reducing the file size of images. With a sleek and intuitive interface."
              ghLink="https://github.com/kashyap1807/Image_compressor"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
