"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { Product } from "@/types/content";

type HeroProductSlide = {
  id: string;
  type: "image" | "video";
  title: string;
  src: string;
  alt: string;
  product: Product;
};

type HeroProductSliderProps = {
  slides: HeroProductSlide[];
  onSlideChange?: (index: number) => void;
};

export function HeroProductSlider({
  slides,
  onSlideChange,
 }: HeroProductSliderProps) {

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    onSlideChange?.(activeIndex);
  }, [activeIndex, onSlideChange]);

  useEffect(() => {
    if (slides.length < 2) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % slides.length);
    }, 2500);

    return () => window.clearInterval(timer);
  }, [slides.length]);

  const activeSlide = slides[activeIndex] ?? slides[0];

  if (!activeSlide) {
    return null;
  }

  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-md)] bg-white p-4 sm:p-6">
      {activeSlide.type === "video" ? (
        <video
          key={activeSlide.id}
          src={activeSlide.src}
          aria-label={activeSlide.alt}
          className="animate-[hero-product-fade_500ms_ease] object-contain"
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
          className="size-full animate-[hero-product-fade_500ms_ease] object-contain"
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
