import { hash } from "bcryptjs";
import { prisma } from "@/lib/prisma";

async function main() {
  const email = process.env.ADMIN_EMAIL || "admin@beyond.dev";
  const password = process.env.ADMIN_PASSWORD;

  if (!password) {
    console.error("Error: ADMIN_PASSWORD environment variable is required. Set it before running the seed script.");
    process.exit(1);
  }

  const existing = await prisma.adminUser.findUnique({ where: { email } });

  if (existing) {
    console.log("Admin user already exists");
    return;
  }

  const passwordHash = await hash(password, 12);

  await prisma.adminUser.create({
    data: {
      email,
      name: "Admin",
      passwordHash,
    },
  });

  console.log(`Admin user created: ${email}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
