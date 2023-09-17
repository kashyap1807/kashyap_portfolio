import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import mec from "../../Assets/Projects/mecommerce.png";
import carr from "../../Assets/Projects/carent.png";
import blog from "../../Assets/Projects/blog.png";
import img from "../../Assets/Projects/imagecomp.png";

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
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="KBlog"
              description="KBlog is a simple blog-website. where you can write, edit, delete your blogs & also publish it. This web app build using React.js."
              ghLink="https://github.com/kashyap1807/Blog_Website"
              // demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={img}
              isBlog={false}
              title="Image Compressor"
              description="The Image Compressor Website is a powerful and user-friendly online tool built using React and JSX for efficiently reducing the file size of images. With a sleek and intuitive interface."
              ghLink="https://github.com/kashyap1807/Image_compressor"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
