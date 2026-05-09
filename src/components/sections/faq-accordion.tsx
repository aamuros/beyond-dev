"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { Container } from "@/components/ui/container";

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
      "Student projects and simple websites may take 1-3 weeks. Small business solutions usually take 2-6 weeks. Larger MVPs and custom platforms take 1-3 months depending on scope.",
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
    <div className="border-b border-border">
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full py-5 text-left cursor-pointer group"
        aria-expanded={isOpen}
      >
        <span className="text-base font-medium text-text-primary pr-4 group-hover:text-accent transition-colors">
          {item.question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0"
        >
          <ChevronDownIcon className="w-5 h-5 text-text-muted" />
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
            <p className="pb-5 text-sm text-text-secondary leading-relaxed max-w-2xl">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-28 lg:py-36">
      <Container>
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-text-primary tracking-tight mb-4">
            Frequently asked questions
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed mb-10">
            Common questions about working with us.
          </p>
        </div>

        <div className="max-w-2xl">
          {faqItems.map((item, i) => (
            <FaqItem
              key={i}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
