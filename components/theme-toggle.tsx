"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

type ThemeMode = "light" | "dark";

const STORAGE_KEY = "theme";

function applyTheme(mode: ThemeMode) {
   if (mode === "dark") {
     document.documentElement.classList.add("dark");
   } else {
     document.documentElement.classList.remove("dark");
   }
 }

export function ThemeToggle() {
   const [theme, setTheme] = useState<ThemeMode>("dark");

   useEffect(() => {
     const stored = window.localStorage.getItem(STORAGE_KEY);
     const next =
       stored === "light" || stored === "dark" ? (stored as ThemeMode) : "dark";
     setTheme(next);
     applyTheme(next);
   }, []);

   const handleToggle = () => {
     const next: ThemeMode = theme === "dark" ? "light" : "dark";
     setTheme(next);
     window.localStorage.setItem(STORAGE_KEY, next);
     applyTheme(next);
   };

   const isDark = theme === "dark";

   return (
     <button
       type="button"
       onClick={handleToggle}
       className="inline-flex h-10 w-10 items-center justify-center rounded-full border bg-background/70 text-foreground shadow-sm transition hover:bg-muted"
       aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
     >
       {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
     </button>
   );
 }
