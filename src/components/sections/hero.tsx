"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const mockupCards = [
  {
    id: "brief",
    label: "Project brief",
    className: "col-span-2 md:col-span-1 lg:col-span-2 row-span-2",
    content: (
      <div className="space-y-3">
        <div className="flex items-center gap-2 mb-1">
          <div className="h-2 w-2 rounded-full bg-text-muted" />
          <span className="text-[10px] text-text-muted">Internal doc</span>
        </div>
        <div className="h-2.5 w-3/4 rounded bg-surface" />
        <div className="h-2.5 w-1/2 rounded bg-surface" />
        <div className="h-2.5 w-2/3 rounded bg-surface" />
        <div className="mt-4 space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-3.5 h-3.5 rounded border border-border" />
            <div className="h-2.5 w-20 rounded bg-surface" />
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3.5 h-3.5 rounded bg-accent/30 border border-accent/40" />
            <div className="h-2.5 w-28 rounded bg-surface" />
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3.5 h-3.5 rounded bg-accent/30 border border-accent/40" />
            <div className="h-2.5 w-24 rounded bg-surface" />
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "scope",
    label: "Scope",
    className: "col-span-1",
    content: (
      <div className="space-y-2.5">
        <div className="flex items-center justify-between">
          <span className="text-[10px] text-text-muted">In scope</span>
          <span className="text-[10px] text-accent/60">4 items</span>
        </div>
        <div className="space-y-1.5">
          <div className="h-6 rounded bg-surface border border-border px-2 flex items-center">
            <div className="h-1.5 w-16 rounded bg-surface-raised" />
          </div>
          <div className="h-6 rounded bg-surface border border-border px-2 flex items-center">
            <div className="h-1.5 w-20 rounded bg-surface-raised" />
          </div>
          <div className="h-6 rounded bg-surface border border-border px-2 flex items-center">
            <div className="h-1.5 w-12 rounded bg-surface-raised" />
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "timeline",
    label: "Timeline",
    className: "col-span-1",
    content: (
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-text-primary/80" />
          <div className="h-2 w-14 rounded bg-surface" />
          <span className="text-[10px] text-text-muted ml-auto">W1</span>
        </div>
        <div className="h-1.5 w-full rounded-full bg-surface overflow-hidden">
          <div className="h-full w-full rounded-full bg-text-primary/25" />
        </div>
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-text-muted" />
          <div className="h-2 w-18 rounded bg-surface" />
          <span className="text-[10px] text-text-muted ml-auto">W2–3</span>
        </div>
        <div className="h-1.5 w-full rounded-full bg-surface overflow-hidden">
          <div className="h-full w-1/2 rounded-full bg-text-muted/30" />
        </div>
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-text-faint" />
          <div className="h-2 w-10 rounded bg-surface" />
          <span className="text-[10px] text-text-muted ml-auto">W4</span>
        </div>
        <div className="h-1.5 w-full rounded-full bg-surface" />
      </div>
    ),
  },
  {
    id: "decisions",
    label: "Open decisions",
    className: "col-span-1",
    content: (
      <div className="space-y-2">
        {["Auth provider", "Payment gateway", "Hosting"].map((item, i) => (
          <div
            key={item}
            className="flex items-center gap-2 py-1.5 px-2 rounded bg-surface"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-text-muted/60" />
            <span className="text-[11px] text-text-secondary">{item}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "handoff",
    label: "Handoff",
    className: "col-span-1",
    content: (
      <div className="space-y-2.5">
        <div className="flex items-center gap-2">
          <div className="h-5 w-5 rounded border border-border flex items-center justify-center">
            <span className="text-[8px] text-text-muted">DB</span>
          </div>
          <div className="h-2 w-16 rounded bg-surface" />
        </div>
        <div className="flex items-center gap-2">
          <div className="h-5 w-5 rounded border border-border flex items-center justify-center">
            <span className="text-[8px] text-text-muted">API</span>
          </div>
          <div className="h-2 w-12 rounded bg-surface" />
        </div>
        <div className="flex items-center gap-2">
          <div className="h-5 w-5 rounded border border-border flex items-center justify-center">
            <span className="text-[8px] text-text-muted">UI</span>
          </div>
          <div className="h-2 w-14 rounded bg-surface" />
        </div>
      </div>
    ),
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.4 + i * 0.06,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  }),
};

export function Hero() {
  return (
    <section className="relative pt-28 pb-12 md:pt-36 md:pb-20 lg:pt-44 lg:pb-28">
      <Container className="relative">
        {/* Headline */}
        <ScrollReveal>
          <h1
            className="text-text-primary font-semibold tracking-tight leading-[1.05] max-w-4xl"
            style={{ fontSize: "clamp(2.5rem, 8vw, 6.5rem)" }}
          >
            Custom software for teams that need to move faster.
          </h1>
        </ScrollReveal>

        {/* Subheadline */}
        <ScrollReveal delay={0.1}>
          <p className="mt-6 md:mt-8 text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl">
            We build websites, MVPs, internal tools, and custom systems —
            from first scope to launch.
          </p>
        </ScrollReveal>

        {/* CTAs */}
        <ScrollReveal delay={0.2}>
          <div className="mt-8 md:mt-10 flex flex-wrap gap-4">
            <Button variant="primary" size="lg" href="/contact">
              Start a project
            </Button>
            <Button variant="outline" size="lg" href="/work">
              View our work
            </Button>
          </div>
        </ScrollReveal>

        {/* Project artifact mockup */}
        <div className="mt-16 md:mt-20 lg:mt-24">
          <div className="relative rounded-xl border border-border bg-card/50 p-4 md:p-6">
            {/* Mockup header bar */}
            <div className="flex items-center gap-3 mb-4 md:mb-6 px-1">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-text-muted/30" />
                <div className="w-2.5 h-2.5 rounded-full bg-text-muted/30" />
                <div className="w-2.5 h-2.5 rounded-full bg-text-muted/30" />
              </div>
              <span className="text-[11px] text-text-faint ml-2">
                beyond.dev — Project workspace
              </span>
            </div>

            {/* Mockup grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
              {mockupCards.map((card, i) => (
                <motion.div
                  key={card.id}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={cardVariants}
                  className={`rounded-lg border border-border bg-background/80 p-3 md:p-4 ${card.className}`}
                >
                  <span className="text-[10px] font-medium uppercase tracking-wider text-text-faint mb-2 block">
                    {card.label}
                  </span>
                  {card.content}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
