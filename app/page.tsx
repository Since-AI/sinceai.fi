"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import SmoothScroll from "@/components/smoothScroll";
import Preloader from "@/components/utils/Preloader";
import { Navbar } from "@/components/navbar";

import {
  HeroSection,
  StatsSection,
  ValuePropsSection,
  FeaturedProjects,
  SponsorSection,
  CommunityEngagement,
  Testimonials,
  NewsletterCTA,
  Footer,
  PastSponsors,
} from "@/components/sections";

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
  }, []);

  // Configuration - Update these values with your actual data
  const config = {
    discordUrl: "https://discord.gg/6PC74zW68v",
    calendlyUrl: "https://calendly.com/sinceai",
    contactEmail: "riku@boostturku.com",
    nextHackathonDate: "November 21-23, 2025",
    jobBoardUrl: "#jobs",
    viewAllProjectsUrl: "/contact",
  };

  // Hackathon metrics - Update with actual numbers
  const metrics = {
    participants: "200+",
    projects: "30+",
    companies: "15+",
  };

  // Featured projects - Update with actual projects from hackathon
  const featuredProjects = [
    {
      title: "Sound Watch",
      description:
        "SoundWatch provides autonomous vessels with the sense of hearing. We developed a CNN-based classifier (AudioResNet-18) that detects and interprets COLREGs whistle signals in real-time, specifically designed to operate in noisy maritime environments.",
      team: ["Theo W.", "Toki T.", "Lassi R."],
      gradient: "from-blue-500/10",
    },
    {
      title: "NLCAR Smart Message Router",
      description:
        "A Customer Support Smart Message router using fine-tuned model and ai pipeline.",
      team: ["Juhana K.", "Vargha C.", "Erdős P.", "Kirill N."],
      gradient: "from-purple-500/10",
    },
    {
      title: "Switchboard diagram analyzer",
      description:
        "Switchboard diagram analyzer using machine vision and OCR for data extraction.",
      team: ["Andre M.", "Linards L.", "Safiul A.", "Youngim G."],
      gradient: "from-green-500/10",
    },
    {
      title: "COLREG Sound Signal Classifier",
      description:
        "A robust, containerized Machine Learning system designed to detect and classify maritime sound signals according to the International Regulations for Preventing Collisions at Sea (COLREGs), specifically Rules 34 & 35.",
      team: ["Hannu K.", "Eduard R.", "Oleksandr Y."],
      gradient: "from-orange-500/10",
    },
  ];

  // Testimonials - Update with actual feedback
  const testimonials = [
    {
      type: "participant" as const,
      name: "Abhishek Roy",
      role: "Software Engineer",
      photo: "/assets/images/testimonials/placeholder.jpg",
      quote: "Keep doing it. Would love to participate next year. 🤩🤩🤩",
      rating: 5,
    },
    {
      type: "participant" as const,
      name: "Youngim Gwock",
      role: "Technical Founder",
      photo: "/assets/images/testimonials/placeholder.jpg",
      quote:
        "I think the company cases really good for us and they prepared a lot and stayed a lot with us. I take it as because they really have lots of problems to solve. I think big companies are good to be there for marketing purposes but SMEs can truly benefit from this and good chance to connect with foreign students.",
      rating: 5,
    },
    {
      type: "partner" as const,
      contactName: "Partner Representative",
      title: "Head of Talent",
      companyLogo: "/assets/sponsors/valmet.png",
      companyName: "Partner Company",
      quote:
        "We hired 3 exceptional developers. Best recruiting investment we made this year.",
    },
    {
      type: "participant" as const,
      name: "Arthur Lagerlöf",
      role: "Software Engineer",
      photo: "/assets/images/testimonials/placeholder.jpg",
      quote:
        "I had a great time participating. Thanks to all you event organizers.",
      rating: 5,
    },
    {
      type: "partner" as const,
      contactName: "Partner Contact",
      title: "Innovation Lead",
      companyLogo: "/assets/sponsors/kongsberg.png",
      companyName: "Partner Company",
      quote:
        "Partnership exceeded expectations. The community is engaged, talented, and genuinely passionate about AI.",
    },
  ];

  return (
    <>
      <Navbar />
      <SmoothScroll>
        <AnimatePresence mode="wait">
          {isLoading && <Preloader />}
        </AnimatePresence>

        <div className="flex flex-col w-full overflow-hidden">
          {/* Hero Section */}
          <HeroSection discordUrl={config.discordUrl} />

          {/* Stats Section */}
          <StatsSection
            participants={metrics.participants}
            projects={metrics.projects}
            companies={metrics.companies}
          />

          {/* Value Props */}
          <ValuePropsSection />

          {/* Featured Projects */}
          <FeaturedProjects
            projects={featuredProjects}
            viewAllUrl={config.viewAllProjectsUrl}
          />

          {/* Past Sponsors - Social Proof */}
          <PastSponsors />

          {/* Sponsor/Partner Section */}
          <SponsorSection
            calendlyUrl={config.calendlyUrl}
            contactEmail={config.contactEmail}
          />

          {/* Community Engagement */}
          {/* <CommunityEngagement
          discordUrl={config.discordUrl}
          nextHackathonDate={config.nextHackathonDate}
          jobBoardUrl={config.jobBoardUrl}
        /> */}

          {/* Testimonials */}
          <Testimonials testimonials={testimonials} />

          {/* Newsletter CTA */}
          <NewsletterCTA discordUrl={config.discordUrl} />

          {/* Footer */}
          <Footer
            discordUrl={config.discordUrl}
            newsletterUrl="#newsletter"
            partnerUrl="#partner-section"
          />
        </div>
      </SmoothScroll>
    </>
  );
}
