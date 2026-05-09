import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Seed Case Studies
  const caseStudy1 = await prisma.caseStudy.upsert({
    where: { slug: "local-business-ordering-system" },
    update: {},
    create: {
      title: "Online Ordering System for Local Restaurant",
      slug: "local-business-ordering-system",
      industry: "Food & Beverage",
      summary:
        "A custom ordering and inventory management system for a local restaurant chain that replaced manual order-taking and reduced errors by 90%.",
      problem:
        "The restaurant was taking orders through phone calls, Viber, and Facebook Messenger. Orders were getting lost, mix-ups were common during peak hours, and there was no way to track inventory or popular items across their three branches.",
      solution:
        "We built a web-based ordering system with a simple menu management interface, branch-specific inventory tracking, and an admin dashboard for daily sales reports. Orders from all channels consolidated into a single kitchen display.",
      outcome:
        "Order errors dropped by 90% and average order processing time was cut in half. The owners now have real-time visibility into sales, inventory, and popular items across all branches. They expanded to a fourth branch using the same system.",
      techStack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS", "Vercel"],
      featured: true,
      published: true,
    },
  });

  const caseStudy2 = await prisma.caseStudy.upsert({
    where: { slug: "student-thesis-inventory-system" },
    update: {},
    create: {
      title: "Inventory Management System (Thesis Project)",
      slug: "student-thesis-inventory-system",
      industry: "Education",
      summary:
        "A full-stack inventory management system built as a CS thesis project, featuring real-time stock tracking, automated alerts, and comprehensive reporting.",
      problem:
        "A graduating IT student needed a complete thesis project that demonstrated full-stack development skills. The requirement was a system that solved a real problem for a local hardware store still using pen-and-paper inventory tracking.",
      solution:
        "We designed and built a web-based inventory system with barcode scanning, low-stock alerts, sales recording, and generate reports. The student was involved in every step — from database design to deployment — and received full documentation for their defense.",
      outcome:
        "The student successfully defended the project and graduated with high marks. The hardware store continues to use the system daily, processing over 200 transactions per week. The student landed a junior developer role based on this project.",
      techStack: ["React", "Node.js", "PostgreSQL", "Express", "Tailwind CSS", "Render"],
      featured: true,
      published: true,
    },
  });

  const caseStudy3 = await prisma.caseStudy.upsert({
    where: { slug: "ph-startup-mvp" },
    update: {},
    create: {
      title: "Ride-Hailing MVP for Provincial Market",
      slug: "ph-startup-mvp",
      industry: "Startup",
      summary:
        "A ride-hailing platform built from concept to launch in 8 weeks, designed specifically for a provincial Philippine city.",
      problem:
        "A local entrepreneur saw an opportunity in a growing provincial city where major ride-hailing apps hadn't expanded yet. Tricycles and habal-habal drivers had no digital platform, and passengers had no reliable way to book rides.",
      solution:
        "We shipped an MVP with driver onboarding, GPS-based ride matching, fare estimation, and cash and GCash payment options. The app was optimized for low-bandwidth connections common in provincial areas.",
      outcome:
        "Launched with 50 drivers and 200 riders in the first week. Within three months, the platform had over 1,000 registered users and was processing 150+ rides daily. The founder secured seed funding to expand to neighboring cities.",
      techStack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS", "Vercel"],
      featured: true,
      published: true,
    },
  });

  // Seed Team Members
  await prisma.teamMember.upsert({
    where: { id: "tm-founder" },
    update: {},
    create: {
      id: "tm-founder",
      name: "Adrian Muros",
      role: "Founder & Lead Engineer",
      bio: "Full-stack engineer with experience building production software for startups and local businesses. Focused on architecture, product strategy, and delivering systems that work.",
      order: 1,
    },
  });

  await prisma.teamMember.upsert({
    where: { id: "tm-designer" },
    update: {},
    create: {
      id: "tm-designer",
      name: "Paul Escobia",
      role: "Full-stack Engineer",
      bio: "Builds reliable, well-tested applications across the stack. Experienced with React, Node.js, databases, and cloud infrastructure.",
      order: 2,
    },
  });

  await prisma.teamMember.upsert({
    where: { id: "tm-engineer" },
    update: {},
    create: {
      id: "tm-engineer",
      name: "Philip Martinez",
      role: "Full-stack Engineer",
      bio: "Designs interfaces and systems that balance clarity, speed, and visual refinement. Background in both product design and front-end implementation.",
      order: 3,
    },
  });

  // Seed Testimonials
  await prisma.testimonial.upsert({
    where: { id: "test-1" },
    update: {},
    create: {
      id: "test-1",
      quote:
        "I was struggling with my thesis project and running out of time. They didn't just build it for me — they made sure I understood every part so I could defend it confidently. Passed with flying colors.",
      authorName: "Mark D.",
      authorRole: "IT Student",
      company: "PUP Manila",
      published: true,
    },
  });

  await prisma.testimonial.upsert({
    where: { id: "test-2" },
    update: {},
    create: {
      id: "test-2",
      quote:
        "We used to take orders through Viber and Facebook. Now everything goes through one system — no more missed orders, no more mix-ups. Best investment we made for our business.",
      authorName: "Maria Santos",
      authorRole: "Owner",
      company: "Kusina ni Maria",
      published: true,
    },
  });

  await prisma.testimonial.upsert({
    where: { id: "test-3" },
    update: {},
    create: {
      id: "test-3",
      quote:
        "They turned our idea into a working product in just 8 weeks. The app was built for our specific market — low bandwidth, cash and GCash payments, and local drivers. Exactly what we needed.",
      authorName: "Rafael Mendoza",
      authorRole: "Founder",
      company: "SakayPH",
      published: true,
    },
  });

  console.log("Seed data created successfully");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
