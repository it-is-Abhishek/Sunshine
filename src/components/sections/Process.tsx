import { Reveal } from "@/components/animations/Reveal";
import { MotionGroup } from "@/components/animations/MotionGroup";
import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { processSteps } from "@/data/company";
import { fadeUp } from "@/animations/fadeUp";

export function Process() {
  return (
    <section id="process" className="section-y">
      <Container>
        <SectionHeading
          eyebrow="Process"
          title="A clean specification workflow from inquiry to support."
          description="The operating model is structured so future CMS workflows, quote forms, and product detail pages can attach cleanly to each stage."
          align="center"
        />
        <MotionGroup className="mt-10 grid gap-4 md:mt-14 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <Reveal key={step.id} variants={fadeUp}>
              <Card variant="gradient" className="relative h-full hover-lift">
                <span className="text-sm font-semibold text-[var(--accent)]">0{index + 1}</span>
                <h3 className="mt-7 text-lg font-semibold text-[var(--foreground)] md:mt-10 md:text-xl">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)] md:mt-3 md:leading-7">{step.description}</p>
              </Card>
            </Reveal>
          ))}
        </MotionGroup>
      </Container>
    </section>
  );
}
