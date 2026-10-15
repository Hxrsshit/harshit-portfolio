"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/config/site";
import { Monogram } from "./Monogram";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  // Highlight the nav item for the section currently in view.
  useEffect(() => {
    const navIds = new Set(site.nav.map((n) => n.href.slice(1)));
    const sections = Array.from(document.querySelectorAll<HTMLElement>("main section[id]"));
    let raf = 0;
    const update = () => {
      raf = 0;
      const line = window.innerHeight * 0.4;
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      let current = "";
      for (const s of sections) {
        if (s.getBoundingClientRect().top <= line) current = s.id;
      }
      if (atBottom && sections.length) current = sections[sections.length - 1].id;
      setActive(navIds.has(current) ? current : "");
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* soft fade so content scrolls cleanly under the floating nav */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-bg via-bg/80 to-transparent" />
      <div className="container-page relative flex h-[var(--nav-h)] items-center justify-between gap-4">
        <a
          href="#top"
          className="flex items-center gap-2.5 text-[0.95rem] font-bold tracking-[-0.02em] uppercase"
          aria-label={`${site.name}, back to top`}
        >
          <Monogram className="size-8" />
          <span className="hidden sm:inline">{site.name}</span>
        </a>

        <nav
          aria-label="Primary"
          className="absolute left-1/2 hidden -translate-x-1/2 rounded-full border border-line bg-black/70 px-2 backdrop-blur-md md:block"
        >
          <ul className="flex items-center">
            {site.nav.map((item, i) => {
              const isActive = active === item.href.slice(1);
              return (
                <li key={item.href} className="flex items-center">
                  {i > 0 && <span aria-hidden="true" className="h-3 w-px bg-line-2" />}
                  <a
                    href={item.href}
                    aria-current={isActive ? "true" : undefined}
                    className={`label block px-6 py-3.5 transition-colors duration-200 hover:text-ink ${
                      isActive ? "text-ink" : "text-ink-2"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a href={`mailto:${site.contact.email}`} className="btn btn-primary hidden min-h-10 px-5 text-xs md:inline-flex">
            Get in touch
          </a>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full border border-line-2 bg-black/60 backdrop-blur-md md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-menu" className="container-page relative md:hidden">
          <nav aria-label="Mobile" className="glass rounded-[var(--radius-lg)] bg-bg-raised/95 p-2 backdrop-blur-xl">
            <ul>
              {site.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between rounded-[var(--radius-md)] px-4 py-4 text-lg font-semibold tracking-tight hover:bg-glass-2"
                  >
                    {item.label}
                    <span className="label text-ink-3">{item.href.replace("#", "./")}</span>
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={`mailto:${site.contact.email}`}
              onClick={() => setOpen(false)}
              className="btn btn-primary mt-2 w-full"
            >
              Get in touch
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
