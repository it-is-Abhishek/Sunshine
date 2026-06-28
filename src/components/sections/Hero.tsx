"use client";

import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/animations/Reveal";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { HeroProductSlider } from "@/components/sections/HeroProductSlider";
import { isVideoAsset } from "@/components/ui/ProductVisual";
import { capabilityHighlights, company } from "@/data/company";
import { products } from "@/data/products";
import { scaleIn } from "@/animations/scaleIn";
import { useState } from "react";

export function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  
    const heroSlides = products.flatMap((product) =>
      product.media?.length
        ? product.media.map((item) => ({
            id: item.id,
            type: item.type as "image" | "video",
            src: item.src,
            alt: item.alt,
            title: product.title,
            product,
          }))
        : [
            {
              id: product.id,
              type: isVideoAsset(product.image) ? "video" as const : "image" as const,
              src: product.image,
              alt: product.title,
              title: product.title,
              product,
            },
          ]
    );

  const currentProduct = heroSlides[activeIndex]?.product ?? products[0];

  return (
    <section className="relative isolate overflow-hidden pt-6 md:pt-12">
      <div className="absolute inset-0 -z-10 bg-[image:var(--hero-grid)] opacity-70" />
      <div className="absolute left-1/2 top-10 -z-10 size-[32rem] -translate-x-1/2 rounded-full bg-[var(--hero-glow)] blur-3xl" />
      <Container wide className="grid items-center gap-8 pb-12 md:gap-12 md:pb-16 lg:min-h-[calc(100svh-var(--nav-height))] lg:-translate-y-6 lg:grid-cols-[1fr_0.92fr]">
        <Reveal>
          <Badge>Industrial Luxury Filtration</Badge>
          <h1 className="mt-4 max-w-4xl text-balance text-[2.65rem] font-semibold leading-[0.98] text-[var(--foreground)] sm:text-5xl md:mt-5 md:text-6xl xl:text-7xl">
            {company.name}
          </h1>
          <p className="mt-4 max-w-2xl text-pretty text-[0.98rem] leading-7 text-[var(--muted)] md:mt-5 md:text-lg">
            {company.description}
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button href="#contact" size="md" className="w-full sm:w-auto">
              Request Quote
            </Button>
            <Button href="#products" size="md" variant="outline" icon={<ArrowUpRight className="size-5" />} className="w-full sm:w-auto">
              Explore Products
            </Button>
          </div>
          <div className="mt-6 grid gap-2.5 sm:grid-cols-2 md:mt-8 xl:grid-cols-4">
            {capabilityHighlights.map((item) => (
              <div key={item.label} className="inline-flex min-h-11 items-center gap-3 rounded-[var(--radius-full)] border border-[var(--border)] bg-[var(--surface-glass)] px-3.5 py-2.5 text-sm text-[var(--muted)]">
                <item.icon className="size-4 text-[var(--accent)]" />
                {item.label}
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal variants={scaleIn} className="relative">
          <div className="absolute -inset-5 -z-10 rounded-[var(--radius-xl)] bg-[image:var(--gradient-brand)] opacity-20 blur-2xl" />
          <GlassCard className="overflow-hidden p-5">
            

            <HeroProductSlider
              slides = {heroSlides}
              onSlideChange={setActiveIndex}
            />

            <div className="grid gap-4 p-5 md:grid-cols-[0.9fr_1.1fr] md:items-start">


             <div className="flex h-15 items-center justify-center rounded-2xl border border-slate-200 bg-white px-3 shadow-sm">
                <h2 className="whitespace-nowrap bg-gradient-to-r from-[#F59E0B] via-[#84CC16] to-[#06B6D4] bg-clip-text text-2xl font-extrabold leading-none tracking-tight text-transparent">
                  {currentProduct.title}
                </h2>
              </div>

            
                  <div className="flex max-w-[420px] flex-col gap-1">
                    {currentProduct.specs.map((spec) => (
                      <div
                        key={spec}
                        className="flex h-12 items-center gap-3 rounded-xl border border-emerald-100 bg-emerald-50 px-5 shadow-sm transition-all duration-300 hover:border-emerald-200 hover:bg-emerald-100/70 hover:shadow-md"
                      >
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-sm">
                          <CheckCircle2 className="h-2 w-2 text-emerald-600" />
                        </div>

                        <span className="flex-1 text-base font-semibold leading-5 text-slate-700">
                          {spec}
                        </span>
                      </div>
                    ))}
                  </div>
            </div>
          </GlassCard>
        </Reveal>
      </Container>
    </section>
  );
}
