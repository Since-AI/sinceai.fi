"use client";
import React from "react";
import { motion } from "framer-motion";
import { Users, CheckCircle, Briefcase } from "lucide-react";

export function ThreePillars() {
  const pillars = [
    {
      icon: Users,
      title: "Build",
      description: "Hackathons + meetups for builders who ship.",
    },
    {
      icon: CheckCircle,
      title: "Proof",
      description: "GitHub, demos, and post-event reports.",
    },
    {
      icon: Briefcase,
      title: "Opportunities",
      description: "Partner challenges, recruiting, workshops.",
    },
  ];

  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-center text-center space-y-4"
            >
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <pillar.icon className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                {pillar.title}
              </h2>
              <p className="text-base text-neutral-400 leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
