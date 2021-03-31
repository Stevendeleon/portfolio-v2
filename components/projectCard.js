import React from "react";
import { list } from "./projectData";
export default function projectCart() {
  return (
    <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
      {list}
    </ul>
  );
}
