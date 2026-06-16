import { cn } from "@/lib/cn";
import { site } from "@/data/site";

/** Key-free Google Maps embed centred on the lodge (uses a text query, no API key). */
export function MapEmbed({ className }: { className?: string }) {
  const src = `https://www.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&output=embed`;
  return (
    <iframe
      title={`Map showing the location of ${site.name}`}
      src={src}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      allowFullScreen
      className={cn(
        "aspect-[16/9] w-full rounded-2xl border border-stone-200",
        className,
      )}
    />
  );
}
