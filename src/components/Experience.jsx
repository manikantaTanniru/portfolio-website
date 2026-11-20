import React, { useState } from "react";
import portfolio from "../Portfolio";
import Reveal from "./Reveal";

const VISIBLE = 3;

function Job({ job, current }) {
  const [expanded, setExpanded] = useState(false);
  const details = job.details || [];
  const shown = expanded ? details : details.slice(0, VISIBLE);
  const [company, ...place] = (job.company || "").split(",");

  return (
    <li className={`tl-item${current ? " current" : ""}`}>
      <span className="tl-dot" aria-hidden="true" />
      <Reveal className="card tl-card">
        <div className="tl-head">
          <h3 className="tl-role">
            {job.title} · <span className="tl-company">{company}</span>
            {current && <span className="tl-now">now</span>}
          </h3>
          <span className="tl-when">{job.duration}</span>
        </div>
        {place.length > 0 && (
          <div style={{ color: "var(--muted)", fontSize: 14 }}>{place.join(",").trim()}</div>
        )}
        <ul className="tl-list">
          {shown.map((d) => (
            <li key={d}>{d}</li>
          ))}
        </ul>
        {details.length > VISIBLE && (
          <button
            type="button"
            className="tl-toggle"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
          >
            {expanded ? "− show less" : `+ ${details.length - VISIBLE} more`}
          </button>
        )}
      </Reveal>
    </li>
  );
}

function Experience() {
  const jobs = portfolio.experience || [];

  return (
    <section className="section" id="experience" style={{ paddingTop: 24 }}>
      <div className="container">
        <Reveal className="section-head">
          <div className="eyebrow">experience</div>
          <h2 className="section-title">Where I&apos;ve shipped.</h2>
          <p className="section-sub">
            From backend services at Veritas to distributed systems at Amazon Robotics and
            Walmart Global Tech.
          </p>
        </Reveal>

        <ol className="timeline">
          {jobs.map((job, i) => (
            <Job job={job} current={i === 0 && /present/i.test(job.duration)} key={job.company + job.title} />
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Experience;
