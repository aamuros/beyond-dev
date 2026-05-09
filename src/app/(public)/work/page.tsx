export const dynamic = 'force-dynamic';
import { prisma } from "@/lib/prisma";
import { createMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/container";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { CaseStudyCard } from "@/components/sections/case-study-card";
import { CTASection } from "@/components/sections/cta-section";

export const metadata = createMetadata({
  title: "Work",
  description:
    "Real projects, real outcomes. Browse our case studies to see how we help businesses ship custom software.",
  path: "/work",
});

export default async function WorkPage() {
  const caseStudies = await prisma.caseStudy.findMany({
    where: { published: true },
    orderBy: { createdAt: "desc" },
  });

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-12 md:pt-40 md:pb-16 lg:pt-52 lg:pb-20 overflow-hidden">
        <Container className="relative">
          <ScrollReveal>
            <p className="text-text-muted text-sm font-semibold uppercase tracking-widest mb-5">
              Case Studies
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.05}>
            <h1
              className="gradient-text font-bold tracking-tight leading-[1.05] max-w-3xl"
              style={{ fontSize: "clamp(2.25rem, 5.5vw, 4rem)" }}
            >
              Work that speaks for itself
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="mt-6 md:mt-8 text-lg md:text-xl text-text-secondary leading-relaxed max-w-xl">
              Real projects, real outcomes. Here are a few we can talk about.
            </p>
          </ScrollReveal>
        </Container>
      </section>

      {/* Divider */}
      <div className="section-divider mx-auto max-w-[1344px]" />

      {/* Case study grid */}
      <section className="py-16 md:py-20 lg:py-28">
        <Container>
          {caseStudies.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {caseStudies.map((study, i) => (
                <ScrollReveal key={study.id} delay={i * 0.06}>
                  <CaseStudyCard
                    title={study.title}
                    slug={study.slug}
                    industry={study.industry}
                    summary={study.summary}
                    techStack={study.techStack}
                  />
                </ScrollReveal>
              ))}
            </div>
          ) : (
            <div className="text-center py-24">
              <p className="text-text-muted text-lg">
                Case studies coming soon. Check back for updates.
              </p>
            </div>
          )}
        </Container>
      </section>

      <CTASection />
    </>
  );
}
