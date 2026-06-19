import nodemailer, { type Transporter } from "nodemailer";

export const runtime = "nodejs";

const recipientEmail =
  getOptionalEnv("CONTACT_EMAIL") ||
  getOptionalEnv("SMTP_USER") ||
  "contact@aussiedigitalstudios.com.au";

type ContactRequest = {
  firstName?: unknown;
  lastName?: unknown;
  email?: unknown;
  phone?: unknown;
  service?: unknown;
  subject?: unknown;
  detail?: unknown;
  source?: unknown;
};

let transporter: Transporter | null = null;

function getOptionalEnv(name: string) {
  return process.env[name]?.trim();
}

function getRequiredEnv(name: string) {
  const value = getOptionalEnv(name);

  if (!value) {
    throw new Error(`Missing ${name}`);
  }

  return value;
}

function getSmtpPassword(host: string) {
  const password = getRequiredEnv("SMTP_PASSWORD");

  if (host === "smtp.gmail.com") {
    return password.replace(/\s/g, "");
  }

  return password;
}

function getTransporter() {
  if (!transporter) {
    const host = getRequiredEnv("SMTP_HOST");
    const port = Number(process.env.SMTP_PORT || "465");
    const timeout = Number(process.env.SMTP_CONNECTION_TIMEOUT || "10000");

    transporter = nodemailer.createTransport({
      host,
      port,
      secure: process.env.SMTP_SECURE
        ? process.env.SMTP_SECURE === "true"
        : port === 465,
      auth: {
        user: getRequiredEnv("SMTP_USER"),
        pass: getSmtpPassword(host),
      },
      connectionTimeout: timeout,
      greetingTimeout: timeout,
      socketTimeout: timeout,
    });
  }

  return transporter;
}

function normalizeString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function isSmtpAuthError(error: unknown) {
  return (
    typeof error === "object" &&
    error !== null &&
    "code" in error &&
    error.code === "EAUTH"
  );
}

function isSmtpConnectionError(error: unknown) {
  return (
    typeof error === "object" &&
    error !== null &&
    "code" in error &&
    (error.code === "ESOCKET" || error.code === "ETIMEDOUT")
  );
}

export async function POST(request: Request) {
  let payload: ContactRequest;

  try {
    payload = (await request.json()) as ContactRequest;
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const firstName = normalizeString(payload.firstName);
  const lastName = normalizeString(payload.lastName);
  const email = normalizeString(payload.email);
  const phone = normalizeString(payload.phone);
  const service = normalizeString(payload.service) || "General Inquiry";
  const subject =
    normalizeString(payload.subject) || "Contact Form Submission";
  const detail = normalizeString(payload.detail);
  const source =
    normalizeString(payload.source) || "Aussie Digital Studios contact form";
  const fullName = [firstName, lastName].filter(Boolean).join(" ");

  if (!firstName || !lastName || !email || !phone || !detail) {
    return Response.json(
      {
        error:
          "Please fill in first name, last name, email, phone, and details.",
      },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return Response.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  const mailSubject = `New Aussie Digital Studios inquiry from ${fullName}`;
  const text = [
    "New Aussie Digital Studios contact form submission",
    "",
    `Source: ${source}`,
    `Name: ${fullName}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    `Service: ${service}`,
    `Subject: ${subject}`,
    "",
    "Details:",
    detail,
  ].join("\n");

  const html = `
    <h2>New Aussie Digital Studios contact form submission</h2>
    <p><strong>Source:</strong> ${escapeHtml(source)}</p>
    <p><strong>Name:</strong> ${escapeHtml(fullName)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
    <p><strong>Service:</strong> ${escapeHtml(service)}</p>
    <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
    <p><strong>Details:</strong></p>
    <p>${escapeHtml(detail).replace(/\n/g, "<br />")}</p>
  `;

  try {
    await getTransporter().sendMail({
      from: `"${getOptionalEnv("SMTP_FROM_NAME") || "Aussie Digital Studios Website"}" <${getRequiredEnv("SMTP_USER")}>`,
      to: recipientEmail,
      replyTo: email,
      subject: mailSubject,
      text,
      html,
    });
  } catch (error) {
    console.error("Contact email failed:", error);

    if (isSmtpAuthError(error)) {
      return Response.json(
        {
          error:
            "SMTP login failed. Check SMTP_USER and SMTP_PASSWORD, then restart the server after updating your environment variables.",
        },
        { status: 500 },
      );
    }

    if (isSmtpConnectionError(error)) {
      return Response.json(
        {
          error:
            "SMTP server is unreachable. Check SMTP_HOST, SMTP_PORT, and SMTP_SECURE in .env.",
        },
        { status: 500 },
      );
    }

    return Response.json(
      { error: "Unable to send your message right now." },
      { status: 500 },
    );
  }

  return Response.json({ ok: true, message: "Email sent successfully." });
}
