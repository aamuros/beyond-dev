export const dynamic = 'force-dynamic';
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { StatCard } from "@/components/admin/stat-card";

export default async function AdminDashboard() {
  const [leadCount, newLeads, caseStudyCount, testimonialCount, recentLeads] =
    await Promise.all([
      prisma.lead.count(),
      prisma.lead.count({ where: { status: "NEW" } }),
      prisma.caseStudy.count(),
      prisma.testimonial.count(),
      prisma.lead.findMany({ take: 5, orderBy: { createdAt: "desc" } }),
    ]);

  return (
    <div>
      <h1 className="text-2xl font-bold text-text-primary mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard label="Total Leads" value={leadCount} />
        <StatCard label="New Leads" value={newLeads} />
        <StatCard label="Case Studies" value={caseStudyCount} />
        <StatCard label="Testimonials" value={testimonialCount} />
      </div>

      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-text-primary">Recent Leads</h2>
          <Link
            href="/admin/leads"
            className="text-sm text-accent hover:text-accent-hover transition-colors"
          >
            View all &rarr;
          </Link>
        </div>
        <div className="bg-card rounded-xl border border-border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left px-4 py-3 text-xs font-medium text-text-muted uppercase">Name</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-text-muted uppercase">Company</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-text-muted uppercase">Service</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-text-muted uppercase">Status</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-text-muted uppercase">Date</th>
                </tr>
              </thead>
              <tbody>
                {recentLeads.map((lead) => (
                  <tr
                    key={lead.id}
                    className="border-b border-border last:border-0 hover:bg-surface/50"
                  >
                    <td className="px-4 py-3">
                      <Link
                        href={`/admin/leads/${lead.id}`}
                        className="text-text-primary hover:text-accent transition-colors"
                      >
                        {lead.name}
                      </Link>
                    </td>
                    <td className="px-4 py-3 text-text-secondary">{lead.company}</td>
                    <td className="px-4 py-3 text-text-secondary">{lead.serviceType}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`inline-flex px-2 py-0.5 text-xs rounded-full ${
                          lead.status === "NEW"
                            ? "bg-accent-muted text-accent"
                            : lead.status === "CONTACTED"
                            ? "bg-warning/10 text-warning"
                            : lead.status === "QUALIFIED"
                            ? "bg-success/10 text-success"
                            : lead.status === "CLOSED"
                            ? "bg-surface text-text-secondary"
                            : "bg-surface text-text-muted"
                        }`}
                      >
                        {lead.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-text-muted text-sm">
                      {lead.createdAt.toLocaleDateString()}
                    </td>
                  </tr>
                ))}
                {recentLeads.length === 0 && (
                  <tr>
                    <td colSpan={5} className="px-4 py-8 text-center text-text-muted">
                      No leads yet
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Link
          href="/admin/case-studies"
          className="bg-card rounded-xl border border-border p-4 hover:border-border-strong transition-colors"
        >
          <h3 className="font-medium text-text-primary">Case Studies</h3>
          <p className="text-sm text-text-muted mt-1">{caseStudyCount} published</p>
        </Link>
        <Link
          href="/admin/testimonials"
          className="bg-card rounded-xl border border-border p-4 hover:border-border-strong transition-colors"
        >
          <h3 className="font-medium text-text-primary">Testimonials</h3>
          <p className="text-sm text-text-muted mt-1">{testimonialCount} published</p>
        </Link>
      </div>
    </div>
  );
}
