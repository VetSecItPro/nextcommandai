import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0907",
          borderRadius: 32,
        }}
      >
        <svg
          width="140"
          height="140"
          viewBox="0 0 40 40"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="20"
            cy="20"
            r="15"
            stroke="#c8a96a"
            strokeWidth="0.8"
            strokeOpacity="0.45"
            fill="none"
          />
          <path
            d="M12 27V13L28 27V13"
            stroke="#c8a96a"
            strokeWidth="1.4"
            strokeLinecap="square"
            fill="none"
          />
        </svg>
      </div>
    ),
    { ...size },
  );
}
