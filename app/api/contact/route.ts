import { NextRequest, NextResponse } from "next/server";

// Rate limiting map - stores IP addresses and their submission timestamps
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour
const MAX_REQUESTS = 5; // Max 5 requests per hour per IP

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  subject: string;
  goals?: string;
  message: string;
  phone?: string;
  source?: string;
}

// Validation functions
function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validatePhone(phone: string): boolean {
  if (!phone) return true;
  const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/;
  return phoneRegex.test(phone) && phone.length >= 7;
}

function validateFormData(data: ContactFormData): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  // Name validation
  if (!data.name?.trim()) {
    errors.push("Name is required");
  } else if (data.name.trim().length < 2) {
    errors.push("Name must be at least 2 characters");
  } else if (data.name.length > 100) {
    errors.push("Name must be less than 100 characters");
  }

  // Email validation
  if (!data.email?.trim()) {
    errors.push("Email is required");
  } else if (!validateEmail(data.email)) {
    errors.push("Please enter a valid email address");
  }

  // Subject validation
  const validSubjects = ["partnership", "sponsorship", "community", "job", "press", "other"];
  if (!data.subject) {
    errors.push("Subject is required");
  } else if (!validSubjects.includes(data.subject)) {
    errors.push("Invalid subject selected");
  }

  // Message validation
  if (!data.message?.trim()) {
    errors.push("Message is required");
  } else if (data.message.trim().length < 10) {
    errors.push("Message must be at least 10 characters");
  } else if (data.message.length > 2000) {
    errors.push("Message must be less than 2000 characters");
  }

  // Goals validation (optional, but if subject is partnership/sponsorship)
  if (data.goals && data.goals.length > 500) {
    errors.push("Goals must be less than 500 characters");
  }

  // Company validation (optional)
  if (data.company && data.company.length > 100) {
    errors.push("Company name must be less than 100 characters");
  }

  // Phone validation (optional)
  if (data.phone && !validatePhone(data.phone)) {
    errors.push("Please enter a valid phone number");
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}

// Rate limiting check
function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];
  
  // Filter out old timestamps
  const recentTimestamps = timestamps.filter(
    (timestamp) => now - timestamp < RATE_LIMIT_WINDOW
  );
  
  if (recentTimestamps.length >= MAX_REQUESTS) {
    return false; // Rate limited
  }
  
  // Add current timestamp
  recentTimestamps.push(now);
  rateLimitMap.set(ip, recentTimestamps);
  
  return true; // Not rate limited
}

// Get subject label for email
function getSubjectLabel(subject: string): string {
  const labels: Record<string, string> = {
    partnership: "Partnership Opportunity",
    sponsorship: "Sponsorship Inquiry",
    community: "Community Question",
    job: "Job Opportunity",
    press: "Press/Media",
    other: "Other",
  };
  return labels[subject] || subject;
}

// Get source label
function getSourceLabel(source: string): string {
  const labels: Record<string, string> = {
    social: "Social media",
    "word-of-mouth": "Word of mouth",
    discord: "Discord",
    search: "Search engine",
    event: "Event",
    other: "Other",
  };
  return labels[source] || source;
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const forwardedFor = request.headers.get("x-forwarded-for");
    const ip = forwardedFor?.split(",")[0]?.trim() || "unknown";

    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    // Parse request body
    const body = await request.json();

    // Validate form data
    const validation = validateFormData(body);
    if (!validation.valid) {
      return NextResponse.json(
        { error: validation.errors[0], errors: validation.errors },
        { status: 400 }
      );
    }

    const { name, email, company, subject, goals, message, phone, source } = body;

    // Format the email content
    const emailContent = `
New Contact Form Submission
============================

Name: ${name}
Email: ${email}
${company ? `Company: ${company}` : ""}
Subject: ${getSubjectLabel(subject)}
${phone ? `Phone: ${phone}` : ""}
${source ? `How they heard about us: ${getSourceLabel(source)}` : ""}

${goals ? `Partnership Goals:\n${goals}\n` : ""}
Message:
${message}

---
Submitted at: ${new Date().toISOString()}
IP: ${ip}
    `.trim();

    // Log the submission (in production, you'd send emails here)
    console.log("=== New Contact Form Submission ===");
    console.log(emailContent);
    console.log("===================================");

    // TODO: Integrate email service (Resend, SendGrid, etc.)
    // Example with Resend:
    // 
    // import { Resend } from 'resend';
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // 
    // // Send notification to team
    // await resend.emails.send({
    //   from: 'noreply@sinceai.fi',
    //   to: subject === 'partnership' || subject === 'sponsorship' 
    //     ? 'partners@sinceai.fi' 
    //     : 'info@sinceai.fi',
    //   subject: `[Since AI Contact] ${getSubjectLabel(subject)} from ${name}`,
    //   text: emailContent,
    // });
    // 
    // // Send confirmation to user
    // await resend.emails.send({
    //   from: 'noreply@sinceai.fi',
    //   to: email,
    //   subject: 'Thanks for contacting Since AI!',
    //   text: `Hi ${name},\n\nThank you for reaching out to Since AI. We've received your message and will get back to you within 24 hours.\n\nBest,\nThe Since AI Team`,
    // });

    // TODO: Store in database/CRM
    // Example with Supabase:
    // 
    // import { createClient } from '@supabase/supabase-js';
    // const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_KEY!);
    // 
    // await supabase.from('contact_submissions').insert({
    //   name,
    //   email,
    //   company,
    //   subject,
    //   goals,
    //   message,
    //   phone,
    //   source,
    //   ip,
    //   created_at: new Date().toISOString(),
    // });

    return NextResponse.json(
      { 
        success: true, 
        message: "Thank you for your message. We'll be in touch within 24 hours." 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}

// Handle OPTIONS for CORS
export async function OPTIONS() {
  return NextResponse.json({}, { status: 200 });
}
