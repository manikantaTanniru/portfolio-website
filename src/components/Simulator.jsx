import React, { useEffect, useRef, useState } from "react";
import { useInView, usePrefersReducedMotion } from "../hooks";
import { Heading } from "./Reveal";

/* ---- layout (SVG units) ---- */
const MID = 92;
const BOX_Y = 60;
const BOX_H = 64;
const STAGES = {
  producer: { x: 20, w: 130, label: "producers", sub: "trip events" },
  kafka: { x: 180, w: 130, label: "kafka", sub: "partitioned topic" },
  consumer: { x: 350, w: 150, label: "consumer", sub: "validate + retry" },
  dep: { x: 580, w: 150, label: "enrich service", sub: "downstream call" },
  store: { x: 790, w: 150, label: "metrics store", sub: "idempotent upsert" },
};
const DLQ = { x: 420, y: 206, w: 150, h: 46 };
const FALLBACK = { x: 640, y: 206, w: 150, h: 46 };
const GATE_X = 300;
const CONSUMER_X = 425;
const DEP_X = 566;
const END_X = 790;
const SPEED = 170;
const CAPACITY = 5; // events per second the consumer can take

const MODES = {
  normal: { label: "Normal traffic", rate: 3, bad: 0.07, depDown: false },
  spike: { label: "Traffic spike ×4", rate: 12, bad: 0.07, depDown: false },
  down: { label: "Dependency down", rate: 3, bad: 0.03, depDown: true, danger: true },
};

const NOTES = {
  normal: "Steady state: bad payloads are retried, then parked in the DLQ so they never block the stream.",
  spike: "Producers outrun the consumer. Kafka absorbs the burst as consumer lag instead of dropping events.",
  closed: "The enrich service is failing. Calls are retried with backoff and failures are counted…",
  open: "Breaker OPEN: requests short-circuit to a fallback cache instead of hammering a dead dependency.",
  half: "Breaker HALF-OPEN: letting one probe request through to test whether the dependency recovered.",
};

function newState() {
  return {
    events: [],
    nextId: 1,
    spawnAcc: 0,
    lastRelease: 0,
    time: 0,
    breaker: "closed",
    failures: 0,
    openedAt: 0,
    stats: { processed: 0, retried: 0, dlq: 0, fallback: 0 },
  };
}

function moveToward(e, tx, ty, dist) {
  const dx = tx - e.x;
  const dy = ty - e.y;
  const d = Math.hypot(dx, dy);
  if (d <= dist) {
    e.x = tx;
    e.y = ty;
    return true;
  }
  e.x += (dx / d) * dist;
  e.y += (dy / d) * dist;
  return false;
}

function step(s, dt, mode) {
  const cfg = MODES[mode];
  s.time += dt;

  // spawn
  s.spawnAcc += dt * cfg.rate;
  while (s.spawnAcc >= 1) {
    s.spawnAcc -= 1;
    s.events.push({
      id: s.nextId++,
      x: 150,
      y: MID,
      phase: "flow",
      bad: Math.random() < cfg.bad,
      t: 0,
      gate: false,
      checked: false,
      opacity: 1,
    });
  }

  // breaker timeout -> half-open
  if (s.breaker === "open" && s.time - s.openedAt > 3) s.breaker = "half";

  const d = SPEED * dt;
  let waiting = 0;

  s.events.forEach((e) => {
    switch (e.phase) {
      case "flow": {
        e.x += d;
        if (!e.gate && e.x >= GATE_X) {
          if (s.time - s.lastRelease >= 1 / CAPACITY) {
            s.lastRelease = s.time;
            e.gate = true;
          } else {
            e.x = GATE_X;
            e.waitIdx = waiting++;
            break;
          }
        }
        if (e.bad && e.x >= CONSUMER_X) {
          e.x = CONSUMER_X;
          e.phase = "retry";
          e.t = 0;
          e.tries = 0;
          break;
        }
        if (!e.checked && e.x >= DEP_X) {
          e.checked = true;
          if (cfg.depDown) {
            if (s.breaker === "open") {
              e.phase = "fallback";
            } else {
              e.x = DEP_X;
              e.phase = "depfail";
              e.t = 0;
              e.tries = 0;
              e.probe = s.breaker === "half";
            }
          } else if (s.breaker !== "closed") {
            s.breaker = "closed";
            s.failures = 0;
          }
        }
        if (e.x >= END_X) {
          e.phase = "done";
          s.stats.processed += 1;
        }
        break;
      }
      case "retry":
      case "depfail": {
        e.t += dt;
        const baseX = e.phase === "retry" ? CONSUMER_X : DEP_X;
        e.x = baseX + Math.sin(e.t * 30) * 4;
        const limit = e.phase === "retry" ? 3 : e.probe ? 1 : 2;
        if (e.t > (e.tries + 1) * 0.3 && e.tries < limit) {
          e.tries += 1;
          s.stats.retried += 1;
        }
        if (e.t > limit * 0.3 + 0.15) {
          if (e.phase === "depfail") {
            if (e.probe || ++s.failures >= 4) {
              s.breaker = "open";
              s.openedAt = s.time;
              s.failures = 0;
            }
          }
          e.x = baseX;
          e.phase = "todlq";
        }
        break;
      }
      case "todlq": {
        if (moveToward(e, DLQ.x + DLQ.w / 2, DLQ.y + DLQ.h / 2, d)) {
          s.stats.dlq += 1;
          e.phase = "fade";
          e.color = "bad";
        }
        break;
      }
      case "fallback": {
        if (moveToward(e, FALLBACK.x + FALLBACK.w / 2, FALLBACK.y + FALLBACK.h / 2, d)) {
          s.stats.fallback += 1;
          e.phase = "fade";
          e.color = "fb";
        }
        break;
      }
      case "fade": {
        e.opacity -= dt * 2.5;
        if (e.opacity <= 0) e.phase = "gone";
        break;
      }
      default:
        break;
    }
  });

  s.events = s.events.filter((e) => e.phase !== "done" && e.phase !== "gone");
  s.lag = waiting;
}

function dotColor(e) {
  if (e.color === "bad" || e.phase === "retry" || e.phase === "depfail" || e.phase === "todlq")
    return "var(--orange)";
  if (e.color === "fb" || e.phase === "fallback") return "var(--sun)";
  return "var(--lime)";
}

function Box({ s, cls = "" }) {
  return (
    <g>
      <rect className={`box ${cls}`} x={s.x} y={BOX_Y} width={s.w} height={BOX_H} />
      <text className="t" x={s.x + s.w / 2} y={MID - 3} textAnchor="middle">
        {s.label}
      </text>
      <text className="t sub" x={s.x + s.w / 2} y={MID + 15} textAnchor="middle">
        {s.sub}
      </text>
    </g>
  );
}

function Simulator() {
  const reduced = usePrefersReducedMotion();
  const [mode, setMode] = useState("normal");
  const [, setFrame] = useState(0);
  const simRef = useRef(newState());
  const modeRef = useRef(mode);
  const [viewRef] = useInView({ threshold: 0.05 });
  const visibleRef = useRef(false);

  modeRef.current = mode;

  // keep running only while on screen
  useEffect(() => {
    const node = viewRef.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      visibleRef.current = true;
      return undefined;
    }
    const io = new IntersectionObserver(([entry]) => {
      visibleRef.current = entry.isIntersecting;
    });
    io.observe(node);
    return () => io.disconnect();
  }, [viewRef]);

  useEffect(() => {
    if (reduced) {
      // static snapshot
      const s = simRef.current;
      for (let i = 0; i < 240; i += 1) step(s, 1 / 30, modeRef.current);
      setFrame((f) => f + 1);
      return undefined;
    }
    let raf;
    let last = performance.now();
    let acc = 0;
    const loop = (now) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      if (visibleRef.current && !document.hidden) {
        step(simRef.current, dt, modeRef.current);
        acc += dt;
        if (acc >= 1 / 40) {
          acc = 0;
          setFrame((f) => (f + 1) % 1e6);
        }
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [reduced]);

  const s = simRef.current;
  const cfg = MODES[mode];
  const note = cfg.depDown ? NOTES[s.breaker] : NOTES[mode];
  const breakerColor =
    s.breaker === "open" ? "var(--orange)" : s.breaker === "half" ? "var(--sun)" : "var(--lime)";

  return (
    <section className="section field-coal" id="simulator" ref={viewRef}>
      <div className="wrap">
        <div className="sim-head">
          <div>
            <span className="label">Try it: failure simulator</span>
            <Heading lines={["Watch it fail", "gracefully."]} />
          </div>
          <p>
            A live model of the event-driven patterns I build with: backpressure through
            Kafka, bounded retries, a dead-letter queue and a circuit breaker. Pick a
            scenario and watch the system adapt.
          </p>
        </div>

        <div className="sim-modes" role="radiogroup" aria-label="Scenario">
          {Object.entries(MODES).map(([key, m]) => (
            <button
              key={key}
              type="button"
              role="radio"
              aria-checked={mode === key}
              className={`sim-mode${m.danger ? " danger" : ""}`}
              onClick={() => setMode(key)}
            >
              {m.label}
            </button>
          ))}
        </div>

        <div className="sim-stage">
          <svg
            viewBox="0 0 960 270"
            role="img"
            aria-label="Simulation of events flowing from producers through Kafka, a consumer and an enrichment service into a metrics store, with a dead-letter queue and a fallback cache."
          >
            <path className="track" d={`M 150 ${MID} L ${END_X} ${MID}`} />
            <path
              className="track err"
              d={`M ${CONSUMER_X} ${BOX_Y + BOX_H} L ${DLQ.x + DLQ.w / 2} ${DLQ.y} M ${DEP_X} ${MID} L ${DLQ.x + DLQ.w / 2} ${DLQ.y}`}
            />
            <path className="track fb" d={`M ${DEP_X} ${MID} L ${FALLBACK.x + FALLBACK.w / 2} ${FALLBACK.y}`} />

            {s.events.map((e) => {
              let { x, y } = e;
              if (e.phase === "flow" && e.waitIdx !== undefined && !e.gate) {
                x = GATE_X - 8 - Math.floor(e.waitIdx / 5) * 11;
                y = MID + ((e.waitIdx % 5) - 2) * 10;
              }
              return (
                <circle
                  key={e.id}
                  cx={x}
                  cy={y}
                  r="5.5"
                  fill={dotColor(e)}
                  opacity={Math.max(0, e.opacity)}
                />
              );
            })}

            <Box s={STAGES.producer} />
            <Box s={STAGES.kafka} cls="queue" />
            <Box s={STAGES.consumer} />
            <Box s={STAGES.dep} cls={cfg.depDown ? "down" : ""} />
            <Box s={STAGES.store} cls="store" />

            <g>
              <rect className="box dlq" x={DLQ.x} y={DLQ.y} width={DLQ.w} height={DLQ.h} />
              <text className="t" x={DLQ.x + DLQ.w / 2} y={DLQ.y + 28} textAnchor="middle">
                dead-letter queue
              </text>
            </g>
            <g>
              <rect className="box fallback" x={FALLBACK.x} y={FALLBACK.y} width={FALLBACK.w} height={FALLBACK.h} />
              <text className="t" x={FALLBACK.x + FALLBACK.w / 2} y={FALLBACK.y + 28} textAnchor="middle">
                fallback cache
              </text>
            </g>

            <g className="breaker">
              <rect x={DEP_X - 70} y={18} width={140} height={26} fill="none" stroke={breakerColor} strokeWidth="1.5" />
              <text x={DEP_X} y={35} textAnchor="middle" fill={breakerColor}>
                breaker: {s.breaker === "half" ? "HALF-OPEN" : s.breaker.toUpperCase()}
              </text>
            </g>
            {s.lag > 0 && (
              <text x={STAGES.kafka.x + STAGES.kafka.w / 2} y={BOX_Y - 12} textAnchor="middle" className="t" style={{ fill: "var(--sun)" }}>
                lag: {s.lag}
              </text>
            )}
            {cfg.depDown && (
              <text x={STAGES.dep.x + STAGES.dep.w / 2} y={BOX_Y + BOX_H + 18} textAnchor="middle" className="t sub" style={{ fill: "var(--orange)" }}>
                503 · timing out
              </text>
            )}
          </svg>
        </div>

        <div className="sim-stats">
          <div className="sim-stat ok">
            <b>{s.stats.processed.toLocaleString()}</b>
            <span>processed</span>
          </div>
          <div className="sim-stat">
            <b>{s.stats.retried.toLocaleString()}</b>
            <span>retries</span>
          </div>
          <div className="sim-stat bad">
            <b>{s.stats.dlq.toLocaleString()}</b>
            <span>dead-lettered</span>
          </div>
          <div className="sim-stat warn">
            <b>{s.stats.fallback.toLocaleString()}</b>
            <span>served by fallback</span>
          </div>
          <div className="sim-stat warn">
            <b>{s.lag || 0}</b>
            <span>consumer lag</span>
          </div>
        </div>
        <p className="sim-note" aria-live="polite">
          {note}
        </p>
      </div>
    </section>
  );
}

export default Simulator;
