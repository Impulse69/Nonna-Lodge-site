import { Heart, Leaf, HandHeart, MapPin } from "lucide-react";
import { PageHeader } from "@/components/sections/PageHeader";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SmartImage } from "@/components/ui/SmartImage";
import { MapEmbed } from "@/components/ui/MapEmbed";
import { createMetadata } from "@/lib/seo";
import { images } from "@/data/images";
import { site } from "@/data/site";

export const metadata = createMetadata({
  title: "About",
  description:
    "The story behind Nonna Lodge — our values, our hospitality and our beautiful setting.",
  path: "/about",
});

const values = [
  {
    icon: Heart,
    title: "Genuine hospitality",
    description: "We treat every guest like family — warm, attentive and never overbearing.",
  },
  {
    icon: Leaf,
    title: "A sense of place",
    description: "Our lodge reflects its surroundings, with comfort and character in equal measure.",
  },
  {
    icon: HandHeart,
    title: "Care in the details",
    description: "From clean, comfortable rooms to thoughtful touches, the small things matter.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our story"
        title="About Nonna Lodge"
        description="A welcoming home away from home, made with care."
        image={images.aboutStory}
      />

      {/* Story */}
      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <SmartImage
              image={images.aboutStory}
              className="aspect-[4/3] w-full rounded-2xl"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div>
              <SectionHeading align="left" eyebrow="Welcome" title="A place built on warmth" />
              <div className="mt-4 space-y-4 leading-relaxed text-stone-600">
                <p>
                  {/* TODO: replace with the real story of the lodge — its founding, name and people. */}
                  Nonna Lodge began with a simple idea: to create a place where guests feel
                  genuinely looked after. Every room, every meal and every welcome is offered
                  in that spirit.
                </p>
                <p>
                  Whether you&apos;re here for a quiet retreat, a family holiday or a special
                  celebration, our team is here to make your stay effortless and memorable.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="bg-sand/50 py-16 sm:py-24">
        <Container>
          <SectionHeading eyebrow="What we believe" title="Our values" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map(({ icon: Icon, title, description }) => (
              <div key={title} className="rounded-2xl border border-stone-200 bg-white/60 p-6">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-sand text-clay">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-xl text-charcoal">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">{description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Location */}
      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Find us"
            title="Location & getting here"
            description="Nonna Lodge is easy to reach and well placed for exploring the area."
          />
          <div className="mt-12 grid items-stretch gap-8 lg:grid-cols-2">
            <SmartImage
              image={images.aboutLocation}
              className="aspect-[4/3] w-full rounded-2xl"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="flex flex-col justify-center rounded-2xl border border-stone-200 bg-white/60 p-8">
              <h3 className="text-2xl text-charcoal">How to find us</h3>
              <ul className="mt-5 space-y-3 text-stone-600">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-clay" aria-hidden="true" />
                  <span>
                    {site.contact.addressLine1}
                    <br />
                    {site.contact.addressLine2}
                    <br />
                    {site.contact.country}
                  </span>
                </li>
              </ul>
              <MapEmbed className="mt-6" />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
