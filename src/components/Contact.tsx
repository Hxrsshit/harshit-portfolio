import { ArrowUpRight, Mail } from "lucide-react";
import { site } from "@/config/site";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

export function Contact() {
  const { contact, contactCopy } = site;
  const links = [
    { label: "LinkedIn", href: contact.linkedin, icon: LinkedinIcon },
    { label: "GitHub", href: contact.github, icon: GithubIcon },
  ];

  return (
    <section id="contact" aria-labelledby="contact-title" className="relative py-20 md:py-32">
      <div className="container-page">
        <div className="flex items-center justify-between gap-4 border-b border-line pb-4">
          <p className="label flex items-center gap-3">
            <span className="text-violet-soft">05 /</span>
            <span className="text-ink-3">Contact</span>
          </p>
          <p className="label hidden text-ink-3 sm:block">{site.location}</p>
        </div>

        <div className="glass relative mt-12 overflow-hidden rounded-[var(--radius-xl)] px-6 py-14 text-center sm:px-12 md:py-20">
          <h2
            id="contact-title"
            className="mx-auto max-w-3xl text-[2.5rem] leading-[1] font-black tracking-[-0.045em] text-balance sm:text-6xl md:text-7xl"
          >
            {contactCopy.heading} <span className="serif-accent font-light">{contactCopy.emphasis}</span>
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-ink-2">{contactCopy.text}</p>

          <a
            href={`mailto:${contact.email}`}
            className="link-underline mt-10 inline-flex max-w-full items-center gap-3 text-[clamp(1rem,4.2vw,1.75rem)] font-bold tracking-[-0.02em] break-all"
          >
            <Mail className="size-[1em] shrink-0 text-violet-soft" aria-hidden="true" />
            {contact.email}
          </a>

          <ul className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <li>
              <a href={`mailto:${contact.email}`} className="btn btn-primary w-full sm:w-auto">
                Send an email <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
            </li>
            {links.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost w-full sm:w-auto"
                >
                  <Icon className="size-4" /> {label}
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
