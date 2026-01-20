/**
 * Send email through SMTP API
 * @param data - Form data to send
 * @returns Response from API
 */
export async function sendContactEmail(data: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  subject: string;
  detail: string;
}) {
  try {
    const response = await fetch("/api/smtp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || "Failed to send email");
    }

    return {
      success: true,
      message: result.message,
    };
  } catch (error) {
    console.error("Email send error:", error);
    return {
      success: false,
      error:
        error instanceof Error ? error.message : "Failed to send email",
    };
  }
}
