import { Quote } from "lucide-react";

/*
  Sample testimonials with placeholder (fictional) names — swap for real guest
  reviews (e.g. from Google or Booking.com) when available.
*/
const testimonials = [
  {
    quote:
      "A truly relaxing stay. The room was beautiful, the staff went out of their way to help, and we left feeling completely refreshed.",
    name: "Akosua Boateng",
    detail: "Stayed in the Premium Room",
  },
  {
    quote:
      "Everything about Nonna Lodge felt warm and personal. The setting is gorgeous and the food was a highlight of our trip.",
    name: "Kwame Mensah",
    detail: "Visited from Accra",
  },
  {
    quote:
      "Wonderful hospitality and such a peaceful place. We're already planning our next visit.",
    name: "Yaa Owusu",
    detail: "Family Room / Suite",
  },
];

export function Testimonials() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {testimonials.map((t, i) => (
        <figure
          key={i}
          className="flex flex-col rounded-2xl border border-stone-200 bg-white/60 p-6"
        >
          <Quote className="h-7 w-7 text-clay/40" aria-hidden="true" />
          <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-stone-700">
            “{t.quote}”
          </blockquote>
          <figcaption className="mt-5 border-t border-stone-200 pt-4 text-sm">
            <span className="font-semibold text-charcoal">{t.name}</span>
            <span className="block text-stone-500">{t.detail}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
