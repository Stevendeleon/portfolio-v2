import NavBarLinks from "./navBarLinks";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function navbar() {
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
        className="w-auto p-3 text-xs bg-gray-100 rounded sm:text-sm md:text-xl dark:bg-gray-800"
        onClick={switchTheme}
      >
        <span className="text-xs sm:text-sm md:text-xl">
          {theme === "light" ? (
            <i className="fas fa-moon-stars" aria-hidden="false" />
          ) : (
            <i className="fas fa-sun" aria-hidden="false" />
          )}
        </span>
      </button>
      <NavBarLinks />
    </nav>
  );
}
