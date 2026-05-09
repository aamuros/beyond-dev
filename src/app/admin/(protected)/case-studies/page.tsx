export const dynamic = 'force-dynamic';
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { deleteCaseStudy } from "./actions";

export default async function CaseStudiesPage() {
  const caseStudies = await prisma.caseStudy.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-text-primary">Case Studies</h1>
        <Link
          href="/admin/case-studies/new"
          className="bg-accent text-white rounded-full px-4 py-2 text-sm font-medium hover:bg-accent-hover transition-colors"
        >
          New Case Study
        </Link>
      </div>

      <div className="bg-card rounded-xl border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left px-4 py-3 text-xs font-medium text-text-muted uppercase">Title</th>
                <th className="text-left px-4 py-3 text-xs font-medium text-text-muted uppercase">Industry</th>
                <th className="text-left px-4 py-3 text-xs font-medium text-text-muted uppercase">Published</th>
                <th className="text-left px-4 py-3 text-xs font-medium text-text-muted uppercase">Featured</th>
                <th className="text-left px-4 py-3 text-xs font-medium text-text-muted uppercase">Actions</th>
              </tr>
            </thead>
            <tbody>
              {caseStudies.map((cs) => (
                <tr
                  key={cs.id}
                  className="border-b border-border last:border-0 hover:bg-surface/50"
                >
                  <td className="px-4 py-3 text-text-primary">{cs.title}</td>
                  <td className="px-4 py-3 text-text-secondary">{cs.industry}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-flex px-2 py-0.5 text-xs rounded-full ${
                        cs.published
                          ? "bg-success/10 text-success"
                          : "bg-surface text-text-muted"
                      }`}
                    >
                      {cs.published ? "Published" : "Draft"}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    {cs.featured && (
                      <span className="inline-flex px-2 py-0.5 text-xs rounded-full bg-accent-muted text-accent">
                        Featured
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <Link
                        href={`/admin/case-studies/${cs.id}/edit`}
                        className="text-sm text-accent hover:text-accent-hover transition-colors"
                      >
                        Edit
                      </Link>
                      <form action={deleteCaseStudy}>
                        <input type="hidden" name="id" value={cs.id} />
                        <button
                          type="submit"
                          className="text-sm text-error hover:text-error/80 transition-colors"
                        >
                          Delete
                        </button>
                      </form>
                    </div>
                  </td>
                </tr>
              ))}
              {caseStudies.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-4 py-8 text-center text-text-muted">
                    No case studies yet.{" "}
                    <Link
                      href="/admin/case-studies/new"
                      className="text-accent hover:text-accent-hover"
                    >
                      Create one
                    </Link>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
