export const dynamic = 'force-dynamic';
import { prisma } from "@/lib/prisma";
import { createMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/container";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { TeamCard } from "@/components/sections/team-card";

export const metadata = createMetadata({
  title: "Team",
  description:
    "Meet the experienced engineers behind beyond.dev who ship production software.",
  path: "/team",
});

export default async function TeamPage() {
  const teamMembers = await prisma.teamMember.findMany({
    orderBy: { order: "asc" },
  });

  return (
    <>
      <section className="pt-28 pb-8 md:pt-36 md:pb-12 lg:pt-44 lg:pb-16">
        <Container>
          <ScrollReveal>
            <h1
              className="text-text-primary font-semibold tracking-tight leading-[1.1] max-w-4xl text-center mx-auto"
              style={{ fontSize: "clamp(2rem, 6vw, 4.5rem)" }}
            >
              Meet our members
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="mt-6 md:mt-8 text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl mx-auto text-center">
              The people behind beyond.dev. Builders, problem-solvers, and engineers who ship.
            </p>
          </ScrollReveal>
        </Container>
      </section>

      <section className="py-12 md:py-16 lg:py-20">
        <Container>
          {teamMembers.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 max-w-3xl mx-auto">
              {teamMembers.map((member, i) => (
                <ScrollReveal key={member.id} delay={i * 0.08}>
                  <TeamCard
                    name={member.name}
                    role={member.role}
                    bio={member.bio}
                    avatarUrl={member.avatarUrl ?? undefined}
                  />
                </ScrollReveal>
              ))}
            </div>
          ) : (
            <p className="text-text-secondary text-center">
              Team profiles coming soon.
            </p>
          )}
        </Container>
      </section>
    </>
  );
}
