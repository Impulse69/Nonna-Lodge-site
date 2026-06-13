/*
  IMAGE MANIFEST
  --------------
  Photos used in specific page sections. Each slot points at an optimised WebP
  under /public/images and carries alt text describing what the photo shows.
  The gallery (everything else) lives in src/data/gallery.ts.
*/

export type ImageCategory =
  | "hero"
  | "exterior"
  | "interior"
  | "room"
  | "dining"
  | "amenity"
  | "surroundings"
  | "detail";

export interface SiteImage {
  /** Public path e.g. "/images/hero/lodge-exterior-facade.webp". */
  src: string;
  /** Descriptive alternative text for accessibility + SEO. */
  alt: string;
  category: ImageCategory;
}

export const images = {
  heroHome: {
    src: "/images/hero/lodge-exterior-facade.webp",
    alt: "The Nonna Lodge building and gardens beneath its rooftop sign",
    category: "hero",
  },
  welcome: {
    src: "/images/interior/lounge-welcome.webp",
    alt: "The lounge at Nonna Lodge with armchairs gathered around a marble table",
    category: "interior",
  },
  experienceTeaser: {
    src: "/images/dining/curved-bar.webp",
    alt: "The curved, softly lit bar at Nonna Lodge",
    category: "dining",
  },
  ctaBand: {
    src: "/images/exterior/walkway-evening.webp",
    alt: "The garden walkway at Nonna Lodge in the evening light",
    category: "exterior",
  },
  roomsHeader: {
    src: "/images/rooms/room-header.webp",
    alt: "A warmly lit guest room at Nonna Lodge",
    category: "room",
  },
  experiencesHeader: {
    src: "/images/exterior/garden-walkway.webp",
    alt: "The planted walkway running alongside Nonna Lodge",
    category: "surroundings",
  },
  diningHeader: {
    src: "/images/dining/restaurant-area.webp",
    alt: "The restaurant dining area at Nonna Lodge",
    category: "dining",
  },
  diningBreakfast: {
    src: "/images/dining/breakfast-spread.webp",
    alt: "A breakfast spread of dishes served at Nonna Lodge",
    category: "dining",
  },
  diningDish: {
    src: "/images/dining/signature-dish.webp",
    alt: "Fried rice with grilled chicken, plated at the Nonna Lodge restaurant",
    category: "dining",
  },
  diningBar: {
    src: "/images/dining/bar-counter.webp",
    alt: "The bar counter and stools at Nonna Lodge",
    category: "dining",
  },
  aboutStory: {
    src: "/images/exterior/lodge-facade-gardens.webp",
    alt: "The Nonna Lodge building and its landscaped gardens",
    category: "exterior",
  },
  aboutLocation: {
    src: "/images/exterior/entrance-flowers.webp",
    alt: "The entrance steps to Nonna Lodge framed by flowering plants",
    category: "surroundings",
  },
  contactHeader: {
    src: "/images/interior/reception-branding.webp",
    alt: "The Nonna Lodge reception and its branded feature wall",
    category: "interior",
  },
} satisfies Record<string, SiteImage>;

export type ImageKey = keyof typeof images;
