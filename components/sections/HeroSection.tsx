"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TextLoop } from "@/components/motion-primitives/text-loop";
import { Magnetic } from "@/components/motion-primitives/magnetic";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  discordUrl?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  discordUrl = "https://discord.gg/6PC74zW68v",
}) => {
  const [showStickyCTA, setShowStickyCTA] = useState(false);
  const springOptions = { bounce: 0.1 };

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyCTA(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Sticky CTA */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{
          opacity: showStickyCTA ? 1 : 0,
          y: showStickyCTA ? 0 : -20,
        }}
        transition={{ duration: 0.3 }}
        className={`fixed top-20 right-4 md:right-8 z-40 ${showStickyCTA ? "pointer-events-auto" : "pointer-events-none"}`}
      >
        <Button
          onClick={() => window.open(discordUrl, "_blank")}
          className="bg-white text-black hover:bg-white/90 rounded-full px-6 py-2 text-sm font-medium shadow-lg"
        >
          Join Community
        </Button>
      </motion.div>

      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex flex-col items-center justify-center">
        {/* Background with overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black z-10" />
          <video
            src="/assets/videos/ads.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-40"
            poster="/assets/logo/logo_full.png"
          />
        </div>

        {/* Content */}
        <div className="relative z-20 flex flex-col items-center space-y-8 px-4 text-center max-w-5xl mt-16">
          {/* Logo */}
          {/* <motion.img
            src="/assets/logo/logo_full.png"
            alt="Since AI Logo"
            className="w-32 md:w-40 h-auto object-contain mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          /> */}

          {/* Main Headline */}
          <motion.div
            className="flex flex-col items-center space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white leading-tight">
              500+ Developers.
              <br />
              <span className="text-white/80">1 Thriving Community.</span>
            </h1>
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-white/40 to-transparent mt-4" />
          </motion.div>

          {/* Subheading */}
          <motion.p
            className="text-lg md:text-xl lg:text-2xl font-light text-white/70 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Stay connected with builders pushing AI forward.
          </motion.p>

          {/* Text Loop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-4"
          >
            <TextLoop
              className="text-base md:text-lg font-light tracking-wide text-white/60"
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
                mass: 1,
              }}
              variants={{
                initial: { y: 10, opacity: 0 },
                animate: { y: 0, opacity: 1 },
                exit: { y: -10, opacity: 0 },
              }}
            >
              <span>For AI Enthusiasts</span>
              <span>For Founders</span>
              <span>For Developers</span>
              <span>For Designers</span>
            </TextLoop>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            className="pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Magnetic
              intensity={0.2}
              springOptions={springOptions}
              actionArea="global"
              range={200}
            >
              <button
                type="button"
                onClick={() => window.open(discordUrl, "_blank")}
                className="group relative inline-flex items-center justify-center px-6 md:px-6  text-base md:text-lg font-medium text-black bg-white rounded-full transition-all duration-300 hover:bg-white/90 hover:scale-105 transform min-h-12"
                aria-label="Join Our Community on Discord"
              >
                <span className="relative z-10 font-medium">Join Our Community</span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white via-white to-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </Magnetic>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-xs text-white/40 uppercase tracking-widest">Scroll</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
