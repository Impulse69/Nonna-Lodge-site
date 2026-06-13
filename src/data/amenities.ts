import type { LucideIcon } from "lucide-react";
import {
  Wifi,
  UtensilsCrossed,
  BellRing,
  Coffee,
  Car,
  Snowflake,
  Mountain,
  Clock,
  Martini,
  Sofa,
} from "lucide-react";
import type { SiteImage } from "@/data/images";

/* Quick, icon-led amenity facts (home teaser). Kept to what the lodge offers. */
export interface Amenity {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const amenities: Amenity[] = [
  { icon: Wifi, title: "Free High-Speed Wi-Fi", description: "Stay connected throughout the lodge." },
  { icon: UtensilsCrossed, title: "Restaurant & Bar", description: "On-site dining and a relaxed bar." },
  { icon: BellRing, title: "Room Service", description: "Enjoy meals and drinks in your room." },
  { icon: Coffee, title: "Breakfast", description: "Start the day with a hearty breakfast." },
  { icon: Snowflake, title: "Air-Conditioned Rooms", description: "Climate control in every room." },
  { icon: Mountain, title: "Scenic Views", description: "Hillside views from the balconies." },
  { icon: Car, title: "Free Parking", description: "On-site parking for all guests." },
  { icon: Clock, title: "24/7 Reception", description: "A warm welcome, day or night." },
];

/*
  Experience sections for the /experiences page — each backed by a real photo.
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
    slug: "restaurant",
    title: "The Restaurant",
    description:
      "Tuck into freshly prepared, seasonal dishes in a bright, welcoming dining room — from a generous breakfast to a relaxed dinner.",
    icon: UtensilsCrossed,
    image: {
      src: "/images/dining/restaurant-dining.webp",
      alt: "The restaurant dining room at Nonna Lodge, set with elegant chairs and tables",
      category: "dining",
    },
  },
  {
    slug: "bar",
    title: "Bar & Cocktails",
    description:
      "Settle in at the bar for a signature cocktail, a glass of wine or a cold beer. A relaxed spot to round off the day.",
    icon: Martini,
    image: {
      src: "/images/dining/bar-lounge.webp",
      alt: "The bar at Nonna Lodge with seating and a backlit wine display",
      category: "dining",
    },
  },
  {
    slug: "views",
    title: "Relax & Take in the View",
    description:
      "Unwind on a private balcony or terrace and enjoy the open views across the surrounding hills.",
    icon: Mountain,
    image: {
      src: "/images/surroundings/balcony-view.webp",
      alt: "A balcony table for two at Nonna Lodge overlooking the hills at dusk",
      category: "surroundings",
    },
  },
  {
    slug: "lounge",
    title: "Lounge & Reception",
    description:
      "Comfortable lounges and a warm welcome from our front desk make it easy to feel at home from the moment you arrive.",
    icon: Sofa,
    image: {
      src: "/images/interior/lounge-sofa.webp",
      alt: "A comfortable lounge seating area at Nonna Lodge",
      category: "interior",
    },
  },
];
