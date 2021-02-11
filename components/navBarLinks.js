import React from "react";
import Link from "next/link";

const navBarLinks = () => {
  const navBarLinkValues = [
    { id: 0, name: "Home", href: "/" },
    { id: 1, name: "About", href: "/about" },
    { id: 2, name: "Projects", href: "/projects" },
    { id: 3, name: "Contact", href: "/contact" },
  ];

  const navLinks = navBarLinkValues.map((navItem) => {
    return (
      <Link key={navItem.id} href={navItem.href}>
        <span className="p-1 cursor-pointer sm:p-4 hover:text-red-600 dark:hover:text-green-400">
          {navItem.name}
        </span>
      </Link>
    );
  });

  return <div className="font-semibold sm:text-sm md:text-xl">{navLinks}</div>;
};

export default navBarLinks;
