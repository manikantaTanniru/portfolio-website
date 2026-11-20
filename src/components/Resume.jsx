import React from "react";
import { FiDownload, FiExternalLink } from "react-icons/fi";
import portfolio from "../Portfolio";
import resumePdf from "../Assets/Manikanta_Resume.pdf";
import Reveal from "./Reveal";

function Resume() {
  const fileName = `${(portfolio.name || "Resume").replace(/\s+/g, "_")}_Resume.pdf`;

  return (
    <section className="section" id="resume" style={{ paddingTop: 24 }}>
      <div className="container">
        <Reveal className="section-head">
          <div className="eyebrow">resume</div>
          <h2 className="section-title">The one-page version.</h2>
        </Reveal>
        <Reveal className="card resume-card">
          <div className="resume-file" aria-hidden="true">
            PDF
          </div>
          <div>
            <p className="resume-title">{fileName}</p>
            <p className="resume-meta">
              Experience, skills and education, ready for your ATS. Last updated Nov 2026.
            </p>
          </div>
          <div className="resume-actions">
            <a className="btn" href={resumePdf} target="_blank" rel="noreferrer">
              <FiExternalLink /> View
            </a>
            <a className="btn btn-primary" href={resumePdf} download={fileName}>
              <FiDownload /> Download
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Resume;
