"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

/*
  NOTE: This form is not yet wired to a backend. On submit it currently shows a
  confirmation only. TODO: connect to an email service / API route (e.g. a Next
  route handler, Formspree, Resend, or a booking provider) to actually send.
*/

const inputClass =
  "w-full rounded-lg border border-stone-300 bg-white px-4 py-2.5 text-sm text-charcoal shadow-sm transition-colors placeholder:text-stone-400 focus:border-clay focus:outline-none focus:ring-1 focus:ring-clay";
const labelClass = "mb-1.5 block text-sm font-medium text-charcoal";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: replace with a real submission to a backend endpoint.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-sage/40 bg-sage/10 p-8 text-center">
        <CheckCircle2 className="h-10 w-10 text-sage" aria-hidden="true" />
        <h3 className="text-xl text-charcoal">Thank you</h3>
        <p className="max-w-sm text-sm text-stone-600">
          Your enquiry has been received. We&apos;ll be in touch shortly to help plan your stay.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Full name
          </label>
          <input id="name" name="name" type="text" required autoComplete="name" className={inputClass} />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" className={inputClass} />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone <span className="text-stone-400">(optional)</span>
          </label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" className={inputClass} />
        </div>
        <div>
          <label htmlFor="guests" className={labelClass}>
            Guests
          </label>
          <select id="guests" name="guests" defaultValue="2" className={inputClass}>
            <option value="1">1 guest</option>
            <option value="2">2 guests</option>
            <option value="3">3 guests</option>
            <option value="4">4 guests</option>
            <option value="5+">5+ guests</option>
          </select>
        </div>
        <div>
          <label htmlFor="checkin" className={labelClass}>
            Check-in
          </label>
          <input id="checkin" name="checkin" type="date" className={inputClass} />
        </div>
        <div>
          <label htmlFor="checkout" className={labelClass}>
            Check-out
          </label>
          <input id="checkout" name="checkout" type="date" className={inputClass} />
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell us about your stay or any special requests…"
          className={inputClass}
        />
      </div>

      <Button type="submit" size="lg" className="w-full sm:w-auto">
        <Send className="h-4 w-4" aria-hidden="true" />
        Send enquiry
      </Button>
    </form>
  );
}
