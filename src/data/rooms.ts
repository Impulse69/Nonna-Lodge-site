import type { SiteImage } from "@/data/images";

/*
  Room categories and nightly rates (Ghanaian Cedi). The lodge has 20 rooms
  across the four categories below. Each category carries a representative photo.
*/

export interface Room {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  /** e.g. "Sleeps 2" */
  occupancy: string;
  /** e.g. "King bed" */
  bed: string;
  /** Optional — only shown if provided. */
  size?: string;
  /** Optional — only shown if provided. */
  view?: string;
  /** Nightly rate, e.g. "GH₵ 400" (a "/ night" suffix is added in the UI). */
  rateFrom: string;
  features: string[];
  image: SiteImage;
}

export const rooms: Room[] = [
  {
    slug: "standard-room",
    name: "Standard Room",
    shortDescription: "Comfortable and affordable — ideal for solo travellers.",
    description:
      "Our most affordable category, the Standard Room is a comfortable, well-appointed space for single occupancy. Everything you need for a restful night, with none of the fuss.",
    occupancy: "Single occupancy",
    bed: "Double bed",
    rateFrom: "GH₵ 400",
    features: ["Free Wi-Fi", "En-suite bathroom", "Air conditioning", "Breakfast included"],
    image: {
      src: "/images/rooms/garden-room.webp",
      alt: "A Standard Room at Nonna Lodge — a neat double bed dressed in white linen",
      category: "room",
    },
  },
  {
    slug: "premium-room",
    name: "Premium Room",
    shortDescription: "Extra space and comfort with refined touches.",
    description:
      "The Premium Room is a step up in space and comfort, with a warmer, more refined finish and thoughtful extras to help you settle in and unwind.",
    occupancy: "Sleeps 2",
    bed: "Queen bed",
    rateFrom: "GH₵ 600",
    features: ["Free Wi-Fi", "En-suite bathroom", "Air conditioning", "Breakfast included", "Room service"],
    image: {
      src: "/images/rooms/deluxe-double.webp",
      alt: "A Premium Room at Nonna Lodge — a warmly lit room with a queen bed and bedside lamps",
      category: "room",
    },
  },
  {
    slug: "executive-room",
    name: "Executive Room",
    shortDescription: "Our top-tier room, elegantly finished.",
    description:
      "Our most generous and elegantly furnished category, the Executive Room is finished to a higher standard — perfect for guests who want a little more space and a touch of luxury.",
    occupancy: "Sleeps 2",
    bed: "King bed",
    rateFrom: "GH₵ 800",
    features: ["Free Wi-Fi", "En-suite bathroom", "Air conditioning", "Breakfast included", "Room service", "Work area"],
    image: {
      src: "/images/rooms/honeymoon-suite.webp",
      alt: "An Executive Room at Nonna Lodge — a spacious, warmly lit room with a king bed",
      category: "room",
    },
  },
  {
    slug: "family-suite",
    name: "Family Room / Suite",
    shortDescription: "Spacious comfort for the whole family.",
    description:
      "Our largest category, the Family Room / Suite offers room for the whole family to relax together, with extra space and all the comforts of home.",
    occupancy: "Sleeps 4",
    bed: "Two double beds",
    rateFrom: "GH₵ 1,000",
    features: ["Free Wi-Fi", "En-suite bathroom", "Air conditioning", "Breakfast included", "Room service", "Extra space"],
    image: {
      src: "/images/rooms/family-suite.webp",
      alt: "The Family Room / Suite at Nonna Lodge — two beds with decorative folded towels",
      category: "room",
    },
  },
];
