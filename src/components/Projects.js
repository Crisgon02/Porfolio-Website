import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/download.png";
import projImg2 from "../assets/img/download-2.png";
import projImg3 from "../assets/img/UniversityofPennsylvania_Shield_RGB-2.png";
import fermilab from "../assets/img/unnamed.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import "./Projects.css";
export const Projects = () => {

  const projects = [
    {
      title: "Publicis Sapient",
      description: "Sofware Engineer",
      imgUrl: projImg1,
    },
    {
      title: "Huntington Ingalls Industries",
      description: "Quantum Computing Research Intern",
      imgUrl: projImg2,
    },
    {
      title: "Fermilab",
      description: "Quantum Computing Intern",
      imgUrl: fermilab,
    },
    {
      title: "University of Pennsylvania",
      description: "Drndic Laboratories, Undergraduate Researcher",
      imgUrl: projImg3,
    },
    {
      title: "University of Pennsylvania",
      description: "Physics 2260(Computational Physics) Teaching Assistant",
      imgUrl: projImg3,
    },
    {
      title: "University of Pennsylvania",
      description: "Physics 0150 Lab Teaching Assistant",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Internships/Work Experience</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p> To Add</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p> To Add</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}