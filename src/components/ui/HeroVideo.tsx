"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/cn";
import type { SiteImage } from "@/data/images";

interface HeroVideoProps {
  /** Poster shown before/instead of the video (and the mobile fallback). */
  image: SiteImage;
  /** Optional background video, e.g. "/videos/hero-home.mp4". */
  videoSrc?: string;
  priority?: boolean;
  className?: string;
}

/**
 * Full-bleed hero background: a poster image that an autoplaying, muted, looping
 * video is layered over — but only on larger screens with motion allowed. Phones
 * and reduced-motion users get just the poster (no video bytes downloaded), which
 * keeps mobile fast and data-light.
 */
export function HeroVideo({ image, videoSrc, priority = false, className }: HeroVideoProps) {
  const [playVideo, setPlayVideo] = useState(false);

  useEffect(() => {
    if (!videoSrc) return;
    const wide = window.matchMedia("(min-width: 768px)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setPlayVideo(wide.matches && !reduce.matches);
    update();
    wide.addEventListener("change", update);
    reduce.addEventListener("change", update);
    return () => {
      wide.removeEventListener("change", update);
      reduce.removeEventListener("change", update);
    };
  }, [videoSrc]);

  return (
    <div className={cn("absolute inset-0 h-full w-full overflow-hidden bg-sand", className)}>
      {image.src && (
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority={priority}
          sizes="100vw"
          className="object-cover"
        />
      )}
      {playVideo && videoSrc && (
        // eslint-disable-next-line jsx-a11y/media-has-caption -- decorative, muted background loop
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={image.src || undefined}
          aria-hidden="true"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}
    </div>
  );
}
