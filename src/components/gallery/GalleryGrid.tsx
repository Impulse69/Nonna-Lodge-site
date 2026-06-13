"use client";

import { useMemo, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { SmartImage } from "@/components/ui/SmartImage";
import { cn } from "@/lib/cn";
import type { SiteImage, ImageCategory } from "@/data/images";

const categoryLabels: Partial<Record<ImageCategory, string>> = {
  exterior: "Exterior",
  room: "Rooms",
  dining: "Dining & Bar",
  interior: "Lounge & Reception",
  surroundings: "Views",
};

type Filter = "all" | ImageCategory;

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
        active
          ? "border-clay bg-clay text-cream"
          : "border-stone-300 text-charcoal hover:border-clay hover:text-clay",
      )}
    >
      {children}
    </button>
  );
}

export function GalleryGrid({ images }: { images: SiteImage[] }) {
  const [filter, setFilter] = useState<Filter>("all");
  const [index, setIndex] = useState(-1);

  const categories = useMemo(() => {
    const order = Object.keys(categoryLabels) as ImageCategory[];
    const present = Array.from(new Set(images.map((i) => i.category)));
    return present.sort((a, b) => order.indexOf(a) - order.indexOf(b));
  }, [images]);

  const visible = useMemo(
    () => (filter === "all" ? images : images.filter((i) => i.category === filter)),
    [images, filter],
  );

  const slides = visible.map((i) => ({ src: i.src, alt: i.alt }));

  return (
    <>
      {categories.length > 1 && (
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          <FilterChip
            active={filter === "all"}
            onClick={() => {
              setFilter("all");
              setIndex(-1);
            }}
          >
            All
          </FilterChip>
          {categories.map((c) => (
            <FilterChip
              key={c}
              active={filter === c}
              onClick={() => {
                setFilter(c);
                setIndex(-1);
              }}
            >
              {categoryLabels[c] ?? c}
            </FilterChip>
          ))}
        </div>
      )}

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {visible.map((image, i) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Open image: ${image.alt}`}
            className="group relative aspect-square w-full overflow-hidden rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay focus-visible:ring-offset-2"
          >
            <SmartImage
              image={image}
              className="h-full w-full"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              zoomOnHover
            />
          </button>
        ))}
      </div>

      <Lightbox open={index >= 0} close={() => setIndex(-1)} index={index} slides={slides} />
    </>
  );
}
