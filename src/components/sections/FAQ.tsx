import { Reveal } from "@/components/animations/Reveal";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqs } from "@/data/company";

export function FAQ() {
  return (
    <section className="section-y">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10">
          <SectionHeading
            eyebrow="FAQ"
            title="Designed for practical industrial questions."
            description="These entries are data-driven and ready for expansion into a searchable knowledge base or CMS-backed support area."
          />
          <div className="grid gap-3">
            {faqs.map((faq) => (
              <Reveal key={faq.id}>
                <details className="group rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface)] p-4 open:bg-[var(--surface-elevated)] md:p-5">
                  <summary className="cursor-pointer list-none text-[0.95rem] font-semibold text-[var(--foreground)] md:text-base">
                    <span className="flex items-center justify-between gap-4">
                      {faq.question}
                      <span className="grid size-8 shrink-0 place-items-center rounded-full bg-[var(--surface-glass)] text-[var(--accent)] transition group-open:rotate-45">
                        +
                      </span>
                    </span>
                  </summary>
                  <p className="mt-4 text-sm leading-6 text-[var(--muted)] md:leading-7">{faq.answer}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
