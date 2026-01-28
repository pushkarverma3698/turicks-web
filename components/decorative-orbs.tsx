import { cn } from "@/lib/utils";

type DecorativeOrbsProps = {
  className?: string;
};

/**
 * Lightweight decorative background used to add depth to sections.
 * Pure markup/CSS (safe in server components).
 */
export function DecorativeOrbs({ className }: DecorativeOrbsProps) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <div className="absolute -top-28 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />
      <div className="absolute top-10 -left-24 h-80 w-80 rounded-full bg-accent/25 blur-3xl" />
      <div className="absolute -bottom-28 -right-28 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
    </div>
  );
}

