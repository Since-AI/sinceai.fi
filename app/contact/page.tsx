"use client";
import React, { useRef, useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

import SmoothScroll from "@/components/smoothScroll";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/sections/Footer";
import {
  ContactHero,
  ContactForm,
  ContactRoutes,
  ContactFAQ,
  DirectContact,
  ResponseTime,
} from "@/components/sections/contact";

// Team members data
const teamMembers = [
  {
    name: "Aarne Ollila",
    role: "Head of Partnerships",
    email: "aarne@boostturku.com",
    number: "045 652 5605",
    linkedin: "https://www.linkedin.com/in/aarne-ollila-53429028b/",
  },
  {
    name: "Arttu Myyryläinen",
    role: "Head of Strategic Outreach",
    email: "arttu@boostturku.com",
    number: "044 985 6522",
    linkedin: "https://www.linkedin.com/in/arttu-myyryl%C3%A4inen/",
  },
  {
    name: "Riku Lauttia",
    role: "Head of Operations",
    email: "riku@boostturku.com",
    linkedin: "https://www.linkedin.com/in/rikulauttia/",
  },
  {
    name: "Aman Vyas",
    role: "Head of International Partnerships",
    email: "aman@boostturku.com",
    number: "044 238 9052",
    linkedin: "https://www.linkedin.com/in/aman-vyas-21b674133/",
  },
  {
    name: "Kasper Hakala",
    role: "Strategic Partnerships",
    email: "kasper@boostturku.com",
    number: "044 514 1364",
    linkedin: "https://www.linkedin.com/in/kasper-hakala-6b2605262/",
  },
  {
    name: "Yuehan John",
    role: "Head of Growth",
    email: "yuehan.john@boostturku.com",
    number: "040 363 3893",
    linkedin: "https://www.linkedin.com/in/yuehanjohn/",
  },
  {
    name: "Vishaka Salpiumi",
    role: "Social Media Manager",
    email: "vishaka@boostturku.com",
    linkedin: "https://www.linkedin.com/in/vishaka-salpiumi-3b6578349/",
  },
  {
    name: "Abdul Wasay",
    role: "Head of Content",
    linkedin: "https://www.linkedin.com/in/abdulwasaymuhammad/",
  },
];

// Configuration
const config = {
  discordUrl: "https://discord.gg/6PC74zW68v",
};

// Team member type
interface TeamMember {
  name: string;
  role: string;
  email?: string;
  number?: string;
  linkedin?: string;
  instagram?: string;
}

// Team Card Component
const TeamCard: React.FC<{ person: TeamMember; index: number }> = ({ person, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: index * 0.05 }}
    className="group relative  backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

    <div className="relative z-10">
      <h3 className="text-white font-medium text-lg mb-2 leading-tight">
        {person.name}
      </h3>

      <p className="text-white/60 text-sm font-light mb-4">
        {person.role}
      </p>

      {person.email && (
        <a
          href={`mailto:${person.email}`}
          className="text-white/40 hover:text-white/70 text-xs font-light transition-colors duration-200 block mb-3 truncate"
        >
          {person.email}
        </a>
      )}

      {person.number && (
        <a
          href={`tel:${person.number}`}
          className="text-white/40 hover:text-white/70 text-xs font-light transition-colors duration-200 block mb-3 truncate"
        >
          {person.number}
        </a>
      )}

      <div className="flex gap-2">
        {person.linkedin && (
          <button
            onClick={() => window.open(person.linkedin, "_blank")}
            className="inline-flex items-center justify-center w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-200 group-hover:scale-110"
            aria-label={`View ${person.name}'s LinkedIn profile`}
          >
            <FaLinkedin size={14} className="text-white/70" />
          </button>
        )}
        {person.instagram && (
          <button
            onClick={() => window.open(person.instagram, "_blank")}
            className="inline-flex items-center justify-center w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-200 group-hover:scale-110"
            aria-label={`View ${person.name}'s Instagram profile`}
          >
            <FaInstagram size={14} className="text-white/70" />
          </button>
        )}
      </div>
    </div>

    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/5 to-transparent rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-500" />
  </motion.div>
);

// Contact Page Content Component (uses useSearchParams)
function ContactPageContent() {
  const formRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const searchParams = useSearchParams();
  const [preselectedSubject, setPreselectedSubject] = useState<string>("");

  // Handle preselected subject from URL params
  useEffect(() => {
    const subject = searchParams.get("subject");
    if (subject) {
      setPreselectedSubject(subject);
      // Scroll to form after a short delay
      setTimeout(() => {
        formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 500);
    }
  }, [searchParams]);

  // Handle partnership click from route cards
  const handlePartnerClick = () => {
    setPreselectedSubject("partnership");
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Handle team section navigation
  const handleTeamClick = () => {
    teamRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {/* Hero Section */}
      <ContactHero />

      {/* Quick Routes Section */}
      <ContactRoutes 
        onPartnerClick={handlePartnerClick}
        onTeamClick={handleTeamClick}
        discordUrl={config.discordUrl}
      />

      {/* Divider */}
      <div className="w-full max-w-5xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* Response Time Banner */}
      <ResponseTime />

      {/* Contact Form Section */}
      {/* <div ref={formRef}>
        <ContactForm preselectedSubject={preselectedSubject} />
      </div> */}

      {/* Divider */}
      <div className="w-full max-w-5xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* Team Members Section */}
      <section ref={teamRef} className="w-full bg-black py-16 px-6">
        <div className="max-w-[1280px] mx-auto">
          {/* Section header */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-3">
              Meet the Team
            </h2>
            <p className="text-white/60 font-light max-w-xl mx-auto">
              Have a specific question? Reach out directly to our team members.
            </p>
          </motion.div>

          {/* Team grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {teamMembers.map((person, index) => (
              <TeamCard key={index} person={person} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full max-w-5xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* FAQ Section */}
      <ContactFAQ discordUrl={config.discordUrl} />

      {/* Divider */}
      <div className="w-full max-w-5xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* Direct Contact Section */}
      <DirectContact discordUrl={config.discordUrl} />
    </>
  );
}

// Main Contact Page Component
export default function ContactPage() {
  return (
    <SmoothScroll>
      <Navbar />
      
      <main className="flex flex-col w-full bg-black min-h-screen">
        <Suspense fallback={
          <div className="flex items-center justify-center min-h-screen">
            <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" />
          </div>
        }>
          <ContactPageContent />
        </Suspense>

        {/* Footer */}
        <Footer discordUrl={config.discordUrl} />
      </main>
    </SmoothScroll>
  );
}
