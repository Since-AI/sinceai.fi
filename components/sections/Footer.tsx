"use client";
import React from "react";
import { InView } from "@/components/motion-primitives/in-view";
import { FaDiscord, FaInstagram, FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
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
    { name: "LinkedIn", href: "https://www.linkedin.com/company/sinceai", icon: FaLinkedin },
    { name: "Instagram", href: "https://www.instagram.com/since_ai", icon: FaInstagram },
    { name: "X", href: "https://x.com/since_ai_", icon: FaXTwitter },
    { name: "GitHub", href: "https://github.com/since-ai", icon: FaGithub },
    { name: "Facebook", href: "https://www.facebook.com/sinceai", icon: FaFacebook },
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
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            {/* Brand */}
            <div className="col-span-1 md:col-span-2">
              <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
                Since AI
              </h2>
              <p className="text-white/60 text-lg font-light max-w-md mb-6">
                Building a thriving community of AI developers and innovators. 
                Join AI builders pushing the future forward.
              </p>
              
              {/* Social Icons */}
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200"
                    aria-label={`Follow us on ${social.name}`}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-white font-medium text-sm uppercase tracking-wider">
                Quick Links
              </h3>
              <nav className="flex flex-col gap-3" aria-label="Footer navigation">
                {quickLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>

            {/* Legal */}
            <div className="space-y-4">
              <h3 className="text-white font-medium text-sm uppercase tracking-wider">
                Legal
              </h3>
              <div className="space-y-3">
                <p className="text-white/60 text-sm">Boost Turku ry</p>
                <p className="text-white/60 text-sm">Business ID: 2321515-1</p>
                <a
                  href="/privacy"
                  className="block text-white/60 hover:text-white transition-colors duration-200 text-sm"
                >
                  Privacy Policy
                </a>
                <a
                  href="/terms"
                  className="block text-white/60 hover:text-white transition-colors duration-200 text-sm"
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm">
              © {new Date().getFullYear()} Since AI. All rights reserved.
            </p>
            <p className="text-white/40 text-sm">
              Made with ❤️ in Turku, Finland
            </p>
          </div>
        </div>
      </InView>
    </footer>
  );
};

export default Footer;
