"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { site } from "@/data/site";

/*
  The form submits to FormSubmit (https://formsubmit.co) which emails each
  enquiry to site.contact.email — no backend, API keys, or secrets required.

  ONE-TIME ACTIVATION: the very first submission triggers FormSubmit to send an
  activation link to nonnalodge3@gmail.com. Click it once and all future
  enquiries will be delivered. (To hide the email address from the page source
  later, swap the address in the endpoint for the hashed one FormSubmit emails.)
*/

const ENDPOINT = `https://formsubmit.co/ajax/${site.contact.email}`;

const inputClass =
  "w-full rounded-lg border border-stone-300 bg-white px-4 py-2.5 text-sm text-charcoal shadow-sm transition-colors placeholder:text-stone-400 focus:border-clay focus:outline-none focus:ring-1 focus:ring-clay";
const labelClass = "mb-1.5 block text-sm font-medium text-charcoal";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    // Honeypot — if a bot filled the hidden field, silently succeed.
    if (formData.get("_honey")) {
      setStatus("success");
      return;
    }

    const payload: Record<string, string> = {
      _subject: "New enquiry from the Nonna Lodge website",
      _template: "table",
      _captcha: "false",
    };
    formData.forEach((value, key) => {
      if (key !== "_honey") payload[key] = value.toString();
    });

    setStatus("submitting");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok && (json.success === "true" || json.success === true)) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
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
      {/* Honeypot field (hidden from people, catches bots) */}
      <input
        type="text"
        name="_honey"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

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

      {status === "error" && (
        <p className="flex items-start gap-2 rounded-lg border border-clay/30 bg-clay/5 p-3 text-sm text-clay-dark">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          <span>
            Sorry, something went wrong sending your enquiry. Please try again, or email us
            directly at{" "}
            <a href={`mailto:${site.contact.email}`} className="underline">
              {site.contact.email}
            </a>
            .
          </span>
        </p>
      )}

      <Button type="submit" size="lg" disabled={status === "submitting"} className="w-full sm:w-auto">
        <Send className="h-4 w-4" aria-hidden="true" />
        {status === "submitting" ? "Sending…" : "Send enquiry"}
      </Button>
    </form>
  );
}
