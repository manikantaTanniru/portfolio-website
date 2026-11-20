import React, { useState } from "react";
import { FiCopy, FiCheck, FiArrowUpRight } from "react-icons/fi";
import portfolio from "../Portfolio";
import resumePdf from "../Assets/Manikanta_Resume.pdf";
import { Heading } from "./Reveal";

function Contact() {
  const [copied, setCopied] = useState(false);
  const { linkedin, github } = portfolio.socialLinks || {};
  const email = portfolio.email;

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <section className="section field-orange" id="contact">
      <div className="wrap">
        <span className="label">Contact</span>
        <Heading lines={["Let's", "talk."]} className="contact-big" />
        <div className="contact-grid">
          <div>
            <p className="lead" style={{ marginBottom: 20, maxWidth: 560 }}>
              Open to backend, distributed-systems and platform engineering roles. Email is
              the fastest way to reach me.
            </p>
            {email && (
              <a className="contact-email" href={`mailto:${email}`}>
                {email}
              </a>
            )}
          </div>
          <div className="contact-actions">
            {email && (
              <button type="button" className="btn btn-coal" onClick={copyEmail} aria-live="polite">
                {copied ? <FiCheck /> : <FiCopy />} {copied ? "Copied" : "Copy email"}
              </button>
            )}
            {linkedin && (
              <a className="btn btn-outline-coal" href={linkedin} target="_blank" rel="noreferrer">
                LinkedIn <FiArrowUpRight />
              </a>
            )}
            {github && (
              <a className="btn btn-outline-coal" href={github} target="_blank" rel="noreferrer">
                GitHub <FiArrowUpRight />
              </a>
            )}
            <a className="btn btn-outline-coal" href={resumePdf} target="_blank" rel="noreferrer">
              Resume <FiArrowUpRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <span>© {new Date().getFullYear()} {portfolio.name}</span>
        <span>Built with React · San Jose, CA</span>
      </div>
    </footer>
  );
}

export default Contact;
