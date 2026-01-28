import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default function Icon() {
  // Brand color used in navbar gradient (approx).
  const brand = "#7C3AED";

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "transparent",
        color: brand,
        fontSize: 22,
        fontWeight: 900,
        fontFamily:
          "system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
        lineHeight: 1,
      }}
    >
      T
    </div>,
    size,
  );
}
