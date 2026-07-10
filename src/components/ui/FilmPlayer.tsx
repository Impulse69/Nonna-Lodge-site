"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

interface FilmPlayerProps {
  /** Vimeo video ID, e.g. "123456789". */
  vimeoId: string;
}

export function FilmPlayer({ vimeoId }: FilmPlayerProps) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-2xl shadow-2xl ring-1 ring-charcoal/5">
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
          className="group absolute inset-0 flex flex-col items-center justify-center gap-5 bg-cream px-6"
          aria-label="Play the Nonna Lodge film"
        >
          {/* Brand title card — the logo needs a light backdrop to read. */}
          <Image
            src="/logo.png"
            alt=""
            width={512}
            height={512}
            className="h-20 w-20 sm:h-32 sm:w-32"
          />
          <span
            className="flex h-14 w-14 items-center justify-center rounded-full bg-clay shadow-lg transition-transform duration-300 group-hover:scale-110 sm:h-16 sm:w-16"
            aria-hidden="true"
          >
            <Play className="ml-0.5 h-6 w-6 fill-cream text-cream sm:h-7 sm:w-7" />
          </span>
        </button>
      )}
    </div>
  );
}
