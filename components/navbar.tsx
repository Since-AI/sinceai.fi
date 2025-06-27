"use client";
import React, { useEffect, useState } from "react";
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Button, ButtonGroup } from "@heroui/button";
import { Kbd } from "@heroui/kbd";
import { Link } from "@heroui/link";
import { Input } from "@heroui/input";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import clsx from "clsx";

import { motion } from "framer-motion";
import Image from "next/image";

import { useRouter } from "next/navigation";

import { FaInstagram, FaDiscord, FaWhatsapp, FaLinkedin } from "react-icons/fa";

import Logo from "./logo";
import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
  HeartFilledIcon,
  SearchIcon,
} from "@/components/icons";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const router = useRouter();

  const [loading, setLoading] = useState(true);

  const toHome = () => {
    router.push("/");
  };

  const toAbout = () => {
    router.push("/about");
  };

  const toEvents = () => {
    router.push("/events");
  };

  const toContact = () => {
    router.push("/contact");
  };

  const toProjects = () => {
    router.push("/projects");
  };

  const toTeam = () => {
    router.push("/team");
  };

  const toDiscord = () => {};

  const toInstagram = () => {
    router.push("https://www.instagram.com/since_ai/");
  };

  const toLinkedin = () => {
    router.push(
      "https://www.linkedin.com/company/sinceai/about/?viewAsMember=true"
    );
  };

  const toApply = () => {
    router.push("https://lu.ma/2vs4wsjr");
  };

  const toPartners = () => {
    router.push("https://wa.me");
  };

  return (
    <HeroUINavbar 
      shouldHideOnScroll 
      maxWidth="full"
      className="bg-black/70 backdrop-blur-xl border-b border-gray-800/20"
      height="60px"
    >
      {/* Mobile Layout */}
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="sm:hidden" justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="text-gray-300"
        />
      </NavbarContent>

      {/* Desktop Layout */}
      <NavbarContent className="hidden sm:flex max-w-7xl mx-auto w-full" justify="start">
        <NavbarBrand onClick={toHome} className="cursor-pointer">
          <Logo />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex max-w-7xl mx-auto" justify="center">
        <div className="flex items-center gap-1">
          <Button 
            variant="light" 
            onPress={toDiscord}
            className="text-sm font-normal px-4 py-1.5 rounded-full hover:bg-gray-800/50 transition-all duration-200 text-gray-400 hover:text-gray-100 min-w-0"
          >
            Community
          </Button>
          <Button 
            variant="light" 
            onPress={toContact}
            className="text-sm font-normal px-4 py-1.5 rounded-full hover:bg-gray-800/50 transition-all duration-200 text-gray-400 hover:text-gray-100 min-w-0"
          >
            Contact
          </Button>
          <Button 
            variant="solid" 
            onPress={toApply}
            className="text-sm font-medium px-6 py-1.5 rounded-full bg-white text-black hover:bg-gray-200 transition-all duration-200 ml-4 min-w-0"
          >
            Apply
          </Button>
        </div>
      </NavbarContent>

      <NavbarContent justify="end" className="hidden sm:flex max-w-7xl mx-auto">
        <div className="flex flex-row items-center gap-2">
          <Button 
            variant="light" 
            isIconOnly 
            onPress={toInstagram}
            className="text-gray-400 hover:text-gray-100 hover:bg-gray-800/50 transition-all duration-200 w-8 h-8 min-w-8"
          >
            <FaInstagram size={16} />
          </Button>
          <Button 
            variant="light" 
            isIconOnly 
            onPress={toDiscord}
            className="text-gray-400 hover:text-gray-100 hover:bg-gray-800/50 transition-all duration-200 w-8 h-8 min-w-8"
          >
            <FaDiscord size={16} />
          </Button>
          <Button 
            variant="light" 
            isIconOnly 
            onPress={toLinkedin}
            className="text-gray-400 hover:text-gray-100 hover:bg-gray-800/50 transition-all duration-200 w-8 h-8 min-w-8"
          >
            <FaLinkedin size={16} />
          </Button>
        </div>
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu className="bg-black/95 backdrop-blur-xl border-none pt-8">
        <div className="flex flex-col gap-4">
          <NavbarMenuItem 
            onClick={toHome}
            className="text-lg font-normal text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer py-2"
          >
            Home
          </NavbarMenuItem>
          <NavbarMenuItem 
            onClick={toDiscord}
            className="text-lg font-normal text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer py-2"
          >
            Community
          </NavbarMenuItem>
          <NavbarMenuItem 
            onClick={toContact}
            className="text-lg font-normal text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer py-2"
          >
            Contact
          </NavbarMenuItem>
          <NavbarMenuItem 
            onClick={toApply}
            className="text-lg font-medium text-white hover:text-gray-400 transition-colors duration-200 cursor-pointer py-2"
          >
            Apply
          </NavbarMenuItem>
          
          <div className="border-t border-gray-800 mt-4 pt-4">
            <NavbarMenuItem 
              onClick={toDiscord}
              className="text-base font-normal text-gray-500 hover:text-gray-300 transition-colors duration-200 cursor-pointer py-2"
            >
              Discord
            </NavbarMenuItem>
            <NavbarMenuItem 
              onClick={toInstagram}
              className="text-base font-normal text-gray-500 hover:text-gray-300 transition-colors duration-200 cursor-pointer py-2"
            >
              Instagram
            </NavbarMenuItem>
            <NavbarMenuItem 
              onClick={toLinkedin}
              className="text-base font-normal text-gray-500 hover:text-gray-300 transition-colors duration-200 cursor-pointer py-2"
            >
              LinkedIn
            </NavbarMenuItem>
          </div>
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
