import type { LucideIcon } from "lucide-react";
import {
  Wifi,
  UtensilsCrossed,
  Waves,
  Flame,
  Trees,
  Coffee,
  Car,
  BellRing,
  Mountain,
} from "lucide-react";
import type { SiteImage } from "@/data/images";

/* Quick, icon-led amenity facts (home teaser, about page, per-room context). */
export interface Amenity {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const amenities: Amenity[] = [
  { icon: Wifi, title: "Free High-Speed Wi-Fi", description: "Stay connected throughout the lodge." },
  { icon: UtensilsCrossed, title: "Restaurant & Bar", description: "Honest food and a relaxed drink." },
  { icon: Waves, title: "Swimming Pool", description: "Cool off or unwind by the water." },
  { icon: Flame, title: "Fireplace Lounge", description: "A cosy spot to settle in the evening." },
  { icon: Trees, title: "Gardens & Terrace", description: "Quiet green space to slow down." },
  { icon: Coffee, title: "Breakfast Included", description: "Start the day well, every day." },
  { icon: Car, title: "Free Parking", description: "On-site parking for all guests." },
  { icon: BellRing, title: "Attentive Service", description: "Warm, helpful hospitality." },
];

/*
  Richer experience sections for the /experiences page. Each has an image slot
  filled during the image pass; sections without a matching photo render
  icon-only rather than an empty frame.
*/
export interface Experience {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
  image: SiteImage;
}

export const experiences: Experience[] = [
  {
    slug: "restaurant-bar",
    title: "Restaurant & Bar",
    description:
      "Enjoy seasonal dishes and a thoughtfully stocked bar in a relaxed, welcoming setting — whether it's a leisurely breakfast or dinner with a view.",
    icon: UtensilsCrossed,
    image: { src: "", alt: "The restaurant and bar at Nonna Lodge", category: "dining" },
  },
  {
    slug: "pool-terrace",
    title: "Swimming Pool & Sun Terrace",
    description:
      "Take a refreshing dip or simply stretch out on the terrace with a book and a drink. A calm place to recharge through the day.",
    icon: Waves,
    image: { src: "", alt: "The swimming pool and sun terrace at Nonna Lodge", category: "amenity" },
  },
  {
    slug: "fireplace-lounge",
    title: "Fireplace Lounge",
    description:
      "As the evening draws in, the fireplace lounge is the heart of the lodge — a comfortable, characterful space to gather or read by the fire.",
    icon: Flame,
    image: { src: "", alt: "The fireplace lounge at Nonna Lodge", category: "interior" },
  },
  {
    slug: "gardens",
    title: "Gardens & Grounds",
    description:
      "Wander the gardens, find a quiet corner, or enjoy a morning coffee outdoors surrounded by greenery.",
    icon: Trees,
    image: { src: "", alt: "The gardens and grounds of Nonna Lodge", category: "amenity" },
  },
  {
    slug: "explore",
    title: "Explore the Area",
    description:
      "Nonna Lodge is a wonderful base for discovering the surrounding area — from scenic walks to local sights. Our team is happy to help you plan your days.",
    icon: Mountain,
    image: { src: "", alt: "The scenery and surroundings near Nonna Lodge", category: "surroundings" },
  },
];
