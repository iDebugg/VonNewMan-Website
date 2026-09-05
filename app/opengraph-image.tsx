import { ImageResponse } from "next/og";
import { site } from "@/lib/content";

export const alt = site.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Colours mirror the @theme tokens in globals.css (ImageResponse cannot read CSS variables).
const ink = "#141414";
const paper = "#ffffff";
const brand = "#1e763a";
const slate = "#5b605e";

async function loadSourceSerif(): Promise<ArrayBuffer | undefined> {
  try {
    const css = await fetch(
      "https://fonts.googleapis.com/css2?family=Source+Serif+4:wght@500&display=swap",
      { headers: { "User-Agent": "Mozilla/5.0" } },
    ).then((res) => res.text());
    const url = css.match(/src: url\((.+?)\) format\('(?:truetype|opentype|woff)'\)/)?.[1];
    if (!url) return undefined;
    return await fetch(url).then((res) => res.arrayBuffer());
  } catch {
    return undefined;
  }
}

export default async function OpenGraphImage() {
  const serif = await loadSourceSerif();
  const [first, second] = ["Technology adapted to you.", "Never off the shelf."];
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "64px 72px",
        background: paper,
        color: ink,
        fontFamily: serif ? "Source Serif 4" : "Georgia, serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <div
          style={{
            width: 56,
            height: 56,
            borderRadius: 12,
            background: brand,
            color: paper,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 26,
            fontWeight: 700,
            fontFamily: "Helvetica, Arial, sans-serif",
          }}
        >
          VN
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{ fontSize: 28, fontFamily: "Helvetica, Arial, sans-serif", fontWeight: 600 }}
          >
            {site.brand.name}
          </div>
          <div style={{ fontSize: 20, color: slate, fontFamily: "Helvetica, Arial, sans-serif" }}>
            {site.brand.descriptor}
          </div>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", fontSize: 74, lineHeight: 1.05 }}>
        <div>{first}</div>
        <div>{second}</div>
      </div>
      <div
        style={{
          display: "flex",
          gap: 40,
          fontSize: 22,
          color: slate,
          borderTop: `2px solid ${ink}`,
          paddingTop: 24,
          fontFamily: "Helvetica, Arial, sans-serif",
        }}
      >
        <span>Lagos and London</span>
        <span>Public and private sector</span>
      </div>
    </div>,
    {
      ...size,
      fonts: serif ? [{ name: "Source Serif 4", data: serif, weight: 500, style: "normal" }] : [],
    },
  );
}
