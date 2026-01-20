"use client";
import React from "react";
import { InView } from "@/components/motion-primitives/in-view";
import {
  FaDiscord,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaFacebook,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

interface FooterProps {
  discordUrl?: string;
  newsletterUrl?: string;
  partnerUrl?: string;
}

export const Footer: React.FC<FooterProps> = ({
  discordUrl = "https://discord.gg/6PC74zW68v",
  newsletterUrl = "#newsletter",
  partnerUrl = "#partner-section",
}) => {
  const socialLinks = [
    { name: "Discord", href: discordUrl, icon: FaDiscord },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/sinceai",
      icon: FaLinkedin,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/since_ai",
      icon: FaInstagram,
    },
    { name: "X", href: "https://x.com/since_ai_", icon: FaXTwitter },
    { name: "GitHub", href: "https://github.com/since-ai", icon: FaGithub },
    {
      name: "Facebook",
      href: "https://www.facebook.com/sinceai",
      icon: FaFacebook,
    },
  ];

  const quickLinks = [
    { name: "Community", href: discordUrl },
    { name: "Partner With Us", href: "/contact" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-black border-t border-white/5">
      <InView
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
        }}
        viewOptions={{ margin: "0px 0px -50px 0px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        once
      >
        <div className="pointer-events-none absolute left-1/2 transform -translate-x-1/2 translate-y-32 bottom-0 w-full h-[700px] rounded-full blur-3xl opacity-60 z-0 bg-[radial-gradient(ellipse_at_center_bottom,_rgba(255,210,120,0.5),_rgba(255,150,90,0.3),_rgba(255,110,120,0.05),_transparent_80%)]" />
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-24 pb-80 relative">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 relative z-10">
            {/* Socials */}
            <div className="space-y-6">
              <h3 className="text-neutral-600 text-xs font-semibold tracking-wider uppercase">
                Socials
              </h3>
              <nav
                className="flex flex-col gap-4"
                aria-label="Footer navigation"
              >
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="text-neutral-400 hover:text-white transition-colors duration-300 text-sm font-medium"
                  >
                    {social.name}
                  </a>
                ))}
              </nav>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-neutral-600 text-xs font-semibold tracking-wider uppercase">
                Quick Links
              </h3>
              <nav
                className="flex flex-col gap-4"
                aria-label="Footer navigation"
              >
                {quickLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-neutral-400 hover:text-white transition-colors duration-300 text-sm font-medium"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>

            {/* Legal */}
            <div className="space-y-6">
              <h3 className="text-neutral-600 text-xs font-semibold tracking-wider uppercase">Legal</h3>
              <div className="gap-4 flex flex-col">
                <p className="text-neutral-400 text-sm">Boost Turku ry</p>
                <p className="text-neutral-500 text-xs">Business ID: 2321515-1</p>
                <a
                  href="/privacy"
                  className="block text-neutral-400 hover:text-white transition-colors duration-300 text-sm font-medium"
                >
                  Privacy Policy
                </a>
                <a
                  href="/terms"
                  className="block text-neutral-400 hover:text-white transition-colors duration-300 text-sm font-medium"
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </InView>
    </footer>
  );
};

export default Footer;
