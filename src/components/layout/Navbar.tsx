"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
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
      <Container className="flex h-[var(--nav-height)] items-center justify-between">
        <motion.div variants={navItem}>
          <Logo />
        </motion.div>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
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
        <motion.div variants={navItem} className="hidden items-center gap-3 md:flex">
          <Button
            href="/contact"
            variant="outline"
            size="md"
            className="gradient-border font-[family-name:var(--font-sora)] font-semibold text-[#18243f]"
          >
            Contact Us
          </Button>
        </motion.div>
        <motion.button
          variants={navItem}
          className="grid size-11 place-items-center rounded-[var(--radius-full)] border border-[var(--border)] bg-[var(--surface-glass)] text-[var(--foreground)] transition hover:border-[var(--border-strong)] lg:hidden"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          {isMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </motion.button>
      </Container>
      <div
        className={`lg:hidden ${
          isMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div
          className={`absolute inset-x-0 top-full border-b border-[var(--border)] bg-[var(--background)] px-4 pb-5 shadow-[0_24px_60px_rgba(35,51,107,0.14)] transition duration-300 ${
            isMenuOpen ? "translate-y-0" : "-translate-y-3"
          }`}
        >
          <nav className="mx-auto grid max-w-xl gap-2 pt-3" aria-label="Mobile navigation">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-[var(--radius-md)] px-4 py-3 font-[family-name:var(--font-sora)] text-base font-semibold text-[var(--foreground)] transition hover:bg-[var(--surface-elevated)] hover:text-[var(--accent)]"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mx-auto mt-4 grid max-w-xl gap-3 border-t border-[var(--border)] pt-4">
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
        </div>
      </div>
    </motion.header>
  );
}
