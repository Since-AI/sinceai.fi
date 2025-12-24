import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Since AI - Partnerships, Sponsorships, Community",
  description:
    "Get in touch with Since AI. Partner with us, sponsor the next hackathon, or join our community of 500+ AI developers.",
  keywords: [
    "Since AI",
    "contact",
    "partnership",
    "sponsorship",
    "hackathon",
    "AI community",
    "Turku Finland",
  ],
  openGraph: {
    title: "Contact Since AI - Partnerships, Sponsorships, Community",
    description:
      "Get in touch with Since AI. Partner with us, sponsor the next hackathon, or join our community of 500+ AI developers.",
    type: "website",
    locale: "en_US",
    siteName: "Since AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Since AI",
    description:
      "Get in touch with Since AI. Partner with us, sponsor the next hackathon, or join our community.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
