import { site } from "@/config/site";
import { SectionHeader } from "./SectionHeader";

export function Interests() {
  return (
    <section id="interests" aria-labelledby="interests-title" className="relative py-20 md:py-28">
      <div className="container-page">
        <SectionHeader index="04" label="Interests" meta="Currently exploring" id="interests-title">
          What I&apos;m <span className="serif-accent font-normal">curious</span> about.
        </SectionHeader>

        <ul className="grid grid-cols-1 overflow-hidden rounded-[var(--radius-lg)] border border-line sm:grid-cols-2 lg:grid-cols-3">
          {site.interests.map((item, i) => (
            <li
              key={item}
              className="group -mt-px -ml-px flex items-center justify-between gap-4 border-t border-l border-line bg-black/30 px-6 py-6 transition-colors duration-300 hover:bg-glass-2"
            >
              <span className="text-lg font-semibold tracking-[-0.02em] sm:text-xl">{item}</span>
              <span className="font-mono text-[11px] text-ink-3 transition-colors duration-300 group-hover:text-violet-soft">
                {String(i + 1).padStart(2, "0")}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
