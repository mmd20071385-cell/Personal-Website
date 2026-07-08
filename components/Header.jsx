"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { useTheme } from "@/lib/ThemeContext";

export default function Header() {
  const { lang, toggleLang, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: t.nav.home },
    { href: "/about", label: t.nav.about },
    { href: "/portfolio", label: t.nav.portfolio },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-line-light dark:border-line-dark bg-bg-light/90 dark:bg-bg-dark/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
        <Link
          href="/"
          className="group flex items-center gap-2 font-mono text-sm"
          onClick={() => setOpen(false)}
        >
          <span className="font-sans grid h-9 w-9 place-items-center rounded-md bg-ink-light text-bg-light dark:bg-accent dark:text-bg-dark font-bold transition-transform group-hover:-rotate-3">
            MG
          </span>
          <span className=" font-sans hidden flex-col sm:flex">
            <span className="text-sm font-semibold leading-tight text-ink-light dark:text-ink-dark">
              {t.header.name}
            </span>
            <span className="text-xs leading-tight text-muted-light dark:text-muted-dark">
              {t.header.role}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-md px-3 py-2 text-sm transition-colors ${
                  active
                    ? "bg-ink-light/5 font-semibold text-accent dark:bg-white/5"
                    : "text-ink-light/80 hover:text-accent dark:text-ink-dark/80"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleLang}
            aria-label="Switch language"
            className="rounded-md border border-line-light px-3 py-1.5 font-mono text-xs font-semibold text-ink-light transition-colors hover:border-accent hover:text-accent dark:border-line-dark dark:text-ink-dark"
          >
            {t.header.langToggle}
          </button>

          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="grid h-8 w-8 place-items-center rounded-md border border-line-light text-ink-light transition-colors hover:border-accent hover:text-accent dark:border-line-dark dark:text-ink-dark"
          >
            {theme === "dark" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4 w-4"
              >
                <path d="M12 3a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1Zm0 15a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1Zm9-6a1 1 0 0 1-1 1h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1ZM5 12a1 1 0 0 1-1 1H3a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1Zm12.66 6.66a1 1 0 0 1-1.41 0l-.71-.71a1 1 0 1 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41ZM7.46 7.46a1 1 0 0 1-1.41 0l-.71-.71A1 1 0 1 1 6.75 5.34l.71.71a1 1 0 0 1 0 1.41Zm11.2-1.41a1 1 0 0 1 0 1.41l-.71.71a1 1 0 1 1-1.41-1.41l.71-.71a1 1 0 0 1 1.41 0ZM6.75 18.66a1 1 0 0 1-1.41 0 1 1 0 0 1 0-1.41l.71-.71A1 1 0 1 1 7.46 18l-.71.66ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4 w-4"
              >
                <path d="M21.64 13a1 1 0 0 0-1.05-.14 8.05 8.05 0 0 1-3.37.73 8.15 8.15 0 0 1-8.14-8.14c0-1.13.22-2.27.73-3.37a1 1 0 0 0-1.19-1.19A10.14 10.14 0 1 0 22.83 14.05 1 1 0 0 0 21.64 13Z" />
              </svg>
            )}
          </button>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="grid h-8 w-8 place-items-center rounded-md border border-line-light text-ink-light md:hidden dark:border-line-dark dark:text-ink-dark"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-4 w-4"
            >
              {open ? (
                <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-line-light px-5 py-3 md:hidden dark:border-line-dark">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`rounded-md px-3 py-2 text-sm ${
                pathname === link.href
                  ? "font-semibold text-accent"
                  : "text-ink-light/80 dark:text-ink-dark/80"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
