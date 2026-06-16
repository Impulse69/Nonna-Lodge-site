/*
  Central site configuration. Placeholder details are marked "TODO" — replace
  with the real address, phone, email, hours and booking link when available.
*/

export const site = {
  name: "Nonna Lodge",
  shortName: "Nonna Lodge",
  tagline: "A warm welcome in a beautiful setting",
  description:
    "Nonna Lodge is a boutique hotel offering elegant rooms, heartfelt hospitality and a peaceful escape. Discover comfortable stays, fine dining and memorable experiences.",
  // TODO: set the live site URL once a domain is chosen (used for SEO/canonical/OG).
  url: "https://www.nonnalodge.com",

  contact: {
    addressLine1: "Off Fire Service Road, Aduamoa-Kwahu",
    addressLine2: "P.O. Box 10, Eastern Region",
    country: "Ghana",
    phones: ["+233 59 818 8881", "+233 20 565 5544", "+233 59 828 8282"],
    email: "nonnalodge3@gmail.com",
    hoursReception: "Reception open 24 hours", // 24-hour reception
  },

  // Used for the key-free Google Maps embed (no coordinates needed).
  mapQuery: "Nonna Lodge, Aduamoa-Kwahu, Eastern Region, Ghana",

  // TODO: point at the real booking engine. Falls back to the contact page.
  bookingUrl: "/contact",

  social: {
    // TODO: replace with real profile URLs (empty links are hidden in the UI).
    instagram: "",
    facebook: "",
    twitter: "",
  },
} as const;

export interface NavItem {
  label: string;
  href: string;
}

/** Primary navigation. `Dining` is dropped during the image pass if no food photos exist. */
export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Rooms", href: "/rooms" },
  { label: "Experiences", href: "/experiences" },
  { label: "Dining", href: "/dining" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
