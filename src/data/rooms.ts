import type { SiteImage } from "@/data/images";

/*
  Room types — placeholder copy and rates (marked TODO). Each room carries its
  own image slot so the photo↔room mapping is explicit and type-checked.
  During the image pass, fill `image.src` (and ideally add extra gallery shots).
*/

export interface RoomFeature {
  label: string;
}

export interface Room {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  /** e.g. "Sleeps 2" */
  occupancy: string;
  /** e.g. "King bed" */
  bed: string;
  /** e.g. "28 m²" */
  size: string;
  /** e.g. "Garden view" */
  view: string;
  /** Display rate — TODO: replace with real pricing. */
  rateFrom: string;
  features: string[];
  image: SiteImage;
}

export const rooms: Room[] = [
  {
    slug: "garden-room",
    name: "Garden Room",
    shortDescription: "A cosy retreat opening onto the lodge gardens.",
    description:
      "Our Garden Room is a calm, light-filled space with direct views over the grounds. Thoughtfully furnished for a restful stay, it's ideal for solo travellers and couples seeking a peaceful base.",
    occupancy: "Sleeps 2",
    bed: "Queen bed",
    size: "24 m²", // TODO: confirm
    view: "Garden view",
    rateFrom: "Rates on request", // TODO: e.g. "from $120 / night"
    features: ["Free Wi-Fi", "En-suite bathroom", "Garden access", "Tea & coffee"],
    image: {
      src: "",
      alt: "The Garden Room at Nonna Lodge with a view over the gardens",
      category: "room",
    },
  },
  {
    slug: "deluxe-double",
    name: "Deluxe Double",
    shortDescription: "Generous comfort with elegant, homely touches.",
    description:
      "The Deluxe Double offers extra space and a refined finish, with a comfortable seating area and a spacious en-suite. A perfect choice for guests who like a little more room to unwind.",
    occupancy: "Sleeps 2",
    bed: "King bed",
    size: "30 m²", // TODO: confirm
    view: "Courtyard view",
    rateFrom: "Rates on request", // TODO
    features: ["Free Wi-Fi", "Seating area", "Premium linens", "Mini-bar"],
    image: {
      src: "",
      alt: "The Deluxe Double room at Nonna Lodge",
      category: "room",
    },
  },
  {
    slug: "family-suite",
    name: "Family Suite",
    shortDescription: "Room for the whole family to relax together.",
    description:
      "Our Family Suite combines a master bedroom with a flexible second sleeping area, giving families space and privacy without compromising on comfort or style.",
    occupancy: "Sleeps 4",
    bed: "King bed + twin beds",
    size: "42 m²", // TODO: confirm
    view: "Garden view",
    rateFrom: "Rates on request", // TODO
    features: ["Free Wi-Fi", "Two sleeping areas", "Family bathroom", "Tea & coffee"],
    image: {
      src: "",
      alt: "The Family Suite at Nonna Lodge",
      category: "room",
    },
  },
  {
    slug: "honeymoon-suite",
    name: "Honeymoon Suite",
    shortDescription: "Our most romantic and indulgent room.",
    description:
      "The Honeymoon Suite is designed for special occasions — a luxurious bed, a beautiful outlook and quiet, considered details that make every stay feel like a celebration.",
    occupancy: "Sleeps 2",
    bed: "Super king bed",
    size: "38 m²", // TODO: confirm
    view: "Best view in the lodge",
    rateFrom: "Rates on request", // TODO
    features: ["Free Wi-Fi", "Soaking tub", "Private balcony", "Welcome treats"],
    image: {
      src: "",
      alt: "The Honeymoon Suite at Nonna Lodge",
      category: "room",
    },
  },
];
