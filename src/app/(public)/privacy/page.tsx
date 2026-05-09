import { createMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/container";

export const metadata = createMetadata({
  title: "Privacy Policy",
  description: "Privacy policy for beyond.dev.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <article className="pt-28 pb-16 md:pt-36 md:pb-20 lg:pt-44 lg:pb-28">
      <Container>
        <div className="max-w-3xl">
          <h1
            className="text-text-primary font-semibold tracking-tight leading-[1.1]"
            style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}
          >
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-text-muted">
            Last updated: January 1, 2026
          </p>

          <div className="mt-10 space-y-8 text-text-secondary leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-text-primary mb-3">
                1. Information We Collect
              </h2>
              <p>
                When you contact us through our website, we collect the
                information you provide, including your name, email address,
                company name, phone number, and project details. We also collect
                basic usage data such as pages visited and referring URLs
                through standard analytics tools.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-text-primary mb-3">
                2. How We Use Your Information
              </h2>
              <p>
                We use the information you provide to respond to your inquiries,
                evaluate potential projects, and communicate with you about our
                services. We do not sell, rent, or share your personal
                information with third parties for their marketing purposes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-text-primary mb-3">
                3. Data Storage and Security
              </h2>
              <p>
                Your data is stored securely and transmitted over encrypted
                connections. We take reasonable measures to protect your
                information from unauthorized access, alteration, or disclosure.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-text-primary mb-3">
                4. Cookies and Tracking
              </h2>
              <p>
                We may use cookies and similar tracking technologies to analyze
                website traffic and improve your experience. You can control
                cookie settings through your browser preferences.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-text-primary mb-3">
                5. Third-Party Services
              </h2>
              <p>
                We may use third-party services for analytics, email, and
                hosting. These services may collect information about your use of
                our website, but are bound by their own privacy policies.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-text-primary mb-3">
                6. Your Rights
              </h2>
              <p>
                You may request access to, correction of, or deletion of your
                personal data at any time by contacting us at hello@beyond.dev.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-text-primary mb-3">
                7. Changes to This Policy
              </h2>
              <p>
                We may update this privacy policy from time to time. Any changes
                will be posted on this page with an updated revision date.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-text-primary mb-3">
                8. Contact
              </h2>
              <p>
                If you have questions about this privacy policy, please contact
                us at{" "}
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
