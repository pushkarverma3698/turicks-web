"use client";

import { useState } from "react";

export type CompanyLogoName =
  | "HFN"
  | "ContactME"
  | "ArcsInfotech"
  | "HybrowLabs"
  | "WeWork"
  | "MadOverGames"
  | "VitalConnect24"
  | "Jugnoo"
  | "NrichLearning";

const simpleIconsSlug: Record<CompanyLogoName, string | null> = {
  HFN: null,
  ContactME: null,
  ArcsInfotech: null,
  HybrowLabs: null,
  WeWork: "wework",
  MadOverGames: null,
  VitalConnect24: null,
  Jugnoo: null,
  NrichLearning: null,
};

function cdnUrl(slug: string, colorHexNoHash: string) {
  // Simple Icons CDN: `https://cdn.simpleicons.org/{slug}/{hex}`
  return `https://cdn.simpleicons.org/${slug}/${colorHexNoHash}`;
}

export function CompanyLogoChip({
  name,
  color = "ffffff",
}: {
  name: CompanyLogoName;
  color?: string;
}) {
  const [failed, setFailed] = useState(false);
  const slug = simpleIconsSlug[name];
  const src = slug ? cdnUrl(slug, color) : null;
  const fallbackColor = `#${color}`;

  return (
    <div className="flex items-center gap-3 rounded-full border bg-transparent px-4 py-2 backdrop-blur transition-all duration-200 hover:-translate-y-0.5 hover:bg-foreground/5 hover:shadow-md">
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-foreground/10 ring-1 ring-foreground/10">
        {!failed && src ? (
          <img
            src={src}
            alt={`${name} logo`}
            className="h-5 w-5"
            loading="lazy"
            onError={() => setFailed(true)}
          />
        ) : (
          <span
            className="text-[10px] font-semibold"
            style={{ color: fallbackColor }}
          >
            {name
              .split(" ")
              .map((w) => w[0])
              .join("")
              .slice(0, 3)
              .toUpperCase()}
          </span>
        )}
      </div>
      <span className="text-sm font-semibold">{name}</span>
    </div>
  );
}

