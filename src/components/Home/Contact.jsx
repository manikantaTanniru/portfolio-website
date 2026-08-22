import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import portfolio from "../../Portfolio";

function Contact() {
  const socialLinks = portfolio.socialLinks || {};
  const SOCIAL_ICONS = {
    github: <AiFillGithub />,
    twitter: <AiOutlineTwitter />,
    instagram: <AiFillInstagram />,
    linkedin: <FaLinkedinIn />,
  };

  return (
    <Container fluid id="contact" className="contact-section">
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
    </Container>
  );
}

export default Contact;
