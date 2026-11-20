import React from "react";
import { useInView } from "../hooks";

function Reveal({ as: Tag = "div", className = "", delay = 0, children, ...rest }) {
  const [ref, inView] = useInView({ threshold: 0.12 });
  return (
    <Tag
      ref={ref}
      className={`reveal${inView ? " in" : ""}${className ? ` ${className}` : ""}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/** Big uppercase heading whose lines slide up from a mask when scrolled into view. */
export function Heading({ lines, className = "h2", as: Tag = "h2" }) {
  const [ref, inView] = useInView({ threshold: 0.3 });
  return (
    <Tag ref={ref} className={className} aria-label={lines.join(" ")}>
      {lines.map((line, i) => (
        <span className={`rise${inView ? " in" : ""}`} key={line} aria-hidden="true">
          <span style={{ transitionDelay: `${i * 90}ms` }}>{line}</span>
        </span>
      ))}
    </Tag>
  );
}

export default Reveal;
