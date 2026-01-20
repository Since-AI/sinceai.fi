"use client";
import React from "react";
import { motion } from "framer-motion";
import { TextLoop } from "@/components/motion-primitives/text-loop";

interface HeroSectionProps {
  discordUrl?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  discordUrl = "https://discord.gg/6PC74zW68v",
}) => {
  return (
    <>

      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 py-24">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-black" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_65%)]" />
        </div>

        {/* Content */}
        <div className="relative z-20 flex flex-col items-center space-y-6 text-center max-w-6xl mx-auto">
          {/* Main Headline - Apple-style large typography */}
          <motion.div
            className="flex flex-col items-center space-y-4 pb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tighter leading-[1.15] text-white">
              1 Thriving
            </h1>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tighter leading-[1.15] bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-transparent pb-4">
              AI Community.
            </h1>
          </motion.div>

          {/* Subheading */}
          <motion.p
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-neutral-400 max-w-3xl mt-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            Stay connected with builders
            <br className="hidden sm:block" />
            pushing AI forward.
          </motion.p>

          {/* Text Loop - More subtle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6"
          >
            <TextLoop
              className="text-sm sm:text-base md:text-lg font-normal tracking-wide text-neutral-500"
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 35,
                mass: 1,
              }}
              variants={{
                initial: { y: 20, opacity: 0, filter: "blur(4px)" },
                animate: { y: 0, opacity: 1, filter: "blur(0px)" },
                exit: { y: -20, opacity: 0, filter: "blur(4px)" },
              }}
            >
              <span>For AI Enthusiasts</span>
              <span>For Founders</span>
              <span>For Developers</span>
              <span>For Designers</span>
            </TextLoop>
          </motion.div>

          {/* CTA Button - Apple-style */}
          <motion.div
            className="pt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <button
              type="button"
              onClick={() => window.open(discordUrl, "_blank")}
              className="group relative inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold text-white bg-white/10 rounded-full transition-all duration-500 hover:bg-white/15 backdrop-blur-xl border border-white/20 hover:border-white/30 hover:scale-[1.02] transform disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Join Our Community on Discord"
            >
              <span className="relative z-10 tracking-wide">
                Join Community
              </span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </button>
          </motion.div>
        </div>

        {/* Scroll indicator - More minimal */}
        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="w-5 h-8 rounded-full border border-neutral-700 flex items-start justify-center p-1.5"
          >
            <div className="w-1 h-2 bg-neutral-600 rounded-full" />
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default HeroSection;
