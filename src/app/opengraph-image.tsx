import { ImageResponse } from "next/og";
import fs from "node:fs";
import path from "node:path";
export const alt =
  "Wellesley Neoh — Technology entrepreneur based in Singapore";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function OpenGraphImage() {
  const logo = `data:image/png;base64,${fs.readFileSync(path.join(process.cwd(), "public/images/wellesley-neoh-logo.png")).toString("base64")}`;
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "70px",
        width: "100%",
        height: "100%",
        background: "#f7f6f2",
        color: "#232520",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex" }}>
        {/* next/og requires native img for embedded assets. */}
        <img src={logo} alt="" width={96} height={96} />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", fontSize: 94, letterSpacing: -5 }}>
          Wellesley Neoh.
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 28,
            marginTop: 22,
            color: "#686b63",
          }}
        >
          Technology entrepreneur based in Singapore.
        </div>
      </div>
      <div style={{ display: "flex", fontSize: 20, color: "#657252" }}>
        wneoh.com
      </div>
    </div>,
    size,
  );
}
