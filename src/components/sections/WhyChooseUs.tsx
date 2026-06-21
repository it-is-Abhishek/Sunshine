import { Reveal } from "@/components/animations/Reveal";
import { MotionGroup } from "@/components/animations/MotionGroup";
import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { valuePropositions } from "@/data/company";
import { fadeUp } from "@/animations/fadeUp";

export function WhyChooseUs() {
  return (
    <section id="quality" className="section-y">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start xl:gap-12">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Premium execution without unnecessary complexity."
            description="Sun Shine Enterprises is positioned around clarity: the right product, the right specification, and a procurement experience that respects industrial timelines."
          />
          <MotionGroup className="grid gap-4 sm:grid-cols-2">
            {valuePropositions.map((item) => (
              <Reveal key={item.id} variants={fadeUp}>
                <Card variant="elevated" className="h-full hover-lift">
                  <item.icon className="size-7 text-[var(--primary)]" />
                  <h3 className="mt-4 text-lg font-semibold text-[var(--foreground)] md:mt-5">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)] md:mt-3 md:leading-7">{item.description}</p>
                </Card>
              </Reveal>
            ))}
          </MotionGroup>
        </div>
      </Container>
    </section>
  );
}
