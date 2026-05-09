"use server";

import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/admin-auth";
import { teamMemberSchema } from "@/lib/validations";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createTeamMember(formData: FormData) {
  await requireAdmin();

  const parsed = teamMemberSchema.safeParse({
    name: formData.get("name"),
    role: formData.get("role"),
    bio: formData.get("bio"),
    avatarUrl: formData.get("avatarUrl") || undefined,
    order: parseInt(formData.get("order") as string) || 0,
  });

  if (!parsed.success) {
    throw new Error(parsed.error.issues.map((i) => i.message).join(", "));
  }

  await prisma.teamMember.create({ data: parsed.data });

  revalidatePath("/admin/team");
  redirect("/admin/team");
}

export async function updateTeamMember(formData: FormData) {
  await requireAdmin();

  const id = formData.get("id") as string;

  const parsed = teamMemberSchema.safeParse({
    name: formData.get("name"),
    role: formData.get("role"),
    bio: formData.get("bio"),
    avatarUrl: formData.get("avatarUrl") || undefined,
    order: parseInt(formData.get("order") as string) || 0,
  });

  if (!parsed.success) {
    throw new Error(parsed.error.issues.map((i) => i.message).join(", "));
  }

  await prisma.teamMember.update({ where: { id }, data: parsed.data });

  revalidatePath("/admin/team");
  redirect("/admin/team");
}

export async function deleteTeamMember(formData: FormData) {
  await requireAdmin();
  const id = formData.get("id") as string;

  await prisma.teamMember.delete({ where: { id } });

  revalidatePath("/admin/team");
  redirect("/admin/team");
}
