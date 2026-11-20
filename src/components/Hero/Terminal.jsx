import React, { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "../../hooks";

const SCRIPT = [
  { cmd: "whoami" },
  {
    out: (
      <>
        <span className="hl">manikanta-tanniru</span> · software engineer · distributed systems
      </>
    ),
  },
  { cmd: "cat current_role.txt" },
  {
    out: (
      <>
        Software Engineer @ <span className="hl2">Walmart Global Tech</span>
        {"\n"}Last Mile Delivery · driver performance metrics
      </>
    ),
  },
  { cmd: "ls ./stack" },
  {
    out: "java  spring-boot  kafka  aws  azure  cosmos-db  python  react",
  },
  { cmd: "uptime" },
  {
    out: (
      <>
        <span className="hl">5+ years</span> shipping backend systems · Amazon · VeroTX · Walmart
      </>
    ),
  },
];

function Prompt() {
  return (
    <>
      <span className="term-prompt">➜</span> <span className="term-path">~</span>{" "}
    </>
  );
}

function Terminal() {
  const reduced = usePrefersReducedMotion();
  const [step, setStep] = useState(reduced ? SCRIPT.length : 0);
  const [chars, setChars] = useState(0);

  useEffect(() => {
    if (reduced) {
      setStep(SCRIPT.length);
      return undefined;
    }
    if (step >= SCRIPT.length) return undefined;
    const line = SCRIPT[step];
    let timer;
    if (line.cmd) {
      if (chars < line.cmd.length) {
        timer = setTimeout(() => setChars((c) => c + 1), 55 + Math.random() * 45);
      } else {
        timer = setTimeout(() => {
          setStep((s) => s + 1);
          setChars(0);
        }, 280);
      }
    } else {
      timer = setTimeout(() => setStep((s) => s + 1), 420);
    }
    return () => clearTimeout(timer);
  }, [step, chars, reduced]);

  const done = step >= SCRIPT.length;

  return (
    <div className="terminal" role="img" aria-label="Terminal introduction: Manikanta Tanniru, Software Engineer at Walmart Global Tech, 5+ years building distributed backend systems.">
      <div className="terminal-bar" aria-hidden="true">
        <span className="dot" />
        <span className="dot" />
        <span className="dot" />
        <span className="terminal-title">manikanta@portfolio — zsh</span>
      </div>
      <div className="terminal-body" aria-hidden="true">
        {SCRIPT.slice(0, Math.min(step + 1, SCRIPT.length)).map((line, i) => {
          const isCurrent = i === step;
          if (line.cmd) {
            const text = isCurrent ? line.cmd.slice(0, chars) : line.cmd;
            return (
              <div className="term-line" key={i}>
                <Prompt />
                {text}
                {isCurrent && <span className="term-caret" />}
              </div>
            );
          }
          if (isCurrent) return null;
          return (
            <div className="term-line term-out" key={i}>
              {line.out}
            </div>
          );
        })}
        {done && (
          <div className="term-line">
            <Prompt />
            <span className="term-caret" />
          </div>
        )}
      </div>
    </div>
  );
}

export default Terminal;
