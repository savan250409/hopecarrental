"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Icon from "./Icon";

// Reads the theme already applied by the pre-paint script in <head>, then lets
// the user flip it and remembers the choice.
export default function ThemeToggle({ className = "" }) {
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const syncTheme = () => {
      setDark(document.documentElement.classList.contains("dark"));
    };

    syncTheme();
    setMounted(true);

    // Navbar renders desktop and mobile toggles together; keep both icons in sync.
    window.addEventListener("hope-theme-change", syncTheme);
    return () => window.removeEventListener("hope-theme-change", syncTheme);
  }, []);

  function toggle() {
    const next = !document.documentElement.classList.contains("dark");
    setDark(next);
    const el = document.documentElement;
    el.classList.toggle("dark", next);
    el.style.colorScheme = next ? "dark" : "light";
    window.dispatchEvent(new Event("hope-theme-change"));
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch (e) {
      /* storage unavailable — honour the in-session toggle only */
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={mounted ? (dark ? "Switch to light mode" : "Switch to dark mode") : "Toggle theme"}
      aria-pressed={mounted ? dark : undefined}
      className={`relative inline-flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl bg-navy-900/5 text-navy-800 backdrop-blur transition-colors hover:bg-navy-900/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 ${className}`}
    >
      {/* Render an icon only after mount to avoid a hydration mismatch. */}
      {mounted && (
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={dark ? "moon" : "sun"}
            initial={{ opacity: 0, rotate: -40, scale: 0.6 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 40, scale: 0.6 }}
            transition={{ duration: 0.25 }}
            className="absolute"
          >
            <Icon name={dark ? "moon" : "sun"} className="h-5 w-5" />
          </motion.span>
        </AnimatePresence>
      )}
    </button>
  );
}
