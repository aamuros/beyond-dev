import { createMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/container";

export const metadata = createMetadata({
  title: "Terms of Service",
  description: "Terms of service for beyond.dev.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <article className="pt-28 pb-16 md:pt-36 md:pb-20 lg:pt-44 lg:pb-28">
      <Container>
        <div className="max-w-3xl">
          <h1
            className="text-text-primary font-semibold tracking-tight leading-[1.1]"
            style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}
          >
            Terms of Service
          </h1>
          <p className="mt-4 text-sm text-text-muted">
            Last updated: January 1, 2026
          </p>

          <div className="mt-10 space-y-8 text-text-secondary leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-text-primary mb-3">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing or using the beyond.dev website and services, you
                agree to be bound by these Terms of Service. If you do not agree
                to these terms, please do not use our website or services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-text-primary mb-3">
                2. Services
              </h2>
              <p>
                beyond.dev provides custom software development, consulting, and
                related services. The specific scope, deliverables, timeline,
                and fees for any engagement will be defined in a separate
                statement of work or project agreement.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-text-primary mb-3">
                3. Intellectual Property
              </h2>
              <p>
                Unless otherwise agreed in writing, custom software developed
                for you during a paid engagement will be transferred to you upon
                completion and payment. Pre-existing tools, frameworks, and
                intellectual property owned by beyond.dev remain our property.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-text-primary mb-3">
                4. Confidentiality
              </h2>
              <p>
                We treat all information shared during project discussions and
                development as confidential. We will not disclose your
                proprietary information to third parties without your consent.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-text-primary mb-3">
                5. Payment Terms
              </h2>
              <p>
                Payment terms will be specified in your project agreement.
                Generally, we require a deposit before work begins, with
                remaining payments tied to milestones or monthly invoicing
                depending on the engagement model.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-text-primary mb-3">
                6. Limitation of Liability
              </h2>
              <p>
                beyond.dev will not be liable for any indirect, incidental,
                special, or consequential damages arising from the use of our
                services. Our total liability for any claim shall not exceed the
                total fees paid for the specific project in question.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-text-primary mb-3">
                7. Termination
              </h2>
              <p>
                Either party may terminate a project engagement with written
                notice as specified in the project agreement. Upon termination,
                you are responsible for payment of all work completed up to the
                termination date.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-text-primary mb-3">
                8. Governing Law
              </h2>
              <p>
                These terms shall be governed by and construed in accordance
                with applicable laws. Any disputes arising from these terms or
                our services shall be resolved through good-faith negotiation or
                binding arbitration.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-text-primary mb-3">
                9. Changes to These Terms
              </h2>
              <p>
                We reserve the right to update these Terms of Service at any
                time. Changes will be posted on this page. Continued use of our
                website or services after changes constitutes acceptance of the
                updated terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-text-primary mb-3">
                10. Contact
              </h2>
              <p>
                For questions about these terms, please contact us at{" "}
                <a
                  href="mailto:hello@beyond.dev"
                  className="text-accent hover:underline"
                >
                  hello@beyond.dev
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </Container>
    </article>
  );
}
