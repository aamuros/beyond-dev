"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createCaseStudy(formData: FormData) {
  const title = formData.get("title") as string;
  const slug = formData.get("slug") as string;
  const industry = formData.get("industry") as string;
  const summary = formData.get("summary") as string;
  const problem = formData.get("problem") as string;
  const solution = formData.get("solution") as string;
  const outcome = formData.get("outcome") as string;
  const techStackRaw = formData.get("techStack") as string;
  const imageUrl = formData.get("imageUrl") as string;
  const featured = formData.get("featured") === "on";
  const published = formData.get("published") === "on";

  const techStack = techStackRaw
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);

  await prisma.caseStudy.create({
    data: {
      title,
      slug,
      industry,
      summary,
      problem,
      solution,
      outcome,
      techStack,
      imageUrl: imageUrl || null,
      featured,
      published,
    },
  });

  revalidatePath("/admin/case-studies");
  revalidatePath("/admin/dashboard");
  redirect("/admin/case-studies");
}

export async function updateCaseStudy(formData: FormData) {
  const id = formData.get("id") as string;
  const title = formData.get("title") as string;
  const slug = formData.get("slug") as string;
  const industry = formData.get("industry") as string;
  const summary = formData.get("summary") as string;
  const problem = formData.get("problem") as string;
  const solution = formData.get("solution") as string;
  const outcome = formData.get("outcome") as string;
  const techStackRaw = formData.get("techStack") as string;
  const imageUrl = formData.get("imageUrl") as string;
  const featured = formData.get("featured") === "on";
  const published = formData.get("published") === "on";

  const techStack = techStackRaw
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);

  await prisma.caseStudy.update({
    where: { id },
    data: {
      title,
      slug,
      industry,
      summary,
      problem,
      solution,
      outcome,
      techStack,
      imageUrl: imageUrl || null,
      featured,
      published,
    },
  });

  revalidatePath("/admin/case-studies");
  revalidatePath("/admin/case-studies/[id]/edit");
  revalidatePath("/admin/dashboard");
  redirect("/admin/case-studies");
}

export async function deleteCaseStudy(formData: FormData) {
  const id = formData.get("id") as string;

  await prisma.caseStudy.delete({ where: { id } });

  revalidatePath("/admin/case-studies");
  revalidatePath("/admin/dashboard");
  redirect("/admin/case-studies");
}
