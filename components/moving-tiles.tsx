"use client";

import type { CSSProperties } from "react";
import { DecorativeVectors } from "@/components/decorative-vectors";

type Tile = {
  label: string;
  path: string;
  caption?: string;
  media?: {
    type: "image" | "video" | "gif";
    src: string;
    poster?: string;
  };
};

interface MovingTilesProps {
  title: string;
  subtitle?: string;
  topRow: Tile[];
  bottomRow: Tile[];
  speedSeconds?: number;
}

function TilePill({ tile }: { tile: Tile }) {
  return (
    <div className="w-[240px] sm:w-[280px] lg:w-[320px] rounded-3xl border bg-background/30 backdrop-blur transition-colors hover:bg-background/45">
      <div className="p-3 sm:p-4">
        <div className="rounded-2xl border bg-background/40 overflow-hidden">
          {/* browser chrome */}
          <div className="flex items-center gap-2 border-b bg-muted/30 px-3 py-2">
            <div className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-red-500/60" />
            <div className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-yellow-500/60" />
            <div className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-green-500/60" />
            <div
              className="ml-3 h-2.5 w-28 sm:h-3 sm:w-36 rounded-full bg-white/85"
              aria-hidden="true"
            />
          </div>

          {/* real design preview */}
          <div className="relative h-40 sm:h-48 lg:h-56 overflow-hidden bg-black">
            {tile.media?.type === "video" ? (
              <video
                src={tile.media.src}
                poster={tile.media.poster}
                className="h-full w-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
              />
            ) : tile.media?.src ? (
              <img
                src={tile.media.src}
                alt={`${tile.label} design preview`}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export function MovingTiles({
  title,
  subtitle,
  topRow,
  bottomRow,
  speedSeconds = 26,
}: MovingTilesProps) {
  const rowA = [...topRow, ...topRow];
  const rowB = [...bottomRow, ...bottomRow];

  const style = {
    ["--marquee-duration" as any]: `${speedSeconds}s`,
  } as CSSProperties;

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="mb-3 text-3xl font-bold md:text-4xl">{title}</h2>
          {subtitle ? (
            <p className="mx-auto max-w-2xl text-muted-foreground">
              {subtitle}
            </p>
          ) : null}
        </div>

        <div className="relative overflow-hidden rounded-3xl border bg-muted/20">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/20" />
          <DecorativeVectors className="opacity-35" />

          {/* edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent" />

          <div className="relative space-y-5 p-6 md:p-8">
            <div
              className="flex w-max items-stretch gap-4 animate-marquee"
              style={style}
            >
              {rowA.map((tile, idx) => (
                <TilePill key={`${tile.label}-${idx}`} tile={tile} />
              ))}
            </div>

            <div
              className="flex w-max items-stretch gap-4 animate-marquee-reverse"
              style={style}
            >
              {rowB.map((tile, idx) => (
                <TilePill key={`${tile.label}-${idx}`} tile={tile} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
