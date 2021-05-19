import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import BlogCard from "./BlogsCards";
import Particle from "../Particle";

import leaf from "../../Assets/Projects/leaf.PNG";
import plant from "../../Assets/Projects/plant.JPG";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
         

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="2048 GAME"
              description="This is a game made by using the idea of the famous game 2048.This game is made using HTML,CSS and JavaScript"
              link="https://github.com/Rohan27s/2048-Game"
            />
          </Col>

          
        </Row>
        <h1 className="project-heading">
          My Recent <strong className="purple">Instagram</strong> Posts
        </h1>
        <p style={{ color: "white" }}>Do give a read to some of my posts</p>
        <Row style={{ justifyContent: "center" }}>
         
          <Col md={4} className="blog-card">
            <BlogCard
             imgPath={plant}
              link="https://www.instagram.com/p/COZieOeBLXM/?utm_source=ig_web_copy_link"
              title="Placement Roadmap"
              site="https://www.instagram.com/codeitwithme/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;