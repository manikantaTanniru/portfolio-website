import React from "react";

const PALETTE = {
  violet: { fill: "rgba(124, 108, 246, 0.16)", stroke: "#9d8ff9", text: "#e3ddff" },
  cyan: { fill: "rgba(34, 211, 238, 0.14)", stroke: "#5fe4f5", text: "#d8fbff" },
  pink: { fill: "rgba(244, 114, 182, 0.14)", stroke: "#f79ac9", text: "#ffe3f2" },
  amber: { fill: "rgba(251, 191, 36, 0.14)", stroke: "#fdd063", text: "#fff3d6" },
  emerald: { fill: "rgba(52, 211, 153, 0.14)", stroke: "#6ee7b7", text: "#dcfce9" },
};

function Node({ x, y, w, h, label, sub, hue = "violet", dashed = false }) {
  const c = PALETTE[hue];
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={12}
        fill={c.fill}
        stroke={c.stroke}
        strokeWidth={1.4}
        strokeDasharray={dashed ? "5 4" : undefined}
      />
      <text
        x={x + w / 2}
        y={sub ? y + h / 2 - 4 : y + h / 2 + 5}
        textAnchor="middle"
        fontSize="13"
        fontWeight="600"
        fill={c.text}
        fontFamily="Inter, sans-serif"
      >
        {label}
      </text>
      {sub && (
        <text
          x={x + w / 2}
          y={y + h / 2 + 14}
          textAnchor="middle"
          fontSize="10.5"
          fill={c.text}
          opacity="0.75"
          fontFamily="Inter, sans-serif"
        >
          {sub}
        </text>
      )}
    </g>
  );
}

function GroupLabel({ x, y, text, hue = "violet" }) {
  return (
    <text
      x={x}
      y={y}
      fontSize="10.5"
      letterSpacing="0.08em"
      fontWeight="700"
      fill={PALETTE[hue].stroke}
      fontFamily="JetBrains Mono, monospace"
    >
      {text.toUpperCase()}
    </text>
  );
}

function Arrow({ x1, y1, x2, y2, hue = "violet", curve, dashed }) {
  const stroke = PALETTE[hue].stroke;
  const path = curve
    ? `M ${x1} ${y1} C ${x1 + (x2 - x1) / 2} ${y1}, ${x1 + (x2 - x1) / 2} ${y2}, ${x2} ${y2}`
    : `M ${x1} ${y1} L ${x2} ${y2}`;
  return (
    <path
      d={path}
      fill="none"
      stroke={stroke}
      strokeWidth={1.6}
      strokeDasharray={dashed ? "4 4" : undefined}
      markerEnd="url(#arrowhead)"
      opacity={0.85}
    />
  );
}

function DiagramShell({ viewBox, children, height = 380 }) {
  return (
    <svg
      viewBox={viewBox}
      height={height}
      style={{ overflow: "visible", minWidth: 640, width: "100%" }}
    >
      <defs>
        <marker
          id="arrowhead"
          markerWidth="8"
          markerHeight="8"
          refX="7"
          refY="4"
          orient="auto"
        >
          <path d="M0,0 L8,4 L0,8 Z" fill="#c9c3f7" />
        </marker>
      </defs>
      {children}
    </svg>
  );
}

export function AiWorkflowDiagram() {
  return (
    <DiagramShell viewBox="0 0 900 400">
      <GroupLabel x={20} y={26} text="Client" hue="pink" />
      <Node x={20} y={40} w={130} h={54} label="Content Request" hue="pink" />

      <Arrow x1={150} y1={67} x2={196} y2={67} />

      <Node x={200} y={40} w={130} h={54} label="API (Node/TS)" sub="validate + auth" hue="violet" />

      <Arrow x1={330} y1={67} x2={380} y2={130} curve />

      <GroupLabel x={370} y={110} text="Step Functions workflow" hue="violet" />
      <Node x={370} y={122} w={120} h={54} label="1. Plan" hue="violet" />
      <Node x={520} y={122} w={120} h={54} label="2. Generate" hue="violet" />
      <Node x={670} y={122} w={120} h={54} label="3. Evaluate" hue="violet" />
      <Node x={520} y={210} w={120} h={54} label="4. Approve" sub="human-in-the-loop" hue="amber" />

      <Arrow x1={490} y1={149} x2={516} y2={149} />
      <Arrow x1={640} y1={149} x2={666} y2={149} />
      <Arrow x1={730} y1={176} x2={610} y2={214} curve />

      <Arrow x1={580} y1={122} x2={580} y2={78} curve hue="cyan" />
      <Node x={520} y={20} w={120} h={50} label="Amazon Bedrock" sub="Claude / Titan" hue="cyan" />

      <Node x={720} y={230} w={140} h={54} label="Human Approver" sub="portal review" hue="amber" />
      <Arrow x1={640} y1={237} x2={716} y2={250} />

      <Arrow x1={580} y1={264} x2={580} y2={300} />
      <Node x={480} y={304} w={200} h={54} label="DynamoDB" sub="artifacts + audit trail" hue="emerald" />

      <Arrow x1={380} y1={149} x2={262} y2={325} curve dashed hue="pink" />
      <Node x={40} y={304} w={220} h={70} label="Resilience layer" sub="throttling · retries · circuit breaker" hue="pink" dashed />

      <Node x={20} y={190} w={150} h={60} label="CloudWatch" sub="metrics · alerts · MTTD" hue="cyan" dashed />
      <Arrow x1={95} y1={190} x2={250} y2={100} curve dashed hue="cyan" />
    </DiagramShell>
  );
}

export function HummingbirdDiagram() {
  const partners = ["Oracle EBS", "Kinaxis", "PLM", "SAP", "Proplanner"];
  return (
    <DiagramShell viewBox="0 0 940 400">
      <GroupLabel x={20} y={14} text="Partner systems" hue="pink" />
      {partners.map((p, i) => (
        <Node key={p} x={20} y={24 + i * 54} w={150} h={42} label={p} hue="pink" />
      ))}

      {partners.map((_, i) => (
        <Arrow
          key={i}
          x1={170}
          y1={45 + i * 54}
          x2={210}
          y2={180}
          curve
          hue="pink"
        />
      ))}

      <Node x={210} y={40} w={150} h={44} label="Self-service onboarding" sub="routes + schemas" hue="amber" dashed />
      <Arrow x1={285} y1={84} x2={285} y2={150} dashed hue="amber" />

      <Node x={210} y={150} w={150} h={60} label="EventBridge" sub="integration bus" hue="violet" />

      <GroupLabel x={400} y={114} text="Per-partner workflow" hue="violet" />
      <Arrow x1={360} y1={180} x2={396} y2={154} curve />
      <Node x={400} y={130} w={90} h={48} label="Validate" hue="violet" />
      <Node x={505} y={130} w={90} h={48} label="Transform" hue="violet" />
      <Node x={610} y={130} w={90} h={48} label="Route" hue="violet" />

      <Arrow x1={490} y1={154} x2={501} y2={154} />
      <Arrow x1={595} y1={154} x2={606} y2={154} />

      <Arrow x1={655} y1={178} x2={690} y2={230} curve />
      <Node x={610} y={234} w={160} h={50} label="SQS buffer" sub="backpressure" hue="cyan" />

      <Arrow x1={610} y1={259} x2={580} y2={259} />
      <Node x={420} y={234} w={150} h={50} label="Lambda consumers" hue="cyan" />

      <Arrow x1={495} y1={284} x2={400} y2={312} curve />
      <Node x={210} y={316} w={310} h={60} label="Downstream tenant systems" sub="100K+ req/sec · 300+ routes / tenant" hue="emerald" />
    </DiagramShell>
  );
}

export function HorusDiagram() {
  return (
    <DiagramShell viewBox="0 0 900 340">
      <Node x={20} y={130} w={150} h={54} label="Release / Schedule" sub="trigger" hue="pink" />
      <Arrow x1={170} y1={157} x2={216} y2={157} />

      <Node x={220} y={130} w={170} h={54} label="Step Functions" sub="test orchestrator" hue="violet" />
      <Arrow x1={390} y1={157} x2={436} y2={157} />

      <GroupLabel x={440} y={70} text="Auto-scaling fleet (ECS Fargate)" hue="cyan" />
      <rect x={436} y={82} width={280} height={150} rx={14} fill="none" stroke="#5fe4f5" strokeDasharray="5 4" opacity="0.6" />
      <Node x={456} y={100} w={110} h={44} label="Worker 1" hue="cyan" />
      <Node x={586} y={100} w={110} h={44} label="Worker 2" hue="cyan" />
      <Node x={456} y={160} w={110} h={44} label="Worker N" hue="cyan" dashed />
      <Node x={586} y={160} w={110} h={44} label="scales to 0" hue="cyan" dashed />

      <Arrow x1={716} y1={157} x2={762} y2={157} />
      <Node x={766} y={130} w={120} h={54} label="Results store" hue="amber" />

      <Arrow x1={826} y1={184} x2={826} y2={230} dashed hue="amber" />
      <Arrow x1={826} y1={244} x2={520} y2={264} curve dashed hue="amber" />
      <Node x={280} y={238} w={240} h={54} label="React Dashboard" sub="pass/fail trends, flaky-test signal" hue="emerald" />

      <Arrow x1={300} y1={130} x2={300} y2={100} dashed hue="violet" />
      <Node x={220} y={40} w={170} h={50} label="CloudWatch logs" hue="violet" dashed />
    </DiagramShell>
  );
}

export const DIAGRAMS = {
  aiWorkflow: AiWorkflowDiagram,
  hummingbird: HummingbirdDiagram,
  horus: HorusDiagram,
};
