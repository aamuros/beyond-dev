export const dynamic = 'force-dynamic';
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { EditCaseStudyForm } from "./edit-form";

export default async function EditCaseStudyPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const caseStudy = await prisma.caseStudy.findUnique({ where: { id } });

  if (!caseStudy) {
    notFound();
  }

  return <EditCaseStudyForm caseStudy={caseStudy} />;
}
