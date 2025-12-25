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
    <section className="py-24 md:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <InView
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          viewOptions={{ margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          once
        >
          <div className="flex flex-col items-center gap-6 mb-16">
            <div className="text-sm font-medium text-white/50 uppercase tracking-[0.3em]">
              Why Partner With Us
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-center leading-tight text-white max-w-4xl">
              AI focused
              <br />
              <span className="text-white/70">Success track record</span>
            </h2>
          </div>
        </InView>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {valueProps.map((prop, index) => (
            <InView
              key={prop.title}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              viewOptions={{ margin: "0px 0px -50px 0px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              once
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group relative h-full overflow-hidden rounded-3xl backdrop-blur-xl transition-all duration-500"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${prop.gradient} via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative p-8 md:p-10 flex flex-col gap-6">
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${iconColors[index]}`}>
                    {prop.icon}
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-2xl md:text-3xl font-medium text-white">
                      {prop.title}
                    </h3>
                    <p className="text-white/60 font-light leading-relaxed text-base md:text-lg">
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
