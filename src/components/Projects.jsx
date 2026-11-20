import React, { useMemo, useState } from "react";
import { FiExternalLink, FiCpu, FiMic, FiDatabase, FiCode } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import portfolio from "../Portfolio";
import Reveal from "./Reveal";

function iconFor(tags = []) {
  if (tags.includes("Voice AI")) return <FiMic />;
  if (tags.includes("RAG")) return <FiDatabase />;
  if (tags.includes("GenAI") || tags.includes("Agents")) return <FiCpu />;
  return <FiCode />;
}

function Projects() {
  const projects = portfolio.projects || [];
  const [activeTag, setActiveTag] = useState("All");

  const tags = useMemo(() => {
    const unique = new Set();
    projects.forEach((p) => (p.tags || []).forEach((t) => unique.add(t)));
    return ["All", ...unique];
  }, [projects]);

  const filtered =
    activeTag === "All" ? projects : projects.filter((p) => (p.tags || []).includes(activeTag));

  return (
    <section className="section" id="projects">
      <div className="container">
        <Reveal className="section-head">
          <div className="eyebrow">projects</div>
          <h2 className="section-title">Things I&apos;ve built on the side.</h2>
          <p className="section-sub">GenAI, RAG, voice agents and full-stack experiments.</p>
        </Reveal>

        {tags.length > 1 && (
          <div className="filter-bar" role="group" aria-label="Filter projects">
            {tags.map((tag) => (
              <button
                key={tag}
                type="button"
                className={`filter-chip${tag === activeTag ? " active" : ""}`}
                aria-pressed={tag === activeTag}
                onClick={() => setActiveTag(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        )}

        <div className="projects-grid">
          {filtered.map((p) => (
            <article className="card project" key={p.name}>
              <div className="project-top">
                <span className="project-icon" aria-hidden="true">
                  {iconFor(p.tags)}
                </span>
                <div className="project-links">
                  {p.github && (
                    <a
                      className="icon-btn"
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${p.name} on GitHub`}
                    >
                      <FaGithub />
                    </a>
                  )}
                  {p.demo && (
                    <a
                      className="icon-btn"
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${p.name} live demo`}
                    >
                      <FiExternalLink />
                    </a>
                  )}
                </div>
              </div>
              <h3 className="project-name">
                {p.name}
                {p.featured && <span className="badge-featured">featured</span>}
              </h3>
              {p.tags?.length > 0 && <div className="project-tags">{p.tags.join(" · ")}</div>}
              {p.description && <p className="project-desc">{p.description}</p>}
              {p.techStack?.length > 0 && (
                <div className="project-stack">
                  {p.techStack.map((t) => (
                    <span className="chip" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
