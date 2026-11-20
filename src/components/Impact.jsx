import React from "react";
import portfolio from "../Portfolio";
import { useCountUp, useInView } from "../hooks";

function Stat({ item, start }) {
  const n = useCountUp(item.value, start);
  return (
    <div className="impact-item">
      <div className="impact-value">
        {item.prefix}
        {Math.round(n).toLocaleString()}
        <span className="unit">{item.unit}</span>
      </div>
      <div className="impact-label">{item.label}</div>
      {item.source && <div className="impact-src">{item.source}</div>}
    </div>
  );
}

function Impact() {
  const items = portfolio.impact || [];
  const [ref, inView] = useInView({ threshold: 0.3 });
  if (!items.length) return null;

  return (
    <section className="container" aria-label="Impact highlights">
      <div className="impact" ref={ref}>
        {items.map((item) => (
          <Stat key={item.label} item={item} start={inView} />
        ))}
      </div>
    </section>
  );
}

export default Impact;
