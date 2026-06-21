import { Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Logo } from "@/components/layout/Logo";
import { company, navigationItems } from "@/data/company";
import { products } from "@/data/products";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--footer-background)] py-10 md:py-12">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr_1fr] lg:gap-10">
          <div>
            <Logo />
            <p className="mt-5 max-w-md text-sm leading-7 text-[var(--muted)]">{company.description}</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-[var(--foreground)]">Explore</h3>
            <div className="mt-4 grid gap-3">
              {navigationItems.map((item) => (
                <a key={item.href} href={item.href} className="text-sm text-[var(--muted)] hover:text-[var(--foreground)]">
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-[var(--foreground)]">Contact</h3>
            <div className="mt-4 grid gap-3 text-sm text-[var(--muted)]">
              <a className="inline-flex min-w-0 items-center gap-2 break-all hover:text-[var(--foreground)]" href={`mailto:${company.email}`}>
                <Mail className="size-4 shrink-0" />
                {company.email}
              </a>
              <a className="inline-flex min-w-0 items-center gap-2 hover:text-[var(--foreground)]" href={`tel:${company.phone.replaceAll(" ", "")}`}>
                <Phone className="size-4 shrink-0" />
                {company.phone}
              </a>
              <span className="inline-flex items-center gap-2">
                <MapPin className="size-4 shrink-0" />
                {company.location}
              </span>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-4 border-t border-[var(--border)] pt-6 text-xs text-[var(--muted)] md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <p>{products.length} product categories ready for catalog expansion.</p>
        </div>
      </Container>
    </footer>
  );
}
