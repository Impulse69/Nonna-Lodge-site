import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { PageHeader } from "@/components/sections/PageHeader";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/forms/ContactForm";
import { createMetadata } from "@/lib/seo";
import { images } from "@/data/images";
import { site } from "@/data/site";

export const metadata = createMetadata({
  title: "Contact",
  description:
    "Get in touch with Nonna Lodge to plan your stay, ask a question or make a reservation.",
  path: "/contact",
});

export default function ContactPage() {
  const details = [
    {
      icon: MapPin,
      label: "Address",
      lines: [site.contact.addressLine1, site.contact.addressLine2, site.contact.country],
    },
    { icon: Phone, label: "Phone", lines: [site.contact.phone], href: `tel:${site.contact.phone.replace(/\s+/g, "")}` },
    { icon: Mail, label: "Email", lines: [site.contact.email], href: `mailto:${site.contact.email}` },
    { icon: Clock, label: "Reception", lines: [site.contact.hoursReception] },
  ];

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get in touch"
        description="We'd love to help plan your stay at Nonna Lodge."
        image={images.contactHeader}
      />

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Details */}
            <div>
              <SectionHeading
                align="left"
                eyebrow="Reach us"
                title="Contact details"
                description="Questions, special requests or reservations — we're happy to help."
              />
              <ul className="mt-8 space-y-6">
                {details.map(({ icon: Icon, label, lines, href }) => (
                  <li key={label} className="flex items-start gap-4">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sand text-clay">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-wider text-charcoal">{label}</p>
                      <div className="mt-1 text-stone-600">
                        {href ? (
                          <a href={href} className="hover:text-clay">
                            {lines[0]}
                          </a>
                        ) : (
                          lines.map((line, i) => <div key={i}>{line}</div>)
                        )}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              {/* TODO: embed an interactive map with real coordinates. */}
              <div className="mt-8 flex aspect-[16/9] items-center justify-center rounded-2xl border border-dashed border-stone-300 bg-sand text-center text-xs uppercase tracking-wider text-stone-500">
                Map embed — TODO: add coordinates
              </div>
            </div>

            {/* Form */}
            <div className="rounded-2xl border border-stone-200 bg-white/60 p-6 sm:p-8">
              <h2 className="text-2xl text-charcoal">Send an enquiry</h2>
              <p className="mt-2 text-sm text-stone-600">
                Fill in the form and we&apos;ll get back to you as soon as we can.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
