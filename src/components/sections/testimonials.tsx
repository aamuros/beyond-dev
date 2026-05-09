import { Card } from "@/components/ui/card";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Container } from "@/components/ui/container";

interface Testimonial {
  quote: string;
  authorName: string;
  authorRole: string;
  company: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export function Testimonials({ testimonials }: TestimonialsProps) {
  return (
    <section className="py-20 md:py-28 lg:py-36">
      <Container>
        <ScrollReveal>
          <div className="max-w-2xl mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-text-primary tracking-tight">
              What clients say
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {testimonials.map((testimonial, i) => (
            <ScrollReveal key={testimonial.authorName} delay={i * 0.08}>
              <Card className="h-full flex flex-col">
                {/* Quote mark */}
                <svg
                  className="w-8 h-8 text-accent/30 mb-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z" />
                </svg>

                <blockquote className="text-sm text-text-secondary leading-relaxed flex-1">
                  {testimonial.quote}
                </blockquote>

                <div className="mt-6 pt-4 border-t border-border">
                  <p className="text-sm font-medium text-text-primary">
                    {testimonial.authorName}
                  </p>
                  <p className="text-xs text-text-muted mt-0.5">
                    {testimonial.authorRole}, {testimonial.company}
                  </p>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
