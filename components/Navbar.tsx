"use client";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import SearchPalette from "./SearchPalette";

export default function Navbar() {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  if (!resolvedTheme) return null;

  return (
    <header className="sticky top-0 z-40 w-full border-b-4 border-black bg-zinc-100/80 dark:bg-zinc-950/80 backdrop-blur-md">
      <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="bg-black text-white p-2 text-xl font-heading shadow-[4px_4px_0px_0px_rgba(255,255,255,0.3)] dark:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          A
        </div>
        <div className="flex items-center gap-4">
          <SearchPalette />
          <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="p-2 border-2 border-black bg-zinc-200 dark:bg-zinc-800 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 transition-transform"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </nav>
    </header>
  );
}
