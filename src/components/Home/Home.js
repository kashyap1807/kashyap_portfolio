import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import KaasImg from "../../Assets/kaas_Icon.png";
import HireMe from "./HireMe";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        {/* Tech Icons Background */}
        <div className="tech-background-container">
          {/* Main tech icons */}
          <div className="floating-tech-icon tech-icon-1">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
              alt="C# background"
            />
          </div>
          <div className="floating-tech-icon tech-icon-2">
            {/* <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg"
              alt=".NET Core background"
            /> */}
          </div>
          <div className="floating-tech-icon tech-icon-3">
            <img
              src="https://cdn.simpleicons.org/angular/DD0031"
              alt="Angular background"
            />
          </div>
          <div className="floating-tech-icon tech-icon-4">
            <img
              src="https://cdn.simpleicons.org/typescript/3178C6"
              alt="TypeScript background"
            />
          </div>
          <div className="floating-tech-icon tech-icon-5">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg"
              alt="Azure background"
            />
          </div>
          <div className="floating-tech-icon tech-icon-6">
            <img
              src="https://cdn.simpleicons.org/html5/E34F26"
              alt="HTML5 background"
            />
          </div>
          <div className="floating-tech-icon tech-icon-7">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg"
              alt=".NET Core background"
            />
          </div>
          <div className="floating-tech-icon tech-icon-8">
            {/* <img
              src="https://www.edureka.co/blog/wp-content/uploads/2019/10/logo.png"
              alt="SQL Server background"
            /> */}
          </div>
          {/* Additional tech icons */}
          <div className="floating-tech-icon tech-icon-9">
            {/* <img
              src="https://cdn.simpleicons.org/bootstrap/7952B3"
              alt="Bootstrap background"
            /> */}
            <img
              src="https://www.edureka.co/blog/wp-content/uploads/2019/10/logo.png"
              alt="SQL Server background"
            />
          </div>
          <div className="floating-tech-icon tech-icon-10">
            {/* <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
              alt="Git background"
            /> */}
          </div>
          {/* <div className="floating-tech-icon tech-icon-11">
            <img
              src="https://skillicons.dev/icons?i=github"
              alt="GitHub background"
            />
          </div> */}
          <div className="floating-tech-icon tech-icon-12">
            {/* <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"
              alt="NPM background"
            /> */}
          </div>
          {/* <div className="floating-tech-icon tech-icon-13">
            <img
              src="https://cdn.simpleicons.org/nuget/004880"
              alt="NuGet background"
            />
          </div> */}
          <div className="floating-tech-icon tech-icon-14">
            <img
              src="https://cdn.simpleicons.org/postman/FF6C37"
              alt="Postman background"
            />
          </div>
          <div className="floating-tech-icon tech-icon-15">
            <img src={KaasImg} alt="Visual Studio background" />
          </div>
          <div className="floating-tech-icon tech-icon-16">
            {/* <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
              alt="VS Code background"
            /> */}
            <img
              src="https://skillicons.dev/icons?i=github"
              alt="GitHub background"
            />
          </div>
          {/* Smaller duplicate icons for more density */}
          <div className="floating-tech-icon tech-icon-small-1">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg"
              alt="Visual Studio background"
            />
          </div>
          <div className="floating-tech-icon tech-icon-small-2">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"
              alt="NPM background"
            />
          </div>
          <div className="floating-tech-icon tech-icon-small-3">
            <img
              src="https://cdn.simpleicons.org/nuget/004880"
              alt="NuGet background"
            />
          </div>
          <div className="floating-tech-icon tech-icon-small-4">
            {/* <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
              alt="Git background small"
            /> */}
            <img
              // src="https://cdn.simpleicons.org/css3/1572B6"
              src="https://skillicons.dev/icons?i=css"
              alt="CSS3 background"
            />
          </div>
          <div className="floating-tech-icon tech-icon-small-5">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
              alt="Git background small"
            />
          </div>
          <div className="floating-tech-icon tech-icon-small-6">
            {/* <img
              src="https://skillicons.dev/icons?i=github"
              alt="GitHub background small"
            /> */}
            <img
              src="https://cdn.simpleicons.org/bootstrap/7952B3"
              alt="Bootstrap background small"
            />
          </div>
          <div className="floating-tech-icon tech-icon-small-7">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
              alt="VS Code background small"
            />
          </div>
          {/* <div className="floating-tech-icon tech-icon-small-8">
            <img
              src="https://cdn.simpleicons.org/postman/FF6C37"
              alt="Postman background small"
            />
          </div> */}
        </div>

        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={12} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi &nbsp; There! &nbsp;
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name">
                  {" "}
                  &nbsp; KASHYAP &nbsp; CHUDASAMA
                </strong>
              </h1>

              <div style={{ padding: 40, textAlign: "center" }}>
                <Type />
              </div>
              <div style={{ textAlign: "center" }}>
                <HireMe />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
