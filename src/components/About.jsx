import React from "react";
import portfolio from "../Portfolio";
import Reveal, { Heading } from "./Reveal";

const FOCUS = [
  "Distributed systems",
  "Event-driven architecture",
  "Microservices",
  "Reliability engineering",
  "System design",
  "GenAI workflows",
];

function About() {
  const current = portfolio.experience?.[0];
  const masters = (portfolio.education || []).find((e) => /master/i.test(e.degree));
  const facts = [
    ["Based in", portfolio.location?.replace(", USA", "")],
    ["Now", current && `${current.title}, ${current.company.split(",")[0]}`],
    ["Before", "Amazon Robotics, VeroTX Networks, DarioHealth"],
    ["Studied", masters && `M.S. Software Engineering, ${masters.institution.split(",")[0]}`],
    ["Doing", "DBA in Business Intelligence & Data Analytics"],
  ].filter(([, v]) => v);

  return (
    <section className="section" id="about">
      <div className="wrap">
        <span className="label">About</span>
        <Heading lines={["I care how", "systems fail."]} />
        <div className="about-grid">
          <Reveal as="dl" className="facts">
            {facts.map(([k, v]) => (
              <div className="fact" key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </Reveal>
          <Reveal className="about-body" delay={120}>
            <p className="lead">
              Five-plus years building the backend pieces most people never see: event
              pipelines, integration platforms and the services that keep metrics honest.
            </p>
            <p className="muted">{portfolio.about}</p>
            <div className="chips">
              {FOCUS.map((f) => (
                <span className="chip" key={f}>
                  {f}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default About;
