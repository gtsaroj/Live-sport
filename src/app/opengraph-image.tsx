import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt =
  "Live Sports - Watch Football, Cricket, Basketball & Hockey Matches";
export const size = {
  width: 1200,
  height: 630,
};

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: "linear-gradient(to bottom, #1e40af, #3b82f6)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          padding: "40px",
        }}
      >
        <div
          style={{ fontSize: "64px", fontWeight: "bold", marginBottom: "20px" }}
        >
          LIVE SPORTS
        </div>
        <div style={{ fontSize: "32px", textAlign: "center" }}>
          Football • Cricket • Basketball • Hockey
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
