"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Command } from "lucide-react";

const navItems = [
  { name: "Home", id: "hero" },
  { name: "Experiences", id: "experiences" },
  { name: "Inventory (Skills)", id: "inventory" },
  { name: "Changelog", id: "changelog" },
  { name: "Contact", id: "contact" },
];

export default function SearchPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const filteredItems = navItems.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  const navigate = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
    setQuery("");
  };

  return (
    <>
      <button 
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 px-3 py-1.5 border-2 border-zinc-800 dark:border-zinc-200 bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-px transition-all"
      >
        <Command size={14} />
        <span className="text-xs font-heading">K</span>
      </button>

      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh] bg-black/60 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-lg bg-zinc-100 dark:bg-zinc-950 border-4 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
            >
              <div className="flex items-center gap-3 border-b-4 border-black pb-3 mb-4">
                <Search className="text-zinc-500 dark:text-zinc-400  shrink-0 " />
                <input
                  autoFocus
                  placeholder="Search sections..."
                  className="bg-transparent outline-none w-full font-body text-lg text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-600"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                {filteredItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => navigate(item.id)}
                    className="w-full text-left p-3 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-800 hover:text-white transition-colors font-heading text-[10px] flex justify-between items-center group"
                  >
                    {item.name}
                    <span className="opacity-0 group-hover:opacity-100">↵</span>
                  </button>
                ))}
                {filteredItems.length === 0 && (
                  <p className="text-center py-4 text-zinc-500">No results found.</p>
                )}
              </div>
              <div className="mt-4 pt-3 border-t-2 border-zinc-300 dark:border-zinc-800 flex justify-between text-[10px] text-zinc-500 font-body">
                <span>↵ navigate</span>
                <span>ESC close</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}