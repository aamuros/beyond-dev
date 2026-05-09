import { z } from "zod/v4";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.email("Please enter a valid email address"),
  company: z.string().min(1, "Company or school name is required"),
  phone: z.string().optional(),
  serviceType: z.string().min(1, "Please select a service type"),
  timeline: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
  honeypot: z.string().max(0, "Bot detected"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const caseStudySchema = z.object({
  title: z.string().min(1, "Title is required"),
  slug: z.string().min(1, "Slug is required"),
  industry: z.string().min(1, "Industry is required"),
  summary: z.string().min(1, "Summary is required"),
  problem: z.string().min(1, "Problem is required"),
  solution: z.string().min(1, "Solution is required"),
  outcome: z.string().min(1, "Outcome is required"),
  techStack: z.array(z.string()).min(1, "At least one technology is required"),
  imageUrl: z.string().optional(),
  featured: z.boolean().default(false),
  published: z.boolean().default(false),
});

export const teamMemberSchema = z.object({
  name: z.string().min(1, "Name is required"),
  role: z.string().min(1, "Role is required"),
  bio: z.string().min(1, "Bio is required"),
  avatarUrl: z.string().optional(),
  order: z.number().int().default(0),
});

export const testimonialSchema = z.object({
  quote: z.string().min(1, "Quote is required"),
  authorName: z.string().min(1, "Author name is required"),
  authorRole: z.string().min(1, "Author role is required"),
  company: z.string().min(1, "Company is required"),
  published: z.boolean().default(false),
});
