import { PageHeader } from "@/components/sections/PageHeader";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SmartImage } from "@/components/ui/SmartImage";
import { ButtonLink } from "@/components/ui/Button";
import { createMetadata } from "@/lib/seo";
import { cn } from "@/lib/cn";
import { images } from "@/data/images";
import { experiences } from "@/data/amenities";
import { site } from "@/data/site";

export const metadata = createMetadata({
  title: "Experiences & Amenities",
  description:
    "Dining, pool and terrace, fireplace lounge, gardens and the surrounding area — discover everything to enjoy at Nonna Lodge.",
  path: "/experiences",
});

export default function ExperiencesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Experiences"
        title="Things to enjoy"
        description="From relaxed dining to the great outdoors, there's plenty to make your stay memorable."
        image={images.experiencesHeader}
      />

      <section className="py-16 sm:py-24">
        <Container>
          <div className="space-y-16 lg:space-y-24">
            {experiences.map((experience, index) => {
              const reversed = index % 2 === 1;
              const { icon: Icon } = experience;
              return (
                <div
                  key={experience.slug}
                  className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14"
                >
                  <SmartImage
                    image={experience.image}
                    className={cn(
                      "aspect-[4/3] w-full rounded-2xl",
                      reversed && "lg:order-2",
                    )}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className={cn(reversed && "lg:order-1")}>
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-sand text-clay">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <SectionHeading
                      align="left"
                      title={experience.title}
                      className="mt-4"
                    />
                    <p className="mt-4 leading-relaxed text-stone-600">{experience.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-20 rounded-2xl bg-sand/60 p-8 text-center sm:p-12">
            <SectionHeading
              title="Plan your perfect stay"
              description="Tell us what you're hoping for and we'll help make it happen."
            />
            <ButtonLink href={site.bookingUrl} size="lg" className="mt-6">
              Get in touch
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
