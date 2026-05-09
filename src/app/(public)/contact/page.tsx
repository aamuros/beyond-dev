import { createMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/container";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ContactForm } from "@/components/sections/contact-form";

export const metadata = createMetadata({
  title: "Contact",
  description:
    "Tell us what you need built. We'll review the scope and get back to you with next steps.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-20 lg:pt-44 lg:pb-28">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left column */}
          <ScrollReveal>
            <h1
              className="text-text-primary font-semibold tracking-tight leading-[1.1]"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            >
              Start a Project
            </h1>
            <p className="mt-6 text-lg text-text-secondary leading-relaxed max-w-lg">
              Tell us what you need built. We&apos;ll review the scope and get
              back to you with next steps.
            </p>

            <div className="mt-10 space-y-4">
              <div>
                <h3 className="text-sm font-medium text-text-primary mb-1">
                  Email
                </h3>
                <a
                  href="mailto:hello@beyond.dev"
                  className="text-accent hover:underline transition-colors"
                >
                  hello@beyond.dev
                </a>
              </div>

              <div>
                <h3 className="text-sm font-medium text-text-primary mb-1">
                  Response time
                </h3>
                <p className="text-text-secondary text-sm">
                  Usually within 24 hours on business days.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Right column */}
          <ScrollReveal delay={0.15}>
            <ContactForm />
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
