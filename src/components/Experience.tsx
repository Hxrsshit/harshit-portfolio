import { ArrowRight } from "lucide-react";
import { site } from "@/config/site";
import { SectionHeader } from "./SectionHeader";

export function Experience() {
  const { experience, education, progression } = site;
  return (
    <section id="experience" aria-labelledby="experience-title" className="relative py-20 md:py-28">
      <div className="container-page">
        <SectionHeader index="03" label="Experience" meta="Sales · GTM · Startups" id="experience-title">
          Where Business Meets <span className="text-gradient">Technology</span>
        </SectionHeader>

        <div className="mb-12 flex flex-col gap-8">
          <p className="max-w-xl text-lg leading-relaxed text-ink-2">{site.experienceIntro}</p>
          <ol aria-label="Progression" className="flex flex-wrap items-center gap-2">
            {progression.map((step, i) => (
              <li key={step} className="flex items-center gap-2">
                {i > 0 && <ArrowRight aria-hidden="true" className="size-3.5 text-ink-4" />}
                <span
                  className={`label rounded-full border px-3 py-1.5 ${
                    i === progression.length - 1
                      ? "border-violet-soft/50 bg-violet/10 text-violet-soft"
                      : "border-line-2 text-ink-2"
                  }`}
                >
                  {step}
                </span>
              </li>
            ))}
          </ol>
        </div>

        <ol className="relative">
          {experience.map((job) => (
            <li
              key={job.company}
              className="grid gap-6 border-t border-line py-10 md:grid-cols-[240px_1fr] md:gap-10 lg:grid-cols-[280px_1fr]"
            >
              <div>
                <h3 className="text-2xl font-extrabold tracking-[-0.03em]">{job.company}</h3>
                <p className="mt-1 text-sm text-ink-2">{job.context}</p>
                <div className="mt-4 flex flex-col gap-1.5">
                  {job.period && <p className="label text-ink-3">{job.period}</p>}
                  {job.markets && <p className="label text-ink-3">Markets · {job.markets}</p>}
                </div>
              </div>

              <div>
                <p className="serif-accent text-2xl">{job.role}</p>
                <ul className="mt-5 grid gap-3">
                  {job.points.map((pt) => (
                    <li key={pt} className="flex gap-3 leading-relaxed text-ink-2">
                      <span aria-hidden="true" className="mt-[11px] h-px w-3 shrink-0 bg-violet-soft" />
                      {pt}
                    </li>
                  ))}
                </ul>

                {job.aside && (
                  <div className="mt-6 rounded-[var(--radius-md)] border border-dashed border-line-2 p-4">
                    <p className="label text-ink-3">{job.aside.label}</p>
                    <p className="mt-2 text-sm leading-relaxed text-ink-2">{job.aside.text}</p>
                  </div>
                )}

                <ul className="mt-6 flex flex-wrap gap-2" aria-label="Focus">
                  {job.tags.map((t) => (
                    <li key={t} className="chip">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}

          <li className="grid gap-2 border-y border-line py-8 md:grid-cols-[240px_1fr] md:items-baseline md:gap-10 lg:grid-cols-[280px_1fr]">
            <p className="label text-ink-3">Education</p>
            <p className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="font-bold tracking-[-0.01em]">{education.degree}</span>
              <span className="text-ink-2">{education.school}</span>
              <span className="label text-ink-3">{education.period}</span>
            </p>
          </li>
        </ol>
      </div>
    </section>
  );
}
