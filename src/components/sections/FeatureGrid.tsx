import { AmenityCard } from "@/components/amenities/AmenityCard";
import type { Amenity } from "@/data/amenities";

export function FeatureGrid({ amenities }: { amenities: Amenity[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {amenities.map((amenity) => (
        <AmenityCard key={amenity.title} amenity={amenity} />
      ))}
    </div>
  );
}
