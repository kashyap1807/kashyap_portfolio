import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Kashyap Chudasama </span>
            from <span className="purple"> Gujarat, India.</span>
            <br />
            <br />
            👨🏻‍💻 Jr. Web Developer At <span className="purple">Prudent. </span>
            <br />
            <br />
            🎓 I Completed B.Tech Informatio Technoogy from{" "}
            <span className="purple">BVM </span> College, Anand.
            <br />
            <br />
            🌱 Learning is a continuous journey for me. I'm dedicated to
            expanding my skillset and staying up-to-date with the latest trends
            in technology.
            <br />
            <br />
            🚀 Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Photography
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
          <br />
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
