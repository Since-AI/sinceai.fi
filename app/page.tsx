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
            <div className="relative flex h-full w-full flex-col items-center justify-center">
              <div className="relative z-10 flex flex-col items-center space-y-8">
                <div className="flex flex-col items-center space-y-4">
                  <h1 className="bg-gradient-to-b from-white to-white/60 bg-clip-text text-6xl font-medium tracking-tight text-transparent md:text-8xl lg:text-[12rem] xl:text-[14rem]">
                    Since AI
                  </h1>
                  <div className="h-px w-24 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
                </div>

                <div className="text-center">
                  <TextLoop
                    className="text-xl font-light tracking-wide text-white/80 md:text-2xl lg:text-3xl"
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                      mass: 1,
                    }}
                    variants={{
                      initial: {
                        y: 10,
                        opacity: 0,
                        filter: "blur(2px)",
                      },
                      animate: {
                        y: 0,
                        opacity: 1,
                        filter: "blur(0px)",
                      },
                      exit: {
                        y: -10,
                        opacity: 0,
                        filter: "blur(2px)",
                      },
                    }}
                  >
                    <span>For Founders</span>
                    <span>For Developers</span>
                    <span>For Designers</span>
                    <span>For AI Enthusiasts</span>
                  </TextLoop>
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20"></div>
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
          {/* <InfiniteSlider gap={68}>
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
          </InfiniteSlider> */}

          <div className="flex flex-col self-center w-full max-w-[1280px] gap-24 px-8">
            <section className="flex flex-col items-center gap-16 py-24">
              <div className="flex flex-col items-center gap-6">
                <div className="text-sm font-medium text-white/50 uppercase tracking-[0.2em]">
                  About Since AI
                </div>
                <div className="text-5xl md:text-7xl font-semibold text-center leading-tight text-white">
                  Think different.
                  <br />
                  Build the future.
                </div>
              </div>
            </section>

            <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-900/50 to-black/50 backdrop-blur-xl border border-white/10">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10"></div>
                <div className="relative p-12 h-[400px] flex items-center justify-center">
                  <img
                    src="/assets/logo/logo_full.png"
                    alt="Since AI Logo"
                    className="w-48 h-auto object-contain opacity-90"
                  />
                </div>
              </div>

              <InView
                variants={{
                  hidden: { opacity: 0, y: 50, filter: "blur(4px)" },
                  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
                }}
                viewOptions={{ margin: "0px 0px -150px 0px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="flex flex-col gap-8">
                  <div className="text-2xl md:text-3xl font-light text-white/90 leading-relaxed">
                    Where innovation meets possibility.
                  </div>
                  <div className="space-y-6 text-lg text-white/70 font-light leading-relaxed">
                    <p>
                      SinceAI isn't just a hackathon. It's where the future of
                      artificial intelligence begins. Join a carefully curated
                      community of visionaries, engineers, and entrepreneurs in
                      an environment designed for breakthrough innovation.
                    </p>
                    <p>
                      Three days. Unlimited potential. €10,000+ in prizes. The
                      tools, mentorship, and connections you need to transform
                      ideas into reality.
                    </p>
                  </div>
                  <div className="flex items-center gap-4 pt-4">
                    <div className="w-12 h-px bg-gradient-to-r from-blue-400 to-transparent"></div>
                    <span className="text-sm text-white/50 font-medium">
                      The future is built here
                    </span>
                  </div>
                </div>
              </InView>
            </section>

            <section className="py-16"></section>
            <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-black/10 via-black/5 to-transparent backdrop-blur-3xl border border-white/[0.08] shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] via-transparent to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              <div className="relative p-12 md:p-16">
                <video
                  src="/assets/videos/ads.mp4"
                  muted
                  controls={false}
                  autoPlay
                  loop
                  playsInline
                  className="w-full aspect-video rounded-[24px] bg-black/80 shadow-xl ring-1 ring-white/[0.05] transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl"
                  poster="/assets/logo/logo_full.png"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
            </div>
          </div>

          <div className="flex flex-col self-center w-full max-w-[1280px] gap-16 px-8">
            <section className="flex flex-col items-center gap-12 py-24">
              <div className="flex flex-col items-center gap-6">
                <div className="text-sm font-medium text-white/50 uppercase tracking-[0.3em]">
                  Who We're Looking For
                </div>
                <h2 className="text-4xl md:text-6xl font-light text-center leading-tight text-white max-w-4xl">
                  Built for the bold.
                  <br />
                  <span className="text-white/70">Made for innovators.</span>
                </h2>
              </div>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative p-8 h-[280px] flex flex-col justify-between">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                    <span className="text-sm font-medium text-white/60 uppercase tracking-wider">
                      Developers
                    </span>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-light text-white">
                      AI/ML Engineers
                    </h3>
                    <p className="text-white/70 font-light leading-relaxed">
                      Passionate developers with hands-on experience in
                      artificial intelligence and machine learning technologies.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative p-8 h-[280px] flex flex-col justify-between">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                    <span className="text-sm font-medium text-white/60 uppercase tracking-wider">
                      Entrepreneurs
                    </span>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-light text-white">
                      Visionary Founders
                    </h3>
                    <p className="text-white/70 font-light leading-relaxed">
                      Business minds ready to transform breakthrough ideas into
                      market-ready solutions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative p-8 h-[280px] flex flex-col justify-between">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                    <span className="text-sm font-medium text-white/60 uppercase tracking-wider">
                      Designers
                    </span>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-light text-white">
                      Creative Minds
                    </h3>
                    <p className="text-white/70 font-light leading-relaxed">
                      UX/UI designers who understand how to make AI accessible
                      and beautiful for everyone.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative p-8 h-[280px] flex flex-col justify-between">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-2 h-2 rounded-full bg-orange-400"></div>
                    <span className="text-sm font-medium text-white/60 uppercase tracking-wider">
                      Teams
                    </span>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-light text-white">
                      Collaborative Spirit
                    </h3>
                    <p className="text-white/70 font-light leading-relaxed">
                      Solo applicants welcome. Teams of up to 4 members. At
                      least one technical AI/ML expert required.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center py-12">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 backdrop-blur-xl border border-white/10">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></div>
                <span className="text-sm font-medium text-white/80">
                  Open to EU residents with AI/ML passion
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col self-center w-full max-w-[1280px] gap-24 px-8">
            <section className="flex flex-col items-center gap-16 py-24">
              <div className="flex flex-col items-center gap-6">
                <div className="text-sm font-medium text-white/50 uppercase tracking-[0.3em]">
                  Location
                </div>
                <h2 className="text-4xl md:text-6xl font-light text-center leading-tight text-white max-w-4xl">
                  Where innovation
                  <br />
                  <span className="text-white/70">meets the future.</span>
                </h2>
              </div>
            </section>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <InView
                variants={{
                  hidden: { opacity: 0, x: -50, filter: "blur(4px)" },
                  visible: { opacity: 1, x: 0, filter: "blur(0px)" },
                }}
                viewOptions={{ margin: "0px 0px -150px 0px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="flex flex-col gap-8">
                  <div className="text-3xl md:text-4xl font-light text-white/90 leading-relaxed">
                    Edu City, Turku
                  </div>
                  <div className="space-y-6 text-lg text-white/70 font-light leading-relaxed">
                    <p>
                      Located in the heart of Finland's innovation ecosystem,
                      Edu City represents the perfect fusion of academic
                      excellence and entrepreneurial spirit.
                    </p>
                    <p>
                      A state-of-the-art facility designed for breakthrough
                      thinking, equipped with everything needed to transform
                      ambitious ideas into reality.
                    </p>
                  </div>
                  <div className="flex items-center gap-4 pt-4">
                    <div className="w-12 h-px bg-gradient-to-r from-blue-400 to-transparent"></div>
                    <span className="text-sm text-white/50 font-medium">
                      Turku, Finland
                    </span>
                  </div>
                </div>
              </InView>

              <InView
                variants={{
                  hidden: { opacity: 0, x: 50, filter: "blur(4px)" },
                  visible: { opacity: 1, x: 0, filter: "blur(0px)" },
                }}
                viewOptions={{ margin: "0px 0px -150px 0px" }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              >
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-900/50 to-black/50 backdrop-blur-xl border border-white/10">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10"></div>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src="/assets/images/educity.jpg"
                      alt="Edu City, Turku, Finland"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
                      radius="none"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                  </div>
                </div>
              </InView>
            </div>
          </div>

          <InfiniteSlider gap={24} className="my-16">
            <div className="text-6xl md:text-8xl lg:text-9xl text-center font-light text-white/90 tracking-tighter px-8">
              Innovation
            </div>
            <div className="text-6xl md:text-8xl lg:text-9xl text-center font-light text-white/90 tracking-tighter px-8">
              Impact
            </div>
            <div className="text-6xl md:text-8xl lg:text-9xl text-center font-light text-white/90 tracking-tighter px-8">
              Future
            </div>
            <div className="text-6xl md:text-8xl lg:text-9xl text-center font-light text-white/90 tracking-tighter px-8">
              Next Gen
            </div>
          </InfiniteSlider>

          <div className="flex flex-col self-center w-full max-w-[1280px] gap-8 px-8">
            <section className="flex flex-col items-center gap-16 py-32">
              <div className="flex flex-col items-center gap-6">
                <div className="text-sm font-medium text-white/50 uppercase tracking-[0.3em]">
                  Prizes
                </div>
                <h2 className="text-4xl md:text-6xl font-light text-center leading-tight text-white max-w-4xl">
                  Extraordinary rewards.
                  <br />
                  <span className="text-white/70">
                    For extraordinary ideas.
                  </span>
                </h2>
              </div>

              {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
                <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 hover:border-white/30 transition-all duration-700">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="relative p-12 text-center">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm"></div>
                    </div>
                    <div className="text-6xl font-light text-white mb-2">€5,000</div>
                    <div className="text-white/60 font-light mb-8">Grand Prize</div>
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/8 to-white/3 backdrop-blur-xl border border-white/15 hover:border-white/25 transition-all duration-700">
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-400/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="relative p-12 text-center">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-slate-300 to-slate-500 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm"></div>
                    </div>
                    <div className="text-6xl font-light text-white mb-2">€3,000</div>
                    <div className="text-white/60 font-light mb-8">Second Place</div>
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/6 to-white/2 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-700">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="relative p-12 text-center">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm"></div>
                    </div>
                    <div className="text-6xl font-light text-white mb-2">€2,000</div>
                    <div className="text-white/60 font-light mb-8">Third Place</div>
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                  </div>
                </div>
              </div> */}

              <div className="text-center mt-16">
                <p className="text-lg text-white/70 font-light leading-relaxed max-w-2xl">
                  Plus additional prizes for category winners, including best
                  use of AI, most innovative solution, and people's choice
                  award.
                </p>
              </div>
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

          <div className="flex flex-col self-center w-full max-w-[1280px] gap-24 px-8">
            <section className="flex flex-col items-center gap-16 py-24">
              <div className="flex flex-col items-center gap-6">
                <div className="text-sm font-medium text-white/50 uppercase tracking-[0.3em]">
                  Event Schedule
                </div>
                <h2 className="text-4xl md:text-6xl font-light text-center leading-tight text-white max-w-4xl">
                  Three days.
                  <br />
                  <span className="text-white/70">Endless possibilities.</span>
                </h2>
              </div>
            </section>

            <div className="grid grid-cols-1 gap-16">
              {/* Day 1 */}
              <InView
                variants={{
                  hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
                  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
                }}
                viewOptions={{ margin: "0px 0px -100px 0px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="group relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative p-12">
                    <div className="flex items-center justify-between mb-8">
                      <div className="flex items-center gap-4">
                        <div className="w-3 h-3 rounded-full bg-blue-400"></div>
                        <span className="text-sm font-medium text-white/60 uppercase tracking-wider">
                          November 21
                        </span>
                      </div>
                      <span className="text-sm font-medium text-white/40">
                        Day 01
                      </span>
                    </div>

                    <div className="space-y-8">
                      <div>
                        <h3 className="text-3xl font-light text-white mb-2">
                          Kickoff
                        </h3>
                        <p className="text-white/70 font-light leading-relaxed">
                          Welcome presentation, challenge announcement, and team
                          formation
                        </p>
                      </div>

                      <div className="flex items-center gap-6">
                        <div className="text-lg font-medium text-white/80">
                          4:00 PM
                        </div>
                        <div className="flex-1 h-px bg-gradient-to-r from-white/20 via-transparent to-transparent"></div>
                        <div className="text-sm text-white/50">Start</div>
                      </div>
                    </div>
                  </div>
                </div>
              </InView>

              {/* Day 2 */}
              <InView
                variants={{
                  hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
                  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
                }}
                viewOptions={{ margin: "0px 0px -100px 0px" }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              >
                <div className="group relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative p-12">
                    <div className="flex items-center justify-between mb-8">
                      <div className="flex items-center gap-4">
                        <div className="w-3 h-3 rounded-full bg-purple-400"></div>
                        <span className="text-sm font-medium text-white/60 uppercase tracking-wider">
                          November 22
                        </span>
                      </div>
                      <span className="text-sm font-medium text-white/40">
                        Day 02
                      </span>
                    </div>

                    <div className="space-y-8">
                      <div>
                        <h3 className="text-3xl font-light text-white mb-2">
                          Build
                        </h3>
                        <p className="text-white/70 font-light leading-relaxed">
                          Full day of development with mentor support and
                          technical workshops
                        </p>
                      </div>

                      <div className="flex items-center gap-6">
                        <div className="text-lg font-medium text-white/80">
                          All Day
                        </div>
                        <div className="flex-1 h-px bg-gradient-to-r from-white/20 via-transparent to-transparent"></div>
                        <div className="text-sm text-white/50">Continuous</div>
                      </div>
                    </div>
                  </div>
                </div>
              </InView>

              {/* Day 3 */}
              <InView
                variants={{
                  hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
                  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
                }}
                viewOptions={{ margin: "0px 0px -100px 0px" }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              >
                <div className="group relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative p-12">
                    <div className="flex items-center justify-between mb-8">
                      <div className="flex items-center gap-4">
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                        <span className="text-sm font-medium text-white/60 uppercase tracking-wider">
                          November 23
                        </span>
                      </div>
                      <span className="text-sm font-medium text-white/40">
                        Day 03
                      </span>
                    </div>

                    <div className="space-y-8">
                      <div>
                        <h3 className="text-3xl font-light text-white mb-2">
                          Present
                        </h3>
                        <p className="text-white/70 font-light leading-relaxed">
                          Final presentations, judging, and awards ceremony
                        </p>
                      </div>

                      <div className="flex items-center gap-6">
                        <div className="text-lg font-medium text-white/80">
                          5:00 PM
                        </div>
                        <div className="flex-1 h-px bg-gradient-to-r from-white/20 via-transparent to-transparent"></div>
                        <div className="text-sm text-white/50">Finals</div>
                      </div>
                    </div>
                  </div>
                </div>
              </InView>
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

          <div className="flex flex-col self-center w-full max-w-[1280px] gap-24 px-8">
            <section className="flex flex-col items-center gap-16 py-24">
              <div className="flex flex-col items-center gap-6">
                <div className="text-sm font-medium text-white/50 uppercase tracking-[0.3em]">
                  Questions
                </div>
                <h2 className="text-4xl md:text-6xl font-light text-center leading-tight text-white max-w-4xl">
                  Everything you need
                  <br />
                  <span className="text-white/70">to know.</span>
                </h2>
              </div>
            </section>

            <div className="space-y-6">
              <div className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <details className="peer">
                  <summary className="flex items-center justify-between p-8 cursor-pointer list-none">
                    <span className="text-xl font-light text-white">
                      Do I need to know how to code?
                    </span>
                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center transition-transform duration-300 group-open:rotate-45">
                      <div className="w-3 h-px bg-white/60"></div>
                      <div className="w-px h-3 bg-white/60 absolute"></div>
                    </div>
                  </summary>
                  <div className="px-8 pb-8">
                    <div className="w-full h-px bg-gradient-to-r from-white/10 via-white/20 to-white/10 mb-6"></div>
                    <p className="text-white/70 font-light leading-relaxed">
                      If you're applying as a hacker — yes, at least one person
                      on your team needs solid AI/ML experience. If you're not
                      technical, check out the showroom instead!
                    </p>
                  </div>
                </details>
              </div>

              <div className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <details className="peer">
                  <summary className="flex items-center justify-between p-8 cursor-pointer list-none">
                    <span className="text-xl font-light text-white">
                      Can I apply solo?
                    </span>
                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center transition-transform duration-300 group-open:rotate-45">
                      <div className="w-3 h-px bg-white/60"></div>
                      <div className="w-px h-3 bg-white/60 absolute"></div>
                    </div>
                  </summary>
                  <div className="px-8 pb-8">
                    <div className="w-full h-px bg-gradient-to-r from-white/10 via-white/20 to-white/10 mb-6"></div>
                    <p className="text-white/70 font-light leading-relaxed">
                      Absolutely. We'll help you find a team before and during
                      the event.
                    </p>
                  </div>
                </details>
              </div>

              <div className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <details className="peer">
                  <summary className="flex items-center justify-between p-8 cursor-pointer list-none">
                    <span className="text-xl font-light text-white">
                      Where is the event?
                    </span>
                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center transition-transform duration-300 group-open:rotate-45">
                      <div className="w-3 h-px bg-white/60"></div>
                      <div className="w-px h-3 bg-white/60 absolute"></div>
                    </div>
                  </summary>
                  <div className="px-8 pb-8">
                    <div className="w-full h-px bg-gradient-to-r from-white/10 via-white/20 to-white/10 mb-6"></div>
                    <p className="text-white/70 font-light leading-relaxed">
                      In Turku, Finland. The exact location will be shared with
                      approved participants.
                    </p>
                  </div>
                </details>
              </div>

              <div className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <details className="peer">
                  <summary className="flex items-center justify-between p-8 cursor-pointer list-none">
                    <span className="text-xl font-light text-white">
                      Is it really free?
                    </span>
                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center transition-transform duration-300 group-open:rotate-45">
                      <div className="w-3 h-px bg-white/60"></div>
                      <div className="w-px h-3 bg-white/60 absolute"></div>
                    </div>
                  </summary>
                  <div className="px-8 pb-8">
                    <div className="w-full h-px bg-gradient-to-r from-white/10 via-white/20 to-white/10 mb-6"></div>
                    <p className="text-white/70 font-light leading-relaxed">
                      Yes. We cover everything — food, drinks, space, swag, and
                      compute.
                    </p>
                  </div>
                </details>
              </div>

              <div className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <details className="peer">
                  <summary className="flex items-center justify-between p-8 cursor-pointer list-none">
                    <span className="text-xl font-light text-white">
                      How do I know if I got in?
                    </span>
                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center transition-transform duration-300 group-open:rotate-45">
                      <div className="w-3 h-px bg-white/60"></div>
                      <div className="w-px h-3 bg-white/60 absolute"></div>
                    </div>
                  </summary>
                  <div className="px-8 pb-8">
                    <div className="w-full h-px bg-gradient-to-r from-white/10 via-white/20 to-white/10 mb-6"></div>
                    <p className="text-white/70 font-light leading-relaxed">
                      All applications are reviewed. You'll receive an approval
                      email if selected.
                    </p>
                  </div>
                </details>
              </div>
            </div>
          </div>

          <div className="flex flex-col self-center w-full max-w-[1280px] gap-24 px-8 py-32">
            <section className="flex flex-col items-center gap-16">
              <div className="flex flex-col items-center gap-6">
                <div className="text-sm font-medium text-white/50 uppercase tracking-[0.3em]">
                  Join the Future
                </div>
                <h2 className="text-4xl md:text-6xl font-light text-center leading-tight text-white max-w-4xl">
                  Ready to build
                  <br />
                  <span className="text-white/70">something extraordinary?</span>
                </h2>
              </div>
              
              <div className="text-center max-w-2xl">
                <p className="text-lg text-white/70 font-light leading-relaxed">
                  Applications are now open for Since AI 2025. Join the most exclusive AI hackathon in Northern Europe.
                </p>
              </div>

              <div className="flex flex-col items-center gap-8">
                <Magnetic
                  intensity={0.2}
                  springOptions={springOptions}
                  actionArea="global"
                  range={200}
                >
                  <button
                    type="button"
                    className="group relative inline-flex items-center justify-center px-16 py-5 text-lg font-medium text-black bg-white rounded-full transition-all duration-300 hover:bg-white/90 hover:scale-105 transform"
                  >
                    <span className="relative z-10 font-medium">Apply Now</span>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white via-white to-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </button>
                </Magnetic>
                
                <div className="text-center">
                  <p className="text-sm text-white/50 font-light">
                    Limited spots available • Rolling admissions
                  </p>
                </div>
              </div>
            </section>
          </div>

          <div className="flex flex-col self-center w-full max-w-[1280px] gap-24 px-8 py-32">
            <section className="flex flex-col items-center gap-16">
              <div className="flex flex-col items-center gap-6">
                <div className="text-sm font-medium text-white/50 uppercase tracking-[0.3em]">
                  Connect
                </div>
                <h2 className="text-4xl md:text-6xl font-light text-center leading-tight text-white max-w-4xl">
                  Questions?
                  <br />
                  <span className="text-white/70">We're here to help.</span>
                </h2>
              </div>
              
              <div className="text-center max-w-2xl">
                <p className="text-lg text-white/70 font-light leading-relaxed">
                  For questions, sponsorship opportunities, or partnership inquiries.
                </p>
              </div>

              <div className="flex flex-col items-center gap-8">
                <Magnetic
                  intensity={0.2}
                  springOptions={springOptions}
                  actionArea="global"
                  range={200}
                >
                  <a
                    href="/contact"
                    className="group relative inline-flex items-center justify-center px-16 py-5 text-lg font-medium text-white bg-white/5 backdrop-blur-xl border border-white/10 rounded-full transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:scale-105 transform"
                  >
                    <span className="relative z-10 font-light">Get in touch</span>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/5 via-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                </Magnetic>
                
                
              </div>
            </section>
          </div>

          <div className="bg-black border-t border-white/10">
              <div className="max-w-[1280px] mx-auto px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                  <div className="col-span-1 md:col-span-2">
                    <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
                      Since AI
                    </h2>
                    <p className="text-white/60 text-lg font-light max-w-md">
                      Pioneering the future of artificial intelligence with
                      innovation and purpose.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-white font-medium text-sm uppercase tracking-wider">
                      Connect
                    </h3>
                    <div className="space-y-3">
                      <a
                        href="https://www.linkedin.com/company/sinceai"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-white/60 hover:text-white transition-colors duration-200 text-sm"
                      >
                        LinkedIn
                      </a>
                      <a
                        href="https://www.instagram.com/since_ai"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-white/60 hover:text-white transition-colors duration-200 text-sm"
                      >
                        Instagram
                      </a>
                      <a
                        href="https://x.com/since_ai_"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-white/60 hover:text-white transition-colors duration-200 text-sm"
                      >
                        X
                      </a>
                      <a
                        href="https://github.com/since-ai"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-white/60 hover:text-white transition-colors duration-200 text-sm"
                      >
                        GitHub
                      </a>
                      <a
                        href="https://www.facebook.com/sinceai"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-white/60 hover:text-white transition-colors duration-200 text-sm"
                      >
                        Facebook
                      </a>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-white font-medium text-sm uppercase tracking-wider">
                      Legal
                    </h3>
                    <div className="space-y-3">
                      <p className="text-white/60 text-sm">Boost Turku ry</p>
                      <p className="text-white/60 text-sm">
                        Business ID: 2321515-1
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                  <p className="text-white/40 text-sm">
                    © 2025 Since AI. All rights reserved.
                  </p>
                  
                </div>
              </div>
            </div>
        </div>
      </div>
    </SmoothScroll>
  );
}

// make it look apple style, billion dollar company looking, minimalist, modern
