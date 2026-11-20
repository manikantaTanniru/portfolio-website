import React from "react";
import portfolio from "../Portfolio";
import Reveal, { Heading } from "./Reveal";
import { useInView } from "../hooks";
import resumePdf from "../Assets/Manikanta_Resume.pdf";

const TILE_COLORS = ["var(--orange)", "var(--lime)", "var(--blue)", "var(--sun)", "var(--coal)"];

/** Renders "**text**" segments as highlighted <strong>. */
function Rich({ text }) {
  const parts = String(text).split("**");
  return parts.map((part, i) =>
    i % 2 === 1 ? <strong key={i}>{part}</strong> : <React.Fragment key={i}>{part}</React.Fragment>
  );
}

function initials(company) {
  const words = company.replace(/[^A-Za-z\s]/g, "").split(/\s+/).filter(Boolean);
  if (words.length === 1) return words[0][0];
  if (/networks|software|global|tech|health/i.test(words[1] || "")) return words[0][0];
  return (words[0][0] + words[1][0]).toUpperCase();
}

function Job({ job, index, current }) {
  const [company, ...placeParts] = (job.company || "").split(",");
  const place = placeParts.join(",").trim();
  const [ref, inView] = useInView({ threshold: 0.15 });
  const color = TILE_COLORS[index % TILE_COLORS.length];
  const lightText = color === "var(--blue)" || color === "var(--coal)";

  return (
    <article ref={ref} className={`xp${inView ? " in" : ""}${index % 2 ? " alt" : ""}`}>
      <div className="wrap xp-grid">
        <header className="xp-head">
          <span
            className="xp-logo"
            aria-hidden="true"
            style={{ background: color, color: lightText ? "var(--bone)" : "var(--coal)" }}
          >
            {initials(company)}
          </span>
          <h3 className="xp-name">{company}</h3>
          <p className="xp-role">
            {job.title}
            {current && <span className="job-now">NOW</span>}
          </p>
          <p className="xp-meta">
            {job.duration}
            {place ? ` · ${place}` : ""}
          </p>
        </header>
        <ul className="xp-list">
          {(job.details || []).map((d, i) => (
            <li key={d} style={{ transitionDelay: `${Math.min(i, 6) * 60}ms` }}>
              <Rich text={d} />
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

function Experience() {
  const jobs = portfolio.experience || [];

  return (
    <section className="xp-section" id="experience">
      <div className="wrap">
        <span className="label">Experience</span>
        <Heading lines={["Experience"]} />
      </div>
      {jobs.map((job, i) => (
        <Job
          key={job.company + job.title}
          job={job}
          index={i}
          current={i === 0 && /present/i.test(job.duration)}
        />
      ))}
      <Reveal className="wrap xp-foot">
        <a className="btn" href={resumePdf} target="_blank" rel="noreferrer">
          Full resume, one page ↗
        </a>
      </Reveal>
    </section>
  );
}

export default Experience;
