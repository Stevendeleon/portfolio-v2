import React from "react";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";

const navbar = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const switchTheme = () => {
    if (isMounted) {
      setTheme(theme === "light" ? "dark" : "light");
    }
  };

  return (
    <nav className="flex items-center justify-between w-full max-w-4xl p-8 mx-auto my-0 bg-transparent sticky-nav md:my-8 bg-opacity-60">
      <button
        className="sm:text-sm md:text-xl bg-gray-100 dark:bg-gray-800 p-3 rounded w-auto"
        onClick={switchTheme}
      >
        <span className="sm:text-sm md:text-xl ">
          {theme === "light" ? (
            <i className="fas fa-moon-stars" />
          ) : (
            <i className="fas fa-sun" />
          )}
        </span>
        {/* <i class="fas fa-light-ceiling " /> */}
      </button>
      <div className="sm:text-sm md:text-xl  font-semibold">
        <Link href="/">
          <span className="p-1  cursor-pointer sm:p-4 hover:text-blue-500 dark:hover:text-green-400">
            Home
          </span>
        </Link>
        <Link href="/about">
          <span className="p-1  cursor-pointer sm:p-4 hover:text-blue-500 dark:hover:text-green-400">
            About
          </span>
        </Link>
        <Link href="/projects">
          <span className="p-1  cursor-pointer sm:p-4 hover:text-blue-500 dark:hover:text-green-400">
            Projects
          </span>
        </Link>
        <Link href="/contact">
          <span className="p-1  cursor-pointer sm:p-4 hover:text-blue-500 dark:hover:text-green-400">
            Contact
          </span>
        </Link>
      </div>
    </nav>
    // <div>
    //   <button onClick={switchTheme}>Change theme</button>
    // </div>
  );
};

export default navbar;
