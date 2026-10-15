/**
 * Lightweight, honest illustrations of each project:
 * Mai shows its actual system shape; RecomIQ shows the shopper journey it targets.
 */

const box = "fill-white/[0.03] stroke-white/20";

function Node({
  x,
  y,
  w,
  title,
  sub,
  accent = false,
}: {
  x: number;
  y: number;
  w: number;
  title: string;
  sub: string;
  accent?: boolean;
}) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={48}
        rx={9}
        className={accent ? "fill-violet/10 stroke-violet-soft/70" : box}
        strokeWidth={1}
      />
      <text x={x + 12} y={y + 21} className="fill-white font-mono text-[12px] font-semibold">
        {title}
      </text>
      <text x={x + 12} y={y + 37} className="fill-white/50 font-mono text-[10px]">
        {sub}
      </text>
    </g>
  );
}

export function MaiDiagram() {
  return (
    <figure className="glass rounded-[var(--radius-lg)] p-2 sm:p-6">
      <svg
        viewBox="0 0 360 330"
        className="h-auto w-full"
        role="img"
        aria-labelledby="mai-diagram-title"
      >
        <title id="mai-diagram-title">
          Mai system shape: requests go through an API to an orchestrator, which uses memory,
          retrieval, permissioned tools and the language model, with actions recorded in an audit log.
        </title>
        {/* connectors */}
        <g className="stroke-white/25" strokeWidth={1} fill="none">
          <path d="M180 58v28" />
          <path d="M180 134v18M54 152h252M54 152v22M138 152v22M222 152v22M306 152v22" />
          <path d="M180 222v28" />
        </g>
        <g className="stroke-violet-soft" strokeWidth={1.5} fill="none">
          <path className="flow-line" d="M180 58v28" />
          <path className="flow-line" d="M180 134v18M180 152h126v22" />
          <path className="flow-line" d="M180 152H54v22" />
          <path className="flow-line" d="M180 222v28" />
        </g>

        <Node x={110} y={10} w={140} title="you" sub="chat · requests" />
        <Node x={80} y={86} w={200} title="API · orchestrator" sub="FastAPI · task runtime" accent />
        <Node x={8} y={174} w={80} title="memory" sub="postgres" />
        <Node x={95} y={174} w={80} title="retrieval" sub="context" />
        <Node x={182} y={174} w={80} title="tools" sub="approvals" />
        <Node x={269} y={174} w={83} title="LLM" sub="groq" />
        <Node x={80} y={250} w={200} title="audit log · tests" sub="what ran, and was it true" />
        <text x={180} y={322} textAnchor="middle" className="fill-white/35 font-mono text-[9px] tracking-[0.14em]">
          LOCAL-FIRST · DOCKER COMPOSE
        </text>
      </svg>
    </figure>
  );
}

const journey = [
  { step: "Visitor lands", sub: "browsing, no clear intent" },
  { step: "Relevant picks surface", sub: "personalised recommendations", product: "RecomIQ" },
  { step: "Adds to cart", sub: "cross-sell · upsell moments", product: "RecomIQ" },
  { step: "Leaves without buying", sub: "the expensive moment" },
  { step: "Thoughtful follow-up", sub: "cart-abandonment recovery", product: "Recover" },
];

export function RecomiqJourney() {
  return (
    <figure className="glass rounded-[var(--radius-lg)] p-5 sm:p-7">
      <figcaption className="label mb-6 text-ink-3">The shopper journey it targets</figcaption>
      <ol className="relative space-y-5">
        <span aria-hidden="true" className="absolute top-2 bottom-2 left-[7px] w-px bg-gradient-to-b from-violet via-blue to-cyan opacity-60" />
        {journey.map((j) => (
          <li key={j.step} className="relative flex items-start gap-4 pl-0">
            <span
              aria-hidden="true"
              className={`relative mt-1 size-[15px] shrink-0 rounded-full border ${
                j.product ? "border-violet-soft bg-violet/40" : "border-white/30 bg-bg"
              }`}
            />
            <div className="flex min-w-0 flex-1 flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
              <div className="min-w-0">
                <p className="font-semibold tracking-[-0.01em]">{j.step}</p>
                <p className="font-mono text-[11px] text-ink-3">{j.sub}</p>
              </div>
              {j.product && (
                <span className="rounded-full border border-violet-soft/40 bg-violet/10 px-2.5 py-1 font-mono text-[10px] tracking-wider text-violet-soft uppercase">
                  {j.product}
                </span>
              )}
            </div>
          </li>
        ))}
      </ol>
    </figure>
  );
}
