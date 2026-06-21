import { Reveal } from "@/components/animations/Reveal";
import { MotionGroup } from "@/components/animations/MotionGroup";
import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { trustStats } from "@/data/company";
import { fadeUp } from "@/animations/fadeUp";

export function Trust() {
  return (
    <section className="py-8 md:py-10">
      <Container>
        <MotionGroup className="grid grid-cols-2 gap-3 md:gap-4 lg:grid-cols-4">
          {trustStats.map((stat) => (
            <Reveal key={stat.label} variants={fadeUp}>
              <Card variant="glass" className="h-full hover-lift">
                <p className="text-3xl font-semibold text-gradient md:text-4xl">{stat.value}</p>
                <h3 className="mt-3 text-sm font-semibold text-[var(--foreground)] md:mt-4 md:text-base">{stat.label}</h3>
                <p className="mt-2 text-xs leading-5 text-[var(--muted)] md:text-sm md:leading-6">{stat.detail}</p>
              </Card>
            </Reveal>
          ))}
        </MotionGroup>
      </Container>
    </section>
  );
}
