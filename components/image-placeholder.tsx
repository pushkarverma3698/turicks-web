import { useId } from "react";

interface ImagePlaceholderProps {
  label: string;
  aspectRatio?: "square" | "wide" | "tall" | "video";
  className?: string;
}

export function ImagePlaceholder({
  label,
  aspectRatio = "wide",
  className = "",
}: ImagePlaceholderProps) {
  const uid = useId();
  const dotGridId = `${uid}-img-dot-grid`;
  const dotFadeId = `${uid}-img-dot-fade`;
  const dotMaskId = `${uid}-img-dot-mask`;

  const aspectClasses = {
    square: "aspect-square",
    wide: "aspect-video",
    tall: "aspect-[3/4]",
    video: "aspect-video",
  };

  return (
    <div
      role="img"
      aria-label={label}
      className={[
        aspectClasses[aspectRatio],
        "group relative overflow-hidden rounded-2xl border bg-background/40",
        "flex items-center justify-center p-8 backdrop-blur",
        "transition-all duration-300 hover:shadow-lg hover:border-primary/20",
        className,
      ].join(" ")}
    >
      {/* Subtle vector pattern */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.08]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id={dotGridId}
            width="22"
            height="22"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="1.25" fill="currentColor" />
          </pattern>
          <linearGradient id={dotFadeId} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="25%" stopColor="currentColor" />
            <stop offset="75%" stopColor="currentColor" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
          <mask id={dotMaskId}>
            <rect width="100%" height="100%" fill={`url(#${dotFadeId})`} />
          </mask>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill={`url(#${dotGridId})`}
          className="text-primary"
          mask={`url(#${dotMaskId})`}
        />
      </svg>

      <div className="pointer-events-none absolute -top-20 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl transition-opacity duration-300 group-hover:opacity-70" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl transition-opacity duration-300 group-hover:opacity-70" />

      <div className="text-center">
        <p className="text-sm font-semibold text-foreground/90 mb-2">
          Preview coming soon
        </p>
        <p className="text-xs text-muted-foreground max-w-xs leading-relaxed">
          {label}
        </p>
      </div>
    </div>
  );
}
