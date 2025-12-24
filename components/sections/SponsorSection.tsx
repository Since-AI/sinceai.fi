"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { InView } from "@/components/motion-primitives/in-view";
import { Magnetic } from "@/components/motion-primitives/magnetic";
import {
  Users,
  Lightbulb,
  Target,
  Quote,
  CheckCircle,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface SponsorSectionProps {
  calendlyUrl?: string;
  contactEmail?: string;
}

export const SponsorSection: React.FC<SponsorSectionProps> = ({
  calendlyUrl = "https://calendly.com",
  contactEmail = "partners@sinceai.fi",
}) => {
  const [formState, setFormState] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    message: "",
  });

  const springOptions = { bounce: 0.1 };

  const valueProps = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Connect",
      description:
        "Access to pre-vetted AI developers in a thriving community. No data harvesting, real relationships.",
      gradient: "from-blue-500/10",
      color: "text-blue-400",
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Collaborate",
      description:
        "Custom partnership options tailored to your hiring, R&D, or growth goals. We work with you.",
      gradient: "from-purple-500/10",
      color: "text-purple-400",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Succeed",
      description:
        "80% of partners stayed connected with our developers after the event. Track record of successful hires and meaningful partnerships.",
      gradient: "from-green-500/10",
      color: "text-green-400",
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");

    // Simulate form submission - replace with actual API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setFormState("success");
      setFormData({
        companyName: "",
        contactName: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch {
      setFormState("error");
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="partner-section" className="py-24 md:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
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
              Partner With Us
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-center leading-tight text-white max-w-4xl">
              Partner With Our
              <br />
              <span className="text-white/70">Community.</span>
            </h2>
            <p className="text-lg text-white/60 font-light text-center max-w-2xl">
              {/* Some text here */}
            </p>
          </div>
        </InView>

        {/* Value Props */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-24">
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
                className="group relative h-full overflow-hidden rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${prop.gradient} via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative p-8 md:p-10 flex flex-col gap-6">
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/5 border border-white/10 ${prop.color}`}
                  >
                    {prop.icon}
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-2xl md:text-3xl font-medium text-white">
                      {prop.title}
                    </h3>
                    <p className="text-white/60 font-light leading-relaxed">
                      {prop.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </InView>
          ))}
        </div>

        {/* Testimonial */}
        {/* <InView
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          viewOptions={{ margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          once
        >
          <div className="relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-12 mb-24">
            <div className="absolute top-8 left-8 text-white/10">
              <Quote className="w-16 h-16" />
            </div>

            <div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="flex-shrink-0">
                <img
                  src="/assets/sponsors/sandvik.png"
                  alt="Sandvik Logo"
                  className="w-24 h-24 md:w-32 md:h-32 object-contain opacity-80"
                />
              </div>

              <div className="flex-1 text-center md:text-left">
                <blockquote className="text-xl md:text-2xl text-white/80 font-light italic mb-6 leading-relaxed">
                  "We found 3 exceptional developers. and we would love to be a
                  part of event like this in the future."
                </blockquote>
                <div className="space-y-1">
                  <div className="text-white font-medium">
                    Partner Representative
                  </div>
                  <div className="text-white/50 text-sm">Sandvik</div>
                </div>
              </div>
            </div>
          </div>
        </InView> */}

        {/* CTA Section */}
        <InView
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          viewOptions={{ margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          once
        >
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 p-8 md:p-16">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5" />

            <div className="relative">
              <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-light text-white mb-4">
                  Let's Create Something Great Together
                </h3>
                <p className="text-lg text-white/60 font-light max-w-2xl mx-auto">
                  Every partnership is different. Tell us your goals—we'll reach it with you
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Magnetic
                  intensity={0.2}
                  springOptions={springOptions}
                  actionArea="global"
                  range={200}
                >
                  <a
                    className="group relative inline-flex items-center justify-center px-12 py-4 text-base font-medium text-black bg-white rounded-full transition-all duration-300 hover:bg-white/90 hover:scale-105 transform disabled:opacity-50 disabled:cursor-not-allowed min-h-12"
                    href="/contact"
                  >
                    <span>Let's Talk</span>
                  </a>
                </Magnetic>
              </div>
            </div>
          </div>
        </InView>
      </div>
    </section>
  );
};

export default SponsorSection;
