import React, { useMemo, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import portfolio from "../../Portfolio";

function Projects() {
  const projects = portfolio.projects || [];
  const [activeTag, setActiveTag] = useState("All");

  const tags = useMemo(() => {
    const unique = new Set();
    projects.forEach((project) => {
      (project.tags || []).forEach((tag) => unique.add(tag));
    });
    return ["All", ...Array.from(unique)];
  }, [projects]);

  const filteredProjects = useMemo(() => {
    if (activeTag === "All") return projects;
    return projects.filter((project) => (project.tags || []).includes(activeTag));
  }, [projects, activeTag]);

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I&apos;ve worked on recently.
        </p>

        {tags.length > 1 && (
          <div className="project-filter-bar">
            {tags.map((tag) => (
              <button
                key={tag}
                type="button"
                className={`project-filter-chip${tag === activeTag ? " active" : ""}`}
                onClick={() => setActiveTag(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        )}

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {filteredProjects.length === 0 && (
            <Col md={8} style={{ color: "white", textAlign: "center" }}>
              New projects coming soon. Stay tuned!
            </Col>
          )}
          {filteredProjects.map((project) => (
            <Col md={4} className="project-card" key={project.name}>
              <ProjectCard
                imgPath={project.image}
                isBlog={false}
                title={project.name}
                description={project.description}
                ghLink={project.github}
                demoLink={project.demo}
                techStack={project.techStack}
                tags={project.tags}
                featured={project.featured}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
