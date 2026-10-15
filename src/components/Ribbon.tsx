"use client";

import { useEffect, useRef } from "react";

/**
 * The flowing iridescent band from the mood board, drawn on a small,
 * low-resolution 2D canvas and softened with a CSS blur. Cheap to run:
 * ~30fps, pauses when the tab is hidden, and renders a single still
 * frame for visitors who prefer reduced motion.
 */

const LAYERS = [
  { stops: ["139,92,246", "59,130,246", "45,212,191", "196,181,253"], alpha: 0.55, amp: 1, speed: 1, offset: 0, thick: 1 },
  { stops: ["6,182,212", "148,163,184", "139,92,246", "59,130,246"], alpha: 0.35, amp: 0.8, speed: -0.7, offset: 2.1, thick: 0.7 },
  { stops: ["255,255,255", "203,213,225", "255,255,255", "167,139,250"], alpha: 0.18, amp: 0.9, speed: 0.6, offset: 4.2, thick: 0.28 },
];

const SCALE = 0.35;

export function Ribbon() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !wrap || !ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0;
    let h = 0;
    let raf = 0;
    let last = 0;
    let t = 0;

    const resize = () => {
      w = Math.max(1, Math.round(window.innerWidth * SCALE));
      h = Math.max(1, Math.round(window.innerHeight * SCALE));
      canvas.width = w;
      canvas.height = h;
      draw();
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      ctx.globalCompositeOperation = "lighter";
      const mobile = window.innerWidth < 768;
      const baseY = h * (mobile ? 0.6 : 0.56);
      const steps = 48;

      for (const layer of LAYERS) {
        const grad = ctx.createLinearGradient(0, 0, w, 0);
        layer.stops.forEach((c, i) => {
          grad.addColorStop(i / (layer.stops.length - 1), `rgba(${c},${layer.alpha})`);
        });

        const top: [number, number][] = [];
        const bottom: [number, number][] = [];
        for (let i = 0; i <= steps; i++) {
          const x = (i / steps) * w;
          const u = (i / steps) * Math.PI * 2;
          const tt = t * layer.speed + layer.offset;
          const center =
            baseY +
            h * 0.06 * layer.amp * Math.sin(u * 0.55 + tt * 0.35) +
            h * 0.035 * layer.amp * Math.sin(u * 1.3 - tt * 0.22);
          const thickness =
            h * layer.thick * (0.075 + 0.035 * Math.sin(u * 0.8 + tt * 0.4));
          top.push([x, center - thickness]);
          bottom.push([x, center + thickness * 0.8]);
        }

        ctx.beginPath();
        ctx.moveTo(top[0][0], top[0][1]);
        for (const [x, y] of top) ctx.lineTo(x, y);
        for (let i = bottom.length - 1; i >= 0; i--) ctx.lineTo(bottom[i][0], bottom[i][1]);
        ctx.closePath();
        ctx.fillStyle = grad;
        ctx.fill();
      }
    };

    const loop = (now: number) => {
      raf = requestAnimationFrame(loop);
      if (now - last < 33) return;
      t += (now - last) / 1000 || 0;
      last = now;
      draw();
    };

    // Fade the band back once the visitor scrolls past the hero.
    const onScroll = () => {
      const p = Math.min(1, window.scrollY / (window.innerHeight * 0.9));
      wrap.style.opacity = String(0.9 - p * 0.5);
    };

    const onVisibility = () => {
      cancelAnimationFrame(raf);
      if (!document.hidden && !reduced) {
        last = performance.now();
        raf = requestAnimationFrame(loop);
      }
    };

    resize();
    onScroll();
    window.addEventListener("resize", resize);
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);
    if (!reduced) {
      last = performance.now();
      raf = requestAnimationFrame(loop);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300"
      style={{ opacity: 0.9 }}
    >
      <canvas
        ref={canvasRef}
        className="h-full w-full"
        style={{ filter: "blur(22px) saturate(120%)" }}
      />
    </div>
  );
}
