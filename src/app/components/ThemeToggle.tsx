"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="w-9 h-9"></div>;
  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="text-xl p-2 rounded-xl dark:bg-white bg-gray-900 hover:bg-gray-800 dark:hover:bg-yellow-200 transition fixed bottom-6 right-6"
    >
      {resolvedTheme === "dark" ? "☀️" : "🌙"}
    </button>
  );
}
