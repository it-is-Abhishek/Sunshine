"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Mail, Menu, Phone, X } from "lucide-react";
import { navItem, navShell } from "@/animations/navLoad";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { Logo } from "@/components/layout/Logo";
import { company, navigationItems } from "@/data/company";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <motion.header
      className="sticky top-0 z-[var(--z-nav)] border-b border-[var(--border)] bg-[var(--nav-background)] shadow-[0_10px_40px_rgba(35,51,107,0.06)] backdrop-blur-2xl"
      initial={false}
      animate="visible"
      variants={navShell}
    >
      <Container className="hidden h-[var(--nav-height)] items-center justify-between lg:flex">
        <motion.div variants={navItem}>
          <Logo idPrefix="navbar-desktop-logo" />
        </motion.div>
        <nav className="flex items-center gap-7" aria-label="Primary navigation">
          {navigationItems.map((item) => (
            <motion.a
              key={item.href}
              href={item.href}
              variants={navItem}
              className="font-[family-name:var(--font-sora)] text-[1.18rem] font-semibold tracking-[0.01em] text-[#18243f] transition hover:text-[var(--accent)]"
            >
              {item.label}
            </motion.a>
          ))}
        </nav>
        <motion.div variants={navItem} className="flex items-center gap-3">
          <Button
            href="/contact"
            variant="outline"
            size="md"
            className="gradient-border font-[family-name:var(--font-sora)] font-semibold text-[#18243f]"
          >
            Contact Us
          </Button>
        </motion.div>
      </Container>
      <Container className="flex h-[var(--nav-height)] items-center justify-between gap-2 lg:hidden">
        <motion.button
          variants={navItem}
          className="-ml-2 grid size-12 shrink-0 place-items-center rounded-[var(--radius-full)] text-[var(--foreground)] transition hover:bg-[var(--surface-elevated)]"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          {isMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </motion.button>
        <motion.div variants={navItem} className="flex min-w-0 flex-1 items-center">
          <a href="#" className="inline-flex h-12 min-w-0 items-center gap-2.5 text-[var(--foreground)]" aria-label={company.name}>
            <Logo compact linked={false} idPrefix="navbar-mobile-logo" className="pointer-events-none grid size-10 shrink-0 place-items-center [&_svg]:!h-10 [&_svg]:!w-10 [&_svg]:overflow-visible" />
            <span className="truncate font-[family-name:var(--font-sora)] text-[1.35rem] font-bold tracking-[0.02em]">
              SUN SHINE
            </span>
          </a>
        </motion.div>
        <motion.div variants={navItem} className="flex h-12 shrink-0 items-center gap-1">
          <a
            className="grid size-12 place-items-center rounded-[var(--radius-full)] text-[var(--foreground)] transition hover:bg-[var(--surface-elevated)]"
            href={`tel:${company.phone.replaceAll(" ", "")}`}
            aria-label="Call sales"
          >
            <Phone className="size-5" />
          </a>
          <a
            className="hidden size-12 place-items-center rounded-[var(--radius-full)] text-[var(--foreground)] transition hover:bg-[var(--surface-elevated)] min-[420px]:grid"
            href={`mailto:${company.email}`}
            aria-label="Email sales"
          >
            <Mail className="size-5" />
          </a>
          <a
            className="inline-flex h-12 items-center px-1.5 text-sm font-semibold text-[var(--primary)] transition hover:text-[var(--accent)]"
            href="/contact"
          >
            Contact
          </a>
        </motion.div>
      </Container>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 top-[var(--nav-height)] z-[var(--z-overlay)] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
          >
            <motion.button
              type="button"
              aria-label="Close navigation menu"
              className="absolute inset-0 bg-[#18243f]/24 backdrop-blur-[2px]"
              onClick={() => setIsMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.aside
              className="relative flex h-[calc(100svh-var(--nav-height))] w-[min(86vw,22rem)] flex-col overflow-hidden rounded-r-[var(--radius-xl)] border-r border-[var(--border)] bg-[var(--background)] shadow-[24px_0_80px_rgba(35,51,107,0.2)]"
              initial={{ x: "-104%", opacity: 0.9 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-104%", opacity: 0.9 }}
              transition={{ type: "spring", stiffness: 360, damping: 34 }}
            >
              <div className="border-b border-[var(--border)] px-5 py-4">
                <div className="inline-flex items-center gap-3 text-[var(--foreground)]">
                  <Logo compact linked={false} idPrefix="mobile-drawer-logo" className="shrink-0 [&_svg]:h-11 [&_svg]:w-11" />
                  <div>
                    <p className="font-[family-name:var(--font-sora)] text-lg font-bold leading-none">
                      SUN SHINE
                    </p>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
                      Enterprises
                    </p>
                  </div>
                </div>
              </div>
              <nav className="grid gap-1 px-4 pb-3 pt-4" aria-label="Mobile navigation">
                {navigationItems.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    className="group flex items-center justify-between rounded-[var(--radius-md)] px-4 py-3 font-[family-name:var(--font-sora)] text-base font-semibold text-[var(--foreground)] transition hover:bg-[var(--surface-elevated)] hover:text-[var(--accent)]"
                    onClick={() => setIsMenuOpen(false)}
                    initial={{ x: -18, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -12, opacity: 0 }}
                    transition={{ delay: 0.08 + index * 0.045, duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {item.label}
                    <span className="h-2 w-2 rounded-full bg-[var(--accent)] opacity-0 transition group-hover:opacity-100" />
                  </motion.a>
                ))}
              </nav>
              <div className="grid gap-3 border-t border-[var(--border)] px-4 pb-5 pt-4">
                <Button href="/contact" className="w-full" size="md">
                  Contact Us
                </Button>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-[var(--radius-full)] border border-[var(--border)] bg-[var(--surface-glass)] text-sm font-semibold text-[var(--foreground)]"
                    href={`tel:${company.phone.replaceAll(" ", "")}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Phone className="size-4 text-[var(--accent)]" />
                    Call
                  </a>
                  <a
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-[var(--radius-full)] border border-[var(--border)] bg-[var(--surface-glass)] text-sm font-semibold text-[var(--foreground)]"
                    href={`mailto:${company.email}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Mail className="size-4 text-[var(--accent)]" />
                    Email
                  </a>
                </div>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
