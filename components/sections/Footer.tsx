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
    <footer className="bg-black border-t border-white/10">
      <InView
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        viewOptions={{ margin: "0px 0px -50px 0px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        once
      >
        <div className="pointer-events-none absolute left-1/2 transform -translate-x-1/2 translate-y-32 bottom-0 w-full h-[700px] rounded-full blur-3xl opacity-80 z-0 bg-[radial-gradient(ellipse_at_center_bottom,_rgba(255,210,120,0.95),_rgba(255,150,90,0.7),_rgba(255,110,120,0.10),_transparent_80%)]" />
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 py-32 pb-96 relative">
          {/* Sunrise gradient (center-bottom, rounded and spread) */}
          

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
            {/* Socials */}
            <div className="space-y-4">
              <h3 className="text-white/50 uppercase tracking-widest">
                Socials
              </h3>
              <nav
                className="flex flex-col gap-6"
                aria-label="Footer navigation"
              >
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="text-white hover:underline transition-colors duration-200"
                  >
                    {social.name}
                  </a>
                ))}
              </nav>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-white/50 uppercase tracking-widest">
                Quick Links
              </h3>
              <nav
                className="flex flex-col gap-6"
                aria-label="Footer navigation"
              >
                {quickLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-white hover:underline transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>

            {/* Legal */}
            <div className="space-y-4">
              <h3 className="text-white/50 uppercase tracking-widest">Legal</h3>
              <div className="gap-6 flex flex-col">
                <p className="text-white">Boost Turku ry</p>
                <p className="text-white">Business ID: 2321515-1</p>
                <a
                  href="/privacy"
                  className="block text-white hover:underline transition-colors duration-200"
                >
                  Privacy Policy
                </a>
                <a
                  href="/terms"
                  className="block text-white hover:underline transition-colors duration-200"
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          {/* <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm">
              © {new Date().getFullYear()} Since AI. All rights reserved.
            </p>
            <p className="text-white/40 text-sm">
              Made with ❤️ in Turku, Finland
            </p>
          </div> */}
        </div>
      </InView>
    </footer>
  );
};

export default Footer;
