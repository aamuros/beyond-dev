"use server";

import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/admin-auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const VALID_STATUSES = ["NEW", "CONTACTED", "QUALIFIED", "CLOSED", "ARCHIVED"] as const;

export async function updateLeadStatus(formData: FormData) {
  await requireAdmin();
  const id = formData.get("id") as string;
  const status = formData.get("status") as string;

  if (!VALID_STATUSES.includes(status as (typeof VALID_STATUSES)[number])) {
    throw new Error(`Invalid status: ${status}`);
  }

  await prisma.lead.update({
    where: { id },
    data: { status: status as (typeof VALID_STATUSES)[number] },
  });

  revalidatePath(`/admin/leads/${id}`);
  revalidatePath("/admin/leads");
  revalidatePath("/admin/dashboard");
}

export async function deleteLead(formData: FormData) {
  await requireAdmin();
  const id = formData.get("id") as string;

  await prisma.lead.delete({ where: { id } });

  revalidatePath("/admin/leads");
  revalidatePath("/admin/dashboard");
  redirect("/admin/leads");
}
