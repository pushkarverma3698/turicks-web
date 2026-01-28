"use client";

import type { CSSProperties } from "react";
import { DecorativeVectors } from "@/components/decorative-vectors";

type Tile = {
  label: string;
  path: string;
  caption?: string;
};

interface MovingTilesProps {
  title: string;
  subtitle?: string;
  topRow: Tile[];
  bottomRow: Tile[];
  speedSeconds?: number;
}

const tileThemes = [
  {
    surface:
      "bg-gradient-to-br from-pink-500/30 via-fuchsia-500/20 to-indigo-500/30",
    glow: "bg-fuchsia-400/30",
    chip: "bg-white/75",
    title: "bg-white/85",
    line: "bg-white/50",
    card: "bg-white/20",
    accent: "bg-white/30",
  },
  {
    surface:
      "bg-gradient-to-br from-emerald-500/30 via-cyan-500/20 to-blue-500/30",
    glow: "bg-cyan-400/30",
    chip: "bg-white/80",
    title: "bg-white/85",
    line: "bg-white/50",
    card: "bg-white/20",
    accent: "bg-white/30",
  },
  {
    surface:
      "bg-gradient-to-br from-amber-500/30 via-orange-500/20 to-rose-500/30",
    glow: "bg-orange-400/30",
    chip: "bg-white/75",
    title: "bg-white/85",
    line: "bg-white/50",
    card: "bg-white/20",
    accent: "bg-white/30",
  },
  {
    surface:
      "bg-gradient-to-br from-violet-500/30 via-sky-500/20 to-teal-500/30",
    glow: "bg-sky-400/30",
    chip: "bg-white/80",
    title: "bg-white/85",
    line: "bg-white/50",
    card: "bg-white/20",
    accent: "bg-white/30",
  },
];

function TilePill({ tile, index }: { tile: Tile; index: number }) {
  const theme = tileThemes[index % tileThemes.length];

  return (
    <div className="w-[320px] rounded-3xl border bg-background/30 backdrop-blur transition-colors hover:bg-background/45">
      <div className="p-4">
        <div className="rounded-2xl border bg-background/40 overflow-hidden">
          {/* browser chrome */}
          <div className="flex items-center gap-2 border-b bg-muted/30 px-3 py-2">
            <div className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
            <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
            <div className="h-2.5 w-2.5 rounded-full bg-green-500/60" />
            <div
              className="ml-3 h-3 w-36 rounded-full bg-white/85"
              aria-hidden="true"
            />
          </div>

          {/* scaled preview */}
          <div className={`relative h-56 overflow-hidden ${theme.surface}`}>
            <div className="absolute inset-0">
              <div className="absolute left-4 top-4 flex items-center gap-2">
                <div className={`h-3 w-20 rounded-full ${theme.chip}`} />
                <div className={`h-3 w-10 rounded-full ${theme.accent}`} />
              </div>
              <div
                className={`absolute left-4 top-12 h-5 w-40 rounded-full ${theme.title}`}
              />
              <div
                className={`absolute left-4 top-20 h-3 w-56 rounded ${theme.line}`}
              />
              <div
                className={`absolute left-4 top-[104px] h-3 w-44 rounded ${theme.line}`}
              />

              <div className="absolute right-4 top-10 grid gap-2">
                <div className={`h-8 w-20 rounded-2xl ${theme.card}`} />
                <div className={`h-8 w-24 rounded-2xl ${theme.card}`} />
              </div>

              <div className="absolute left-4 bottom-6 grid w-[78%] grid-cols-3 gap-2">
                <div className={`h-10 rounded-2xl ${theme.card}`} />
                <div className={`h-10 rounded-2xl ${theme.card}`} />
                <div className={`h-10 rounded-2xl ${theme.card}`} />
              </div>

              <div
                className={`absolute -bottom-16 -right-10 h-44 w-44 rounded-full ${theme.glow} blur-2xl`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
            </div>
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
                <TilePill
                  key={`${tile.label}-${idx}`}
                  tile={tile}
                  index={idx}
                />
              ))}
            </div>

            <div
              className="flex w-max items-stretch gap-4 animate-marquee-reverse"
              style={style}
            >
              {rowB.map((tile, idx) => (
                <TilePill
                  key={`${tile.label}-${idx}`}
                  tile={tile}
                  index={idx + rowA.length}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
