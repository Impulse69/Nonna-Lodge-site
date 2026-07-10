"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import type { SiteImage } from "@/data/images";

interface FilmPlayerProps {
  /** Vimeo video ID, e.g. "123456789". */
  vimeoId: string;
  /** Poster shown until the viewer clicks play. The Vimeo player (and its
      scripts + video bytes) only load on interaction, so the page stays light
      on mobile until someone actually chooses to watch. */
  image: SiteImage;
}

export function FilmPlayer({ vimeoId, image }: FilmPlayerProps) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-charcoal shadow-2xl ring-1 ring-cream/10">
      {playing ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://player.vimeo.com/video/${vimeoId}?autoplay=1&title=0&byline=0&portrait=0&dnt=1`}
          title="Nonna Lodge film"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="group absolute inset-0 h-full w-full"
          aria-label="Play the Nonna Lodge film"
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 900px"
            className="object-cover"
          />
          <span
            className="absolute inset-0 bg-charcoal/40 transition-colors group-hover:bg-charcoal/25"
            aria-hidden="true"
          />
          <span
            className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-cream/95 shadow-lg transition-transform duration-300 group-hover:scale-110"
            aria-hidden="true"
          >
            <Play className="ml-1 h-8 w-8 fill-clay text-clay" />
          </span>
        </button>
      )}
    </div>
  );
}
