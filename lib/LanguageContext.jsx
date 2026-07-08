"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { translations } from "./translations";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("fa");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem("mhg-lang");
    if (stored === "fa" || stored === "en") {
      setLang(stored);
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    document.documentElement.lang = lang === "fa" ? "fa" : "en";
    document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";
    window.localStorage.setItem("mhg-lang", lang);
  }, [lang, ready]);

  const toggleLang = () => setLang((prev) => (prev === "fa" ? "en" : "fa"));

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
