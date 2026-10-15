import { ArrowDown, ArrowUpRight } from "lucide-react";
import { site } from "@/config/site";

export function Hero() {
  const { hero } = site;
  return (
    <section
      id="top"
      aria-label="Introduction"
      className="relative flex min-h-[100svh] flex-col justify-center pt-[calc(var(--nav-h)+24px)] pb-16"
    >
      <div className="container-page">
        <p
          className="rise label inline-flex items-center gap-2 rounded-full border border-line-2 bg-glass-2 px-4 py-2 text-ink"
          style={{ animationDelay: "60ms" }}
        >
          <span aria-hidden="true" className="size-1.5 rounded-full bg-violet-soft" />
          {hero.eyebrow}
        </p>

        <h1
          className="rise mt-7 text-[clamp(3rem,13vw,9.25rem)] leading-[0.88] font-black tracking-[-0.045em] uppercase"
          style={{ animationDelay: "140ms" }}
        >
          <span className="block">Harshit</span>{" "}
          <span className="block">Vautre</span>
        </h1>

        <p
          className="rise mt-6 text-[clamp(1.75rem,5vw,3.25rem)] leading-[1.05] font-extrabold tracking-[-0.035em]"
          style={{ animationDelay: "220ms" }}
        >
          GTM <span className="font-mono text-[0.7em] font-normal text-ink-3">×</span>{" "}
          <span className="serif-accent">AI Engineer</span>
          <span aria-hidden="true" className="caret ml-1 inline-block font-light text-violet-soft">
            /
          </span>
        </p>

        <div className="rise mt-8 max-w-xl space-y-4" style={{ animationDelay: "300ms" }}>
          <p className="text-lg leading-relaxed text-ink md:text-xl">{hero.supporting}</p>
          <p className="text-base leading-relaxed text-ink-2">{hero.intro}</p>
        </div>

        <div className="rise mt-10 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: "380ms" }}>
          <a href="#work" className="btn btn-primary">
            Explore my work <ArrowDown className="size-4" aria-hidden="true" />
          </a>
          <a href={`mailto:${site.contact.email}`} className="btn btn-ghost">
            Get in touch <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </div>

        <p
          className="rise mt-6 font-mono text-xs tracking-wider text-ink-3"
          style={{ animationDelay: "440ms" }}
          aria-hidden="true"
        >
          {hero.commands.join("  ·  ")}
        </p>

        <dl
          className="rise mt-14 grid max-w-3xl grid-cols-2 gap-x-4 gap-y-6 border-t border-line pt-8 sm:grid-cols-3 sm:gap-0"
          style={{ animationDelay: "520ms" }}
        >
          {hero.facts.map((f, i) => (
            <div
              key={f.label}
              className={`flex flex-col-reverse gap-1 ${i === 2 ? "col-span-2 sm:col-span-1" : ""} ${i > 0 ? "sm:border-l sm:border-line sm:pl-8" : ""}`}
            >
              <dt className="label text-ink-3">{f.label}</dt>
              <dd className="text-2xl font-extrabold tracking-[-0.03em] md:text-[1.75rem]">{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
