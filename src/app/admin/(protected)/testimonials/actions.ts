"use server";

import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/admin-auth";
import { testimonialSchema } from "@/lib/validations";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createTestimonial(formData: FormData) {
  await requireAdmin();

  const parsed = testimonialSchema.safeParse({
    quote: formData.get("quote"),
    authorName: formData.get("authorName"),
    authorRole: formData.get("authorRole"),
    company: formData.get("company"),
    published: formData.get("published") === "on",
  });

  if (!parsed.success) {
    throw new Error(parsed.error.issues.map((i) => i.message).join(", "));
  }

  await prisma.testimonial.create({ data: parsed.data });

  revalidatePath("/admin/testimonials");
  revalidatePath("/admin/dashboard");
  redirect("/admin/testimonials");
}

export async function updateTestimonial(formData: FormData) {
  await requireAdmin();

  const id = formData.get("id") as string;

  const parsed = testimonialSchema.safeParse({
    quote: formData.get("quote"),
    authorName: formData.get("authorName"),
    authorRole: formData.get("authorRole"),
    company: formData.get("company"),
    published: formData.get("published") === "on",
  });

  if (!parsed.success) {
    throw new Error(parsed.error.issues.map((i) => i.message).join(", "));
  }

  await prisma.testimonial.update({ where: { id }, data: parsed.data });

  revalidatePath("/admin/testimonials");
  revalidatePath("/admin/testimonials/[id]/edit");
  revalidatePath("/admin/dashboard");
  redirect("/admin/testimonials");
}

export async function deleteTestimonial(formData: FormData) {
  await requireAdmin();
  const id = formData.get("id") as string;

  await prisma.testimonial.delete({ where: { id } });

  revalidatePath("/admin/testimonials");
  revalidatePath("/admin/dashboard");
  redirect("/admin/testimonials");
}
