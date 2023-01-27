import React from "react";
import { Row, Col, Image} from "react-bootstrap";
import "./styles/about.css";
import ScrollAnimation from "react-animate-on-scroll";
import aboutImage from "./images/about/workbench.gif";

function About() {
  return (
    <div className="section about  bg-gradient-to-b from-gray-800 to-black text-black" id="about">
      <h1>About</h1>
      <h6>A small introduction about myself</h6>
      <Row className="about-row">
        <Col lg={4} className="about-col text-center">
          <ScrollAnimation animateIn="animate__bounceInLeft">
            <Image
              className="about-image"
              src={aboutImage}
              thumbnail
              alt="aboutImage"
            />
          </ScrollAnimation>
        </Col>
        <Col lg={8} className="about-row">
          <ScrollAnimation animateIn="animate__bounceInRight">
            <h3>Vasuki P R</h3>
            <p>
              Associate Software Engineer at Mphasis
            </p>
            <p>
              I was born and raised in Coimbatore, Tamil Nadu,
              India. I've completed my bachelor's degree in Electronics and Instrumentation Engineering 
              from Bannari Amman Institute of technology.
              Currently, working as
              Associate Software Engineer at Mphasis,Bangalore,India.
            </p>
            <p>
             As a non-IT background student,
              I love both instrumentation and programming.
             Then I got going with programming and now I'm a Java full-stack developer 
             at Mphasis.
             I have enhanced my skills in technology,
             I'm learning new technologies to grow my skills to be a good developer.
            </p>
            <p>
            Self-education started in 2021 to improve developer skills such as 
            Java, JavaScript, HTML, CSS, and AWS.
            And I'm good at using tools and software like spring, angular, and docker.
            </p>
            <p>
              Lastly, I would like to add my strengths like
              self-motivation, teamwork, responsibility, problem-solving,
              communication, and time management in my life or working area which builds me as a strong person.
            </p>
            
          </ScrollAnimation>
        </Col>
      </Row>
    </div>
  );
}

export default About;
