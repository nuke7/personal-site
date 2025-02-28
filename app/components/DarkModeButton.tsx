"use client";
import React from "react";
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const DarkModeButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const htmlElement = document.documentElement;
    if (isDarkMode) {
      htmlElement.classList.add("dark");
    } else {
      htmlElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  useEffect(() => {
    setMounted(true);
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prevState) => !prevState);
  };

  if (!mounted) {
    return null;
  }

  return (
    <button 
    onClick={toggleDarkMode}
    className="flex items-center justify-center text-slate-200 border border-slate-200/60 rounded-md px-4 py-1 hover:bg-white/10 hover:text-white active:text-blue-300 active:bg-slate-700 transition-all duration-200"
    aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
  >
    {isDarkMode ? <FaSun className="mr-2" /> : <FaMoon className="mr-2" />}
    <span>{isDarkMode ? "Lighten" : "Darken"}</span>
  </button>
  );
};

export default DarkModeButton;
