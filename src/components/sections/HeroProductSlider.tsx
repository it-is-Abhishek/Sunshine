"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type HeroProductSlide = {
  id: string;
  type: "image" | "video";
  title: string;
  src: string;
  alt: string;
};

type HeroProductSliderProps = {
  slides: HeroProductSlide[];
};

export function HeroProductSlider({ slides }: HeroProductSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (slides.length < 2) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % slides.length);
    }, 3500);

    return () => window.clearInterval(timer);
  }, [slides.length]);

  const activeSlide = slides[activeIndex] ?? slides[0];

  if (!activeSlide) {
    return null;
  }

  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-md)] bg-[var(--surface-elevated)] sm:aspect-[16/11] lg:aspect-[4/3]">
      {activeSlide.type === "video" ? (
        <video
          key={activeSlide.id}
          src={activeSlide.src}
          aria-label={activeSlide.alt}
          className="size-full animate-[hero-product-fade_500ms_ease] object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
      ) : (
        <Image
          key={activeSlide.id}
          src={activeSlide.src}
          alt={activeSlide.alt}
          fill
          priority
          sizes="(min-width: 1024px) 46vw, 100vw"
          className="animate-[hero-product-fade_500ms_ease] object-cover"
        />
      )}
      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2 md:bottom-4">
        {slides.map((slide, index) => (
          <span
            key={slide.id}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === activeIndex ? "w-7 bg-[var(--accent)]" : "w-2 bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
