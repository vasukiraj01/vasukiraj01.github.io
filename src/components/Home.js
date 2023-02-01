import React, { useState, useEffect, useRef } from "react";
import { Row, Col, Button } from "react-bootstrap";
import "./styles/home.css";
import useTypewriter from "react-typewriter-hook";
import ScrollAnimation from "react-animate-on-scroll";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
import EmailIcon from "@material-ui/icons/Email";
import homeImage from "./images/home/profile.png";

const wordsDisplay = [
  "Java Full-stack Developer",
  "Web Developer"
];
let index = 0;

function Home() {
  const [displayName, setDisplayName] = useState(
    "Java Full-stack Developer"
  );
  const intervalRef = useRef({});
  const name = useTypewriter(displayName);
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      index = index > wordsDisplay.length ? 0 : ++index;
      setDisplayName(wordsDisplay[index]);
    }, 5000);
    return function clear() {
      clearInterval(intervalRef.current);
    };
  }, [displayName]);

  return (
    <section className="section home" id="home">
      <Row>
        <Col lg={6} className="home-col float-right">
          <ScrollAnimation animateIn="animate__backInLeft">
            <h2>Hello and welcome to my webpage,</h2>
            <h2>My name is</h2>
            <h1>Vasuki</h1>
            <p>
              and I'm <span className="display">{name}</span>
            </p>
            <Button
              className="button-home"
              variant="dark"
              size="lg"
              target="_blank"
              href="/2526804_Vasuki.pdf"
              download
            >
              <PictureAsPdfIcon fontSize="large" />
              Resume
            </Button>
            <Button
              className="button-home "
              variant="secondary"
              size="lg"
              target="_blank"
              href="mailto:vasukiraj01@gmail.com"
              download
            >
              <EmailIcon fontSize="large" />
              Mail
            </Button>
          </ScrollAnimation>
        </Col>
        <Col lg={6}>
          <img className="image-home" src={homeImage} alt="homeImage" />
        </Col>
      </Row>
    </section>
  );
}

export default Home;
