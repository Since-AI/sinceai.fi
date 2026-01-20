"use client";
import React from "react";
import { motion } from "framer-motion";
import { InView } from "@/components/motion-primitives/in-view";
import { Zap, Handshake, TrendingUp } from "lucide-react";

interface ValueProp {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
}

export const ValuePropsSection: React.FC = () => {
  const valueProps: ValueProp[] = [
    {
      icon: <Zap className="w-6 h-6 text-white/50 group-hover:text-blue-500 transition-all duration-300" />,
      title: "Access",
      description: "Direct pipeline to AI developers actively building the future of technology.",
      gradient: "from-gray-500/10",
    },
    {
      icon: <Handshake className="w-6 h-6 text-white/50 group-hover:text-purple-500 transition-all duration-300" />,
      title: "Build",
      description: "Lasting partnerships with aligned goals and shared vision for innovation.",
      gradient: "from-gray-500/10",
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-white/50 group-hover:text-green-500 transition-all duration-300" />,
      title: "Thrive",
      description: "200+ attendees on our first event ever starting from zero, and we're growing fast.",
      gradient: "from-gray-500/10",
    },
  ];

  const iconColors = ["text-blue-400", "text-purple-400", "text-green-400"];

  return (
    <section className="py-32 md:py-40 px-6">
      <div className="max-w-7xl mx-auto">
        <InView
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          viewOptions={{ margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          once
        >
          <div className="flex flex-col items-center gap-8 mb-24">
            <div className="text-xs md:text-sm font-medium text-neutral-500 tracking-wider">
              Why Partner With Us
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-center leading-[1.1] tracking-tight text-white max-w-4xl">
              AI focused.
              <br />
              <span className="bg-gradient-to-b from-white to-neutral-500 bg-clip-text text-transparent">Success track record.</span>
            </h2>
          </div>
        </InView>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {valueProps.map((prop, index) => (
            <InView
              key={prop.title}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              viewOptions={{ margin: "0px 0px -50px 0px" }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1]
              }}
              once
            >
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="group relative h-full overflow-hidden rounded-2xl transition-all duration-500 border border-white/5 hover:border-white/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="relative p-10 md:p-12 flex flex-col gap-8">
                  <div className="space-y-4">
                    <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                      {prop.title}
                    </h3>
                    <p className="text-neutral-400 font-normal leading-relaxed text-base md:text-lg">
                      {prop.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </InView>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuePropsSection;
