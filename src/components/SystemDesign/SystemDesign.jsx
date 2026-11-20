import React, { useState } from "react";
import portfolio from "../../Portfolio";
import { DIAGRAMS } from "./Diagram";
import Reveal from "../Reveal";

function SystemDesign() {
  const cases = portfolio.systemDesigns || [];
  const [activeIdx, setActiveIdx] = useState(0);
  if (!cases.length) return null;

  const item = cases[activeIdx];
  const Diagram = DIAGRAMS[item.diagram];

  return (
    <section className="section" id="system-design">
      <div className="container">
        <Reveal className="section-head">
          <div className="eyebrow">system design</div>
          <h2 className="section-title">How I design systems.</h2>
          <p className="section-sub">
            Case studies from production systems: the problem, the tradeoffs, and how the
            pieces fit together.
          </p>
        </Reveal>

        <div className="sd-tabs" role="tablist" aria-label="Case studies">
          {cases.map((c, i) => (
            <button
              key={c.id}
              type="button"
              role="tab"
              id={`sd-tab-${c.id}`}
              aria-selected={i === activeIdx}
              aria-controls={`sd-panel-${c.id}`}
              className={`sd-tab${i === activeIdx ? " active" : ""}`}
              onClick={() => setActiveIdx(i)}
            >
              <span className="n">{`0${i + 1}`}</span>
              {c.name}
            </button>
          ))}
        </div>

        <div
          className="card sd-panel"
          role="tabpanel"
          id={`sd-panel-${item.id}`}
          aria-labelledby={`sd-tab-${item.id}`}
          key={item.id}
        >
          <div className="sd-top">
            <div>
              <h3 className="sd-title">{item.name}</h3>
              <div className="sd-company">{item.company}</div>
              <p className="sd-tagline">{item.tagline}</p>
            </div>
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
          </div>

          {Diagram && (
            <div className="sd-diagram">
              <Diagram />
            </div>
          )}

          <div className="sd-detail">
            <div>
              <h4 className="sd-subhead">problem</h4>
              <p className="sd-problem">{item.problem}</p>
              {Array.isArray(item.stack) && item.stack.length > 0 && (
                <div className="sd-stack">
                  {item.stack.map((tech) => (
                    <span className="chip" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
            <div>
              <h4 className="sd-subhead">key decisions &amp; tradeoffs</h4>
              <div className="sd-decisions">
                {(item.decisions || []).map((d) => (
                  <div className="sd-decision" key={d.title}>
                    <div className="sd-decision-title">{d.title}</div>
                    <div className="sd-decision-detail">{d.detail}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SystemDesign;
