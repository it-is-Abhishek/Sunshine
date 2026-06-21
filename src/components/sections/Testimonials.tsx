import { Quote } from "lucide-react";
import { Reveal } from "@/components/animations/Reveal";
import { MotionGroup } from "@/components/animations/MotionGroup";
import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/testimonials";
import { fadeUp } from "@/animations/fadeUp";

export function Testimonials() {
  return (
    <section className="section-y bg-[var(--section-contrast)]">
      <Container>
        <SectionHeading
          eyebrow="Client Signals"
          title="Built around the realities of industrial buying."
          description="Representative feedback themes for a premium B2B experience: clarity, repeatability, responsiveness, and technical confidence."
          align="center"
        />
        <MotionGroup className="mt-10 grid gap-4 md:mt-12 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Reveal key={testimonial.id} variants={fadeUp}>
              <Card variant="elevated" className="h-full hover-lift">
                <Quote className="size-7 text-[var(--primary)]" />
                <blockquote className="mt-5 text-[0.95rem] leading-7 text-[var(--foreground)] md:mt-6 md:text-base md:leading-8">
                  “{testimonial.quote}”
                </blockquote>
                <div className="mt-6 border-t border-[var(--border)] pt-4 md:mt-8 md:pt-5">
                  <p className="font-semibold text-[var(--foreground)]">{testimonial.name}</p>
                  <p className="mt-1 text-sm text-[var(--muted)]">{testimonial.role}</p>
                </div>
              </Card>
            </Reveal>
          ))}
        </MotionGroup>
      </Container>
    </section>
  );
}
