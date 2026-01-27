"use client";

import { cn } from "@/lib/utils";

type DecorativeVectorsProps = {
  className?: string;
  variant?: "hero" | "section";
};

export function DecorativeVectors({ className, variant = "section" }: DecorativeVectorsProps) {
  const isHero = variant === "hero";

  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        isHero ? "opacity-90" : "opacity-60",
        className
      )}
    >
      {/* top-right wavy stroke */}
      <svg
        className={cn(
          "absolute -top-24 -right-24 h-[380px] w-[380px]",
          isHero ? "md:-top-28 md:-right-28 md:h-[460px] md:w-[460px]" : ""
        )}
        viewBox="0 0 400 400"
        fill="none"
      >
        <path
          d="M40 140C110 90 140 190 210 140C280 90 310 190 380 140"
          className="stroke-primary/35"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M30 210C105 160 135 260 210 210C285 160 315 260 390 210"
          className="stroke-accent/40"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <circle cx="310" cy="92" r="10" className="fill-primary/25" />
        <circle cx="350" cy="245" r="7" className="fill-accent/35" />
        <circle cx="270" cy="290" r="5" className="fill-primary/20" />
      </svg>

      {/* bottom-left soft blob */}
      <svg
        className={cn(
          "absolute -bottom-36 -left-36 h-[520px] w-[520px] blur-[0.5px]",
          isHero ? "md:-bottom-44 md:-left-44 md:h-[620px] md:w-[620px]" : ""
        )}
        viewBox="0 0 600 600"
        fill="none"
      >
        <path
          d="M170 105C230 55 330 70 410 130C490 190 535 290 500 385C465 480 350 520 255 485C160 450 85 350 95 255C105 160 110 155 170 105Z"
          className="fill-primary/12"
        />
        <path
          d="M210 140C260 95 335 105 395 150C455 195 495 275 470 350C445 425 360 455 285 430C210 405 150 330 155 255C160 180 160 185 210 140Z"
          className="fill-accent/10"
        />
      </svg>

      {/* dot grid */}
      <svg
        className={cn(
          "absolute left-8 top-24 h-[220px] w-[220px]",
          isHero ? "md:left-10 md:top-28" : ""
        )}
        viewBox="0 0 220 220"
        fill="none"
      >
        {Array.from({ length: 8 }).map((_, row) =>
          Array.from({ length: 8 }).map((__, col) => (
            <circle
              key={`${row}-${col}`}
              cx={20 + col * 24}
              cy={20 + row * 24}
              r={2.4}
              className={row % 2 === 0 ? "fill-primary/25" : "fill-accent/25"}
            />
          ))
        )}
      </svg>

      {/* ring */}
      <svg
        className={cn(
          "absolute right-10 bottom-16 h-[220px] w-[220px]",
          isHero ? "md:right-16 md:bottom-20" : ""
        )}
        viewBox="0 0 220 220"
        fill="none"
      >
        <circle cx="110" cy="110" r="78" className="stroke-primary/20" strokeWidth="3" />
        <circle cx="110" cy="110" r="52" className="stroke-accent/25" strokeWidth="3" />
      </svg>
    </div>
  );
}

