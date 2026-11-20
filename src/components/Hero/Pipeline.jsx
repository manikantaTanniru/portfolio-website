import React, { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "../../hooks";

const STAGES = [
  { x: 20, w: 130, label: "events", sub: "kafka topic" },
  { x: 200, w: 130, label: "validate", sub: "schema + rules" },
  { x: 380, w: 130, label: "enrich", sub: "lookup + join" },
  { x: 560, w: 130, label: "aggregate", sub: "windowed metrics" },
  { x: 740, w: 140, label: "metrics store", sub: "idempotent upsert", store: true },
];

const Y = 20;
const H = 58;
const MID = Y + H / 2;
const MAIN_PATH = `M 150 ${MID} L 740 ${MID}`;
const DLQ_PATH = `M 150 ${MID} L 265 ${MID} L 265 124`;

// Each good event: begin offset (s). Bad events are routed to the DLQ.
const GOOD = [0, 0.7, 1.4, 2.1, 2.8, 3.5];
const BAD = [1.05, 3.15];

function Pipeline() {
  const reduced = usePrefersReducedMotion();
  const [stats, setStats] = useState({ processed: 18240, retried: 312, dlq: 41 });

  useEffect(() => {
    if (reduced) return undefined;
    const id = setInterval(() => {
      setStats((s) => ({
        processed: s.processed + 3 + Math.floor(Math.random() * 4),
        retried: s.retried + (Math.random() < 0.35 ? 1 : 0),
        dlq: s.dlq + (Math.random() < 0.08 ? 1 : 0),
      }));
    }, 700);
    return () => clearInterval(id);
  }, [reduced]);

  return (
    <div className="card pipeline">
      <div className="pipeline-head">
        <span className="live">
          <span className="status-dot" aria-hidden="true" />
          simulated event pipeline · retries + dead-letter queue
        </span>
        <span className="pipeline-stats" aria-live="off">
          <span className="ok">
            processed <b>{stats.processed.toLocaleString()}</b>
          </span>
          <span>
            retried <b>{stats.retried}</b>
          </span>
          <span className="dlq">
            dlq <b>{stats.dlq}</b>
          </span>
        </span>
      </div>

      <div className="pipeline-svg-wrap">
        <svg
          viewBox="0 0 900 172"
          role="img"
          aria-label="Animated diagram: events flow from a Kafka topic through validate, enrich and aggregate stages into a metrics store; invalid events are routed to a dead-letter queue."
        >
          <path className="track" d={MAIN_PATH} />
          <path className="track dlq-track" d={`M 265 ${Y + H} L 265 122`} />

          {!reduced &&
            GOOD.map((begin) => (
              <circle key={`g${begin}`} r="5" className="evt" opacity="0">
                <animateMotion dur="4.2s" begin={`${begin}s`} repeatCount="indefinite" path={MAIN_PATH} />
                <animate
                  attributeName="opacity"
                  values="0;1;1;0"
                  keyTimes="0;0.04;0.96;1"
                  dur="4.2s"
                  begin={`${begin}s`}
                  repeatCount="indefinite"
                />
              </circle>
            ))}

          {!reduced &&
            BAD.map((begin) => (
              <circle key={`b${begin}`} r="5" className="evt bad" opacity="0">
                <animateMotion dur="4.2s" begin={`${begin}s`} repeatCount="indefinite" path={DLQ_PATH} keyPoints="0;1;1" keyTimes="0;0.45;1" calcMode="linear" />
                <animate
                  attributeName="opacity"
                  values="0;1;1;0;0"
                  keyTimes="0;0.04;0.42;0.5;1"
                  dur="4.2s"
                  begin={`${begin}s`}
                  repeatCount="indefinite"
                />
              </circle>
            ))}

          {STAGES.map((s) => (
            <g key={s.label} className={`stage${s.store ? " store" : ""}`}>
              <rect x={s.x} y={Y} width={s.w} height={H} rx="10" strokeWidth="1.3" />
              <text x={s.x + s.w / 2} y={MID - 3} textAnchor="middle">
                {s.label}
              </text>
              <text className="sub" x={s.x + s.w / 2} y={MID + 14} textAnchor="middle">
                {s.sub}
              </text>
            </g>
          ))}

          <g className="stage dlq">
            <rect x={185} y={122} width={160} height={40} rx="10" strokeWidth="1.3" />
            <text x={265} y={147} textAnchor="middle">
              dead-letter queue
            </text>
          </g>
          <text x={278} y={103} fill="var(--danger)" fontFamily="var(--font-mono)" fontSize="10.5">
            retry ×3 → dlq
          </text>
        </svg>
      </div>
    </div>
  );
}

export default Pipeline;
