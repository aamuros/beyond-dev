export const dynamic = 'force-dynamic';
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { deleteTestimonial } from "./actions";

export default async function TestimonialsPage() {
  const testimonials = await prisma.testimonial.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-text-primary">Testimonials</h1>
        <Link
          href="/admin/testimonials/new"
          className="bg-accent text-white rounded-full px-4 py-2 text-sm font-medium hover:bg-accent-hover transition-colors"
        >
          New Testimonial
        </Link>
      </div>

      <div className="bg-card rounded-xl border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left px-4 py-3 text-xs font-medium text-text-muted uppercase">Quote</th>
                <th className="text-left px-4 py-3 text-xs font-medium text-text-muted uppercase">Author</th>
                <th className="text-left px-4 py-3 text-xs font-medium text-text-muted uppercase">Company</th>
                <th className="text-left px-4 py-3 text-xs font-medium text-text-muted uppercase">Published</th>
                <th className="text-left px-4 py-3 text-xs font-medium text-text-muted uppercase">Actions</th>
              </tr>
            </thead>
            <tbody>
              {testimonials.map((t) => (
                <tr
                  key={t.id}
                  className="border-b border-border last:border-0 hover:bg-surface/50"
                >
                  <td className="px-4 py-3 text-text-primary max-w-xs truncate">
                    &ldquo;{t.quote}&rdquo;
                  </td>
                  <td className="px-4 py-3 text-text-secondary">
                    {t.authorName}
                    <span className="text-text-muted text-sm ml-1">({t.authorRole})</span>
                  </td>
                  <td className="px-4 py-3 text-text-secondary">{t.company}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-flex px-2 py-0.5 text-xs rounded-full ${
                        t.published
                          ? "bg-success/10 text-success"
                          : "bg-surface text-text-muted"
                      }`}
                    >
                      {t.published ? "Published" : "Draft"}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <Link
                        href={`/admin/testimonials/${t.id}/edit`}
                        className="text-sm text-accent hover:text-accent-hover transition-colors"
                      >
                        Edit
                      </Link>
                      <form action={deleteTestimonial}>
                        <input type="hidden" name="id" value={t.id} />
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
              {testimonials.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-4 py-8 text-center text-text-muted">
                    No testimonials yet.{" "}
                    <Link
                      href="/admin/testimonials/new"
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
