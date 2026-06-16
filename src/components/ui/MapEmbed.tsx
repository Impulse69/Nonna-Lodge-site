import { MapPin } from "lucide-react";
import { cn } from "@/lib/cn";
import { site } from "@/data/site";

/** Key-free Google Maps embed pinned to the lodge's coordinates (no API key). */
export function MapEmbed({ className }: { className?: string }) {
  const src = `https://www.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&z=17&output=embed`;
  return (
    <div className={cn("flex flex-col gap-3", className)}>
      <iframe
        title={`Map showing the location of ${site.name}`}
        src={src}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        className="aspect-[16/9] w-full rounded-2xl border border-stone-200"
      />
      <a
        href={site.mapUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 self-start text-sm font-medium text-clay hover:text-clay-dark"
      >
        <MapPin className="h-4 w-4" aria-hidden="true" />
        Get directions
      </a>
    </div>
  );
}
