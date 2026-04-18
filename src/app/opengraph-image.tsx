import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt =
  "Next Command AI Consulting - Secure AI, Cybersecurity & Technology Modernization";

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
          padding: "72px 88px",
          background:
            "radial-gradient(ellipse at 20% 10%, rgba(200,169,106,0.12) 0%, rgba(10,9,7,1) 55%), #0a0907",
          color: "#efe8d4",
          fontFamily: "serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <svg width="44" height="44" viewBox="0 0 40 40">
            <circle
              cx="20"
              cy="20"
              r="19"
              stroke="#c8a96a"
              strokeWidth="0.8"
              opacity="0.45"
              fill="none"
            />
            <path
              d="M12 27V13L28 27V13"
              stroke="#c8a96a"
              strokeWidth="1.5"
              strokeLinecap="square"
              fill="none"
            />
          </svg>
          <span
            style={{
              fontSize: 18,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "#c9c1ad",
              fontFamily: "sans-serif",
            }}
          >
            Next Command AI Consulting
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              width: 96,
              height: 1,
              background:
                "linear-gradient(to right, rgba(200,169,106,0.7), rgba(200,169,106,0))",
            }}
          />
          <div
            style={{
              fontSize: 88,
              fontWeight: 300,
              lineHeight: 1.02,
              letterSpacing: -1.2,
              color: "#efe8d4",
              maxWidth: 1000,
              display: "flex",
              flexWrap: "wrap",
              gap: "0 18px",
            }}
          >
            <span>Secure</span>
            <span style={{ color: "#c8a96a", fontStyle: "italic" }}>AI</span>
            <span>,</span>
            <span>Cybersecurity</span>
            <span>&amp;</span>
            <span>Technology</span>
            <span>Modernization.</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#8d866f",
            fontSize: 16,
            letterSpacing: 4,
            textTransform: "uppercase",
            fontFamily: "sans-serif",
          }}
        >
          <span>Veteran-Owned &middot; United States</span>
          <span>nextcommandai.com</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
