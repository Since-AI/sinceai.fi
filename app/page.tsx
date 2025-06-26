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
import { AnimatedBackground } from "@/components/motion-primitives/animated-background";
import { Accordion, AccordionItem } from "@heroui/react";
import { Magnetic } from "@/components/motion-primitives/magnetic";
import { TextLoop } from "@/components/motion-primitives/text-loop";
import { Image } from "@heroui/react";
import Educity from "@/public/assets/images/educity.jpg";

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
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <div className="flex flex-col w-full">
        <WavyBackground className="flex w-full h-screen p-16 my-32">
          <div className="w-full flex flex-col h-full">
            <div className="w-full flex h-full flex-col gap-4">
              <p className="text-3xl md:text-5xl lg:text-9xl text-white font-bold inter-var text-center">
                Since AI
              </p>
              <div className="text-2xl md:text-4xl lg:text-8xl text-center">
                <TextLoop
                  className="flex w-full text-balance"
                  transition={{
                    type: "spring",
                    stiffness: 900,
                    damping: 80,
                    mass: 10,
                  }}
                  variants={{
                    initial: {
                      y: 20,
                      rotateX: 90,
                      opacity: 0,
                      filter: "blur(4px)",
                    },
                    animate: {
                      y: 0,
                      rotateX: 0,
                      opacity: 1,
                      filter: "blur(0px)",
                    },
                    exit: {
                      y: -20,
                      rotateX: -90,
                      opacity: 0,
                      filter: "blur(4px)",
                    },
                  }}
                >
                  <span>Loved and made in Founders</span>
                  <span>Loved and made in Developers</span>
                  <span>Loved and made in Designers</span>
                  <span>Loved and made in AI enthusiast</span>
                </TextLoop>
              </div>
            </div>
            <div className="flex flex-wrap h-fit w-full gap-4 items-center">
              <p className="text-center w-full md:w-fit text-large">
                21st - 23rd November 2025
              </p>
              <div className="min-w-[200px] bg-white h-1 flex-1 " />
              <p className="text-center w-full md:w-fit text-large">
                Turku, Finland
              </p>
              <div className="min-w-[200px] bg-white h-1 flex-1" />
            </div>
          </div>
        </WavyBackground>
        <div className="flex flex-col gap-32">
          <InfiniteSlider gap={68}>
            <img
              src="assets\logo\logo_full.png"
              alt="logo"
              className="h-[48px] w-auto"
            />
            <img
              src="assets\logo\logo_full.png"
              alt="logo"
              className="h-[48px] w-auto"
            />
            <img
              src="assets\logo\logo_full.png"
              alt="logo"
              className="h-[48px] w-auto"
            />
            <img
              src="assets\logo\logo_full.png"
              alt="logo"
              className="h-[48px] w-auto"
            />
            <img
              src="assets\logo\logo_full.png"
              alt="logo"
              className="h-[48px] w-auto"
            />
            <img
              src="assets\logo\logo_full.png"
              alt="logo"
              className="h-[48px] w-auto"
            />
            <img
              src="assets\logo\logo_full.png"
              alt="logo"
              className="h-[48px] w-auto"
            />
            <img
              src="assets\logo\logo_full.png"
              alt="logo"
              className="h-[48px] w-auto"
            />
            <img
              src="assets\logo\logo_full.png"
              alt="logo"
              className="h-[48px] w-auto"
            />
            <img
              src="assets\logo\logo_full.png"
              alt="logo"
              className="h-[48px] w-auto"
            />
            <img
              src="assets\logo\logo_full.png"
              alt="logo"
              className="h-[48px] w-auto"
            />
          </InfiniteSlider>

          <div className="flex flex-col self-center w-full max-w-[1280px] gap-8 px-8">
            <section className="flex flex-col gap-8">
              <div className="flex flex-row items-center gap-4 mb-8">
                <div className="max-w-9 bg-white h-1 flex-1" />
                About Since AI
              </div>

              <div className="text-6xl text-balance">
                Why you should attend the Since AI Hackathon
              </div>
            </section>
            <section className="flex flex-wrap w-full gap-8">
              <div className="relative aspect-video h-full rounded-3xl border border-zinc-800 bg-black flex flex-1">
                <Spotlight
                  className="from-blue-800 via-blue-600 to-blue-400 blur-xl dark:from-blue-900 dark:via-blue-500 dark:to-blue-900"
                  size={64}
                />
                <div className="absolute inset-0">
                  <svg className="h-full w-full">
                    <defs>
                      <pattern
                        id="grid-pattern"
                        width="8"
                        height="8"
                        patternUnits="userSpaceOnUse"
                      >
                        <path
                          xmlns="http://www.w3.org/2000/svg"
                          d="M0 4H4M4 4V0M4 4H8M4 4V8"
                          stroke="currentColor"
                          strokeOpacity="0.3"
                          className="stroke-black"
                        />
                        <rect
                          x="3"
                          y="3"
                          width="2"
                          height="2"
                          fill="currentColor"
                          fillOpacity="0.25"
                          className="fill-black"
                        />
                      </pattern>
                    </defs>
                    <rect
                      width="100%"
                      height="100%"
                      fill="url(#grid-pattern)"
                    />
                  </svg>
                </div>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-sm p-2">
                  <img
                    src="/assets/logo/logo_full.png"
                    alt="Since AI Logo"
                    className=" w-auto object-contain"
                  />
                </div>
              </div>

              <InView
                variants={{
                  hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
                  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
                }}
                viewOptions={{ margin: "0px 0px -200px 0px" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <span className="flex flex-col justify-center  inter-var font-light leading-8 tracking-wide max-w-[600px] gap-4">
                  <p>
                    SinceAI is more than just a hackathon—it's a launchpad for
                    the next generation of AI innovators. Over one action-packed
                    weekend, you'll join a vibrant community of engineers,
                    students, and entrepreneurs, all driven by a shared vision
                    to shape the future of artificial intelligence. Collaborate
                    with ambitious creators, tackle real-world challenges, and
                    push the boundaries of what's possible with access to
                    cutting-edge GPUs, APIs, and expert mentors.
                  </p>
                  <p>
                    Compete for over €10,000 in prizes, connect with industry
                    partners, and be part of a movement that's building a unique
                    AI ecosystem in Turku and beyond. Whether you're looking to
                    learn, build, or make an impact, SinceAI is where ideas
                    become reality and the future of AI begins.
                  </p>
                </span>
              </InView>
            </section>

            <section>
              <div className="w-full flex justify-center">
                <video
                  src="/assets/videos/ads.mp4"
                  muted
                  controls={false}
                  autoPlay
                  loop
                  className="rounded-lg shadow-lg w-full max-w-3xl aspect-video bg-black"
                  poster="/assets/logo/logo_full.png"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </section>
          </div>

          <div className="flex flex-col self-center w-full max-w-[1280px] gap-8 px-8">
            <section className="flex flex-col gap-8">
              <div className="flex flex-row items-center gap-4 mb-8">
                <div className="max-w-9 bg-white h-1 flex-1" />
                For Whom?
              </div>

              <div className="text-6xl text-balance">
                Who should attend the Since AI Hackathon
              </div>
            </section>

            <div className="relative aspect-video h-[200px] overflow-hidden rounded-xl bg-zinc-700/30 p-[2px]  min-w-80">
              <Spotlight
                className="from-blue-200 via-blue-300 to-blue-400 blur-3xl "
                size={124}
              />
              <div className="relative h-full w-full rounded-xl bg-black p-8">
                Anyone in the EU with AI/ML passion! You can apply solo or as a
                team (up to 4). At least one team member must be technically
                proficient in AI/ML.
              </div>
            </div>
          </div>

          <div className="flex flex-col self-center w-full max-w-[1280px] gap-8 px-8">
            <section className="flex flex-col gap-8">
              <div className="flex flex-row items-center gap-4 mb-8">
                <div className="max-w-9 bg-white h-1 flex-1" />
                Where?
              </div>

              <div className="text-6xl text-balance">
                Edu city, Turku, Finland
              </div>
            </section>

            <Image
              src="/assets/images/educity.jpg"
              alt="Edu city, Turku, Finland"
              className="max-h-[50vh]"
              isBlurred
              isZoomed
            />
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

          <div className="flex flex-col self-center w-full max-w-[1280px] gap-8 px-8">
            <section className="flex flex-col gap-8">
              <div className="flex flex-row items-center gap-4 mb-8">
                <div className="max-w-9 bg-white h-1 flex-1" />
                Prices
              </div>

              <div className="text-6xl text-balance">To be announced</div>
            </section>

            {/* <div className="relative aspect-video h-[200px] overflow-hidden rounded-xl bg-zinc-700/30 p-[2px]  min-w-80">
              <Spotlight
                className="from-blue-200 via-blue-300 to-blue-400 blur-3xl "
                size={124}
              />
              <div className="relative h-full w-full rounded-xl bg-black p-8">
                Anyone in the EU with AI/ML passion! You can apply solo or as a
                team (up to 4). At least one team member must be technically
                proficient in AI/ML.
              </div>
            </div> */}
          </div>

          <div className="flex flex-col self-center w-full max-w-[1280px] gap-8 px-8">
            <section className="flex flex-col gap-8">
              <div className="flex flex-row items-center gap-4 mb-8">
                <div className="max-w-9 bg-white h-1 flex-1" />
                Agenda
              </div>

              <div className="text-6xl text-balance">
                Discover the Full Since AI Hackathon Agenda
              </div>
            </section>

            <div className="flex flex-row rounded-xl overflow-hidden mt-8 text-4xl">
              <div className="flex p-4 bg-[#15f0c4] w-44 text-black ">
                Kick off
              </div>
              <div className="flex p-4 bg-content1 flex-1">Day1</div>
            </div>

            <div className="flex flex-wrap gap-8">
              <div className="flex p-4 text-2xl w-[150px]">4:00 PM</div>
              <div className="relative flex flex-1 h-fit overflow-hidden rounded-xl bg-zinc-700/30 p-[2px] min-w-80">
                <Spotlight
                  className="from-blue-200 via-blue-300 to-blue-400 blur-3xl "
                  size={124}
                />
                <div className="relative h-fit w-full rounded-xl bg-content1 p-8">
                  <div className="text-2xl font-bold mb-4">
                    Kickoff + Team forming
                  </div>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Welcome presentation</li>
                    <li>Challenge announcement</li>
                    <li>Team formation activities</li>
                    <li>Initial brainstorming</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex flex-row rounded-xl overflow-hidden mt-8 text-4xl">
              <div className="flex p-4 bg-[#15f0c4] w-44 text-black ">
                Hacking
              </div>
              <div className="flex p-4 bg-content1 flex-1">Day2</div>
            </div>

            <div className="flex flex-wrap gap-8">
              <div className="flex p-4 text-2xl w-[150px]">All Day</div>
              <div className="relative flex flex-1 h-fit overflow-hidden rounded-xl bg-zinc-700/30 p-[2px]  min-w-80">
                <Spotlight
                  className="from-blue-200 via-blue-300 to-blue-400 blur-3xl "
                  size={124}
                />
                <div className="relative h-fit w-full rounded-xl bg-content1 p-8">
                  <div className="text-2xl font-bold mb-4">
                    Hacking + Workshops
                  </div>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Hands-on hacking sessions</li>
                    <li>Mentor support available</li>
                    <li>Technical workshops</li>
                    <li>Midway project check-in</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex flex-row rounded-xl overflow-hidden mt-8 text-4xl">
              <div className="flex p-4 bg-[#15f0c4] w-44 text-black ">
                Final
              </div>
              <div className="flex p-4 bg-content1 flex-1">Day3</div>
            </div>

            <div className="flex flex-wrap gap-8">
              <div className="flex p-4 text-2xl w-[150px]">5:00 PM</div>
              <div className="relative flex flex-1 h-fit overflow-hidden rounded-xl bg-zinc-700/30 p-[2px]  min-w-80">
                <Spotlight
                  className="from-blue-200 via-blue-300 to-blue-400 blur-3xl "
                  size={124}
                />
                <div className="relative h-fit w-full rounded-xl bg-content1 p-8">
                  <div className="text-2xl font-bold mb-4">
                    Final presentations + Awards
                  </div>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Project submissions</li>
                    <li>Demo presentations</li>
                    <li>Judging</li>
                    <li>Awards ceremony</li>
                    <li>Networking & celebration</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="flex flex-col self-center w-full max-w-[1280px] gap-8 px-8">
            <section className="flex flex-col gap-8">
              <div className="flex flex-row items-center gap-4 mb-8">
                <div className="max-w-9 bg-white h-1 flex-1" />
                Partners
              </div>

              <div className="text-6xl text-balance">
                Meet our partners who help making this event happen
              </div>
            </section>
            <section>
              <div className="grid grid-cols-2 p-10 md:grid-cols-4">
                <AnimatedBackground
                  className="rounded-lg bg-zinc-800"
                  transition={{
                    type: "spring",
                    bounce: 0.2,
                    duration: 0.6,
                  }}
                  enableHover
                >
                  <div data-id={`card-1`}>
                    <div className="flex select-none flex-col space-y-1">
                      <img src="assets/logo/logo_full.png" alt="logo"/>
                    </div>
                  </div>
                  <div data-id={`card-2`}>
                    <div className="flex select-none flex-col space-y-1">
                      <img src="assets/logo/logo_full.png" alt="logo"/>
                    </div>
                  </div>
                  <div data-id={`card-3`}>
                    <div className="flex select-none flex-col space-y-1">
                      <img src="assets/logo/logo_full.png" alt="logo"/>
                    </div>
                  </div>
                  <div data-id={`card-4`}>
                    <div className="flex select-none flex-col space-y-1">
                      <img src="assets/logo/logo_full.png" alt="logo"/>
                    </div>
                  </div>
                  <div data-id={`card-5`}>
                    <div className="flex select-none flex-col space-y-1">
                      <img src="assets/logo/logo_full.png" alt="logo"/>
                    </div>
                  </div>
                  <div data-id={`card-6`}>
                    <div className="flex select-none flex-col space-y-1">
                      <img src="assets/logo/logo_full.png" alt="logo"/>
                    </div>
                  </div>
                  <div data-id={`card-7`}>
                    <div className="flex select-none flex-col space-y-1">
                      <img src="assets/logo/logo_full.png" alt="logo"/>
                    </div>
                  </div>
                  <div data-id={`card-8`}>
                    <div className="flex select-none flex-col space-y-1">
                      <img src="assets/logo/logo_full.png" alt="logo"/>
                    </div>
                  </div>
                </AnimatedBackground>
              </div>
            </section>
          </div> */}

          <div className="flex flex-wrap self-center w-full max-w-[1280px] gap-16 px-8">
            <section className="flex flex-col flex-1">
              <div className="flex flex-row items-center gap-4 mb-8">
                <div className="max-w-9 bg-white h-1 flex-1" />
                Questions
              </div>

              <div className="text-6xl text-balance leading-tight">
                Have any questions? We are here to help!
              </div>
            </section>
            <section className="flex flex-col flex-1">
              <Accordion variant="splitted">
                <AccordionItem
                  key="1"
                  aria-label="Do I need to know how to code?"
                  title="Do I need to know how to code?"
                >
                  If you're applying as a hacker — yes, at least one person on
                  your team needs solid AI/ML experience. If you're not
                  technical, check out the showroom instead!
                </AccordionItem>
                <AccordionItem
                  key="2"
                  aria-label="Can I apply solo?"
                  title="Can I apply solo?"
                >
                  Absolutely. We'll help you find a team before and during the
                  event.
                </AccordionItem>
                <AccordionItem
                  key="3"
                  aria-label="Where is the event?"
                  title="Where is the event?"
                >
                  In Turku, Finland. The exact location will be shared with
                  approved participants.
                </AccordionItem>

                <AccordionItem
                  key="4"
                  aria-label="Is it really free?"
                  title="Is it really free?"
                >
                  Yes. We cover everything — food, drinks, space, swag, and
                  compute.
                </AccordionItem>
                <AccordionItem
                  key="5"
                  aria-label="How do I know if I got in?"
                  title="How do I know if I got in?"
                >
                  All applications are reviewed. You'll receive an approval
                  email if selected.
                </AccordionItem>
              </Accordion>
            </section>
          </div>

          <div className="flex flex-wrap self-center w-full max-w-[1280px] gap-16 px-8">
            <section className="flex flex-col flex-1">
              <div className="flex flex-row items-center gap-4 mb-8">
                <div className="max-w-9 bg-white h-1 flex-1" />
                Registration
              </div>

              <div className="text-6xl text-balance leading-tight">
                Secure Your Spot at Since AI Hackathon Today!
              </div>
            </section>
            <section className="flex flex-col flex-1 justify-center items-center">
              <Magnetic
                intensity={0.2}
                springOptions={springOptions}
                actionArea="global"
                range={200}
              >
                <button
                  type="button"
                  className="inline-flex items-center rounded-xl border-2 border-zinc-900 bg-[#15f0c4]/80 px-8 py-4 text-xl font-semibold text-black transition-all duration-200 hover:bg-[#15f0c4]"
                >
                  <Magnetic
                    intensity={0.1}
                    springOptions={springOptions}
                    actionArea="global"
                    range={200}
                  >
                    <span>Apply</span>
                  </Magnetic>
                </button>
              </Magnetic>
            </section>
          </div>

          <div className="flex flex-col self-center w-full max-w-[1280px] gap-8 px-8">
            <section className="flex flex-col flex-1">
              <div className="flex flex-row items-center gap-4 mb-8">
                <div className="max-w-9 bg-white h-1 flex-1" />
                Contact
              </div>

              <div className="text-6xl text-balance leading-tight">
                Get in touch for questions or sponsorship!
              </div>
            </section>
            <div className="flex items-center gap-4">
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                <path
                  d="M2 4.5A2.5 2.5 0 014.5 2h15A2.5 2.5 0 0122 4.5v15a2.5 2.5 0 01-2.5 2.5h-15A2.5 2.5 0 012 19.5v-15z"
                  stroke="#15f0c4"
                  strokeWidth="2"
                />
                <path d="M4 6l8 7 8-7" stroke="#15f0c4" strokeWidth="2" />
              </svg>
              <a
                href="mailto:info@boostturku.com"
                className="text-xl text-[#15f0c4] hover:underline"
              >
                info@boostturku.com
              </a>
            </div>
          </div>

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
      </div>
    </SmoothScroll>
  );
}
