import { site } from "@/config/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-line">
      <div className="container-page flex flex-col gap-3 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="label text-ink-3">
          © {year} {site.name}
        </p>
        <a href="#top" className="label text-ink-3 transition-colors hover:text-ink">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
