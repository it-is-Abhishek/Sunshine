import type { Metadata } from "next";
import { Building2, Mail, MapPin, MessageSquare, Phone, Send, User } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: `Contact Us | ${company.name}`,
  description: `Contact ${company.name} for industrial filtration products, project support, and company location details.`,
};

const inputClass =
  "h-12 w-full rounded-[var(--radius-sm)] border border-[var(--border)] bg-white/80 px-4 text-sm text-[var(--foreground)] outline-none transition focus:border-[var(--border-strong)] focus:ring-4 focus:ring-[rgba(29,194,198,0.12)]";

const labelClass = "text-sm font-semibold text-[var(--foreground)]";

export default function ContactPage() {
  const mapQuery = encodeURIComponent(`${company.name}, ${company.location}`);

  return (
    <section className="section-y bg-[var(--section-contrast)]">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">Contact Us</p>
            <h1 className="mt-4 max-w-3xl text-balance text-4xl font-semibold leading-tight text-[var(--foreground)] md:text-5xl">
              Share your requirement and visit details.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--muted)]">
              Send your project details, contact information, and company address so the team can respond with the right filtration support.
            </p>

            <div className="mt-8 grid gap-4 rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface-glass)] p-5 text-sm text-[var(--muted)] backdrop-blur-xl">
              <a className="flex items-center gap-3 hover:text-[var(--foreground)]" href={`mailto:${company.email}`}>
                <Mail className="size-5 text-[var(--accent)]" />
                {company.email}
              </a>
              <a className="flex items-center gap-3 hover:text-[var(--foreground)]" href={`tel:${company.phone.replaceAll(" ", "")}`}>
                <Phone className="size-5 text-[var(--accent)]" />
                {company.phone}
              </a>
              <span className="flex items-center gap-3">
                <MapPin className="size-5 text-[var(--accent)]" />
                {company.location}
              </span>
            </div>

            <div className="mt-6 overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-card)]">
              <iframe
                title={`${company.name} location map`}
                src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                className="h-[360px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <form
            action={`mailto:${company.email}`}
            method="post"
            encType="text/plain"
            className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[var(--shadow-card)] md:p-7"
          >
            <div className="flex items-center gap-3 border-b border-[var(--border)] pb-5">
              <span className="grid size-11 place-items-center rounded-full bg-[var(--surface-elevated)] text-[var(--accent)]">
                <Send className="size-5" />
              </span>
              <div>
                <h2 className="text-2xl font-semibold text-[var(--foreground)]">Inquiry Form</h2>
                <p className="mt-1 text-sm text-[var(--muted)]">Fields marked with * are required.</p>
              </div>
            </div>

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <label className="grid gap-2">
                <span className={labelClass}>Name *</span>
                <div className="relative">
                  <User className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-[var(--muted)]" />
                  <input className={`${inputClass} pl-11`} name="Name" type="text" autoComplete="name" required />
                </div>
              </label>

              <label className="grid gap-2">
                <span className={labelClass}>Phone *</span>
                <div className="relative">
                  <Phone className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-[var(--muted)]" />
                  <input className={`${inputClass} pl-11`} name="Phone" type="tel" autoComplete="tel" required />
                </div>
              </label>

              <label className="grid gap-2">
                <span className={labelClass}>Email *</span>
                <div className="relative">
                  <Mail className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-[var(--muted)]" />
                  <input className={`${inputClass} pl-11`} name="Email" type="email" autoComplete="email" required />
                </div>
              </label>

              <label className="grid gap-2">
                <span className={labelClass}>Company Name</span>
                <div className="relative">
                  <Building2 className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-[var(--muted)]" />
                  <input className={`${inputClass} pl-11`} name="Company Name" type="text" autoComplete="organization" />
                </div>
              </label>

              <label className="grid gap-2 md:col-span-2">
                <span className={labelClass}>Address</span>
                <input className={inputClass} name="Address" type="text" autoComplete="street-address" />
              </label>

              <label className="grid gap-2 md:col-span-2">
                <span className={labelClass}>Additional Message</span>
                <div className="relative">
                  <MessageSquare className="pointer-events-none absolute left-4 top-4 size-4 text-[var(--muted)]" />
                  <textarea
                    className="min-h-36 w-full resize-y rounded-[var(--radius-sm)] border border-[var(--border)] bg-white/80 px-4 py-3 pl-11 text-sm leading-7 text-[var(--foreground)] outline-none transition focus:border-[var(--border-strong)] focus:ring-4 focus:ring-[rgba(29,194,198,0.12)]"
                    name="Additional Message"
                  />
                </div>
              </label>
            </div>

            <div className="mt-7">
              <Button type="submit" size="lg" className="w-full md:w-auto">
                Submit Inquiry
              </Button>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}
