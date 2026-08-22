import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub, BsStarFill } from "react-icons/bs";

function ProjectCards(props) {
  const {
    imgPath,
    title,
    description,
    ghLink,
    demoLink,
    techStack,
    tags,
    isBlog,
    featured,
  } = props;

  const initials = title
    ? title
        .split(" ")
        .map((word) => word[0])
        .join("")
        .slice(0, 2)
        .toUpperCase()
    : "";

  return (
    <Card className={`project-card-view${featured ? " featured" : ""}`}>
      {featured && (
        <div className="project-featured-badge">
          <BsStarFill /> Featured
        </div>
      )}
      {imgPath ? (
        <Card.Img variant="top" src={imgPath} alt={`${title} cover`} />
      ) : (
        <div className="project-card-monogram">
          <span>{initials}</span>
        </div>
      )}
      <Card.Body>
        {Array.isArray(tags) && tags.length > 0 && (
          <div className="project-tags">
            {tags.map((tag) => (
              <span className="project-tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        )}
        <Card.Title>{title}</Card.Title>
        {description && (
          <Card.Text style={{ textAlign: "justify" }}>{description}</Card.Text>
        )}
        {Array.isArray(techStack) && techStack.length > 0 && (
          <div className="d-flex flex-wrap" style={{ gap: "0.5rem" }}>
            {techStack.map((tech) => (
              <span className="badge project-tech-badge" key={tech}>
                {tech}
              </span>
            ))}
          </div>
        )}
        {ghLink && (
          <Button
            variant="primary"
            href={ghLink}
            target="_blank"
            rel="noreferrer"
            style={{ marginTop: "15px" }}
          >
            <BsGithub /> &nbsp;
            {isBlog ? "Blog" : "GitHub"}
          </Button>
        )}
        {!isBlog && demoLink && (
          <Button
            variant="primary"
            href={demoLink}
            target="_blank"
            rel="noreferrer"
            style={{
              marginLeft: ghLink ? "10px" : "0",
              marginTop: "15px",
            }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
