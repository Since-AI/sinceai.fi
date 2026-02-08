import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Since AI | AI Hackathon Guides & Community Insights",
  description:
    "Guides, playbooks, and insights on AI hackathons, team building, and the builder community. Learn how to form teams, win hackathons, and ship AI products.",
  keywords: [
    "AI hackathon guide",
    "hackathon team building",
    "AI hackathon tips",
    "win hackathon",
    "Since AI blog",
  ],
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog - Since AI | AI Hackathon Guides & Community Insights",
    description:
      "Guides, playbooks, and insights on AI hackathons, team building, and the builder community.",
    url: "https://sinceai.fi/blog",
    siteName: "Since AI",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/assets/logo/SINCE AI full black.png",
        width: 1200,
        height: 630,
        alt: "Since AI Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog - Since AI | AI Hackathon Guides & Community Insights",
    description:
      "Guides, playbooks, and insights on AI hackathons, team building, and the builder community.",
    images: ["/assets/logo/SINCE AI full black.png"],
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
