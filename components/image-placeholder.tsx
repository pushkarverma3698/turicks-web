interface ImagePlaceholderProps {
  label: string;
  aspectRatio?: "square" | "wide" | "tall" | "video";
  className?: string;
}

export function ImagePlaceholder({ 
  label, 
  aspectRatio = "wide",
  className = "" 
}: ImagePlaceholderProps) {
  const aspectClasses = {
    square: "aspect-square",
    wide: "aspect-video",
    tall: "aspect-[3/4]",
    video: "aspect-video",
  };

  return (
    <div
      className={`${aspectClasses[aspectRatio]} bg-green-500/20 border-2 border-dashed border-green-600/30 rounded-lg flex items-center justify-center p-8 ${className}`}
    >
      <div className="text-center">
        <p className="text-sm font-medium text-green-700 dark:text-green-400 mb-2">
          Image Placeholder
        </p>
        <p className="text-xs text-green-600 dark:text-green-500 max-w-xs">
          {label}
        </p>
      </div>
    </div>
  );
}
