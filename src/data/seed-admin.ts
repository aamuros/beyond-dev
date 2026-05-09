import { hash } from "bcryptjs";
import { prisma } from "@/lib/prisma";

async function main() {
  const email = process.env.ADMIN_EMAIL || "admin@beyond.dev";
  const password = "admin123";

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
  console.log(`Password: ${password}`);
  console.log("Please change the password after first login.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
