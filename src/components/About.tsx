import { site } from "@/config/site";
import { SectionHeader } from "./SectionHeader";

export function About() {
  const { about } = site;
  return (
    <section id="about" aria-labelledby="about-title" className="relative py-20 md:py-28">
      <div className="container-page">
        <SectionHeader index="01" label="About" meta="Build · Solve · Sell" id="about-title">
          Building at the intersection of <span className="text-gradient">AI and GTM.</span>
        </SectionHeader>

        <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          <div className="space-y-6 text-lg leading-relaxed text-ink-2">
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>

          <ol className="grid gap-3">
            {about.pillars.map((pillar, i) => (
              <li key={pillar.title} className="glass rounded-[var(--radius-lg)] p-6">
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-xs text-violet-soft">0{i + 1}</span>
                  <h3 className="text-lg font-bold tracking-[-0.02em]">{pillar.title}</h3>
                </div>
                <p className="mt-2 pl-8 text-[0.95rem] leading-relaxed text-ink-2">{pillar.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
