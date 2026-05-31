import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full Stack Developer. . .",
          "Software Engineer. . .",
          "Azure. . .",
          "Microservices. . .",
          "Agile. . .",
          ".Net Core. . .",
          "Angular. . .",
          "SQL. . .",
          "AI-Assisted Developer. . .",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
