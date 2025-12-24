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
    linkedin: "https://www.linkedin.com/company/sinceai/about/?viewAsMember=true",
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-transparent">
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
          {/* Logo */}
          <Link href="/" className="cursor-pointer">
            <Logo />
          </Link>

          {/* Navigation Menu */}
          <NavigationMenu className="mx-auto">
            <NavigationMenuList className="gap-1">
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <button
                    onClick={() => handleNavigation(links.community)}
                    className="text-sm font-normal px-4 py-1.5 rounded-full hover:bg-gray-800/50 transition-all duration-200 text-gray-400 hover:text-gray-100 bg-transparent border-none cursor-pointer"
                  >
                    Community
                  </button>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <button
                    onClick={() => handleNavigation(links.partner)}
                    className="text-sm font-normal px-4 py-1.5 rounded-full hover:bg-gray-800/50 transition-all duration-200 text-gray-400 hover:text-gray-100 bg-transparent border-none cursor-pointer"
                  >
                    Partner
                  </button>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <button
                    onClick={() => handleNavigation(links.contact)}
                    className="text-sm font-normal px-4 py-1.5 rounded-full hover:bg-gray-800/50 transition-all duration-200 text-gray-400 hover:text-gray-100 bg-transparent border-none cursor-pointer"
                  >
                    Contact
                  </button>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Button
                  onClick={() => handleNavigation(links.community)}
                  className="text-sm font-medium px-6 py-1.5 rounded-full bg-white text-black hover:bg-gray-200 transition-all duration-200 ml-4"
                >
                  Join Community
                </Button>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Social Icons */}
          <div className="flex flex-row items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => handleNavigation(links.instagram)}
              className="text-gray-400 hover:text-gray-100 hover:bg-gray-800/50 transition-all duration-200 w-8 h-8"
            >
              <FaInstagram size={16} />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => handleNavigation(links.community)}
              className="text-gray-400 hover:text-gray-100 hover:bg-gray-800/50 transition-all duration-200 w-8 h-8"
            >
              <FaDiscord size={16} />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => handleNavigation(links.linkedin)}
              className="text-gray-400 hover:text-gray-100 hover:bg-gray-800/50 transition-all duration-200 w-8 h-8"
            >
              <FaLinkedin size={16} />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
