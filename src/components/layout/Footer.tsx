import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { navItems, site } from "@/data/site";

const socialLinks = [
  { href: site.social.instagram, label: "Instagram" },
  { href: site.social.facebook, label: "Facebook" },
  { href: site.social.twitter, label: "Twitter" },
].filter((s) => s.href);

export function Footer() {
  return (
    <footer className="mt-auto border-t border-stone-200 bg-sand">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3 lg:px-8 lg:py-16">
        {/* Brand */}
        <div>
          <p className="font-serif text-2xl font-semibold text-charcoal">{site.name}</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-stone-600">{site.tagline}.</p>
          {socialLinks.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-2">
              {socialLinks.map(({ href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-stone-300 px-3 py-1.5 text-xs font-medium text-charcoal transition-colors hover:border-clay hover:text-clay"
                >
                  {label}
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Explore */}
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-charcoal">Explore</h2>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-stone-600 transition-colors hover:text-clay">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-charcoal">Get in touch</h2>
          <ul className="mt-4 space-y-3 text-sm text-stone-600">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-clay" aria-hidden="true" />
              <span>
                {site.contact.addressLine1}
                <br />
                {site.contact.addressLine2}
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 shrink-0 text-clay" aria-hidden="true" />
              <a href={`tel:${site.contact.phone.replace(/\s+/g, "")}`} className="hover:text-clay">
                {site.contact.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 shrink-0 text-clay" aria-hidden="true" />
              <a href={`mailto:${site.contact.email}`} className="hover:text-clay">
                {site.contact.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-stone-300/60">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-stone-500 sm:flex-row sm:px-6 lg:px-8">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>Crafted with care for a memorable stay.</p>
        </div>
      </div>
    </footer>
  );
}
