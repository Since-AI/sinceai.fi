/**
 * Centralized organization constants
 * Single source of truth for Since AI entity information
 */

export const ORG = {
  name: "Since AI",
  legalName: "Since AI ry",
  businessId: "3593920-2",
  baseUrl: "https://sinceai.fi",
  location: {
    city: "Turku",
    country: "Finland",
    countryCode: "FI",
  },
  contact: {
    generalEmail: "riku@boostturku.com", // TODO: Update when Since AI email available
    partnershipEmail: "aarne@boostturku.com", // TODO: Update when Since AI email available
  },
  social: {
    discord: "https://discord.gg/6PC74zW68v",
    telegram: "https://t.me/sinceaihq",
    linkedin: "https://www.linkedin.com/company/sinceai",
    instagram: "https://www.instagram.com/since_ai/",
    x: "https://x.com/since_ai_",
    github: "https://github.com/since-ai",
    facebook: "https://www.facebook.com/sinceai",
  },
  stats: {
    members: "500+",
    hackathonParticipants: "200+",
    projects: "30+",
    partners: "15+",
  },
} as const;

export default ORG;
