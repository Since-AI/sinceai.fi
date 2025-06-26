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
    <HeroUINavbar shouldHideOnScroll maxWidth="xl" >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="sm:hidden" justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="hidden sm:flex" justify="start">
        <NavbarBrand onClick={toHome} className="cursor-pointer">
          <Logo />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex" justify="center">
        <div className="flex items-center gap-4">
          <Button 
            variant="light" 
            onPress={toDiscord}
            className="text-sm font-medium px-6 py-2 rounded-full hover:bg-white/[0.08] transition-all duration-300 ease-out text-foreground/80 hover:text-foreground"
          >
            Community
          </Button>
          <Button 
            variant="light" 
            onPress={toContact}
            className="text-sm font-medium px-6 py-2 rounded-full hover:bg-white/[0.08] transition-all duration-300 ease-out text-foreground/80 hover:text-foreground"
          >
            Contact
          </Button>
          <Button 
            variant="light" 
            onPress={toApply}
            className="text-sm font-medium px-6 py-2 rounded-full hover:bg-white/[0.08] transition-all duration-300 ease-out text-foreground/80 hover:text-foreground"
          >
            Apply
          </Button>
        </div>
      </NavbarContent>

      <NavbarContent justify="end" className="hidden sm:flex">
        <div className="flex flex-row items-center gap-4">
          <Button variant="light" isIconOnly onPress={toInstagram}>
            <FaInstagram size={24} />
          </Button>
          <Button variant="light" isIconOnly onPress={toDiscord}>
            <FaDiscord size={24} />
          </Button>
          <Button variant="light" isIconOnly onPress={toLinkedin}>
            <FaLinkedin size={24} />
          </Button>
        </div>
      </NavbarContent>

      <NavbarMenu>
        <>
          <NavbarMenuItem onClick={toHome}>Home</NavbarMenuItem>
          <NavbarMenuItem onClick={toDiscord}>Community</NavbarMenuItem>
          <NavbarMenuItem onClick={toContact}>Contact</NavbarMenuItem>
          <NavbarMenuItem onClick={toApply}>Apply</NavbarMenuItem>

          <NavbarMenuItem className="color-primary" onClick={toDiscord}>
            Discord
          </NavbarMenuItem>
          <NavbarMenuItem className="color-primary" onClick={toInstagram}>
            Instagram
          </NavbarMenuItem>
          <NavbarMenuItem className="color-primary" onClick={toLinkedin}>
            Linkedin
          </NavbarMenuItem>
        </>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
