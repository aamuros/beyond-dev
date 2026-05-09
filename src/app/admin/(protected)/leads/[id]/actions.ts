"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function updateLeadStatus(formData: FormData) {
  const id = formData.get("id") as string;
  const status = formData.get("status") as string;

  await prisma.lead.update({
    where: { id },
    data: { status: status as any },
  });

  revalidatePath(`/admin/leads/${id}`);
  revalidatePath("/admin/leads");
  revalidatePath("/admin/dashboard");
}

export async function deleteLead(formData: FormData) {
  const id = formData.get("id") as string;

  await prisma.lead.delete({ where: { id } });

  revalidatePath("/admin/leads");
  revalidatePath("/admin/dashboard");
  redirect("/admin/leads");
}
