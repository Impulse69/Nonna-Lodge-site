import Image from "next/image";
import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/cn";
import type { SiteImage } from "@/data/images";

interface SmartImageProps {
  image: SiteImage;
  /** Classes for the wrapper — set the aspect ratio / sizing here (e.g. "aspect-[4/3]", "h-full"). */
  className?: string;
  /** Responsive sizes hint for next/image. */
  sizes?: string;
  priority?: boolean;
  /** Subtle zoom on hover (for cards/links). */
  zoomOnHover?: boolean;
}

/**
 * Renders an optimised next/image when a real photo path is present, otherwise
 * a labelled placeholder. This keeps every image slot visible and intentional
 * before the real photos are wired in — and makes the swap a data-only change.
 */
export function SmartImage({
  image,
  className,
  sizes = "100vw",
  priority = false,
  zoomOnHover = false,
}: SmartImageProps) {
  const hasSrc = Boolean(image.src);

  return (
    <div className={cn("relative overflow-hidden bg-sand", className)}>
      {hasSrc ? (
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={sizes}
          priority={priority}
          className={cn(
            "object-cover",
            zoomOnHover && "transition-transform duration-700 ease-out group-hover:scale-105",
          )}
        />
      ) : (
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-sand to-stone-300 p-4 text-center"
          role="img"
          aria-label={image.alt}
        >
          <ImageIcon className="h-7 w-7 text-stone-500" aria-hidden="true" />
          <span className="max-w-[22ch] text-[11px] font-medium uppercase leading-snug tracking-wider text-stone-600">
            {image.alt}
          </span>
        </div>
      )}
    </div>
  );
}
