export const dynamic = 'force-dynamic';
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { deleteTeamMember } from "./actions";

export default async function TeamPage() {
  const members = await prisma.teamMember.findMany({
    orderBy: { order: "asc" },
  });

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-text-primary">Team</h1>
        <Link
          href="/admin/team/new"
          className="bg-accent text-white rounded-full px-4 py-2 text-sm font-medium hover:bg-accent-hover transition-colors"
        >
          New Member
        </Link>
      </div>

      <div className="bg-card rounded-xl border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left px-4 py-3 text-xs font-medium text-text-muted uppercase">Order</th>
                <th className="text-left px-4 py-3 text-xs font-medium text-text-muted uppercase">Name</th>
                <th className="text-left px-4 py-3 text-xs font-medium text-text-muted uppercase">Role</th>
                <th className="text-left px-4 py-3 text-xs font-medium text-text-muted uppercase">Actions</th>
              </tr>
            </thead>
            <tbody>
              {members.map((member) => (
                <tr
                  key={member.id}
                  className="border-b border-border last:border-0 hover:bg-surface/50"
                >
                  <td className="px-4 py-3 text-text-muted text-sm">{member.order}</td>
                  <td className="px-4 py-3 text-text-primary">{member.name}</td>
                  <td className="px-4 py-3 text-text-secondary">{member.role}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <Link
                        href={`/admin/team/${member.id}/edit`}
                        className="text-sm text-accent hover:text-accent-hover transition-colors"
                      >
                        Edit
                      </Link>
                      <form action={deleteTeamMember}>
                        <input type="hidden" name="id" value={member.id} />
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
              {members.length === 0 && (
                <tr>
                  <td colSpan={4} className="px-4 py-8 text-center text-text-muted">
                    No team members yet.{" "}
                    <Link
                      href="/admin/team/new"
                      className="text-accent hover:text-accent-hover"
                    >
                      Add one
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
