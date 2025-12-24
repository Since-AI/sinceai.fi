"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { InView } from "@/components/motion-primitives/in-view";
import { InfiniteSlider } from "@/components/motion-primitives/infinite-slider";
import { Users, Briefcase, FolderGit2 } from "lucide-react";

interface StatItem {
  icon: React.ReactNode;
  value: string;
  label: string;
}

interface StatsSectionProps {
  participants?: string;
  projects?: string;
  companies?: string;
}

export const StatsSection: React.FC<StatsSectionProps> = ({
  participants = "200+",
  projects = "30+",
  companies = "15+",
}) => {
  const stats: StatItem[] = [
    {
      icon: <Users className="w-8 h-8 text-blue-400" />,
      value: participants,
      label: "Participants",
    },
    {
      icon: <FolderGit2 className="w-8 h-8 text-purple-400" />,
      value: projects,
      label: "Projects Completed",
    },
    {
      icon: <Briefcase className="w-8 h-8 text-green-400" />,
      value: companies,
      label: "Partnered Companies",
    },
  ];

  const sponsors = [
    { name: "Antler", logo: "/assets/sponsors/antler.png" },
    { name: "Apelago", logo: "/assets/sponsors/apelago.png" },
    { name: "Business Turku", logo: "/assets/sponsors/businessturku.png" },
    { name: "Eisko", logo: "/assets/sponsors/eisko.svg" },
    { name: "ElevenLabs", logo: "/assets/sponsors/elevenlabs.png" },
    { name: "Featherless", logo: "/assets/sponsors/featherless.svg" },
    { name: "Kongsberg", logo: "/assets/sponsors/kongsberg.png" },
    { name: "Sandvik", logo: "/assets/sponsors/sandvik.png" },
    { name: "Skillio", logo: "/assets/sponsors/Skillio.png" },
    { name: "Valmet", logo: "/assets/sponsors/valmet.png" },
  ];

  const supporters = [
    { name: "Aalto AI", logo: "/assets/supports/aaltoai.png" },
    { name: "AI Mad Lab", logo: "/assets/supports/aimadlab.svg" },
    { name: "Boost Turku", logo: "/assets/supports/boost.svg" },
    { name: "City of Turku", logo: "/assets/supports/cityofturku.png" },
    { name: "Turku", logo: "/assets/supports/turku.png" },
    { name: "Turku AMK", logo: "/assets/supports/turkuamk.png" },
    {
      name: "University of Turku",
      logo: "/assets/supports/universityofturku.png",
    },
  ];

  const allLogos = [...sponsors, ...supporters];

  return (
    <section className="py-24 md:py-32 px-4">
      <div className="flex flex-col gap-32 max-w-6xl mx-auto">
        {/* Partner & Supporter Logos Slider */}
        <InView
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          viewOptions={{ margin: "0px 0px -50px 0px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          once
        >
          <div className="mt-20 md:mt-28">
            <p className="text-center text-white/40 text-sm uppercase tracking-widest mb-8">
              Trusted & supported by
            </p>
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-10" />
              <InfiniteSlider speed={30} gap={48}>
                {allLogos.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-center h-12 w-32 opacity-60 hover:opacity-100 transition-all duration-300"
                  >
                    <Image
                      src={item.logo}
                      alt={item.name}
                      width={120}
                      height={48}
                      className="object-contain max-h-full"
                    />
                  </div>
                ))}
              </InfiniteSlider>
            </div>
          </div>
        </InView>
        <InView
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          viewOptions={{ margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          once
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-3xl backdrop-blur-xl transition-all duration-500 p-8 md:p-10 text-center"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative flex flex-col items-center gap-4">
                  <div className="p-4 rounded-2xl ">{stat.icon}</div>

                  <div className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tight">
                    {stat.value}
                  </div>

                  <div className="text-sm md:text-base text-white/60 font-light uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </InView>
      </div>
    </section>
  );
};

export default StatsSection;
