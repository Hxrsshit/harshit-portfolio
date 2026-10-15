import { site } from "@/config/site";

/** Text-free monogram matching the favicon (app/icon.svg). */
export function Monogram({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="mono-g" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#8b5cf6" />
          <stop offset=".5" stopColor="#3b82f6" />
          <stop offset="1" stopColor="#06b6d4" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="62" height="62" rx="13" fill="#050307" stroke="rgba(255,255,255,.22)" strokeWidth="2" />
      <path d="M17 18v28M17 32h13M30 18v28" stroke="#fff" strokeWidth="5.5" strokeLinecap="square" fill="none" />
      <path d="M35 18l7.5 28L50 18" stroke="url(#mono-g)" strokeWidth="5.5" fill="none" />
      <title>{site.initials}</title>
    </svg>
  );
}
