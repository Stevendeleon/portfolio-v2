import React from "react";
import Link from "next/link";

export default function navBarLinks() {
  const navBarLinkValues = [
    { id: 0, name: "Home", href: "/" },
    { id: 1, name: "About", href: "/about" },
    { id: 2, name: "Projects", href: "/projects" },
    { id: 3, name: "Contact", href: "/contact" },
    { id: 4, name: "Resume", href: "/Resume.pdf" },
  ];

  const navLinks = navBarLinkValues.map((navItem) => {
    return (
      <Link key={navItem.id} href={navItem.href}>
        <a className="p-1 cursor-pointer sm:p-4 hover:text-red-600 dark:hover:text-green-400">
          <span>{navItem.name}</span>
        </a>
      </Link>
    );
  });

  return (
    <div className="text-xs font-semibold sm:text-sm md:text-xl">
      {navLinks}
    </div>
  );
}
