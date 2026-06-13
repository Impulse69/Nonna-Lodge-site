/*
  IMAGE MANIFEST
  --------------
  Every photo used on the site is declared here (or alongside its room/amenity
  in rooms.ts / amenities.ts) so each image has an explicit, named context.

  Workflow:
  - `src: ""` marks a slot that is awaiting a real photo. Until then the UI
    renders a labelled placeholder (see SmartImage), so layout and intent are
    visible without the asset.
  - During the image-integration pass, real photos committed under
    /public/images/** are matched to these slots and `src` is filled with a
    descriptive path. `alt` should describe what the photo actually shows.
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
  /** Public path e.g. "/images/hero/exterior-dusk.jpg". Empty until wired up. */
  src: string;
  /** Descriptive alternative text for accessibility + SEO. */
  alt: string;
  category: ImageCategory;
}

/** Standalone slots consumed by specific page sections. */
export const images = {
  heroHome: {
    src: "",
    alt: "Nonna Lodge exterior at golden hour with its gardens in view",
    category: "hero",
  },
  welcome: {
    src: "",
    alt: "Warm, inviting lounge interior at Nonna Lodge",
    category: "interior",
  },
  experienceTeaser: {
    src: "",
    alt: "The natural surroundings guests can explore near Nonna Lodge",
    category: "surroundings",
  },
  ctaBand: {
    src: "",
    alt: "Atmospheric evening view of Nonna Lodge",
    category: "exterior",
  },
  roomsHeader: {
    src: "",
    alt: "A beautifully made bed in a Nonna Lodge guest room",
    category: "room",
  },
  experiencesHeader: {
    src: "",
    alt: "Scenic landscape surrounding Nonna Lodge",
    category: "surroundings",
  },
  diningHeader: {
    src: "",
    alt: "The restaurant dining area at Nonna Lodge",
    category: "dining",
  },
  diningBreakfast: {
    src: "",
    alt: "A freshly prepared breakfast at Nonna Lodge",
    category: "dining",
  },
  diningDish: {
    src: "",
    alt: "A seasonal dish served at the Nonna Lodge restaurant",
    category: "dining",
  },
  diningBar: {
    src: "",
    alt: "The bar at Nonna Lodge",
    category: "dining",
  },
  aboutStory: {
    src: "",
    alt: "The Nonna Lodge building, reflecting its character and history",
    category: "exterior",
  },
  aboutLocation: {
    src: "",
    alt: "The setting and location around Nonna Lodge",
    category: "surroundings",
  },
  contactHeader: {
    src: "",
    alt: "The welcoming entrance and reception at Nonna Lodge",
    category: "interior",
  },
} satisfies Record<string, SiteImage>;

export type ImageKey = keyof typeof images;

/*
  GALLERY
  -------
  The gallery is the home for genuinely gallery-worthy photos that are not
  better placed in a specific section. These placeholders are replaced during
  the image-integration pass with the remaining real photos so that no image
  goes unused.
*/
export const galleryImages: SiteImage[] = [
  { src: "", alt: "Nonna Lodge exterior", category: "exterior" },
  { src: "", alt: "Guest room interior", category: "room" },
  { src: "", alt: "Lounge and common area", category: "interior" },
  { src: "", alt: "Dining at Nonna Lodge", category: "dining" },
  { src: "", alt: "Garden and grounds", category: "amenity" },
  { src: "", alt: "Surrounding landscape", category: "surroundings" },
  { src: "", alt: "Architectural detail", category: "detail" },
  { src: "", alt: "Evening ambience", category: "exterior" },
  { src: "", alt: "A quiet corner to relax", category: "interior" },
];
