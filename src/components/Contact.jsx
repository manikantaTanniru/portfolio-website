import React, { useState } from "react";
import { FiMail, FiCopy, FiCheck } from "react-icons/fi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import portfolio from "../Portfolio";
import Reveal from "./Reveal";

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
    <section className="section" id="contact">
      <div className="container">
        <Reveal className="card contact">
          <div className="eyebrow" style={{ justifyContent: "center" }}>
            contact
          </div>
          <h2 className="section-title">Let&apos;s build something reliable.</h2>
          <p className="contact-sub">
            Open to backend, distributed-systems and platform engineering roles. The fastest
            way to reach me is email.
          </p>
          <div className="contact-actions">
            {email && (
              <a className="btn btn-primary" href={`mailto:${email}`}>
                <FiMail /> {email}
              </a>
            )}
            {email && (
              <button type="button" className="btn" onClick={copyEmail} aria-live="polite">
                {copied ? <FiCheck /> : <FiCopy />} {copied ? "Copied" : "Copy email"}
              </button>
            )}
            {linkedin && (
              <a className="btn" href={linkedin} target="_blank" rel="noreferrer">
                <FaLinkedinIn /> LinkedIn
              </a>
            )}
            {github && (
              <a className="btn" href={github} target="_blank" rel="noreferrer">
                <FaGithub /> GitHub
              </a>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>© {year} {portfolio.name}</span>
        <span>built with react · deployed on firebase · exit 0</span>
      </div>
    </footer>
  );
}

export default Contact;
