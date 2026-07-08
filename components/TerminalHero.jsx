"use client";

import { useEffect, useState } from "react";

/**
 * Renders a mock terminal that types out a series of { cmd, out } lines
 * one character at a time, then blinks a cursor once finished.
 */
export default function TerminalHero({ lines }) {
  const [lineIndex, setLineIndex] = useState(0);
  const [cmdText, setCmdText] = useState("");
  const [outText, setOutText] = useState("");
  const [phase, setPhase] = useState("cmd"); // cmd -> out -> done
  const [history, setHistory] = useState([]);

  useEffect(() => {
    if (lineIndex >= lines.length) return;
    const current = lines[lineIndex];

    if (phase === "cmd") {
      if (cmdText.length < current.cmd.length) {
        const timeout = setTimeout(() => {
          setCmdText(current.cmd.slice(0, cmdText.length + 1));
        }, 45);
        return () => clearTimeout(timeout);
      }
      const timeout = setTimeout(() => setPhase("out"), 250);
      return () => clearTimeout(timeout);
    }

    if (phase === "out") {
      if (outText.length < current.out.length) {
        const timeout = setTimeout(() => {
          setOutText(current.out.slice(0, outText.length + 1));
        }, 12);
        return () => clearTimeout(timeout);
      }
      const timeout = setTimeout(() => {
        setHistory((h) => [...h, current]);
        setCmdText("");
        setOutText("");
        setPhase("cmd");
        setLineIndex((i) => i + 1);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [cmdText, outText, phase, lineIndex, lines]);

  const isDone = lineIndex >= lines.length;

  return (
    <div
      dir="ltr"
      className="w-full overflow-hidden rounded-xl border border-line-light bg-surface-light font-mono text-sm shadow-lg dark:border-line-dark dark:bg-surface-dark"
    >
      <div className="flex items-center gap-1.5 border-b border-line-light bg-black/5 px-4 py-3 dark:border-line-dark dark:bg-white/5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-accent/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
        <span className="font-sans ms-2 text-xs text-muted-light dark:text-muted-dark">
          guest@mhg-portfolio: ~
        </span>
      </div>
      <div dir="rtl" className="font-sans min-h-[168px] space-y-2 px-4 py-4 text-ink-light dark:text-ink-dark">
        {history.map((h, i) => (
          <div key={i}>
            <p>
              <span className="text-accent">$</span> {h.cmd}
            </p>
            <p className="text-muted-light dark:text-muted-dark">{h.out}</p>
          </div>
        ))}

        {!isDone && (
          <div>
            <p>
              <span className="text-accent">$</span> {cmdText}
              {phase === "cmd" && (
                <span className="animate-blink border-e-2 border-ink-light dark:border-ink-dark">
                  &nbsp;
                </span>
              )}
            </p>
            {phase === "out" && (
              <p className="text-muted-light dark:text-muted-dark">
                {outText}
                <span className="animate-blink border-e-2 border-ink-light dark:border-ink-dark">
                  &nbsp;
                </span>
              </p>
            )}
          </div>
        )}

        {isDone && (
          <p>
            <span className="text-accent">$</span>
            <span className="ms-1 animate-blink border-e-2 border-ink-light dark:border-ink-dark">
              &nbsp;
            </span>
          </p>
        )}
      </div>
    </div>
  );
}
