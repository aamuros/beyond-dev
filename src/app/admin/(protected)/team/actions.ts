"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createTeamMember(formData: FormData) {
  const name = formData.get("name") as string;
  const role = formData.get("role") as string;
  const bio = formData.get("bio") as string;
  const avatarUrl = formData.get("avatarUrl") as string;
  const order = parseInt(formData.get("order") as string) || 0;

  await prisma.teamMember.create({
    data: {
      name,
      role,
      bio,
      avatarUrl: avatarUrl || null,
      order,
    },
  });

  revalidatePath("/admin/team");
  redirect("/admin/team");
}

export async function updateTeamMember(formData: FormData) {
  const id = formData.get("id") as string;
  const name = formData.get("name") as string;
  const role = formData.get("role") as string;
  const bio = formData.get("bio") as string;
  const avatarUrl = formData.get("avatarUrl") as string;
  const order = parseInt(formData.get("order") as string) || 0;

  await prisma.teamMember.update({
    where: { id },
    data: {
      name,
      role,
      bio,
      avatarUrl: avatarUrl || null,
      order,
    },
  });

  revalidatePath("/admin/team");
  redirect("/admin/team");
}

export async function deleteTeamMember(formData: FormData) {
  const id = formData.get("id") as string;

  await prisma.teamMember.delete({ where: { id } });

  revalidatePath("/admin/team");
  redirect("/admin/team");
}
