"use client";
import React from "react";
import SmoothScroll from "@/components/smoothScroll";
import { useEffect, useState } from "react";
import Preloader from "@/components/utils/Preloader";
import { AnimatePresence } from "framer-motion";
import { InView } from "@/components/motion-primitives/in-view";
import { InfiniteSlider } from "@/components/motion-primitives/infinite-slider";
import { WavyBackground } from "@/components/ui/wavy-background";
import { Spotlight } from "@/components/motion-primitives/spotlight";
import { Accordion, AccordionItem } from "@heroui/react";
import { Magnetic } from "@/components/motion-primitives/magnetic";
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Divider,
  Button,
  Link,
} from "@heroui/react";
import { FaLinkedin } from "react-icons/fa";

export default function GoogleGeminiEffectDemo() {
  const ref = React.useRef(null);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      (async () => {
        setTimeout(() => {
          setIsLoading(false);
        }, 2500);
      })();
    }
  }, []);

  const springOptions = { bounce: 0.1 };

  return (
    <SmoothScroll>
      {/* <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence> */}
      <div className="flex flex-col w-full">
        <WavyBackground className="flex flex-col w-full h-screen ">
          <div className="w-full flex flex-col h-full">
            <div className="w-full flex h-full flex-col gap-4">
              <p className="text-3xl md:text-5xl lg:text-9xl text-white font-bold inter-var text-center">
                Contact
              </p>
            </div>
          </div>
          <div className="flex flex-col bg-black/80 gap-32 pt-16">
            <div className="flex flex-col self-center w-full max-w-[1280px] gap-8 px-8">
              <section className="flex flex-col gap-8">
                <div className="flex flex-row items-center gap-4 mb-8">
                  <div className="max-w-9 bg-white h-1 flex-1" />
                  Contact us
                </div>

                <div className="text-6xl text-balance">
                  Would love to hear from you!
                </div>
              </section>
              <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[1280px] px-6 mb-8">
                <Card className="w-full h-full" isBlurred isPressable>
                  <CardHeader className="flex gap-3">
                    <div className="flex flex-col text-left">
                      <p className="text-md">Yuehan John</p>
                      <p className="text-small text-[#15f0c4] ">
                        Head of growth
                      </p>
                    </div>
                  </CardHeader>
                  <Divider />
                  <CardBody className="h-auto">
                    <Link isExternal href="mailto:yuehan.john@boostturku.com">
                      yuehan.john@boostturku.com{" "}
                    </Link>
                  </CardBody>
                  <Divider />
                  <CardFooter>
                    <Button
                      size="sm"
                      isIconOnly
                      variant="light"
                      onPress={() =>
                        window.open(
                          "https://www.linkedin.com/in/yuehanjohn/",
                          "_blank"
                        )
                      }
                    >
                      <FaLinkedin size={18} />
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="w-full h-full" isBlurred isPressable>
                  <CardHeader className="flex gap-3">
                    <div className="flex flex-col text-left">
                      <p className="text-md">Riku Lauttia</p>
                      <p className="text-small text-[#15f0c4] ">
                        Head of Partnerships
                      </p>
                    </div>
                  </CardHeader>
                  <Divider />
                  <CardBody className="h-auto">
                    <Link isExternal href="mailto:riku@boostturku.com">
                      riku@boostturku.com{" "}
                    </Link>
                  </CardBody>
                  <Divider />
                  <CardFooter>
                    <Button
                      size="sm"
                      isIconOnly
                      variant="light"
                      onPress={() =>
                        window.open(
                          "https://www.linkedin.com/in/rikulauttia/",
                          "_blank"
                        )
                      }
                    >
                      <FaLinkedin size={18} />
                    </Button>
                  </CardFooter>
                </Card>
                <Card className="w-full h-full" isBlurred isPressable>
                  <CardHeader className="flex gap-3">
                    <div className="flex flex-col text-left">
                      <p className="text-md">Vishaka Salpiumi</p>
                      <p className="text-small text-[#15f0c4] ">
                        Head of community
                      </p>
                    </div>
                  </CardHeader>
                </Card>
                <Card className="w-full h-full" isBlurred isPressable>
                  <CardHeader className="flex gap-3">
                    <div className="flex flex-col text-left">
                      <p className="text-md">Juho Salmi</p>
                      <p className="text-small text-[#15f0c4] ">
                        Finland partnerships
                      </p>
                    </div>
                  </CardHeader>
                </Card>
                <Card className="w-full h-full" isBlurred isPressable>
                  <CardHeader className="flex gap-3">
                    <div className="flex flex-col text-left">
                      <p className="text-md">Joonas Ukkonen</p>
                      <p className="text-small text-[#15f0c4] ">
                        Finland partnerships
                      </p>
                    </div>
                  </CardHeader>
                </Card>
                <Card className="w-full h-full" isBlurred isPressable>
                  <CardHeader className="flex gap-3">
                    <div className="flex flex-col text-left">
                      <p className="text-md">Julius Kraapo</p>
                      <p className="text-small text-[#15f0c4] ">
                        Finland partnerships
                      </p>
                    </div>
                  </CardHeader>
                </Card>
                <Card className="w-full h-full" isBlurred isPressable>
                  <CardHeader className="flex gap-3">
                    <div className="flex flex-col text-left">
                      <p className="text-md">Immu Koskinen</p>
                      <p className="text-small text-[#15f0c4] ">
                        Finland partnerships
                      </p>
                    </div>
                  </CardHeader>
                </Card>
                <Card className="w-full h-full" isBlurred isPressable>
                  <CardHeader className="flex gap-3">
                    <div className="flex flex-col text-left">
                      <p className="text-md">Immu Koskinen</p>
                      <p className="text-small text-[#15f0c4] ">
                        Finland partnerships
                      </p>
                    </div>
                  </CardHeader>
                </Card>
                <Card className="w-full h-full" isBlurred isPressable>
                  <CardHeader className="flex gap-3">
                    <div className="flex flex-col text-left">
                      <p className="text-md">Aapo Peräkorpi</p>
                      <p className="text-small text-[#15f0c4] ">
                        Finland partnerships
                      </p>
                    </div>
                  </CardHeader>
                </Card>
                <Card className="w-full h-full" isBlurred isPressable>
                  <CardHeader className="flex gap-3">
                    <div className="flex flex-col text-left">
                      <p className="text-md">Arttu Myyryläinen</p>
                      <p className="text-small text-[#15f0c4] ">
                        Finland partnerships
                      </p>
                    </div>
                  </CardHeader>
                </Card>
                <Card className="w-full h-full" isBlurred isPressable>
                  <CardHeader className="flex gap-3">
                    <div className="flex flex-col text-left">
                      <p className="text-md">Anton Tuuli</p>
                      <p className="text-small text-[#15f0c4] ">
                        Finland partnerships
                      </p>
                    </div>
                  </CardHeader>
                </Card>
                <Card className="w-full h-full" isBlurred isPressable>
                  <CardHeader className="flex gap-3">
                    <div className="flex flex-col text-left">
                      <p className="text-md">Juhani Tanskanen</p>
                      <p className="text-small text-[#15f0c4] ">
                        Finland partnerships
                      </p>
                    </div>
                  </CardHeader>
                </Card>
                <Card className="w-full h-full" isBlurred isPressable>
                  <CardHeader className="flex gap-3">
                    <div className="flex flex-col text-left">
                      <p className="text-md">Kaper Hakala</p>
                      <p className="text-small text-[#15f0c4] ">
                        Finland partnerships
                      </p>
                    </div>
                  </CardHeader>
                </Card>
                <Card className="w-full h-full" isBlurred isPressable>
                  <CardHeader className="flex gap-3">
                    <div className="flex flex-col text-left">
                      <p className="text-md">Eemeli Piiroinen</p>
                      <p className="text-small text-[#15f0c4] ">
                        Finland partnerships
                      </p>
                    </div>
                  </CardHeader>
                </Card>
                <Card className="w-full h-full" isBlurred isPressable>
                  <CardHeader className="flex gap-3">
                    <div className="flex flex-col text-left">
                      <p className="text-md">Aarne Ollila</p>
                      <p className="text-small text-[#15f0c4] ">
                        Finland partnerships
                      </p>
                    </div>
                  </CardHeader>
                </Card>
                <Card className="w-full h-full" isBlurred isPressable>
                  <CardHeader className="flex gap-3">
                    <div className="flex flex-col text-left">
                      <p className="text-md">Olli Jartti </p>
                      <p className="text-small text-[#15f0c4] ">
                        Finland partnerships
                      </p>
                    </div>
                  </CardHeader>
                </Card>
                <Card className="w-full h-full" isBlurred isPressable>
                  <CardHeader className="flex gap-3">
                    <div className="flex flex-col text-left">
                      <p className="text-md">Vyas Aman</p>
                      <p className="text-small text-[#15f0c4] ">
                        Finland partnerships
                      </p>
                    </div>
                  </CardHeader>
                </Card>
                <Card className="w-full h-full" isBlurred isPressable>
                  <CardHeader className="flex gap-3">
                    <div className="flex flex-col text-left">
                      <p className="text-md">Amirhossein Nourian</p>
                      <p className="text-small text-[#15f0c4] ">
                        Finland partnerships
                      </p>
                    </div>
                  </CardHeader>
                </Card>
                <Card className="w-full h-full" isBlurred isPressable>
                  <CardHeader className="flex gap-3">
                    <div className="flex flex-col text-left">
                      <p className="text-md">Uruj Sarwar</p>
                      <p className="text-small text-[#15f0c4] ">
                        Hacker relationships
                      </p>
                    </div>
                  </CardHeader>
                </Card>
                <Card className="w-full h-full" isBlurred isPressable>
                  <CardHeader className="flex gap-3">
                    <div className="flex flex-col text-left">
                      <p className="text-md">Janina Paasila</p>
                      <p className="text-small text-[#15f0c4] ">
                        Design / Art Director
                      </p>
                    </div>
                  </CardHeader>
                </Card>
              </section>
            </div>

            <InfiniteSlider gap={24} className="my-16">
              <div className="text-9xl text-center font-[450] text-white">
                Innovation .
              </div>
              <div className="text-9xl text-center font-[450] text-white">
                Impact .
              </div>
              <div className="text-9xl text-center font-[450] text-white">
                Startup .
              </div>
              <div className="text-9xl text-center font-[450] text-white">
                Future .
              </div>
              <div className="text-9xl text-center font-[450] text-white">
                Next Gen .
              </div>
            </InfiniteSlider>

            <div
              className="relative h-[800px]"
              style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
            >
              <div className="relative h-[calc(100vh+800px)] -top-[100vh]">
                <div className="h-[800px] sticky top-[calc(100vh-800px)]">
                  <div className="bg-content2 py-8 px-12 h-full w-full flex flex-col justify-between">
                    <div>
                      <div className="flex shrink-0 gap-20">
                        <div className="flex flex-col gap-2">
                          <h3 className="mb-2 uppercase text-[#ffffff80]">
                            Socials
                          </h3>
                          <a
                            href="https://www.linkedin.com/company/sinceai"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline text-white"
                          >
                            LinkedIn
                          </a>
                          <a
                            href="https://www.instagram.com/sinceai"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline text-white"
                          >
                            Instagram
                          </a>
                          <a
                            href="https://twitter.com/sinceai"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline text-white"
                          >
                            Twitter
                          </a>
                          <a
                            href="https://www.tiktok.com/@sinceai"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline text-white"
                          >
                            TikTok
                          </a>
                          <a
                            href="https://www.youtube.com/@sinceai"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline text-white"
                          >
                            YouTube
                          </a>
                          <a
                            href="https://github.com/sinceai"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline text-white"
                          >
                            GitHub
                          </a>
                        </div>
                        <div className="flex flex-col gap-2">
                          <h3 className="mb-2 uppercase text-[#ffffff80]">
                            Contact
                          </h3>
                          <p className="text-white">Boost Turku ry</p>

                          <p className="text-white">Business ID: 2321515-1</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between items-end">
                      <h1 className="text-[14vw] leading-[0.8] mt-10">
                        Since AI
                      </h1>
                      <p>© 2025 All rights reserved.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </WavyBackground>
      </div>
    </SmoothScroll>
  );
}
