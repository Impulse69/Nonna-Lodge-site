import { Coffee, UtensilsCrossed, Wine } from "lucide-react";
import { PageHeader } from "@/components/sections/PageHeader";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SmartImage } from "@/components/ui/SmartImage";
import { ButtonLink } from "@/components/ui/Button";
import { createMetadata } from "@/lib/seo";
import { images } from "@/data/images";
import { site } from "@/data/site";

export const metadata = createMetadata({
  title: "Dining",
  description:
    "Dining at Nonna Lodge — seasonal food, a relaxed bar and a generous breakfast to start each day.",
  path: "/dining",
});

/*
  NOTE: This page is only meaningful if the lodge has food / restaurant / bar
  photos. During the image pass, if no dining photos exist, remove this page and
  its "Dining" entry in src/data/site.ts rather than shipping an imageless stub.
*/

const highlights = [
  {
    icon: Coffee,
    title: "Breakfast",
    description:
      "Start your day with a generous breakfast featuring fresh, local produce — included with every stay.",
    image: images.diningBreakfast,
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurant",
    description:
      "Our kitchen serves honest, seasonal dishes in a warm, relaxed setting. TODO: add menu highlights and dietary options.",
    image: images.diningDish,
  },
  {
    icon: Wine,
    title: "Bar",
    description:
      "Unwind with a carefully chosen selection of wine, beer and cocktails. TODO: confirm bar hours.",
    image: images.diningBar,
  },
];

export default function DiningPage() {
  return (
    <>
      <PageHeader
        eyebrow="Dining"
        title="Eat, drink & relax"
        description="Good food and a warm welcome, from breakfast to a nightcap."
        image={images.diningHeader}
      />

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="On the menu"
            title="A taste of Nonna Lodge"
            description="Wholesome, seasonal cooking and a relaxed place to gather."
          />
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {highlights.map(({ icon: Icon, title, description, image }) => (
              <div key={title} className="flex flex-col">
                <SmartImage
                  image={image}
                  className="aspect-[4/3] w-full rounded-2xl"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <span className="mt-5 inline-flex h-11 w-11 items-center justify-center rounded-full bg-sand text-clay">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-3 text-2xl text-charcoal">{title}</h3>
                <p className="mt-2 leading-relaxed text-stone-600">{description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <ButtonLink href={site.bookingUrl} size="lg">
              Reserve a table
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
