import { Metadata } from "next";
import { getFirstEventSchema, getUpcoming2026EventSchema } from "@/lib/schema";
import { FIRST_EVENT, UPCOMING_EVENT_2026, COPY } from "@/lib/sinceai";

export const metadata: Metadata = {
  title: "Events - Since AI | AI Hackathons in Turku, Finland",
  description:
    `High-signal hackathons and meetups for builders who ship. ${COPY.firstEventLineShort}. Next: Hackathon 2026 – November 2026 (dates TBA).`,
  keywords: [
    "Since AI hackathon",
    "AI hackathon Turku",
    "AI hackathon Finland",
    "hackathon 2025",
    "machine learning hackathon",
    "AI events Finland",
    "Turku tech events",
    "developer hackathon",
  ],
  alternates: {
    canonical: "/events",
  },
  openGraph: {
    title: "AI Hackathons & Events - Since AI",
    description:
      `Europe's AI builder hackathons. ${FIRST_EVENT.attendance} participants, 30+ projects built. Based in Turku, Finland.`,
    type: "website",
    locale: "en_US",
    siteName: "Since AI",
    url: "/events",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Get both event schemas (past 2025 + upcoming 2026)
  const firstEventSchema = getFirstEventSchema();
  const upcoming2026Schema = getUpcoming2026EventSchema();

  // Create ItemList schema to group both events
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Since AI Hackathons",
    description: "Past and upcoming AI hackathons organized by Since AI in Turku, Finland",
    numberOfItems: 2,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: upcoming2026Schema,
      },
      {
        "@type": "ListItem",
        position: 2,
        item: firstEventSchema,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(itemListSchema),
        }}
      />
      {children}
    </>
  );
}
