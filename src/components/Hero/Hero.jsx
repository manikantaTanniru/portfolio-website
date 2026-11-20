import React from "react";
import { FiArrowDown, FiArrowUpRight } from "react-icons/fi";
import portfolio from "../../Portfolio";
import resumePdf from "../../Assets/Manikanta_Resume.pdf";

const TICKER = [
  "3,000+ hrs of testing automated",
  "P99 under 200 ms",
  "30% fewer customer-impacting failures",
  "5+ years in production",
  "Kafka · Spring Boot · AWS · Azure",
  "Event-driven by default",
  "Walmart · Amazon Robotics · VeroTX",
];

function NameLine({ text, offset, outline }) {
  return (
    <span className={`line${outline ? " outline" : ""}`} aria-hidden="true">
      {[...text].map((ch, i) => (
        <span className="ch" style={{ "--i": offset + i }} key={i}>
          {ch}
        </span>
      ))}
    </span>
  );
}

function Hero() {
  const current = portfolio.experience?.[0];
  const company = current?.company?.split(",")[0];
  const [first = "", ...rest] = (portfolio.name || "").split(" ");
  const last = rest.join(" ");

  return (
    <section className="hero" id="top">
      <div className="wrap hero-main">
        {company && (
          <div className="hero-kicker">
            <span className="live-dot" aria-hidden="true" />
            Now: {current.title} at {company}
          </div>
        )}
        <h1 className="hero-name" aria-label={portfolio.name}>
          <NameLine text={first} offset={0} />
          <NameLine text={last} offset={first.length} outline />
        </h1>
        <div className="hero-bottom">
          <p className="lead hero-intro">
            Backend engineer building event-driven, fault-tolerant systems with Java, Spring
            Boot, Kafka and the cloud. Systems that keep working when traffic spikes and
            dependencies fail.
          </p>
          <div className="hero-ctas">
            <a className="btn" href="#systems">
              See the systems <FiArrowDown />
            </a>
            <a className="btn btn-ghost" href={resumePdf} target="_blank" rel="noreferrer">
              Resume <FiArrowUpRight />
            </a>
          </div>
        </div>
      </div>

      <div className="ticker" aria-label={TICKER.join(", ")}>
        <div className="ticker-track" aria-hidden="true">
          {[0, 1].map((k) => (
            <ul className="ticker-set" key={k}>
              {TICKER.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
