import React from "react";
import portfolio from "../Portfolio";
import Reveal from "./Reveal";

const GROUPS = [
  ["languages", "languages"],
  ["backend", "backend"],
  ["messaging", "messaging & events"],
  ["databases", "databases"],
  ["cloudDevops", "cloud & devops"],
  ["dataStreaming", "data & streaming"],
  ["monitoring", "observability"],
  ["aiMl", "ai / ml"],
  ["frontend", "frontend"],
  ["tools", "tools & testing"],
];

function Skills() {
  const skills = portfolio.skills || {};
  const groups = GROUPS.filter(([key]) => (skills[key] || []).length);

  return (
    <section className="section" id="skills" style={{ paddingTop: 24 }}>
      <div className="container">
        <Reveal className="section-head">
          <div className="eyebrow">stack</div>
          <h2 className="section-title">Tools of the trade.</h2>
        </Reveal>
        <div className="skills-grid">
          {groups.map(([key, label], i) => (
            <Reveal className="card skill-group" key={key} delay={(i % 3) * 60}>
              <h3>
                <span>~/</span>
                {label}
              </h3>
              <div className="skill-tags">
                {skills[key].map((s) => (
                  <span className="chip" key={s}>
                    {s}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
