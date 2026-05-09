export const dynamic = 'force-dynamic';
import { notFound } from "next/navigation";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { createMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/container";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Badge } from "@/components/ui/badge";
import { CTASection } from "@/components/sections/cta-section";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = await prisma.caseStudy.findUnique({ where: { slug } });

  if (!study) {
    return createMetadata({
      title: "Case Study Not Found",
      description: "The requested case study could not be found.",
      path: "/work",
    });
  }

  return createMetadata({
    title: study.title,
    description: study.summary,
    path: `/work/${study.slug}`,
  });
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = await prisma.caseStudy.findUnique({ where: { slug } });

  if (!study || !study.published) {
    notFound();
  }

  return (
    <>
      <article className="relative pt-28 pb-16 md:pt-36 md:pb-20 lg:pt-44 lg:pb-28 overflow-hidden">
        <Container className="relative">
          {/* Back link */}
          <ScrollReveal>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-text-primary transition-colors mb-8"
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M13 8H3M7 4L3 8l4 4" />
              </svg>
              Back to Work
            </Link>
          </ScrollReveal>

          {/* Header */}
          <ScrollReveal delay={0.05}>
            <Badge variant="accent" className="mb-6">
              {study.industry}
            </Badge>
            <h1
              className="gradient-text font-bold tracking-tight leading-[1.08] max-w-4xl"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            >
              {study.title}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-text-secondary leading-relaxed max-w-3xl">
              {study.summary}
            </p>
          </ScrollReveal>
        </Container>
      </article>

      {/* Divider */}
      <div className="section-divider mx-auto max-w-[1344px]" />

      {/* Content sections */}
      <Container>
        <div className="py-16 md:py-20 space-y-0">
          {/* Problem */}
          <ScrollReveal>
            <section className="py-12 md:py-16">
              <p className="text-text-muted text-xs font-semibold uppercase tracking-widest mb-3">
                01
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-text-primary tracking-tight mb-6">
                The Problem
              </h2>
              <div className="text-text-secondary leading-[1.8] max-w-3xl whitespace-pre-line">
                {study.problem}
              </div>
            </section>
          </ScrollReveal>

          <div className="section-divider" />

          {/* Solution */}
          <ScrollReveal>
            <section className="py-12 md:py-16">
              <p className="text-text-muted text-xs font-semibold uppercase tracking-widest mb-3">
                02
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-text-primary tracking-tight mb-6">
                The Solution
              </h2>
              <div className="text-text-secondary leading-[1.8] max-w-3xl whitespace-pre-line">
                {study.solution}
              </div>
            </section>
          </ScrollReveal>

          <div className="section-divider" />

          {/* Outcome */}
          <ScrollReveal>
            <section className="py-12 md:py-16">
              <p className="text-text-muted text-xs font-semibold uppercase tracking-widest mb-3">
                03
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-text-primary tracking-tight mb-6">
                The Outcome
              </h2>
              <div className="text-text-secondary leading-[1.8] max-w-3xl whitespace-pre-line">
                {study.outcome}
              </div>
            </section>
          </ScrollReveal>

          <div className="section-divider" />

          {/* Tech Stack */}
          <ScrollReveal>
            <section className="py-12 md:py-16">
              <p className="text-text-muted text-xs font-semibold uppercase tracking-widest mb-3">
                Stack
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-text-primary tracking-tight mb-8">
                Tech Stack
              </h2>
              <div className="flex flex-wrap gap-3">
                {study.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center rounded-lg px-4 py-2.5 text-sm font-medium text-text-secondary bg-surface border border-border transition-colors hover:border-border-strong hover:text-text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>
          </ScrollReveal>
        </div>
      </Container>

      <CTASection />
    </>
  );
}
