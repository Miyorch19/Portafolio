"use client";

import { useTheme } from "@/components/ThemeProvider";

export default function Navbar() {
  const { theme, toggle } = useTheme();

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 md:pt-8 fade-up"
      aria-label="Navegación principal"
    >
      <div className="flex items-center gap-1.5 bg-[#111111] dark:bg-white text-white dark:text-[#0A0A0A] rounded-full px-2 py-2 text-[14px] font-medium shadow-sm">
        {/* Theme toggle */}
        <button
          onClick={toggle}
          aria-label={theme === "light" ? "Activar modo oscuro" : "Activar modo claro"}
          className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-white/10 dark:hover:bg-black/10 transition-colors duration-200"
        >
          {theme === "light" ? "○" : "●"}
        </button>

        {/* Divider */}
        <span className="text-white/20 dark:text-black/20 select-none px-1">
          |
        </span>

        {/* Links */}
        <a href="#hero" className="px-4 py-2 rounded-full hover:bg-white/10 dark:hover:bg-black/10 transition-colors">
          Hola!
        </a>

        <span className="text-white/25 dark:text-black/25 select-none">·</span>

        <a href="#work" className="px-4 py-2 rounded-full hover:bg-white/10 dark:hover:bg-black/10 transition-colors">
          Trabajos
        </a>

        <span className="text-white/25 dark:text-black/25 select-none">·</span>

        <a href="#precios" className="px-4 py-2 rounded-full hover:bg-white/10 dark:hover:bg-black/10 transition-colors">
          Precios
        </a>
      </div>
    </nav>
  );
}
