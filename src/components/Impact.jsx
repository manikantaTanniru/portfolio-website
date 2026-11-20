import React from "react";
import { useCountUp, useInView } from "../hooks";
import { Heading } from "./Reveal";

const TILES = [
  {
    cls: "t-orange",
    value: 3000,
    suffix: "+",
    unit: "hrs/yr",
    cap: "of manual business-process testing eliminated by Project Horus",
    src: "Amazon Robotics",
  },
  {
    cls: "t-lime",
    prefix: "<",
    value: 200,
    unit: "ms",
    cap: "P99 latency held at peak workloads",
    src: "VeroTX Networks",
  },
  {
    cls: "t-blue",
    value: 30,
    unit: "%",
    cap: "fewer customer-impacting failures",
    src: "Retries · circuit breakers · fallbacks",
    meter: 30,
  },
  {
    cls: "t-sun",
    value: 40,
    unit: "%",
    cap: "less manual campaign setup through automation",
    src: "DarioHealth",
    meter: 40,
  },
  {
    cls: "t-coal",
    value: 5,
    suffix: "+",
    unit: "yrs",
    cap: "building backend and distributed systems",
    src: "Veritas → Walmart",
  },
];

function Tile({ t, start }) {
  const n = useCountUp(t.value, start);
  return (
    <div className={`tile ${t.cls}`}>
      <div className="n">
        {t.prefix}
        {Math.round(n).toLocaleString()}
        {t.suffix}
        <small>{t.unit}</small>
      </div>
      <div>
        {t.meter && (
          <div className="meter" aria-hidden="true">
            <i style={{ "--w": `${t.meter}%` }} />
          </div>
        )}
        <div className="cap">{t.cap}</div>
        <div className="src">{t.src}</div>
      </div>
    </div>
  );
}

function Impact() {
  const [ref, inView] = useInView({ threshold: 0.2 });
  return (
    <section className="section" id="numbers" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <span className="label">Numbers from production</span>
        <Heading lines={["Impact, not", "adjectives."]} />
        <div className={`bento${inView ? " in" : ""}`} ref={ref}>
          {TILES.map((t) => (
            <Tile key={t.cls} t={t} start={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Impact;
