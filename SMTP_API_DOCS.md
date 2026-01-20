# SMTP Email API Documentation

## Overview
The SMTP email API (`/api/smtp`) handles contact form submissions and sends emails to a configured recipient address. It also sends a confirmation email to the sender.

## Setup Instructions

### 1. Install Dependencies
Nodemailer and types are already installed:
```bash
npm install nodemailer @types/nodemailer
```

### 2. Configure Environment Variables
Create a `.env.local` file in the root directory (copy from `.env.local.example`):

```env
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
RECIPIENT_EMAIL=admin@aussie-digital-studios.com
```

### 3. Gmail Setup (Recommended)
1. Enable 2-Factor Authentication on your Google account
2. Generate an App Password:
   - Go to [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
   - Select "Mail" and "Windows Computer"
   - Copy the generated 16-character password
   - Paste this in `EMAIL_PASSWORD` env variable

### 4. Other Email Services
- **Outlook/Hotmail**: Use your email password
- **Custom SMTP**: Update transporter config in `route.ts`

## API Endpoint

### POST `/api/smtp`

Sends contact form data via email.

#### Request Body
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "phone": "+1 (555) 123-4567",
  "service": "Web Development",
  "subject": "Website Redesign",
  "detail": "I need a new website for my business..."
}
```

#### Response Success (200)
```json
{
  "success": true,
  "message": "Email sent successfully"
}
```

#### Response Error (400/500)
```json
{
  "success": false,
  "error": "Error message",
  "errors": ["Validation error 1", "Validation error 2"]
}
```

## Usage in React Components

### Basic Example
```tsx
"use client";

import { sendContactEmail } from "@/lib/emailService";
import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    
    const result = await sendContactEmail({
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      service: formData.get("service") as string,
      subject: formData.get("subject") as string,
      detail: formData.get("detail") as string,
    });

    setLoading(false);

    if (result.success) {
      setMessage("Email sent successfully!");
      e.currentTarget.reset();
    } else {
      setMessage(`Error: ${result.error}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="firstName" type="text" placeholder="First Name" required />
      <input name="lastName" type="text" placeholder="Last Name" required />
      <input name="email" type="email" placeholder="Email" required />
      <input name="phone" type="tel" placeholder="Phone" required />
      <input name="service" type="text" placeholder="Service" required />
      <input name="subject" type="text" placeholder="Subject" required />
      <textarea name="detail" placeholder="Details" required />
      <button type="submit" disabled={loading}>
        {loading ? "Sending..." : "Send"}
      </button>
      {message && <p>{message}</p>}
    </form>
  );
}
```

## Validation Rules

- **First Name**: Required, non-empty
- **Last Name**: Required, non-empty
- **Email**: Required, valid email format
- **Phone**: Required, valid phone format (7+ digits)
- **Service**: Required, non-empty
- **Subject**: Required, non-empty
- **Detail**: Required, non-empty

## Email Templates

### Admin Email
Recipients receive a formatted HTML email with:
- All form data clearly displayed
- Reply-To set to sender's email
- Styled with brand colors (#4C8C74)
- Timestamp of submission

### User Confirmation Email
Senders receive a confirmation email stating:
- Their message was received
- Expectation to be contacted soon
- Professional footer with company name

## Error Handling

| Error | Cause | Solution |
|-------|-------|----------|
| "Email service configuration error" | Invalid SMTP credentials | Verify EMAIL_USER, EMAIL_PASSWORD, EMAIL_SERVICE |
| "Valid email is required" | Invalid email format | Check email format (user@domain.com) |
| "Valid phone number is required" | Invalid phone format | Phone must have 7+ digits |
| "Failed to send email" | Network/server issue | Check internet connection, retry later |

## Troubleshooting

### Gmail: "App password not working"
- Ensure 2FA is enabled on Google account
- Generate a new App Password
- Use the 16-character password (no spaces)

### "ECONNREFUSED" error
- Check internet connection
- Verify EMAIL_SERVICE setting
- Ensure firewall isn't blocking SMTP

### Emails not sending
- Check `.env.local` file exists and has correct variables
- Verify recipient email is correct
- Check server logs for error messages

## Files Created

- `/app/api/smtp/route.ts` - API endpoint handler
- `/lib/emailService.ts` - Client-side utility function
- `/.env.local.example` - Configuration template

## Security Best Practices

1. **Never commit `.env.local`** - Add to `.gitignore`
2. **Use App Passwords** - Not regular email passwords
3. **Validate server-side** - Don't rely on client validation
4. **Rate limiting** - Consider adding rate limiting to prevent abuse
5. **CORS** - API is only accessible from same domain

## Next Steps

1. Copy `.env.local.example` to `.env.local`
2. Add your email credentials
3. Import `sendContactEmail` in your contact forms
4. Test with a form submission
5. Monitor email delivery

---

For more info on nodemailer: [nodemailer.com](https://nodemailer.com)
