"use client";

import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { SmartImage } from "@/components/ui/SmartImage";
import { cn } from "@/lib/cn";
import type { SiteImage } from "@/data/images";

export function GalleryGrid({ images }: { images: SiteImage[] }) {
  const [index, setIndex] = useState(-1);

  // Only real photos become lightbox slides; placeholders stay non-interactive.
  let slideCursor = 0;
  const tiles = images.map((image) => {
    const slideIndex = image.src ? slideCursor++ : -1;
    return { image, slideIndex };
  });
  const slides = tiles
    .filter((t) => t.slideIndex >= 0)
    .map((t) => ({ src: t.image.src, alt: t.image.alt }));

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {tiles.map(({ image, slideIndex }, i) => {
          const interactive = slideIndex >= 0;
          const className = cn(
            "group relative aspect-[3/4] w-full overflow-hidden rounded-xl",
            interactive && "cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay focus-visible:ring-offset-2",
          );
          const inner = (
            <SmartImage
              image={image}
              className="h-full w-full"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              zoomOnHover={interactive}
            />
          );

          return interactive ? (
            <button
              key={i}
              type="button"
              className={className}
              onClick={() => setIndex(slideIndex)}
              aria-label={`Open image: ${image.alt}`}
            >
              {inner}
            </button>
          ) : (
            <div key={i} className={className}>
              {inner}
            </div>
          );
        })}
      </div>

      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={slides}
      />
    </>
  );
}
