import React from "react";
import { socialMediaIcons } from "./socials";
export default function Footer() {
  return (
    <div className="absolute bottom-0 flex items-center justify-around w-full h-12 p-2">
      <div className="block">
        <ul className="flex">{socialMediaIcons}</ul>
      </div>
    </div>
  );
}
