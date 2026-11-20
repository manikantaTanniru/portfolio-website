import React from "react";
import portfolio from "../Portfolio";
import Reveal, { Heading } from "./Reveal";

const SHELVES = [
  ["languages", "Languages"],
  ["backend", "Backend"],
  ["messaging", "Messaging & events"],
  ["databases", "Databases"],
  ["cloudDevops", "Cloud & DevOps"],
  ["dataStreaming", "Data & streaming"],
  ["monitoring", "Observability"],
  ["aiMl", "AI / ML"],
  ["tools", "Tools & testing"],
];

function Skills() {
  const skills = portfolio.skills || {};
  const shelves = SHELVES.filter(([key]) => (skills[key] || []).length);

  return (
    <section className="section" id="skills" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <span className="label">Stack</span>
        <Heading lines={["What I work", "with."]} />
        <div className="shelves">
          {shelves.map(([key, label], i) => (
            <Reveal className="shelf" key={key} delay={(i % 3) * 70}>
              <h3>
                {label}
                <span>{String(skills[key].length).padStart(2, "0")}</span>
              </h3>
              <ul>
                {skills[key].map((s) => (
                  <li className="chip" key={s}>
                    {s}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
