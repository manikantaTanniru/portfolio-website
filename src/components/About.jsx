import React from "react";
import portfolio from "../Portfolio";
import Reveal from "./Reveal";

const FOCUS = [
  "Distributed systems",
  "Event-driven architecture",
  "Microservices",
  "Reliability engineering",
  "System design",
  "GenAI workflows",
];

function About() {
  const education = portfolio.education || [];

  return (
    <section className="section" id="about">
      <div className="container">
        <Reveal className="section-head">
          <div className="eyebrow">about</div>
          <h2 className="section-title">Backend engineer who cares how systems fail.</h2>
        </Reveal>

        <div className="about-grid">
          <Reveal>
            <p className="about-text">{portfolio.about}</p>
            <div className="focus-list">
              {FOCUS.map((f) => (
                <span className="chip" key={f}>
                  {f}
                </span>
              ))}
            </div>
          </Reveal>

          {education.length > 0 && (
            <Reveal className="card edu-card" delay={100}>
              <h3>$ cat education.log</h3>
              {education.map((e) => (
                <div className="edu-item" key={e.degree}>
                  <div className="edu-degree">{e.degree}</div>
                  <div className="edu-meta">
                    {e.institution}
                    <br />
                    <span className="mono">
                      {e.duration}
                      {e.inProgress ? " · in progress" : ""}
                    </span>
                  </div>
                </div>
              ))}
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}

export default About;
