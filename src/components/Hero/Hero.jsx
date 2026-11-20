import React from "react";
import { FiArrowRight, FiDownload, FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import portfolio from "../../Portfolio";
import resumePdf from "../../Assets/Manikanta_Resume.pdf";
import Terminal from "./Terminal";
import Pipeline from "./Pipeline";

function Hero() {
  const current = portfolio.experience?.[0];
  const company = current?.company?.split(",")[0];
  const [first, ...rest] = (portfolio.name || "").split(" ");
  const { linkedin, github } = portfolio.socialLinks || {};

  return (
    <section className="hero" id="top">
      <div className="container">
        <div className="hero-grid">
          <div>
            {company && (
              <div className="status-badge">
                <span className="status-dot" aria-hidden="true" />
                Currently at {company}
              </div>
            )}
            <h1 className="hero-name">
              {first} <span className="accent">{rest.join(" ")}</span>
            </h1>
            <p className="hero-role">{portfolio.title}</p>
            <p className="hero-tagline">
              I build event-driven, fault-tolerant backend systems in Java, Spring Boot,
              Kafka and the cloud: the services that keep working when traffic spikes and
              dependencies fail.
            </p>
            <div className="hero-ctas">
              <a className="btn btn-primary" href="#system-design">
                See how I design systems <FiArrowRight />
              </a>
              <a className="btn" href={resumePdf} target="_blank" rel="noreferrer">
                <FiDownload /> Resume
              </a>
            </div>
            <div className="hero-socials">
              {linkedin && (
                <a className="icon-btn" href={linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <FaLinkedinIn />
                </a>
              )}
              {github && (
                <a className="icon-btn" href={github} target="_blank" rel="noreferrer" aria-label="GitHub">
                  <FaGithub />
                </a>
              )}
              {portfolio.email && (
                <a className="icon-btn" href={`mailto:${portfolio.email}`} aria-label="Email">
                  <FiMail />
                </a>
              )}
            </div>
          </div>

          <Terminal />
        </div>

        <Pipeline />
      </div>
    </section>
  );
}

export default Hero;
