import { Check } from "lucide-react";
import { Reveal } from "@/components/animations/Reveal";
import { MotionGroup } from "@/components/animations/MotionGroup";
import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { ProductVisual } from "@/components/ui/ProductVisual";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { products } from "@/data/products";
import { fadeUp } from "@/animations/fadeUp";

export function Products() {
  return (
    <section id="products" className="section-y">
      <Container>
        <SectionHeading
          eyebrow="Product System"
          title="A scalable filtration catalog for industrial teams."
          description="Every product category is driven by structured data, making it straightforward to add variants, technical files, CMS entries, and detail pages later."
          align="center"
        />
        <MotionGroup className="mt-10 grid gap-4 md:mt-14 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <Reveal key={product.id} variants={fadeUp}>
              <Card variant="gradient" className="group h-full overflow-hidden p-0 hover-lift">
                <div className="relative aspect-[4/3] overflow-hidden rounded-t-[var(--radius-lg)]">
                  <ProductVisual
                    src={product.image}
                    alt={product.title}
                    sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 sm:p-6">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">{product.eyebrow}</p>
                    <product.icon className="size-5 text-[var(--primary)]" />
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-[var(--foreground)] sm:text-xl">{product.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)] sm:mt-3 sm:leading-7">{product.description}</p>
                  <div className="mt-4 grid gap-2 sm:mt-5">
                    {product.specs.map((spec) => (
                      <span key={spec} className="inline-flex items-center gap-2 text-sm text-[var(--muted)]">
                        <Check className="size-4 text-[var(--success)]" />
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}
        </MotionGroup>
      </Container>
    </section>
  );
}
