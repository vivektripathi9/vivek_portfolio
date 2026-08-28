import { ImageResponse } from "next/og";

export const alt = "Vivek Tripathi — Web Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a0a0a",
          color: "#ffffff",
          padding: "72px 80px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            fontSize: 28,
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            color: "#9e8857",
          }}
        >
          Web Developer
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 88, lineHeight: 1, letterSpacing: "-0.03em" }}>
            Vivek Tripathi
          </div>
          <div style={{ fontSize: 32, color: "rgba(255,255,255,0.7)" }}>
            Shopify storefronts and brand websites.
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
