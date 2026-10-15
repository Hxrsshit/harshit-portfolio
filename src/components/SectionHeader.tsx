import type { ReactNode } from "react";

type Props = {
  index: string;
  label: string;
  meta?: ReactNode;
  id: string;
  children: ReactNode;
};

/** "01 / LABEL" header row + headline, the mood board's section rhythm. */
export function SectionHeader({ index, label, meta, id, children }: Props) {
  return (
    <header className="mb-12 md:mb-16">
      <div className="flex items-center justify-between gap-4 border-b border-line pb-4">
        <p className="label flex items-center gap-3">
          <span className="text-violet-soft">{index} /</span>
          <span className="text-ink-3">{label}</span>
        </p>
        {meta ? <div className="label hidden text-ink-3 sm:block">{meta}</div> : null}
      </div>
      <h2
        id={id}
        className="mt-8 max-w-3xl text-[2.25rem] leading-[1.05] font-extrabold tracking-[-0.035em] text-balance sm:text-5xl md:text-[3.5rem]"
      >
        {children}
      </h2>
    </header>
  );
}
