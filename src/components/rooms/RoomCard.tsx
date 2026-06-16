import { Users, BedDouble } from "lucide-react";
import { SmartImage } from "@/components/ui/SmartImage";
import { ButtonLink } from "@/components/ui/Button";
import type { Room } from "@/data/rooms";

export function RoomCard({ room }: { room: Room }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white/60 transition-shadow hover:shadow-lg">
      <SmartImage
        image={room.image}
        className="aspect-[4/3] w-full"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        zoomOnHover
      />
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-2xl text-charcoal">{room.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-stone-600">{room.shortDescription}</p>

        <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-stone-600">
          <span className="inline-flex items-center gap-1.5">
            <Users className="h-4 w-4 text-clay" aria-hidden="true" />
            {room.occupancy}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <BedDouble className="h-4 w-4 text-clay" aria-hidden="true" />
            {room.bed}
          </span>
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-stone-200 pt-4">
          <span className="text-sm font-medium text-charcoal">
            {room.rateFrom}
            <span className="font-normal text-stone-500"> / night</span>
          </span>
          <ButtonLink href="/rooms" variant="outline" size="md">
            View details
          </ButtonLink>
        </div>
      </div>
    </article>
  );
}
