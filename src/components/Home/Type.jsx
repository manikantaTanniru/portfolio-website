import React from "react";
import Typewriter from "typewriter-effect";
import portfolio from "../../Portfolio";

function Type() {
  const highlights = [
    "Software Engineer @ Walmart",
    "Backend Engineer",
    "Distributed Systems",
    "System Design",
    "Eat.",
    "Code.",
    "Sleep.",
    "Repeat.",
  ]
    .filter(Boolean)
    .filter((value, index, self) => self.indexOf(value) === index);

  return (
    <Typewriter
      options={{
        strings: highlights.length ? highlights : ["Developer"],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
