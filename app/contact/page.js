"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import Reveal from "@/components/Reveal";

export default function ContactPage() {
  const { t } = useLanguage();
  const contact = t.contact;
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("✅ پیام شما با موفقیت ارسال شد.");

        setForm({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setStatus("❌ ارسال پیام ناموفق بود.");
      }
    } catch (err) {
      setStatus("❌ خطا در ارتباط با سرور.");
    }

    setLoading(false);
  };

  const infoItems = [
    {
      label: contact.email,
      value: "mmd.2007.1385@gmail.com",
      href: "mailto:mmd.2007.1385@gmail.com",
      icon: (
        <path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm1.8 2 6.7 5.2a1 1 0 0 0 1 0L19.2 7H4.8ZM4 7.7V17h16V7.7l-6.9 5.3a2 2 0 0 1-2.2 0L4 7.7Z" />
      ),
    },
    {
      label: contact.phone,
      value: "0930 050 4548",
      href: "tel:+989300504548",
      ltr: true,
      icon: (
        <path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11 11 0 0 0 3.4.55 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11 11 0 0 0 .55 3.4 1 1 0 0 1-.25 1L6.6 10.8Z" />
      ),
    },
    {
      label: contact.location,
      value: contact.locationValue,
      href: null,
      icon: (
        <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />
      ),
    },
  ];

  return (
    <div className="mx-auto max-w-5xl px-5 py-14">
      <Reveal>
        <h1 className="mb-1 text-3xl font-bold text-ink-light dark:text-ink-dark">
          {contact.title}
        </h1>
        <p className="mb-10 max-w-lg text-muted-light dark:text-muted-dark">
          {contact.subtitle}
        </p>
      </Reveal>

      <div className="grid gap-8 md:grid-cols-5">
        <div className="md:col-span-2">
          <Reveal>
            <div className="rounded-xl border border-line-light bg-surface-light p-6 dark:border-line-dark dark:bg-surface-dark">
              <p className="mb-5 text-xs text-muted-light dark:text-muted-dark">
                {contact.infoTitle}
              </p>
              <ul className="space-y-5">
                {infoItems.map((item) => (
                  <li key={item.label} className="flex items-start gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                    >
                      {item.icon}
                    </svg>
                    <div>
                      <p className="text-xs text-muted-light dark:text-muted-dark">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          dir={item.ltr ? "ltr" : undefined}
                          className={`text-sm font-medium text-ink-light hover:text-accent dark:text-ink-dark ${
                            item.ltr ? "block text-right" : ""
                          }`}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium text-ink-light dark:text-ink-dark">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className=" mt-6 rounded-xl border border-line-light bg-surface-light p-6 dark:border-line-dark dark:bg-surface-dark">
              <p className="mb-4 text-xs text-muted-light dark:text-muted-dark">
                {contact.socialTitle}
              </p>
              {/* Placeholder social link — update href with the real GitHub profile URL */}
              <a
                href="https://github.com/mmd20071385-cell"
                className="mx-2 inline-flex items-center gap-2 rounded-md border border-line-light px-4 py-2 text-sm font-medium text-ink-light transition-colors hover:border-accent hover:text-accent dark:border-line-dark dark:text-ink-dark"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
                </svg>
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/mmd-h-gd/"
                className="inline-flex items-center gap-2 rounded-md border border-line-light px-4 py-2 text-sm font-medium text-ink-light transition-colors hover:border-accent hover:text-accent dark:border-line-dark dark:text-ink-dark"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path d="" />
                </svg>
                linkedin
              </a>
            </div>
          </Reveal>
        </div>

        <div className="md:col-span-3">
          <Reveal delay={60}>
            <form
              onSubmit={handleSubmit}
              className="space-y-4 rounded-xl border border-line-light bg-surface-light p-6 dark:border-line-dark dark:bg-surface-dark"
            >
              <p className="mb-1 text-xs text-muted-light dark:text-muted-dark">
                {contact.formTitle}
              </p>

              <div>
                <label
                  htmlFor="name"
                  className="mb-1 block text-sm font-medium text-ink-light dark:text-ink-dark"
                >
                  {contact.formName}
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full rounded-md border border-line-light bg-bg-light px-3.5 py-2.5 text-sm text-ink-light outline-none transition-colors focus:border-accent dark:border-line-dark dark:bg-bg-dark dark:text-ink-dark"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-1 block text-sm font-medium text-ink-light dark:text-ink-dark"
                >
                  {contact.formEmail}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  dir="ltr"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full rounded-md border border-line-light bg-bg-light px-3.5 py-2.5 text-sm text-ink-light outline-none transition-colors focus:border-accent dark:border-line-dark dark:bg-bg-dark dark:text-ink-dark"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-1 block text-sm font-medium text-ink-light dark:text-ink-dark"
                >
                  {contact.formMessage}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={form.message}
                  onChange={handleChange}
                  className="w-full resize-none rounded-md border border-line-light bg-bg-light px-3.5 py-2.5 text-sm text-ink-light outline-none transition-colors focus:border-accent dark:border-line-dark dark:bg-bg-dark dark:text-ink-dark"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-md bg-ink-light py-2.5 text-sm font-semibold text-bg-light transition disabled:opacity-60 dark:bg-accent dark:text-bg-dark sm:w-auto sm:px-6"
              >
                {loading ? "در حال ارسال..." : contact.formSubmit}
              </button>

              {status && (
                <p
                  className={`mt-3 text-sm ${
                    status.includes("✅") ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {status}
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
