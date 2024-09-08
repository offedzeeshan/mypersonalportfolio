import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/banner.png";
import projImg5 from "../assets/img/githublogo.jpg";
// import projImg6 from "../assets/img/project-img6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Linkedin profile",
      description: "",
      imgUrl: projImg1,
      href: "https://www.linkedin.com/in/offedzeeshan/",
    },
    {
      title: "Leetcode profile",
      description: "",
      imgUrl: projImg2,
      href: "https://leetcode.com/offedzeeshan/"
    },
    {
      title: "Portfolio Website",
      description: "Made using MERN",
      imgUrl: projImg3,
      href: "https://portfolio-three-tawny-23.vercel.app/"
    },
    {
      title: "Art-Director Portfolio",
      description: "",
      imgUrl: projImg4,
      href: "https://art-director-sable.vercel.app/"
    },
    {
      title: "GitHub",
      description: "",
      imgUrl: projImg5,
      href: "https://github.com/offedzeeshan"
    },
    // {
    //   title: "hulala",
    //   description: "Design & Development",
    //   imgUrl: projImg6,
    // },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Profile</h2>
                <p></p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Links</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Education</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Contact</Nav.Link>
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
                    <Tab.Pane eventKey="second">
                      <p>Graduation -(BCA) SAGE Global University, Bhopal</p><br></br>
                      <p>Diploma - Graphic Design (Adobe Suit) ,CRISP Bhopal</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Email:Zeeshaninvictus@gmail.com</p><br/>
                      <p>Phone:+91-8120718806, +91-9522422604</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" alt="background" src={colorSharp2}></img>
    </section>
  )
}
