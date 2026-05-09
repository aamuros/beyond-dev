"use server";

import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/admin-auth";
import { caseStudySchema } from "@/lib/validations";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createCaseStudy(formData: FormData) {
  await requireAdmin();

  const parsed = caseStudySchema.safeParse({
    title: formData.get("title"),
    slug: formData.get("slug"),
    industry: formData.get("industry"),
    summary: formData.get("summary"),
    problem: formData.get("problem"),
    solution: formData.get("solution"),
    outcome: formData.get("outcome"),
    techStack: (formData.get("techStack") as string)
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean),
    imageUrl: formData.get("imageUrl") || undefined,
    featured: formData.get("featured") === "on",
    published: formData.get("published") === "on",
  });

  if (!parsed.success) {
    throw new Error(parsed.error.issues.map((i) => i.message).join(", "));
  }

  await prisma.caseStudy.create({ data: parsed.data });

  revalidatePath("/admin/case-studies");
  revalidatePath("/admin/dashboard");
  redirect("/admin/case-studies");
}

export async function updateCaseStudy(formData: FormData) {
  await requireAdmin();

  const id = formData.get("id") as string;

  const parsed = caseStudySchema.safeParse({
    title: formData.get("title"),
    slug: formData.get("slug"),
    industry: formData.get("industry"),
    summary: formData.get("summary"),
    problem: formData.get("problem"),
    solution: formData.get("solution"),
    outcome: formData.get("outcome"),
    techStack: (formData.get("techStack") as string)
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean),
    imageUrl: formData.get("imageUrl") || undefined,
    featured: formData.get("featured") === "on",
    published: formData.get("published") === "on",
  });

  if (!parsed.success) {
    throw new Error(parsed.error.issues.map((i) => i.message).join(", "));
  }

  await prisma.caseStudy.update({ where: { id }, data: parsed.data });

  revalidatePath("/admin/case-studies");
  revalidatePath("/admin/case-studies/[id]/edit");
  revalidatePath("/admin/dashboard");
  redirect("/admin/case-studies");
}

export async function deleteCaseStudy(formData: FormData) {
  await requireAdmin();
  const id = formData.get("id") as string;

  await prisma.caseStudy.delete({ where: { id } });

  revalidatePath("/admin/case-studies");
  revalidatePath("/admin/dashboard");
  redirect("/admin/case-studies");
}
