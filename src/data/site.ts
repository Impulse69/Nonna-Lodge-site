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
    addressLine1: "TODO: Street address",
    addressLine2: "TODO: City, Region, Postcode",
    country: "TODO: Country",
    phone: "TODO: +00 000 000 000",
    // Keep this a valid-looking placeholder so mailto: links don't break.
    email: "hello@nonnalodge.com", // TODO: real reservations email
    hoursReception: "Reception open daily, 7:00 – 22:00", // TODO: confirm hours
  },

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
