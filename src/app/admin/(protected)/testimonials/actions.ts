"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createTestimonial(formData: FormData) {
  const quote = formData.get("quote") as string;
  const authorName = formData.get("authorName") as string;
  const authorRole = formData.get("authorRole") as string;
  const company = formData.get("company") as string;
  const published = formData.get("published") === "on";

  await prisma.testimonial.create({
    data: {
      quote,
      authorName,
      authorRole,
      company,
      published,
    },
  });

  revalidatePath("/admin/testimonials");
  revalidatePath("/admin/dashboard");
  redirect("/admin/testimonials");
}

export async function updateTestimonial(formData: FormData) {
  const id = formData.get("id") as string;
  const quote = formData.get("quote") as string;
  const authorName = formData.get("authorName") as string;
  const authorRole = formData.get("authorRole") as string;
  const company = formData.get("company") as string;
  const published = formData.get("published") === "on";

  await prisma.testimonial.update({
    where: { id },
    data: {
      quote,
      authorName,
      authorRole,
      company,
      published,
    },
  });

  revalidatePath("/admin/testimonials");
  revalidatePath("/admin/testimonials/[id]/edit");
  revalidatePath("/admin/dashboard");
  redirect("/admin/testimonials");
}

export async function deleteTestimonial(formData: FormData) {
  const id = formData.get("id") as string;

  await prisma.testimonial.delete({ where: { id } });

  revalidatePath("/admin/testimonials");
  revalidatePath("/admin/dashboard");
  redirect("/admin/testimonials");
}
