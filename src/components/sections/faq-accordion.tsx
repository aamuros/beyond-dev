"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqItems = [
  {
    question: "Do you help with thesis and capstone projects?",
    answer:
      "Yes. We work with CS and IT students on thesis and capstone projects — from system design and development to documentation and defense preparation. We guide you through the entire process so you understand every part of your project.",
  },
  {
    question: "How much does a project typically cost?",
    answer:
      "Costs vary depending on scope and complexity. Student projects and portfolio sites are more affordable, while custom business applications and SaaS MVPs require a larger investment. Contact us with your idea and we'll give you an honest estimate.",
  },
  {
    question: "Can you build an MVP from just an idea?",
    answer:
      "Yes. We help define scope, prioritize features, design the product, choose the stack, and build the first launchable version. You don't need to have everything figured out before reaching out.",
  },
  {
    question: "Do you only build websites?",
    answer:
      "No. We build web apps, dashboards, portals, internal tools, SaaS products, automations, APIs, and integrations. If it involves software, we can probably help.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Student projects and simple websites may take 1–3 weeks. Small business solutions usually take 2–6 weeks. Larger MVPs and custom platforms take 1–3 months depending on scope.",
  },
  {
    question: "Do you provide support after launch?",
    answer:
      "Yes. We offer ongoing support, improvements, bug fixes, and feature development. We also provide documentation and training so your team can manage the system independently.",
  },
];

function FaqItem({
  item,
  isOpen,
  onToggle,
}: {
  item: (typeof faqItems)[number];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <>
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 py-5 text-left cursor-pointer"
        aria-expanded={isOpen}
      >
        <span className="text-sm font-medium text-white">{item.question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0 text-white/40"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M8 3v10M3 8h10" />
          </svg>
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 pr-8 text-sm leading-6 text-white/60">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.4fr] lg:items-start">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-white/40">
            FAQ
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-white tracking-tight">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-base text-white/50 leading-relaxed">
            Common questions about working with us.
          </p>
        </div>

        <div className="border-y border-white/10 divide-y divide-white/10">
          {faqItems.map((item, i) => (
            <FaqItem
              key={i}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
