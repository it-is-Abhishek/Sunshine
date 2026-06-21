import { Reveal } from "@/components/animations/Reveal";
import { MotionGroup } from "@/components/animations/MotionGroup";
import { Container } from "@/components/layout/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { industries } from "@/data/industries";
import { fadeUp } from "@/animations/fadeUp";

export function Industries() {
  return (
    <section id="industries" className="section-y bg-[var(--section-contrast)]">
      <Container>
        <SectionHeading
          eyebrow="Industries"
          title="Built for facilities where filtration uptime matters."
          description="The system is designed for industrial buyers who need practical product selection, stable specifications, and long-term supply."
        />
        <MotionGroup className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3">
          {industries.map((industry) => (
            <Reveal key={industry.id} variants={fadeUp}>
              <GlassCard className="h-full">
                <industry.icon className="size-7 text-[var(--accent)]" />
                <h3 className="mt-4 text-lg font-semibold text-[var(--foreground)] md:mt-5">{industry.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)] md:mt-3 md:leading-7">{industry.description}</p>
              </GlassCard>
            </Reveal>
          ))}
        </MotionGroup>
      </Container>
    </section>
  );
}
