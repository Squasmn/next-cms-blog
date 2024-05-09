"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import SvgComponent from "./SvgComponent";

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      className=" mt-4 border-2 border-purple-500 rounded-3xl p-2 hover:scale-110 transition-transform duration-300 ease-in-out "
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <SvgComponent
        className="w-6 h-6"
        fill={theme === "dark" ? "#ffffff" : "#000000"}
      />{" "}
      {/* Change the color based on the theme */}
    </button>
  );
};
export default ThemeSwitch;
