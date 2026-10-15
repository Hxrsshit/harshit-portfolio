import { ImageResponse } from "next/og";
import { site } from "@/config/site";

export const alt = `${site.name} — ${site.headline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#050307",
          color: "#fff",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: -100,
            right: -100,
            top: 330,
            height: 130,
            transform: "rotate(-4deg)",
            background:
              "linear-gradient(90deg, rgba(139,92,246,0.55), rgba(59,130,246,0.45), rgba(6,182,212,0.45), rgba(139,92,246,0.4))",
            filter: "blur(48px)",
            borderRadius: 999,
          }}
        />
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.6)",
          }}
        >
          AI engineering × go-to-market
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 128,
              fontWeight: 900,
              letterSpacing: -6,
              lineHeight: 0.95,
              textTransform: "uppercase",
            }}
          >
            {site.name}
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 44,
              fontWeight: 700,
              color: "#a78bfa",
            }}
          >
            {site.headline}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 26,
            color: "rgba(255,255,255,0.6)",
            maxWidth: 900,
          }}
        >
          {site.hero.supporting}
        </div>
      </div>
    ),
    { ...size },
  );
}
