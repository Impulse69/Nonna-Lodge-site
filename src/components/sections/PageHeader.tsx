import { ChevronDown } from "lucide-react";
import { HeroVideo } from "@/components/ui/HeroVideo";
import { cn } from "@/lib/cn";
import type { SiteImage } from "@/data/images";

interface PageHeaderProps {
  title: string;
  eyebrow?: string;
  description?: string;
  image: SiteImage;
  /** Optional background video, e.g. "/videos/hero-rooms.mp4". */
  videoSrc?: string;
}

/**
 * Banner at the top of inner pages. Poster-only pages get a compact banner;
 * pages with a video hero go full-screen (with the nav hiding over them, and a
 * scroll cue), matching the home hero.
 */
export function PageHeader({ title, eyebrow, description, image, videoSrc }: PageHeaderProps) {
  return (
    <section
      className={cn(
        "relative isolate flex items-end overflow-hidden",
        // Video heroes go full-screen only from tablet up; phones get a compact
        // banner. Poster-only pages are always compact.
        videoSrc ? "hero-screen-from-md" : "min-h-[42vh] sm:min-h-[48vh]",
      )}
    >
      <HeroVideo image={image} videoSrc={videoSrc} priority />
      <div
        className="absolute inset-0 bg-gradient-to-t from-charcoal/75 via-charcoal/35 to-charcoal/20"
        aria-hidden="true"
      />
      <div
        className={cn(
          "relative z-10 mx-auto w-full max-w-6xl px-4 pt-24 text-cream sm:px-6 lg:px-8",
          videoSrc ? "pb-10 md:pb-20" : "pb-10",
        )}
      >
        {eyebrow && (
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-cream/80">
            {eyebrow}
          </p>
        )}
        <h1 className="max-w-2xl text-4xl font-semibold sm:text-5xl">{title}</h1>
        {description && (
          <p className="mt-4 max-w-xl text-base leading-relaxed text-cream/90 sm:text-lg">
            {description}
          </p>
        )}
      </div>

      {/* Only video heroes go full-screen + take over the navbar. The sentinel
          marks the bottom so the Header reveals once it's scrolled past, and the
          chevron cues that there's content below the full-screen hero. */}
      {videoSrc && (
        <>
          <div
            className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 text-cream/70 md:block"
            aria-hidden="true"
          >
            <ChevronDown className="h-6 w-6 animate-bounce" />
          </div>
          <div
            data-hero-sentinel
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-px"
          />
        </>
      )}
    </section>
  );
}
