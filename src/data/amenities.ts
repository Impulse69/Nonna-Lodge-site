import type { LucideIcon } from "lucide-react";
import {
  Clock,
  UtensilsCrossed,
  BellRing,
  Car,
  Briefcase,
  Zap,
  Wifi,
  Coffee,
  ShieldCheck,
  Martini,
  Mountain,
  Sofa,
} from "lucide-react";
import type { SiteImage } from "@/data/images";

/* The lodge's facilities (shown as the icon grid). */
export interface Amenity {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const amenities: Amenity[] = [
  { icon: Clock, title: "24-Hour Reception", description: "Someone to help you, day or night." },
  { icon: UtensilsCrossed, title: "Restaurant & Bar", description: "On-site dining and a relaxed bar." },
  { icon: BellRing, title: "Room Service", description: "Meals and drinks brought to your room." },
  { icon: Car, title: "Car Park", description: "On-site parking for all guests." },
  { icon: Briefcase, title: "Business & Meeting Rooms", description: "Spaces for meetings and events." },
  { icon: Zap, title: "Standby Generator", description: "Reliable power around the clock." },
  { icon: Wifi, title: "Free Wi-Fi", description: "Fast internet throughout the lodge." },
  { icon: Coffee, title: "Bed & Breakfast", description: "Breakfast included with every stay." },
  { icon: ShieldCheck, title: "CCTV Security", description: "Monitored for your peace of mind." },
];

/*
  Richer experience sections for the /experiences page — each backed by a real photo.
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
