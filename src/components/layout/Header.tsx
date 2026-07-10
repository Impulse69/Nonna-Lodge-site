"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/cn";
import { navItems, site } from "@/data/site";
import { ButtonLink } from "@/components/ui/Button";

// Run the hero-detection synchronously before paint on the client (so the nav
// never flashes over a hero), while no-op-ing on the server.
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // Does the current page have a video hero the nav should stay clear of?
  const [hasOverlayHero, setHasOverlayHero] = useState(false);
  // For an overlay hero: is the nav allowed to show yet (hero scrolled past)?
  const [revealed, setRevealed] = useState(true);

  // Solidify the header once the user scrolls past the top of the page.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Video-hero pages render a `[data-hero-sentinel]` at the hero's bottom edge.
  // When present (desktop only — phones keep a reachable menu button), hide the
  // nav over the hero and reveal it once that sentinel scrolls above the top.
  useIsomorphicLayoutEffect(() => {
    const sentinel = document.querySelector("[data-hero-sentinel]");
    if (!sentinel) {
      setHasOverlayHero(false);
      setRevealed(true);
      return;
    }

    const wide = window.matchMedia("(min-width: 768px)");
    let observer: IntersectionObserver | undefined;

    const setup = () => {
      observer?.disconnect();
      if (!wide.matches) {
        setHasOverlayHero(false);
        setRevealed(true);
        return;
      }
      setHasOverlayHero(true);
      setRevealed(false);
      observer = new IntersectionObserver(
        ([entry]) => setRevealed(entry.boundingClientRect.top <= 0),
        { threshold: 0 },
      );
      observer.observe(sentinel);
    };

    setup();
    wide.addEventListener("change", setup);
    return () => {
      observer?.disconnect();
      wide.removeEventListener("change", setup);
    };
  }, [pathname]);

  // Overlay heroes always sit on a solid bar once revealed; ordinary pages
  // solidify on scroll.
  const solid = hasOverlayHero || scrolled;

  // Lock body scroll while the drawer is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "inset-x-0 top-0 z-50 transition-[transform,opacity,background-color,border-color] duration-300",
        // Overlay heroes need the nav out of flow so the video fills the top;
        // ordinary pages keep it sticky so content stays clear of it.
        hasOverlayHero ? "fixed" : "sticky",
        hasOverlayHero && !revealed && "pointer-events-none -translate-y-full opacity-0",
        solid
          ? "border-b border-stone-200 bg-cream/90 backdrop-blur"
          : "border-b border-transparent bg-cream/60 backdrop-blur-sm",
      )}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6 lg:px-8"
        aria-label="Primary"
      >
        <Link href="/" className="flex items-center gap-2.5" aria-label={`${site.name} home`}>
          <Image
            src="/logo.png"
            alt=""
            width={512}
            height={512}
            priority
            className="h-11 w-11 shrink-0"
          />
          <span className="flex flex-col leading-none">
            <span className="font-serif text-2xl font-semibold text-charcoal">{site.name}</span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-stone-500">Boutique Hotel</span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <ul className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-clay",
                  isActive(item.href) ? "text-clay" : "text-charcoal/80",
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <ButtonLink href={site.bookingUrl} size="md">
            Book Now
          </ButtonLink>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-md p-2 text-charcoal lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 z-40 lg:hidden",
          open ? "pointer-events-auto" : "pointer-events-none",
        )}
        aria-hidden={!open}
      >
        <div
          className={cn(
            "absolute inset-0 bg-charcoal/40 transition-opacity duration-300",
            open ? "opacity-100" : "opacity-0",
          )}
          onClick={() => setOpen(false)}
        />
        <div
          id="mobile-menu"
          className={cn(
            "absolute right-0 top-0 flex h-full w-4/5 max-w-xs flex-col bg-cream shadow-xl transition-transform duration-300 ease-out",
            open ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="flex items-center justify-between border-b border-stone-200 px-5 py-4">
            <span className="font-serif text-xl font-semibold text-charcoal">{site.name}</span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-md p-2 text-charcoal"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <ul className="flex flex-col gap-1 px-3 py-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block rounded-lg px-3 py-3 text-base font-medium transition-colors",
                    isActive(item.href)
                      ? "bg-sand text-clay"
                      : "text-charcoal hover:bg-sand/60",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-auto p-5">
            <ButtonLink
              href={site.bookingUrl}
              size="lg"
              className="w-full"
              onClick={() => setOpen(false)}
            >
              Book Now
            </ButtonLink>
          </div>
        </div>
      </div>
    </header>
  );
}
