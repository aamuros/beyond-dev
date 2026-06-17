import nodemailer from "nodemailer";

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

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
  company: string | null;
  serviceType: string;
  message: string;
}) {
  const adminEmail = process.env.ADMIN_EMAIL || "admin@beyond.dev";
  const companyDisplay = data.company ? escapeHtml(data.company) : "Not provided";

  await transporter.sendMail({
    from: process.env.EMAIL_FROM || "noreply@beyond.dev",
    to: adminEmail,
    subject: `New Lead: ${escapeHtml(data.name)} from ${companyDisplay}`,
    html: `
      <h2>New Project Inquiry</h2>
      <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
      <p><strong>Company:</strong> ${companyDisplay}</p>
      <p><strong>Service Type:</strong> ${escapeHtml(data.serviceType)}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(data.message)}</p>
    `,
  });
}
