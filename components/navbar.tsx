"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaDiscord, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Menu } from "lucide-react";

import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "./ui/navigation-menu";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "./ui/sheet";

import Logo from "./logo";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const handleNavigation = (path: string) => {
    setIsMenuOpen(false);
    if (path.startsWith("http")) {
      window.open(path, "_blank");
    } else if (path.startsWith("#")) {
      const element = document.querySelector(path);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push(path);
    }
  };

  const links = {
    home: "/",
    community: "https://discord.gg/6PC74zW68v",
    contact: "/contact",
    partner: "#partner-section",
    instagram: "https://www.instagram.com/since_ai/",
    linkedin:
      "https://www.linkedin.com/company/sinceai/about/?viewAsMember=true",
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-gradient-to-b from-black to-black/10 backdrop-blur-xs">
      <div className="flex h-[60px] items-center justify-between px-4 max-w-7xl mx-auto">
        {/* Mobile Layout */}
        <div className="flex sm:hidden items-center justify-between w-full">
          <Link href="/" className="cursor-pointer">
            <Logo />
          </Link>
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-300 hover:bg-gray-800/50"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-black/5 backdrop-blur-xl border-white/10"
            >
              <SheetHeader>
                <SheetTitle className="text-white/50">Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-4 pt-8 px-4">
                <button
                  onClick={() => handleNavigation(links.home)}
                  className="text-lg font-normal text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer py-2 text-left"
                >
                  Home
                </button>
                <button
                  onClick={() => handleNavigation(links.community)}
                  className="text-lg font-normal text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer py-2 text-left"
                >
                  Community
                </button>
                <button
                  onClick={() => handleNavigation(links.partner)}
                  className="text-lg font-normal text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer py-2 text-left"
                >
                  Partner
                </button>
                <button
                  onClick={() => handleNavigation(links.contact)}
                  className="text-lg font-normal text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer py-2 text-left"
                >
                  Contact
                </button>

                <div className="border-t border-white/10 mt-4 pt-4">
                  <button
                    onClick={() => handleNavigation(links.community)}
                    className="text-base font-normal text-gray-500 hover:text-gray-300 transition-colors duration-200 cursor-pointer py-2 block text-left w-full"
                  >
                    Discord
                  </button>
                  <button
                    onClick={() => handleNavigation(links.instagram)}
                    className="text-base font-normal text-gray-500 hover:text-gray-300 transition-colors duration-200 cursor-pointer py-2 block text-left w-full"
                  >
                    Instagram
                  </button>
                  <button
                    onClick={() => handleNavigation(links.linkedin)}
                    className="text-base font-normal text-gray-500 hover:text-gray-300 transition-colors duration-200 cursor-pointer py-2 block text-left w-full"
                  >
                    LinkedIn
                  </button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop Layout */}
        <div className="hidden sm:flex items-center justify-between w-full">
          {/* Navigation Menu */}
          <NavigationMenu className="mx-0 px-0">
            <NavigationMenuList className="gap-4">
              {/* Logo */}
              <Link href="/" className="cursor-pointer">
                <Logo />
              </Link>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <button
                    onClick={() => handleNavigation(links.community)}
                    className="tracking-wider text-sm font-normal px-4 py-1.5 rounded-full transition-all duration-200 text-gray-400 hover:text-white hover:bg-transparent bg-transparent border-none cursor-pointer"
                  >
                    COMMUNITY
                  </button>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <button
                    onClick={() => handleNavigation(links.partner)}
                    className="tracking-wider text-sm font-normal px-4 py-1.5 rounded-full transition-all duration-200 text-gray-400 hover:text-white hover:bg-transparent bg-transparent border-none cursor-pointer"
                  >
                    PARTNER
                  </button>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <button
                    onClick={() => handleNavigation(links.contact)}
                    className="tracking-wider text-sm font-normal px-4 py-1.5 rounded-full transition-all duration-200 text-gray-400 hover:text-white hover:bg-transparent bg-transparent border-none cursor-pointer"
                  >
                    CONTACT
                  </button>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Social Icons */}
          <div className="flex flex-row items-center gap-2">
            <Button
              onClick={() => handleNavigation(links.community)}
              className="text-sm px-6 py-1.5 rounded-full bg-transparent text-gray-300 font-normal border border-border/20 hover:backdrop-blur-lg transition-all duration-200"
            >
              JOIN COMMUNITY
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
