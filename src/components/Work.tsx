import { ArrowUpRight, FileText } from "lucide-react";
import { site, type Project } from "@/config/site";
import { GithubIcon } from "./BrandIcons";
import { MaiDiagram, RecomiqJourney } from "./ProjectVisuals";
import { SectionHeader } from "./SectionHeader";

const visuals: Record<string, () => React.JSX.Element> = {
  mai: MaiDiagram,
  recomiq: RecomiqJourney,
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const Visual = visuals[project.id];
  const flipped = index % 2 === 1;
  return (
    <article
      aria-labelledby={`${project.id}-title`}
      className="glass relative overflow-hidden rounded-[var(--radius-xl)] p-6 sm:p-10 lg:p-12"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-6 right-4 font-black text-[9rem] leading-none tracking-[-0.06em] text-transparent select-none sm:text-[12rem]"
        style={{ WebkitTextStroke: "1px rgba(255,255,255,0.08)" }}
      >
        0{index + 1}
      </span>

      <div className={`relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 ${flipped ? "lg:[&>*:first-child]:order-2" : ""}`}>
        <div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <p className="label text-violet-soft">{project.category}</p>
            <p className="label text-ink-3">{project.status}</p>
          </div>

          <h3 id={`${project.id}-title`} className="mt-5 text-5xl font-black tracking-[-0.045em] sm:text-6xl">
            {project.name}
          </h3>
          <p className="serif-accent mt-3 text-xl leading-snug sm:text-2xl">{project.tagline}</p>

          <p className="mt-6 leading-relaxed text-ink">{project.description}</p>
          <p className="mt-4 leading-relaxed text-ink-2">{project.detail}</p>

          <h4 className="label mt-8 text-ink-3">Key areas of focus</h4>
          <ul className="mt-4 grid gap-x-6 gap-y-3 sm:grid-cols-2">
            {project.focus.map((f) => (
              <li key={f} className="flex gap-3 text-[0.9rem] leading-snug text-ink-2">
                <span aria-hidden="true" className="mt-[7px] h-px w-3 shrink-0 bg-violet-soft" />
                {f}
              </li>
            ))}
          </ul>

          <h4 className="label mt-8 text-ink-3">Stack</h4>
          <ul className="mt-3 flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <li key={s} className="chip">
                {s}
              </li>
            ))}
          </ul>

          {project.note && (
            <p className="mt-8 border-l border-violet-soft/50 pl-4 text-sm leading-relaxed text-ink-3">
              {project.note}
            </p>
          )}

          <div className="mt-8 flex flex-wrap items-center gap-3">
            {project.links.length > 0 ? (
              project.links.map((l) => {
                const isGithub = l.href.includes("github.com");
                return (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost min-h-11 px-5 text-xs"
                  >
                    {isGithub && <GithubIcon className="size-4" />}
                    {l.label}
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                );
              })
            ) : (
              <span className="chip">
                <FileText className="size-3.5" aria-hidden="true" /> Case study · not publicly hosted
              </span>
            )}
          </div>
        </div>

        {Visual && (
          <div className="flex flex-col justify-center">
            <Visual />
          </div>
        )}
      </div>
    </article>
  );
}

export function Work() {
  return (
    <section id="work" aria-labelledby="work-title" className="relative py-20 md:py-28">
      <div className="container-page">
        <SectionHeader index="02" label="Selected work" meta="./mai  ·  ./recomiq" id="work-title">
          Things I&apos;ve Been <span className="text-gradient">Building</span>
        </SectionHeader>
        <div className="grid gap-6 md:gap-8">
          {site.projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
