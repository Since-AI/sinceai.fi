"use client";
import React from "react";
import Link from "next/link";
import {
  FaDiscord,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaTelegram,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { ORG } from "@/lib/org";

interface FooterProps {
  discordUrl?: string;
}

export const Footer: React.FC<FooterProps> = ({
  discordUrl = "https://discord.gg/6PC74zW68v",
}) => {
  const socialLinks = [
    { name: "Discord", href: discordUrl, icon: FaDiscord },
    { name: "Telegram", href: ORG.social.telegram, icon: FaTelegram },
    { name: "LinkedIn", href: ORG.social.linkedin, icon: FaLinkedin },
    { name: "Instagram", href: ORG.social.instagram, icon: FaInstagram },
    { name: "X", href: ORG.social.x, icon: FaXTwitter },
    { name: "GitHub", href: ORG.social.github, icon: FaGithub },
    { name: "YouTube", href: ORG.social.youtube, icon: FaYoutube },
    { name: "TikTok", href: ORG.social.tiktok, icon: FaTiktok },
    { name: "Facebook", href: ORG.social.facebook, icon: FaFacebook },
  ];

  const navigationColumns = [
    {
      title: "Product",
      links: [
        { name: "Events", href: "/events" },
        { name: "Projects", href: "/projects" },
        { name: "Partners", href: "/partners" },
        { name: "Community", href: discordUrl },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "/about" },
        { name: "Press", href: "/press" },
        { name: "Contact", href: "/contact" },
        { name: "FAQ", href: "/faq" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Code of Conduct", href: "/code-of-conduct" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
      ],
    },
  ];

  return (
    <footer className="bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16">
          {/* Top Section - Logo & Description */}
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-2xl font-bold text-white mb-3 tracking-tight">
              Since AI
            </h2>
            <p className="text-neutral-500 text-sm max-w-md">
              The AI builders community in Europe. Turku-based, globally connected.
            </p>
          </div>

          {/* Navigation Grid - Symmetric 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            {navigationColumns.map((column) => (
              <div key={column.title} className="text-center">
                <h3 className="text-neutral-600 text-xs font-semibold tracking-wider uppercase mb-6">
                  {column.title}
                </h3>
                <nav className="flex flex-col gap-3">
                  {column.links.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="text-neutral-400 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>
              </div>
            ))}
          </div>

          {/* Social Icons - Centered */}
          <div className="flex justify-center gap-6 mb-12">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300 group"
                  aria-label={social.name}
                >
                  <Icon className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Bottom Bar - Centered */}
        <div className="border-t border-white/5 py-8">
          <div className="flex flex-col items-center gap-2 text-center">
            <p className="text-neutral-500 text-sm">
              {ORG.legalName} • Business ID: {ORG.businessId}
            </p>
            <p className="text-neutral-600 text-xs">
              © {new Date().getFullYear()} Since AI. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
