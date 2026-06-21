import { Mail, MapPin, Phone } from "lucide-react";
import { Reveal } from "@/components/animations/Reveal";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { company } from "@/data/company";
import { products } from "@/data/products";

export function Contact() {
  return (
    <section id="contact" className="section-y">
      <Container>
        <Reveal>
          <Card variant="gradient" className="relative overflow-hidden p-5 sm:p-8 md:p-12">
            <div className="absolute right-0 top-0 size-80 translate-x-1/3 -translate-y-1/3 rounded-full bg-[var(--hero-glow)] blur-3xl" />
            <div className="relative grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">Start a Specification</p>
                <h2 className="mt-4 max-w-3xl text-balance text-[1.85rem] font-semibold leading-[1.08] text-[var(--foreground)] md:mt-5 md:text-5xl">
                  Bring the filtration requirement. We will help shape the product path.
                </h2>
                <p className="mt-4 max-w-2xl text-[0.95rem] leading-7 text-[var(--muted)] md:mt-5 md:text-base md:leading-8">
                  Share your process media, flow, pressure, micron rating, housing size, cartridge dimensions, or project brief.
                </p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row md:mt-8">
                  <Button href={`mailto:${company.email}`} size="lg" className="w-full sm:w-auto">
                    Email Requirement
                  </Button>
                  <Button href={`tel:${company.phone.replaceAll(" ", "")}`} size="lg" variant="outline" className="w-full sm:w-auto">
                    Call Sales
                  </Button>
                </div>
              </div>
              <div className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface-glass)] p-5 backdrop-blur-xl md:p-6">
                <div className="grid gap-5 text-sm text-[var(--muted)]">
                  <a className="flex min-w-0 items-center gap-3 break-all hover:text-[var(--foreground)]" href={`mailto:${company.email}`}>
                    <Mail className="size-5 text-[var(--accent)]" />
                    {company.email}
                  </a>
                  <a className="flex min-w-0 items-center gap-3 hover:text-[var(--foreground)]" href={`tel:${company.phone.replaceAll(" ", "")}`}>
                    <Phone className="size-5 text-[var(--accent)]" />
                    {company.phone}
                  </a>
                  <span className="flex items-center gap-3">
                    <MapPin className="size-5 text-[var(--accent)]" />
                    {company.location}
                  </span>
                </div>
                <div className="mt-6 border-t border-[var(--border)] pt-6">
                  <p className="text-sm font-semibold text-[var(--foreground)]">Catalog foundation</p>
                  <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                    {products.length} product categories are already structured for detail pages, filters, downloads, and CMS entries.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </Reveal>
      </Container>
    </section>
  );
}
