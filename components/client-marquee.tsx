"use client";

import type { CSSProperties } from "react";
import { CompanyLogoChip, type CompanyLogoName } from "@/components/company-logo-chip";

interface ClientMarqueeProps {
  title?: string | null;
  logos: CompanyLogoName[];
  speedSeconds?: number;
  logoColorHex?: string;
}

export function ClientMarquee({
  title = null,
  logos,
  speedSeconds = 28,
  logoColorHex = "ffffff",
}: ClientMarqueeProps) {
  const row = [...logos, ...logos];

  return (
    <section className="py-14">
      {title ? (
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <p className="text-sm font-semibold text-muted-foreground">{title}</p>
          </div>
        </div>
      ) : null}

      <div className="relative w-full overflow-hidden">
        <div
          className="flex w-max items-center gap-3 px-6 py-2 animate-marquee"
          style={
            {
              ["--marquee-duration" as any]: `${speedSeconds}s`,
            } as CSSProperties
          }
          aria-label="Client marquee"
        >
          {row.map((name, idx) => (
            <CompanyLogoChip
              key={`${name}-${idx}`}
              name={name}
              color={logoColorHex}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

