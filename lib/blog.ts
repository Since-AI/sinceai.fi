/**
 * Blog post metadata
 * Hardcoded excerpts — no Medium scraping required
 */

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  tags: string[];
  url: string;
  datePublished: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-form-a-hackathon-team",
    title:
      "How to Form a Hackathon Team (Like a Startup)\u2014The Timeless Playbook",
    excerpt:
      "A practical guide to building a winning hackathon team like a startup: roles, responsibilities, decision-making, and execution rhythm for 72-hour success.",
    tags: ["AI", "Hackathons", "Teams"],
    url: "https://medium.com/@sinceai/how-to-form-a-hackathon-team-like-a-startup-the-timeless-playbook-9ae8dff2ab3e",
    datePublished: "2025-01-01",
  },
  {
    slug: "how-to-win-an-ai-hackathon",
    title: "How to Win an AI Hackathon",
    excerpt:
      "A demo-first playbook for winning AI hackathons: pick the right problem, ship a reliable product, show proof fast, and pitch so judges remember you.",
    tags: ["AI", "Hackathons", "Demo"],
    url: "https://medium.com/@sinceai/how-to-win-an-ai-hackathon-9a1a2841c968",
    datePublished: "2025-01-01",
  },
];
