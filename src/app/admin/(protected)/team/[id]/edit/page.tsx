export const dynamic = 'force-dynamic';
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { EditTeamMemberForm } from "./edit-form";

export default async function EditTeamMemberPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const member = await prisma.teamMember.findUnique({ where: { id } });

  if (!member) {
    notFound();
  }

  return <EditTeamMemberForm member={member} />;
}
