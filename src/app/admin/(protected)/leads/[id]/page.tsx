export const dynamic = 'force-dynamic';
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { notFound } from "next/navigation";
import { updateLeadStatus, deleteLead } from "./actions";

export default async function LeadDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const lead = await prisma.lead.findUnique({ where: { id } });

  if (!lead) {
    notFound();
  }

  const statusOptions = ["NEW", "CONTACTED", "QUALIFIED", "CLOSED", "ARCHIVED"] as const;

  return (
    <div>
      <div className="mb-6">
        <Link
          href="/admin/leads"
          className="text-sm text-accent hover:text-accent-hover transition-colors"
        >
          &larr; Back to leads
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Lead details */}
        <div className="lg:col-span-2 bg-card rounded-xl border border-border p-6">
          <h1 className="text-xl font-bold text-text-primary mb-4">{lead.name}</h1>

          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <dt className="text-sm text-text-muted">Email</dt>
              <dd className="text-text-primary mt-0.5">{lead.email}</dd>
            </div>
            <div>
              <dt className="text-sm text-text-muted">Company</dt>
              <dd className="text-text-primary mt-0.5">{lead.company}</dd>
            </div>
            <div>
              <dt className="text-sm text-text-muted">Phone</dt>
              <dd className="text-text-primary mt-0.5">{lead.phone || "Not provided"}</dd>
            </div>
            <div>
              <dt className="text-sm text-text-muted">Service Type</dt>
              <dd className="text-text-primary mt-0.5">{lead.serviceType}</dd>
            </div>
            <div>
              <dt className="text-sm text-text-muted">Budget</dt>
              <dd className="text-text-primary mt-0.5">{lead.budget || "Not provided"}</dd>
            </div>
            <div>
              <dt className="text-sm text-text-muted">Timeline</dt>
              <dd className="text-text-primary mt-0.5">{lead.timeline || "Not provided"}</dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="text-sm text-text-muted">Message</dt>
              <dd className="text-text-primary mt-0.5 whitespace-pre-wrap">{lead.message}</dd>
            </div>
            <div>
              <dt className="text-sm text-text-muted">Submitted</dt>
              <dd className="text-text-primary mt-0.5">{lead.createdAt.toLocaleString()}</dd>
            </div>
          </dl>
        </div>

        {/* Actions sidebar */}
        <div className="space-y-4">
          {/* Status update */}
          <div className="bg-card rounded-xl border border-border p-6">
            <h2 className="text-sm font-medium text-text-primary mb-3">Update Status</h2>
            <form action={updateLeadStatus} className="space-y-3">
              <input type="hidden" name="id" value={lead.id} />
              <select
                name="status"
                defaultValue={lead.status}
                className="w-full bg-surface border border-border rounded-lg px-3 py-2 text-sm text-text-primary focus:outline-none focus:border-accent transition-colors"
              >
                {statusOptions.map((status) => (
                  <option key={status} value={status}>
                    {status.charAt(0) + status.slice(1).toLowerCase()}
                  </option>
                ))}
              </select>
              <button
                type="submit"
                className="w-full bg-accent text-white rounded-lg py-2 text-sm font-medium hover:bg-accent-hover transition-colors"
              >
                Update status
              </button>
            </form>
          </div>

          {/* Delete */}
          <div className="bg-card rounded-xl border border-border p-6">
            <h2 className="text-sm font-medium text-text-primary mb-3">Danger Zone</h2>
            <form action={deleteLead}>
              <input type="hidden" name="id" value={lead.id} />
              <button
                type="submit"
                className="w-full bg-error/10 text-error border border-error/20 rounded-lg py-2 text-sm font-medium hover:bg-error/20 transition-colors"
              >
                Delete lead
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
