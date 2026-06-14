import type { Amenity } from "@/data/amenities";

export function AmenityCard({ amenity }: { amenity: Amenity }) {
  const { icon: Icon, title, description } = amenity;
  return (
    <div className="flex flex-col items-start gap-3 rounded-2xl border border-stone-200 bg-white/60 p-6 transition-shadow hover:shadow-md">
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-sand text-clay">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </span>
      <h3 className="text-xl text-charcoal">{title}</h3>
      <p className="text-sm leading-relaxed text-stone-600">{description}</p>
    </div>
  );
}
