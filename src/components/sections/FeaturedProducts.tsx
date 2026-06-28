import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/animations/Reveal";
import { MotionGroup } from "@/components/animations/MotionGroup";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ProductVisual } from "@/components/ui/ProductVisual";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { featuredProducts } from "@/data/products";
import { fadeUp } from "@/animations/fadeUp";

export function FeaturedProducts() {
  return (
    <section className="section-y bg-[var(--section-contrast)]">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Featured Range"
            title="High-demand categories for filtration projects."
            description="A focused showcase for the categories most often used in process protection, water treatment, and plant maintenance workflows."
          />

          <Button href="#contact" variant="outline" icon={<ArrowUpRight className="size-5" />} className="w-full sm:w-auto">
            Discuss Requirement
          </Button>

        </div>
        <MotionGroup className="mt-10 grid gap-4 md:mt-12 lg:grid-cols-3">
          {featuredProducts.map((product) => (

            <Reveal key={product.id} variants={fadeUp}>

              <Card variant="glass" className="group h-full overflow-hidden p-4 hover-lift">

                  <div className="relative aspect-square overflow-hidden rounded-[var(--radius-md)] bg-white p-6">
                      <ProductVisual
                        src={product.image}
                        alt={product.title}
                        sizes="(min-width:1024px) 33vw, 100vw"
                        className="object-contain transition duration-500 group-hover:scale-105"
                      />
                    </div>


      <div className="p-2 pt-4 sm:p-3 sm:pt-5">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">{product.eyebrow}</p>
        <h3 className="mt-3 text-lg font-semibold text-[var(--foreground)] sm:text-xl">{product.title}</h3>
        <p className="mt-2 text-sm leading-6 text-[var(--muted)] sm:mt-3 sm:leading-7">{product.description}</p>
      </div>

              </Card>
            </Reveal>

          ))}
        </MotionGroup>
      </Container>
    </section>
  );
}
