import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import Particle from "../Particle";
import portfolio from "../../Portfolio";
import { DIAGRAMS } from "./Diagram";

const HUES = ["hue-violet", "hue-pink", "hue-cyan"];

function SystemDesign() {
  const cases = portfolio.systemDesigns || [];

  return (
    <Container fluid className="system-design-section" id="system-design">
      <Particle />
      <Container>
        <div className="section-eyebrow">System Design</div>
        <h1 className="project-heading">
          How I <strong className="purple">Design Systems</strong>
        </h1>
        <p className="system-design-intro">
          Case studies from production systems I&apos;ve architected — the
          problem, the tradeoffs, and how the pieces fit together.
        </p>

        {cases.length === 0 && (
          <p style={{ color: "white", textAlign: "center" }}>
            Case studies coming soon.
          </p>
        )}

        {cases.map((item, index) => {
          const Diagram = DIAGRAMS[item.diagram];
          const hue = HUES[index % HUES.length];
          return (
            <section className={`sd-case ${hue}`} key={item.id}>
              <div className="sd-case-header">
                <span className="sd-case-index">{`0${index + 1}`}</span>
                <div>
                  <h2 className="sd-case-title">{item.name}</h2>
                  <div className="sd-case-company">{item.company}</div>
                </div>
              </div>
              <p className="sd-case-tagline">{item.tagline}</p>

              {Array.isArray(item.metrics) && item.metrics.length > 0 && (
                <div className="sd-metrics">
                  {item.metrics.map((m) => (
                    <div className="sd-metric" key={m.label}>
                      <div className="sd-metric-value">{m.value}</div>
                      <div className="sd-metric-label">{m.label}</div>
                    </div>
                  ))}
                </div>
              )}

              {Diagram && (
                <Tilt
                  tiltMaxAngleX={3}
                  tiltMaxAngleY={3}
                  glareEnable
                  glareMaxOpacity={0.08}
                  glareColor="#ffffff"
                  scale={1.005}
                  transitionSpeed={1000}
                >
                  <div className="sd-diagram-panel">
                    <Diagram />
                  </div>
                </Tilt>
              )}

              <Row className="sd-detail-row">
                <Col md={5}>
                  <h3 className="sd-subhead">Problem</h3>
                  <p className="sd-problem">{item.problem}</p>
                  {Array.isArray(item.stack) && item.stack.length > 0 && (
                    <div className="sd-stack">
                      {item.stack.map((tech) => (
                        <span className="sd-stack-badge" key={tech}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </Col>
                <Col md={7}>
                  <h3 className="sd-subhead">Key decisions &amp; tradeoffs</h3>
                  <div className="sd-decisions">
                    {(item.decisions || []).map((d) => (
                      <div className="sd-decision" key={d.title}>
                        <div className="sd-decision-title">{d.title}</div>
                        <div className="sd-decision-detail">{d.detail}</div>
                      </div>
                    ))}
                  </div>
                </Col>
              </Row>
            </section>
          );
        })}
      </Container>
    </Container>
  );
}

export default SystemDesign;
