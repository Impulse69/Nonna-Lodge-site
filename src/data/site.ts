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

  // Exact coordinates for the map embed (drops a pin on the lodge).
  mapQuery: "6.6389336,-0.7564041",
  mapUrl: "https://www.google.com/maps?q=6.6389336,-0.7564041&z=17",

  // TODO: point at the real booking engine. Falls back to the contact page.
  bookingUrl: "/contact",

  // Full brand film. Paste the Vimeo video ID here — the numbers at the end of
  // the share link, e.g. vimeo.com/123456789 -> "123456789". Leave empty to
  // hide the "Watch our film" section on the home page.
  film: {
    vimeoId: "1208922393" as string,
  },

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
