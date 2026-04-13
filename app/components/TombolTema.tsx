"use client";

import { useEffect, useState } from "react";

export default function TombolTema() {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setMounted(true);

    if (
      typeof window !== "undefined" &&
      document.documentElement.classList.contains("dark")
    ) {
      setIsDark(true);
    }
  }, []);

  const toggleTema = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  };

  if (!mounted) {
    return (
      <div className="ml-4 h-8 w-16 rounded-lg bg-gray-200 animate-pulse"></div>
    );
  }

  return (
    <button
      onClick={toggleTema}
      className="ml-4 rounded-lg bg-gray-200 px-3 py-1.5 text-sm font-medium text-gray-800 transition-colors hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
    >
      {isDark ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
}
