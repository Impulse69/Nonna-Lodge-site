import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/sections/Hero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SmartImage } from "@/components/ui/SmartImage";
import { ButtonLink } from "@/components/ui/Button";
import { RoomCard } from "@/components/rooms/RoomCard";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { Testimonials } from "@/components/sections/Testimonials";
import type { SiteImage } from "@/data/images";
import { images } from "@/data/images";
import { galleryImages } from "@/data/gallery";
import { rooms } from "@/data/rooms";
import { amenities } from "@/data/amenities";
import { site } from "@/data/site";

export default function Home() {
  const featuredRooms = rooms.slice(0, 3);
  // A varied 4-up strip: one representative photo per category.
  const galleryStrip = (["exterior", "room", "dining", "interior"] as const)
    .map((c) => galleryImages.find((g) => g.category === c))
    .filter((img): img is SiteImage => Boolean(img));

  return (
    <>
      <Hero />

      {/* Welcome */}
      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <SmartImage
              image={images.welcome}
              className="aspect-[5/4] w-full rounded-2xl"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div>
              <SectionHeading
                align="left"
                eyebrow="Welcome"
                title="A peaceful escape, thoughtfully made"
                description="Nonna Lodge brings together comfort, character and genuine hospitality. Whether you're here to explore or simply to slow down, every detail is designed to make you feel at home."
              />
              <p className="mt-4 text-base leading-relaxed text-stone-600">
                From our welcoming lounge to our quiet gardens, the lodge is a place to
                breathe out — settle in, unwind, and let us take care of the rest.
              </p>
              <ButtonLink href="/about" variant="outline" className="mt-6">
                Our story
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      {/* Featured rooms */}
      <section className="bg-sand/50 py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Stay"
            title="Rooms & suites"
            description="Each of our rooms is styled for comfort and rest, with everything you need for an easy, restful stay."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredRooms.map((room) => (
              <RoomCard key={room.slug} room={room} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <ButtonLink href="/rooms">View all rooms</ButtonLink>
          </div>
        </Container>
      </section>

      {/* Amenities */}
      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Comfort"
            title="Everything you need"
            description="Thoughtful touches and dependable comforts, included with every stay."
          />
          <div className="mt-12">
            <FeatureGrid amenities={amenities} />
          </div>
        </Container>
      </section>

      {/* Experiences teaser */}
      <section className="bg-sand/50 py-16 sm:py-24">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="order-2 lg:order-1">
              <SectionHeading
                align="left"
                eyebrow="Experiences"
                title="More than a place to sleep"
                description="Dine well, unwind at the bar, relax on your balcony with a view, or simply slow down. There's plenty to enjoy without ever feeling rushed."
              />
              <ButtonLink href="/experiences" className="mt-6">
                Discover experiences
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </ButtonLink>
            </div>
            <SmartImage
              image={images.experienceTeaser}
              className="order-1 aspect-[5/4] w-full rounded-2xl lg:order-2"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </Container>
      </section>

      {/* Gallery strip */}
      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Gallery"
            title="A glimpse of lodge life"
            description="A few moments from around Nonna Lodge."
          />
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {galleryStrip.map((image) => (
              <SmartImage
                key={image.src}
                image={image}
                className="aspect-square w-full rounded-xl"
                sizes="(max-width: 640px) 50vw, 25vw"
              />
            ))}
          </div>
          <div className="mt-10 text-center">
            <ButtonLink href="/gallery" variant="outline">
              View full gallery
            </ButtonLink>
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="bg-sand/50 py-16 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Guests" title="Kind words" />
          <div className="mt-12">
            <Testimonials />
          </div>
        </Container>
      </section>

      {/* Final CTA band */}
      <section className="relative isolate overflow-hidden">
        <SmartImage
          image={images.ctaBand}
          className="absolute inset-0 h-full w-full"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-charcoal/70" aria-hidden="true" />
        <Container className="relative z-10 py-20 text-center text-cream sm:py-28">
          <h2 className="text-3xl font-semibold sm:text-4xl lg:text-5xl">
            Ready for a relaxing getaway?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-cream/90">
            We&apos;d love to welcome you to {site.name}. Get in touch to plan your stay.
          </p>
          <ButtonLink href={site.bookingUrl} size="lg" variant="light" className="mt-8">
            Book your stay
          </ButtonLink>
        </Container>
      </section>
    </>
  );
}
