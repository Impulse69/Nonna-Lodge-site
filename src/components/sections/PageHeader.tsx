import { SmartImage } from "@/components/ui/SmartImage";
import type { SiteImage } from "@/data/images";

interface PageHeaderProps {
  title: string;
  eyebrow?: string;
  description?: string;
  image: SiteImage;
}

/** Compact banner used at the top of inner pages. */
export function PageHeader({ title, eyebrow, description, image }: PageHeaderProps) {
  return (
    <section className="relative isolate flex min-h-[42vh] items-end overflow-hidden sm:min-h-[48vh]">
      <SmartImage
        image={image}
        className="absolute inset-0 h-full w-full"
        sizes="100vw"
        priority
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-charcoal/75 via-charcoal/35 to-charcoal/20"
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-10 pt-24 text-cream sm:px-6 lg:px-8">
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
    </section>
  );
}
