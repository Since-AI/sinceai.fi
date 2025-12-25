"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { InView } from "@/components/motion-primitives/in-view";
import { Magnetic } from "@/components/motion-primitives/magnetic";
import { Mail, CheckCircle, Loader2 } from "lucide-react";

interface NewsletterCTAProps {
  discordUrl?: string;
}

export const NewsletterCTA: React.FC<NewsletterCTAProps> = ({
  discordUrl = "https://discord.gg/6PC74zW68v",
}) => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const springOptions = { bounce: 0.1 };

  const validateEmail = (email: string) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage("Please enter a valid email address");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    // Simulate API call - replace with actual newsletter service integration
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus("success");
      setEmail("");

      // Optionally redirect to Discord after success
      // setTimeout(() => window.open(discordUrl, "_blank"), 2000);
    } catch {
      setErrorMessage("Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  return (
    <section className="py-24 md:py-32 px-4">
      <div className="max-w-4xl mx-auto">
        <InView
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          viewOptions={{ margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          once
        >
          <div className="relative overflow-hidden rounded-3xl border border-white/20 p-8 md:p-16">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="relative text-center">
              {/* <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 border border-white/10 mb-8">
                <Mail className="w-8 h-8 text-blue-400" />
              </div> */}

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-4">
                Stay connected.
              </h2>
              <p className="text-lg text-white/60 font-light max-w-xl mx-auto mb-8">
                Get updates on events, job opportunities, and community
                highlights. No spam, promise.
              </p>

              <Magnetic
                intensity={0.2}
                springOptions={springOptions}
                actionArea="global"
                range={150}
              >
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="group relative inline-flex items-center justify-center px-12 py-4 text-base font-medium text-white border border-white/50 bg-transparent rounded-full transition-all duration-300 hover:bg-white/5 hover:backdrop-blur-lg hover:scale-105 transform disabled:opacity-50 disabled:cursor-not-allowed min-h-12"
                >
                  {status === "loading" ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    "Join Community"
                  )}
                </button>
              </Magnetic>
            </div>
          </div>
        </InView>
      </div>
    </section>
  );
};

export default NewsletterCTA;
