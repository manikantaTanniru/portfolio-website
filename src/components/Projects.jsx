import React, { useMemo, useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import portfolio from "../Portfolio";
import { Heading } from "./Reveal";

const HOVERS = ["var(--orange)", "var(--lime)", "var(--sun)", "var(--blue)"];

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
    <section className="section" id="projects" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <span className="label">Side projects</span>
        <Heading lines={["Things I've", "built."]} />

        {tags.length > 1 && (
          <div className="filter-bar" role="group" aria-label="Filter projects">
            {tags.map((tag) => (
              <button
                key={tag}
                type="button"
                className="filter-chip"
                aria-pressed={tag === activeTag}
                onClick={() => setActiveTag(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        )}

        <div className="projects">
          {filtered.map((p, i) => {
            const hover = HOVERS[i % HOVERS.length];
            return (
              <article
                className="project"
                key={p.name}
                style={{
                  "--hover": hover,
                  ...(hover === "var(--blue)" ? { "--hover-ink": "var(--bone)" } : {}),
                }}
              >
                <div className="project-top">
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  {p.featured ? (
                    <span className="project-featured">FEATURED</span>
                  ) : (
                    <span>{(p.tags || []).join(" · ")}</span>
                  )}
                </div>
                <h3 className="project-name">{p.name}</h3>
                <p className="project-desc">
                  {p.description ||
                    `${(p.tags || []).join(" / ")} project built with ${(p.techStack || [])
                      .slice(0, 3)
                      .join(", ")}.`}
                </p>
                {p.techStack?.length > 0 && (
                  <div className="project-stack">
                    {p.techStack.map((t) => (
                      <span className="chip" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                )}
                <div className="project-links">
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noreferrer" aria-label={`${p.name} source on GitHub`}>
                      GitHub <FiArrowUpRight />
                    </a>
                  )}
                  {p.demo && (
                    <a href={p.demo} target="_blank" rel="noreferrer" aria-label={`${p.name} live demo`}>
                      Live demo <FiArrowUpRight />
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
