import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Type from "./Type";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import portfolio from "../../Portfolio";

function HomePage() {
  const socialLinks = portfolio.socialLinks || {};
  const SOCIAL_ICONS = {
    github: <AiFillGithub />,
    twitter: <AiOutlineTwitter />,
    instagram: <AiFillInstagram />,
    linkedin: <FaLinkedinIn />,
  };
  const coreStacksList = ["Java", "Spring Boot", "React", "Node.js", "Python", "Kafka", "AWS"];

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name">{` ${portfolio.name}`}</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
                {portfolio.subTitle && (
                  <p className="heading-description">{portfolio.subTitle}</p>
                )}
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={12} className="home-about-description">
              <h1 style={{ fontSize: "2.6em" }}>
                LET ME <span className="purple"> INTRODUCE </span> MYSELF
              </h1>
              <p className="home-about-body">
                {portfolio.about}
                {coreStacksList.length > 0 && (
                  <>
                    <br />
                    <br />
                    <i>
                      <b className="purple">{coreStacksList.join(", ")}</b>
                    </i>
                  </>
                )}
              </p>
            </Col>
          </Row>
        </Container>
      </Container>

      <Container>
        <Row style={{ paddingTop: "50px", paddingBottom: "80px" }}>
          <Col md={12} className="home-about-social">
            <h1>Find Me On</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <p className="active-search-note home-contact-note">
              <span role="img" aria-label="rocket">
                🚀
              </span>{" "}
              I&apos;m actively looking for new opportunities—drop a note at{" "}
              <a href={`mailto:${portfolio.email}`} className="home-contact-email">
                {portfolio.email}
              </a>{" "}
              or say hi on any of the platforms below.
            </p>
            <ul className="home-about-social-links">
              {Object.entries(socialLinks)
                .filter(([network, url]) => SOCIAL_ICONS[network] && url)
                .map(([network, url]) => (
                  <li className="social-icons" key={network}>
                    <a
                      href={url}
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                    >
                      {SOCIAL_ICONS[network]}
                    </a>
                  </li>
                ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HomePage;
