"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  const links = [
    { href: "/", label: t.nav.home },
    { href: "/about", label: t.nav.about },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <footer className="border-t border-line-light bg-bg-light dark:border-line-dark dark:bg-bg-dark">
      <div className="mx-auto grid max-w-5xl gap-8 px-5 py-12 sm:grid-cols-3">
        <div>
          <div className=" mb-2 flex items-center gap-2 text-sm font-bold text-ink-light dark:text-ink-dark">
            <span className=" grid h-7 w-7 place-items-center rounded-md bg-ink-light text-bg-light dark:bg-accent dark:text-bg-dark">
              MG
            </span>
            {t.header.name}
          </div>
          <p className="text-sm text-muted-light dark:text-muted-dark">
            {t.footer.tagline}
          </p>
        </div>

        <div>
          <h3 className="mb-3 text-xs uppercase tracking-wider text-muted-light dark:text-muted-dark">
            {t.footer.quickLinks}
          </h3>
          <ul className="space-y-2 text-sm">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-ink-light/80 transition-colors hover:text-accent dark:text-ink-dark/80"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-xs uppercase tracking-wider text-muted-light dark:text-muted-dark">
            {t.footer.contactTitle}
          </h3>
          <ul className="space-y-2 text-sm text-ink-light/80 dark:text-ink-dark/80">
            <li>
              <a
                href="mailto:mmd.2007.1385@gmail.com"
                className="hover:text-accent"
              >
                mmd.2007.1385@gmail.com
              </a>
            </li>
            <li dir="ltr" className="inline">
              <a href="tel:+989300504548" className="hover:text-accent">
                0930 050 4548
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line-light px-5 py-5 text-center text-xs text-muted-light dark:border-line-dark dark:text-muted-dark">
        <p>
          © {year} {t.header.name} — {t.footer.rights}
        </p>
        <p className="mt-1 opacity-70">{t.footer.builtWith}</p>
      </div>
    </footer>
  );
}
