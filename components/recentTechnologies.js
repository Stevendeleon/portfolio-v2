import React from "react";
import { RECENT_TECHNOLOGIES as rt } from "../constants";

const recentTechnologies = () => {
  const list = [
    rt.go,
    rt.docker,
    rt.python,
    rt.redis,
    rt.typescript,
    rt.terraform,
    rt.vitest,
    rt.prisma,
    rt.gcp,
    rt.aws
  ];

  const renderList = list.map((li, index) => {
    return (
      <li
        className="relative pb-4 pr-6 transition-all duration-150 ease-out hover:text-blue-500 cursor-none"
        key={index}
        style={{
          fontFamily: "'Fira Code', monospace",
          fontSize: "0.88rem",
          fontWeight: "500",
        }}
      >
        {li}
      </li>
    );
  });
  return (
    <div>
      <ul className="grid grid-cols-2 my-4 truncate">{renderList}</ul>
    </div>
  );
};

export default recentTechnologies;
