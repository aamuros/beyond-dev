export const dynamic = 'force-dynamic';
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { EditTestimonialForm } from "./edit-form";

export default async function EditTestimonialPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const testimonial = await prisma.testimonial.findUnique({ where: { id } });

  if (!testimonial) {
    notFound();
  }

  return <EditTestimonialForm testimonial={testimonial} />;
}
