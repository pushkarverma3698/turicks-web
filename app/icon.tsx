import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default function Icon() {
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
      }}
    >
      <div
        style={{
          position: "relative",
          width: 24,
          height: 24,
          display: "flex",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 2,
            left: 1,
            display: "flex",
            gap: 2,
          }}
        >
          <div
            style={{ width: 6, height: 3, background: brand, opacity: 0.9 }}
          />
          <div
            style={{ width: 6, height: 3, background: brand, opacity: 0.8 }}
          />
          <div
            style={{ width: 6, height: 3, background: brand, opacity: 0.7 }}
          />
        </div>
        <div
          style={{
            position: "absolute",
            top: 8,
            left: 8,
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <div
            style={{ width: 6, height: 3, background: brand, opacity: 0.9 }}
          />
          <div
            style={{ width: 6, height: 3, background: brand, opacity: 0.8 }}
          />
          <div
            style={{ width: 6, height: 3, background: brand, opacity: 0.7 }}
          />
        </div>
      </div>
    </div>,
    size,
  );
}
