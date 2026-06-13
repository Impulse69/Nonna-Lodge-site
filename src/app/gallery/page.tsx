import { PageHeader } from "@/components/sections/PageHeader";
import { Container } from "@/components/ui/Container";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { createMetadata } from "@/lib/seo";
import { images } from "@/data/images";
import { galleryImages } from "@/data/gallery";

export const metadata = createMetadata({
  title: "Gallery",
  description:
    "A photo gallery of Nonna Lodge — our rooms, dining, gardens and the beautiful surroundings.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="See the lodge"
        description="A closer look at the rooms, spaces and surroundings that make Nonna Lodge special."
        image={images.experiencesHeader}
      />

      <section className="py-16 sm:py-24">
        <Container size="wide">
          <GalleryGrid images={galleryImages} />
        </Container>
      </section>
    </>
  );
}
