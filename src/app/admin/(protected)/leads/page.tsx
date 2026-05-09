export const dynamic = 'force-dynamic';
import { prisma } from "@/lib/prisma";
import Link from "next/link";

const STATUS_OPTIONS = ["ALL", "NEW", "CONTACTED", "QUALIFIED", "CLOSED", "ARCHIVED"] as const;

export default async function LeadsPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string }>;
}) {
  const params = await searchParams;
  const statusFilter = params.status?.toUpperCase();

  const where =
    statusFilter && statusFilter !== "ALL" && STATUS_OPTIONS.includes(statusFilter as any)
      ? { status: statusFilter as any }
      : {};

  const leads = await prisma.lead.findMany({
    where,
    orderBy: { createdAt: "desc" },
  });

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-text-primary">Leads</h1>
        <span className="text-sm text-text-muted">{leads.length} total</span>
      </div>

      {/* Status filter tabs */}
      <div className="flex gap-1 mb-6 overflow-x-auto">
        {STATUS_OPTIONS.map((status) => {
          const isActive =
            status === "ALL"
              ? !statusFilter || statusFilter === "ALL"
              : statusFilter === status;
          return (
            <Link
              key={status}
              href={
                status === "ALL"
                  ? "/admin/leads"
                  : `/admin/leads?status=${status}`
              }
              className={`whitespace-nowrap rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-accent-muted text-accent"
                  : "text-text-secondary hover:text-text-primary hover:bg-surface"
              }`}
            >
              {status === "ALL" ? "All" : status.charAt(0) + status.slice(1).toLowerCase()}
            </Link>
          );
        })}
      </div>

      <div className="bg-card rounded-xl border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left px-4 py-3 text-xs font-medium text-text-muted uppercase">Name</th>
                <th className="text-left px-4 py-3 text-xs font-medium text-text-muted uppercase">Email</th>
                <th className="text-left px-4 py-3 text-xs font-medium text-text-muted uppercase">Company</th>
                <th className="text-left px-4 py-3 text-xs font-medium text-text-muted uppercase">Service</th>
                <th className="text-left px-4 py-3 text-xs font-medium text-text-muted uppercase">Status</th>
                <th className="text-left px-4 py-3 text-xs font-medium text-text-muted uppercase">Date</th>
              </tr>
            </thead>
            <tbody>
              {leads.map((lead) => (
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
                  <td className="px-4 py-3 text-text-secondary text-sm">{lead.email}</td>
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
              {leads.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-4 py-8 text-center text-text-muted">
                    No leads found
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
