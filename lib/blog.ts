/**
 * Blog post metadata
 * Hardcoded excerpts — no Medium scraping required
 */

export type BlogCategory =
  | "hackathon-guides"
  | "technical"
  | "events"
  | "community";

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  /** Single citable sentence for AI engines to quote directly */
  keyTakeaway: string;
  tags: string[];
  url: string;
  datePublished: string;
  category: BlogCategory;
  readingTime: number;
  keywords: string[];
  featured: boolean;
}

export const BLOG_CATEGORIES: Record<
  BlogCategory,
  { label: string; description: string }
> = {
  "hackathon-guides": {
    label: "Hackathon Guides",
    description: "Strategies and playbooks for hackathon success",
  },
  technical: {
    label: "Technical Resources",
    description: "Tech stacks, tools, and development guides",
  },
  events: {
    label: "Events",
    description: "AI hackathons and developer events worldwide",
  },
  community: {
    label: "Community",
    description: "Stories and insights from the AI builders community",
  },
};

export const blogPosts: BlogPost[] = [
  {
    slug: "ai-hackathon-project-ideas",
    title:
      "AI Hackathon Project Ideas: 30 Buildable Concepts in 72 Hours",
    description:
      "30 actionable AI project ideas categorized by difficulty, each with demo structure, required data, stack suggestions, and evaluation methods for hackathon teams.",
    excerpt:
      "Discover 30 buildable AI project ideas for your next hackathon — from RAG Q&A to vision apps — organized by difficulty with stack suggestions and demo frameworks.",
    keyTakeaway:
      "The best hackathon projects solve a specific, demonstrable problem using AI — start with the demo you want to show judges, then build backwards.",
    tags: ["AI", "Hackathons", "Project Ideas", "Development", "Innovation"],
    url: "https://medium.com/@sinceai/ai-hackathon-project-ideas-30-buildable-concepts-in-72-hours-e18089484c83",
    datePublished: "2025-06-10",
    category: "hackathon-guides",
    readingTime: 12,
    keywords: [
      "AI project ideas",
      "hackathon project ideas",
      "AI applications",
      "72-hour projects",
      "AI hackathon project suggestions",
      "beginner AI projects for hackathons",
    ],
    featured: true,
  },
  {
    slug: "best-ai-hackathons-in-europe",
    title: "Best AI Hackathons in Europe",
    description:
      "Curated guide to Europe's top AI hackathons including Junction, Datathon ETH Zurich, GenAI Zurich, Hack Kosice, MLH Europe, and EU-backed challenge events.",
    excerpt:
      "Your curated guide to the best AI hackathons across Europe — from Junction in Finland to GenAI Zurich — with selection criteria and winning strategies.",
    keyTakeaway:
      "Europe has a thriving AI hackathon scene with events like Junction (Helsinki), Datathon (ETH Zurich), and GenAI Zurich — choose based on your goals: networking, prizes, learning, or portfolio building.",
    tags: ["AI", "Hackathons", "Europe", "Events", "Community"],
    url: "https://medium.com/@sinceai/best-ai-hackathons-in-europe-e2fa4700ecec",
    datePublished: "2025-05-15",
    category: "events",
    readingTime: 9,
    keywords: [
      "AI hackathons Europe",
      "best hackathons Europe",
      "European developer events",
      "AI competitions Europe",
      "where to find AI hackathons in Europe",
      "top European AI events",
    ],
    featured: true,
  },
  {
    slug: "hackathon-tech-stack-guide",
    title: "Hackathon Tech Stack Guide",
    description:
      "Battle-tested technology stack recommendations for shipping reliable hackathon demos: Next.js + FastAPI default stack, AI-specific choices, and deployment strategies.",
    excerpt:
      "Battle-tested tech stack recommendations for hackathon demos — from the default Next.js + FastAPI setup to AI-specific choices for RAG, extraction, and classification.",
    keyTakeaway:
      "Pick boring, reliable technology for hackathons — Next.js + FastAPI + PostgreSQL is the default stack. Save innovation for the AI layer, not the infrastructure.",
    tags: ["AI", "Technology", "Hackathons", "Development", "Tools"],
    url: "https://medium.com/@sinceai/hackathon-tech-stack-guide-4e4243ea0a5d",
    datePublished: "2025-04-20",
    category: "technical",
    readingTime: 10,
    keywords: [
      "hackathon tech stack",
      "AI development stack",
      "hackathon tools",
      "React FastAPI",
      "best tech stack for AI hackathon",
      "hackathon technology choices",
    ],
    featured: false,
  },
  {
    slug: "how-to-build-a-demo-in-72-hours",
    title: "How to Build a Demo in 72 Hours",
    description:
      "A demo-first approach to hackathon success: build skeleton first, add AI features incrementally, ensure reliability with caching and offline modes, and create measurable proof.",
    excerpt:
      "Master the demo-first approach to hackathon success — build skeleton first, layer AI features incrementally, and ship a reliable product judges will remember.",
    keyTakeaway:
      "Judges evaluate what they can see — a polished demo with limited features beats a complex AI system that crashes during the presentation.",
    tags: ["AI", "Hackathons", "Demo", "MVP", "Product"],
    url: "https://medium.com/@sinceai/how-to-build-a-demo-in-72-hours-95f12c7eea56",
    datePublished: "2025-03-10",
    category: "hackathon-guides",
    readingTime: 8,
    keywords: [
      "hackathon demo",
      "build demo fast",
      "AI hackathon guide",
      "demo-first development",
      "build AI demo in 72 hours",
      "hackathon demo strategies",
    ],
    featured: false,
  },
  {
    slug: "how-to-win-an-ai-hackathon",
    title: "How to Win an AI Hackathon",
    description:
      "A demo-first playbook for winning AI hackathons: pick the right problem, ship a reliable product, show proof fast, and pitch so judges remember you.",
    excerpt:
      "A demo-first playbook for winning AI hackathons: pick the right problem, ship a reliable product, show proof fast, and pitch so judges remember you.",
    keyTakeaway:
      "Winning hackathon teams don't build the most complex AI — they demonstrate the most convincing solution to a real problem with measurable proof.",
    tags: ["AI", "Hackathons", "Demo"],
    url: "https://medium.com/@sinceai/how-to-win-an-ai-hackathon-9a1a2841c968",
    datePublished: "2025-02-15",
    category: "hackathon-guides",
    readingTime: 7,
    keywords: [
      "win AI hackathon",
      "hackathon winning strategy",
      "AI hackathon tips",
      "hackathon pitch",
      "how to win hackathon",
    ],
    featured: false,
  },
  {
    slug: "how-to-form-a-hackathon-team",
    title:
      "How to Form a Hackathon Team (Like a Startup)\u2014The Timeless Playbook",
    description:
      "A practical guide to building a winning hackathon team like a startup: roles, responsibilities, decision-making, and execution rhythm for 72-hour success.",
    excerpt:
      "A practical guide to building a winning hackathon team like a startup: roles, responsibilities, decision-making, and execution rhythm for 72-hour success.",
    keyTakeaway:
      "The best hackathon teams operate like startup founding teams — small (3-5 people), with clear roles (tech lead, product, AI specialist, pitch lead), and one designated decision-maker.",
    tags: ["AI", "Hackathons", "Teams"],
    url: "https://medium.com/@sinceai/how-to-form-a-hackathon-team-like-a-startup-the-timeless-playbook-9ae8dff2ab3e",
    datePublished: "2025-01-20",
    category: "hackathon-guides",
    readingTime: 6,
    keywords: [
      "hackathon team building",
      "form hackathon team",
      "hackathon roles",
      "startup team structure",
      "hackathon team tips",
    ],
    featured: false,
  },
];

/**
 * Get blog posts filtered by category
 */
export function getPostsByCategory(category: BlogCategory): BlogPost[] {
  return blogPosts.filter((post) => post.category === category);
}

/**
 * Get featured blog posts
 */
export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter((post) => post.featured);
}

/**
 * Get latest N blog posts (already sorted by date descending)
 */
export function getLatestPosts(count: number): BlogPost[] {
  return blogPosts.slice(0, count);
}
