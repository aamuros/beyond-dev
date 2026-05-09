import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_SERVER_HOST,
  port: Number(process.env.EMAIL_SERVER_PORT),
  auth: {
    user: process.env.EMAIL_SERVER_USER,
    pass: process.env.EMAIL_SERVER_PASSWORD,
  },
});

export async function sendLeadNotification(data: {
  name: string;
  email: string;
  company: string;
  serviceType: string;
  message: string;
}) {
  const adminEmail = process.env.ADMIN_EMAIL || "admin@beyond.dev";

  await transporter.sendMail({
    from: process.env.EMAIL_FROM || "noreply@beyond.dev",
    to: adminEmail,
    subject: `New Lead: ${data.name} from ${data.company}`,
    html: `
      <h2>New Project Inquiry</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Company:</strong> ${data.company}</p>
      <p><strong>Service Type:</strong> ${data.serviceType}</p>
      <p><strong>Message:</strong></p>
      <p>${data.message}</p>
    `,
  });
}
