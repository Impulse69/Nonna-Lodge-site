import { ChevronDown } from "lucide-react";
import { HeroVideo } from "@/components/ui/HeroVideo";
import { ButtonLink } from "@/components/ui/Button";
import { images } from "@/data/images";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[88vh] items-center justify-center overflow-hidden">
      {/* Background video (falls back to the poster image on mobile / before load) */}
      <HeroVideo image={images.heroHome} videoSrc="/videos/hero-home.mp4" priority />
      {/* Readability overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/35 to-charcoal/70"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-3xl px-4 py-24 text-center text-cream sm:px-6">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-cream/80">
          Welcome to {site.name}
        </p>
        <h1 className="text-balance text-4xl font-semibold leading-tight drop-shadow-sm sm:text-5xl lg:text-6xl">
          {site.tagline}
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-cream/90 sm:text-lg">
          Elegant rooms, heartfelt hospitality and a peaceful escape — your home away
          from home at {site.name}.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <ButtonLink href={site.bookingUrl} size="lg" className="w-full sm:w-auto">
            Book Your Stay
          </ButtonLink>
          <ButtonLink href="/rooms" variant="light" size="lg" className="w-full sm:w-auto">
            Explore Rooms
          </ButtonLink>
        </div>
      </div>

      <div
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-cream/70"
        aria-hidden="true"
      >
        <ChevronDown className="h-6 w-6 animate-bounce" />
      </div>
    </section>
  );
}
