import Link from "next/link";
import { Badge } from "@/components/ui/badge";

interface CaseStudyCardProps {
  title: string;
  slug: string;
  industry: string;
  summary: string;
  techStack: string[];
}

export function CaseStudyCard({
  title,
  slug,
  industry,
  summary,
  techStack,
}: CaseStudyCardProps) {
  return (
    <Link
      href={`/work/${slug}`}
      className="group flex flex-col h-full rounded-xl border border-border bg-card p-6 md:p-8 transition-all duration-300 hover:border-border-strong hover:-translate-y-0.5 hover:shadow-[0_4px_24px_-8px_rgba(0,0,0,0.6)]"
    >
      {/* Top: badge + arrow */}
      <div className="flex items-center justify-between mb-6">
        <Badge variant="accent">{industry}</Badge>
        <span className="text-text-faint transition-all duration-200 group-hover:text-text-primary group-hover:translate-x-0.5">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 8h10M9 4l4 4-4 4" />
          </svg>
        </span>
      </div>

      <h3 className="text-lg font-semibold text-text-primary mb-3 leading-snug tracking-tight group-hover:text-white transition-colors duration-200">
        {title}
      </h3>

      <p className="text-sm text-text-muted leading-relaxed mb-6 flex-1">
        {summary}
      </p>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="inline-flex items-center rounded-md px-2.5 py-1 text-[11px] font-medium text-text-muted bg-surface border border-border"
          >
            {tech}
          </span>
        ))}
      </div>
    </Link>
  );
}
