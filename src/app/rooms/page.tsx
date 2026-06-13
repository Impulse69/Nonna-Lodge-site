import { Check, Users, BedDouble, Maximize, Eye } from "lucide-react";
import { PageHeader } from "@/components/sections/PageHeader";
import { Container } from "@/components/ui/Container";
import { SmartImage } from "@/components/ui/SmartImage";
import { ButtonLink } from "@/components/ui/Button";
import { createMetadata } from "@/lib/seo";
import { cn } from "@/lib/cn";
import { images } from "@/data/images";
import { rooms } from "@/data/rooms";
import { site } from "@/data/site";

export const metadata = createMetadata({
  title: "Rooms & Rates",
  description:
    "Explore the rooms and suites at Nonna Lodge — from cosy garden rooms to our romantic honeymoon suite, each styled for comfort and rest.",
  path: "/rooms",
});

export default function RoomsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Stay with us"
        title="Rooms & Rates"
        description="Comfortable, characterful rooms for every kind of stay."
        image={images.roomsHeader}
      />

      <section className="py-16 sm:py-24">
        <Container>
          <div className="space-y-16 lg:space-y-24">
            {rooms.map((room, index) => {
              const reversed = index % 2 === 1;
              const facts = [
                { icon: Users, value: room.occupancy },
                { icon: BedDouble, value: room.bed },
                { icon: Maximize, value: room.size },
                { icon: Eye, value: room.view },
              ];
              return (
                <article
                  key={room.slug}
                  id={room.slug}
                  className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14"
                >
                  <SmartImage
                    image={room.image}
                    className={cn(
                      "aspect-[4/3] w-full rounded-2xl",
                      reversed && "lg:order-2",
                    )}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className={cn(reversed && "lg:order-1")}>
                    <h2 className="text-3xl text-charcoal sm:text-4xl">{room.name}</h2>
                    <p className="mt-4 leading-relaxed text-stone-600">{room.description}</p>

                    <dl className="mt-6 grid grid-cols-2 gap-4">
                      {facts.map(({ icon: Icon, value }) => (
                        <div key={value} className="flex items-center gap-2.5 text-sm text-stone-700">
                          <Icon className="h-4 w-4 shrink-0 text-clay" aria-hidden="true" />
                          <dd>{value}</dd>
                        </div>
                      ))}
                    </dl>

                    <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
                      {room.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-stone-600">
                          <Check className="h-4 w-4 text-sage" aria-hidden="true" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8 flex flex-wrap items-center gap-4">
                      <span className="text-lg font-medium text-charcoal">{room.rateFrom}</span>
                      <ButtonLink href={site.bookingUrl}>Book this room</ButtonLink>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
