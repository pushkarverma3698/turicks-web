import { useId } from "react";
import { cn } from "@/lib/utils";

type ColorfulVectorsProps = {
  className?: string;
};

/**
 * Site-wide colorful vector layer. Kept subtle (low opacity) so it doesn't fight the content.
 */
export function ColorfulVectors({ className }: ColorfulVectorsProps) {
  const uid = useId();
  const g1 = `${uid}-g1`;
  const g2 = `${uid}-g2`;
  const blur = `${uid}-blur`;

  return (
    <div
      className={cn(
        "pointer-events-none fixed inset-0 -z-10 overflow-hidden",
        className
      )}
      aria-hidden="true"
    >
      <svg className="h-full w-full opacity-[0.18] dark:opacity-[0.22]">
        <defs>
          <radialGradient id={g1} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#A855F7" stopOpacity="0.9" />
            <stop offset="55%" stopColor="#22D3EE" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </radialGradient>
          <radialGradient id={g2} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.75" />
            <stop offset="50%" stopColor="#F472B6" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </radialGradient>
          <filter id={blur} x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="40" />
          </filter>
        </defs>

        <g filter={`url(#${blur})`}>
          <circle cx="15%" cy="18%" r="260" fill={`url(#${g1})`} />
          <circle cx="82%" cy="32%" r="300" fill={`url(#${g2})`} />
          <circle cx="60%" cy="88%" r="340" fill={`url(#${g1})`} opacity="0.8" />
        </g>
      </svg>
    </div>
  );
}

