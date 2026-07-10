import type { Metadata } from "next";
import { site } from "@/data/site";

/** Build per-page metadata consistently (title is suffixed via the layout template). */
export function createMetadata({
  title,
  description,
  path = "/",
}: {
  title?: string;
  description?: string;
  path?: string;
}): Metadata {
  const desc = description ?? site.description;
  return {
    title,
    description: desc,
    alternates: { canonical: path },
    openGraph: {
      title: title ? `${title} | ${site.name}` : site.name,
      description: desc,
      url: path,
      siteName: site.name,
      type: "website",
      images: [
        { url: "/og.jpg", width: 1200, height: 630, alt: site.name },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: title ? `${title} | ${site.name}` : site.name,
      description: desc,
      images: ["/og.jpg"],
    },
  };
}
