"use client";
import React, { useEffect, useState } from "react";

import { FaLinkedin } from "react-icons/fa";

import { InfiniteSlider } from "@/components/motion-primitives/infinite-slider";
import SmoothScroll from "@/components/smoothScroll";
import { WavyBackground } from "@/components/ui/wavy-background";

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
          <div className="w-full flex flex-col h-full items-center justify-center relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40" />
            <div className="relative z-10 flex flex-col items-center gap-8 max-w-4xl mx-auto px-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-white/60" />
                <span className="text-white/60 text-sm font-light tracking-[0.2em] uppercase">
                  Get in touch
                </span>
                <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-white/60" />
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-8xl text-white font-extralight tracking-tight text-center leading-[0.9]">
                Let's build the{" "}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/70">
                  future
                </span>
              </h1>
              <p className="text-white/60 text-lg md:text-xl font-light text-center max-w-2xl leading-relaxed mb-16">
                Connect with our team of visionaries and innovators who are
                shaping tomorrow's AI landscape.
              </p>
            </div>
          </div>
          <div className="flex flex-col bg-black/80 gap-32 pt-16">
            <div className="flex flex-col self-center w-full max-w-[1280px] gap-8 px-8">
              {/* <section className="flex flex-col gap-8">
                <div className="flex flex-row items-center gap-4 mb-8">
                  <div className="max-w-9 bg-white h-1 flex-1" />
                  Contact us
                </div>

                <div className="text-6xl text-balance">
                  Would love to hear from you!
                </div>
              </section> */}
              <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-[1280px] px-6 mb-8">
                {[
                  {
                    name: "Yuehan John",
                    role: "Head of Growth",
                    email: "yuehan.john@boostturku.com",
                    linkedin: "https://www.linkedin.com/in/yuehanjohn/",
                  },
                  {
                    name: "Riku Lauttia",
                    role: "Head of Operations",
                    email: "riku@boostturku.com",
                    linkedin: "https://www.linkedin.com/in/rikulauttia/",
                  },
                  {
                    name: "Aarne Ollila",
                    role: "Head of Partnerships",
                    email: "aarne@boostturku.com",
                    linkedin:
                      "https://www.linkedin.com/in/aarne-ollila-53429028b/",
                  },
                  {
                    name: "Juho Salmi",
                    role: "Head of Sales",
                    linkedin: "https://www.linkedin.com/",
                  },
                  {
                    name: "Immu Koskinen",
                    role: "Head of Sales",
                    linkedin:
                      "https://www.linkedin.com/in/immu-koskinen-79244525b/",
                  },
                  {
                    name: "Aapo Peräkorpi",
                    role: "Head of Partnerships",
                    linkedin:
                      "https://www.linkedin.com/in/aapo-per%C3%A4korpi-bb7321298/",
                  },
                  {
                    name: "Julius Kraapo",
                    role: "Strategic Sales & Partnerships",
                    email: "julius@boostturku.com",
                    linkedin: "https://www.linkedin.com/in/julius-k-816698304/",
                  },
                  {
                    name: "Joonas Ukkonen",
                    role: "Strategic Sales & Partnerships",
                    linkedin:
                      "https://www.linkedin.com/in/joonas-ukkonen-29844022b/",
                  },
                  {
                    name: "Juhani Tanskanen",
                    role: "Strategic Sales & Partnerships",
                    linkedin:
                      "https://www.linkedin.com/in/juhani-tanskanen-249923294/",
                  },
                  {
                    name: "Kasper Hakala",
                    role: "Strategic Sales & Partnerships",
                    linkedin:
                      "https://www.linkedin.com/in/kasper-hakala-6b2605262/",
                  },
                  {
                    name: "Eemeli Piiroinen",
                    role: "Strategic Sales & Partnerships",
                    linkedin: "https://www.linkedin.com/",
                  },
                  {
                    name: "Olli Jartti",
                    role: "Strategic Sales & Partnerships",
                    linkedin: "https://www.linkedin.com/in/ollijartti/",
                  },
                  {
                    name: "Aman Vyas",
                    role: "Head of International Sales & Partnerships",
                    linkedin:
                      "https://www.linkedin.com/in/aman-vyas-21b674133/",
                  },
                  {
                    name: "Arttu Myyryläinen",
                    role: "Head of Marketing & Commercial Partnerships",
                    email: "arttu@boostturku.com",
                    linkedin:
                      "https://www.linkedin.com/in/arttu-myyryl%C3%A4inen/",
                  },
                  {
                    name: "Anton Tuuli",
                    role: "Head of Technology",
                    linkedin:
                      "https://www.linkedin.com/in/anton-tuuli-a62838278/",
                  },
                  {
                    name: "Vishaka Salpiumi",
                    role: "Head of Community",
                    linkedin:
                      "https://www.linkedin.com/in/vishaka-salpiumi-3b6578349/",
                  },
                  {
                    name: "Janina Paasila",
                    role: "Head of Creative",
                    linkedin: "https://www.linkedin.com/in/janinapaasila/",
                  },
                ].map((person, index) => (
                  <div
                    key={index}
                    className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="relative z-10">
                      {/* <div className="w-12 h-12 bg-gradient-to-br from-white/20 to-white/10 rounded-full flex items-center justify-center mb-4">
                        <span className="text-white font-medium text-lg">
                          {person.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div> */}

                      <h3 className="text-white font-medium text-lg mb-2 leading-tight">
                        {person.name}
                      </h3>

                      <p className="text-white/60 text-sm font-light mb-4">
                        {person.role}
                      </p>

                      {person.email && (
                        <a
                          href={`mailto:${person.email}`}
                          className="text-white/40 hover:text-white/70 text-xs font-light transition-colors duration-200 block mb-3 truncate"
                        >
                          {person.email}
                        </a>
                      )}

                      {person.linkedin && (
                        <button
                          onClick={() => window.open(person.linkedin, "_blank")}
                          className="inline-flex items-center justify-center w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-200 group-hover:scale-110"
                        >
                          <FaLinkedin size={14} className="text-white/70" />
                        </button>
                      )}
                    </div>

                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/5 to-transparent rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-500" />
                  </div>
                ))}
              </section>
            </div>

            <InfiniteSlider gap={24} className="my-16">
              <div className="text-6xl md:text-8xl lg:text-9xl font-light text-white/90 tracking-tight mr-28">
                Innovation
              </div>
              <div className="text-6xl md:text-8xl lg:text-9xl font-light text-white/90 tracking-tight mr-28">
                Impact
              </div>
              <div className="text-6xl md:text-8xl lg:text-9xl font-light text-white/90 tracking-tight mr-28">
                Startup
              </div>
              <div className="text-6xl md:text-8xl lg:text-9xl font-light text-white/90 tracking-tight mr-28">
                Future
              </div>
              <div className="text-6xl md:text-8xl lg:text-9xl font-light text-white/90 tracking-tight mr-28">
                Next Gen
              </div>
            </InfiniteSlider>
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
        </WavyBackground>
      </div>
    </SmoothScroll>
  );
}
