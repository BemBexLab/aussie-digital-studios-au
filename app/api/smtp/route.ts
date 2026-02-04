import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Email validation logic and check
const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Phone validation
const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^[\d\s\-\+\(\)]{7,}$/;
  return phoneRegex.test(phone.replace(/\s/g, ""));
};

// Configure nodemailer transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE || "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
};

// Format email HTML template
const generateEmailTemplate = (
  firstName: string,
  lastName: string,
  email: string,
  phone: string,
  service: string,
  subject: string,
  detail: string
): string => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 8px;
          }
          .header {
            background-color: #4C8C74;
            color: white;
            padding: 15px;
            border-radius: 5px;
            margin-bottom: 20px;
          }
          .field {
            margin-bottom: 15px;
            padding: 10px;
            background-color: #f9f9f9;
            border-left: 4px solid #4C8C74;
          }
          .label {
            font-weight: bold;
            color: #4C8C74;
            margin-bottom: 5px;
          }
          .footer {
            margin-top: 20px;
            padding-top: 10px;
            border-top: 1px solid #ddd;
            font-size: 12px;
            color: #666;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>New Contact Form Submission</h2>
          </div>
          
          <div class="field">
            <div class="label">First Name</div>
            <div>${firstName}</div>
          </div>
          
          <div class="field">
            <div class="label">Last Name</div>
            <div>${lastName}</div>
          </div>
          
          <div class="field">
            <div class="label">Email</div>
            <div><a href="mailto:${email}">${email}</a></div>
          </div>
          
          <div class="field">
            <div class="label">Phone Number</div>
            <div><a href="tel:${phone}">${phone}</a></div>
          </div>
          
          <div class="field">
            <div class="label">Service</div>
            <div>${service}</div>
          </div>
          
          <div class="field">
            <div class="label">Subject</div>
            <div>${subject}</div>
          </div>
          
          <div class="field">
            <div class="label">Details</div>
            <div>${detail.replace(/\n/g, "<br>")}</div>
          </div>
          
          <div class="footer">
            <p>This email was sent from your website contact form.</p>
            <p>Sent at: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      </body>
    </html>
  `;
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      firstName,
      lastName,
      email,
      phone,
      service,
      subject,
      detail,
    } = body;

    // Validation
    const errors: string[] = [];

    if (!firstName || firstName.trim() === "") {
      errors.push("First name is required");
    }
    if (!lastName || lastName.trim() === "") {
      errors.push("Last name is required");
    }
    if (!email || !validateEmail(email)) {
      errors.push("Valid email is required");
    }
    if (!phone || !validatePhone(phone)) {
      errors.push("Valid phone number is required");
    }
    if (!service || service.trim() === "") {
      errors.push("Service is required");
    }
    if (!subject || subject.trim() === "") {
      errors.push("Subject is required");
    }
    if (!detail || detail.trim() === "") {
      errors.push("Detail is required");
    }

    if (errors.length > 0) {
      return NextResponse.json(
        { success: false, errors },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = createTransporter();

    // Verify credentials
    try {
      await transporter.verify();
    } catch (error) {
      console.error("Email service authentication failed:", error);
      return NextResponse.json(
        {
          success: false,
          error: "Email service configuration error. Please try again later.",
        },
        { status: 500 }
      );
    }

    // Send email to admin
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECIPIENT_EMAIL,
      subject: `New Contact Form Submission: ${subject}`,
      html: generateEmailTemplate(
        firstName,
        lastName,
        email,
        phone,
        service,
        subject,
        detail
      ),
      replyTo: email,
    };

    await transporter.sendMail(adminMailOptions);

    // Send confirmation email to user
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "We received your message",
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
              }
              .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background-color: #4C8C74;
                color: white;
                padding: 15px;
                border-radius: 5px;
                margin-bottom: 20px;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2>Thank You for Contacting Us</h2>
              </div>
              <p>Hi ${firstName},</p>
              <p>We have received your message and will get back to you as soon as possible.</p>
              <p>Best regards,<br>Aussie Digital Studios Team</p>
            </div>
          </body>
        </html>
      `,
    };

    await transporter.sendMail(userMailOptions);

    return NextResponse.json(
      {
        success: true,
        message: "Email sent successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("SMTP Error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to send email. Please try again later.",
      },
      { status: 500 }
    );
  }
}
