"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const mockupCards = [
  {
    id: "intake",
    label: "Project Intake",
    className: "col-span-2 md:col-span-1 lg:col-span-2 row-span-2",
    content: (
      <div className="space-y-3">
        <div className="h-2.5 w-3/4 rounded bg-surface" />
        <div className="h-2.5 w-1/2 rounded bg-surface" />
        <div className="mt-4 space-y-2">
          <div className="h-8 rounded-md bg-surface border border-border" />
          <div className="h-8 rounded-md bg-surface border border-border" />
          <div className="h-8 rounded-md bg-surface border border-border" />
        </div>
        <div className="h-7 w-24 rounded-md bg-accent/80 mt-2" />
      </div>
    ),
  },
  {
    id: "roadmap",
    label: "Roadmap",
    className: "col-span-1",
    content: (
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-accent" />
          <div className="h-2 w-16 rounded bg-surface" />
        </div>
        <div className="h-1.5 w-full rounded-full bg-surface overflow-hidden">
          <div className="h-full w-3/4 rounded-full bg-accent" />
        </div>
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-accent/50" />
          <div className="h-2 w-20 rounded bg-surface" />
        </div>
        <div className="h-1.5 w-full rounded-full bg-surface overflow-hidden">
          <div className="h-full w-1/2 rounded-full bg-accent/50" />
        </div>
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-text-muted" />
          <div className="h-2 w-12 rounded bg-surface" />
        </div>
        <div className="h-1.5 w-full rounded-full bg-surface overflow-hidden">
          <div className="h-full w-1/4 rounded-full bg-text-muted/50" />
        </div>
      </div>
    ),
  },
  {
    id: "sprint",
    label: "Active Sprint",
    className: "col-span-1",
    content: (
      <div className="space-y-2">
        {["Design review", "API endpoint", "Auth flow"].map((task, i) => (
          <div
            key={task}
            className="flex items-center gap-2 py-1.5 px-2 rounded bg-surface"
          >
            <div
              className={`w-3.5 h-3.5 rounded border ${
                i < 2 ? "bg-accent border-accent" : "border-border"
              }`}
            />
            <span
              className={`text-xs ${
                i < 2 ? "text-text-muted line-through" : "text-text-secondary"
              }`}
            >
              {task}
            </span>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "deploy",
    label: "Deploy Status",
    className: "col-span-1",
    content: (
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-xs text-green-400 font-medium">Live</span>
        </div>
        <span className="text-[10px] text-text-muted">v2.4.1 &middot; 99.9% uptime</span>
      </div>
    ),
  },
  {
    id: "ai",
    label: "AI Workflow",
    className: "col-span-1",
    content: (
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-accent/20 flex items-center justify-center">
            <svg className="w-3 h-3 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
            </svg>
          </div>
          <div className="h-2 w-16 rounded bg-surface" />
        </div>
        <div className="h-2 w-full rounded bg-surface" />
        <div className="h-2 w-3/4 rounded bg-surface" />
        <div className="mt-1 h-6 w-20 rounded bg-accent/30" />
      </div>
    ),
  },
  {
    id: "analytics",
    label: "Analytics",
    className: "col-span-1",
    content: (
      <div className="flex items-end gap-1 h-full min-h-[60px]">
        {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95].map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t"
            style={{
              height: `${h}%`,
              background:
                i >= 8 ? "var(--color-accent)" : "var(--color-surface)",
            }}
          />
        ))}
      </div>
    ),
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      delay: 0.6 + i * 0.08,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  }),
};

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-12 md:pt-36 md:pb-20 lg:pt-44 lg:pb-28">
      {/* Background glow */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/4 w-[800px] h-[600px] rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(ellipse at center, var(--color-accent) 0%, transparent 70%)",
        }}
      />

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

        {/* Product mockup */}
        <div className="mt-16 md:mt-20 lg:mt-24">
          <div className="relative rounded-2xl border border-border bg-card/50 p-4 md:p-6 backdrop-blur-sm">
            {/* Mockup header bar */}
            <div className="flex items-center gap-2 mb-4 md:mb-6 px-2">
              <div className="w-3 h-3 rounded-full bg-red-400/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
              <div className="w-3 h-3 rounded-full bg-green-400/60" />
              <div className="ml-4 flex-1 h-5 rounded-md bg-surface/60 max-w-xs" />
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
                  className={`rounded-xl border border-border bg-background/80 p-3 md:p-4 ${card.className}`}
                >
                  <span className="text-[10px] font-medium uppercase tracking-wider text-text-muted mb-2 block">
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
