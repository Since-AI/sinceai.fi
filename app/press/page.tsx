import React from "react";
import Link from "next/link";
import SmoothScroll from "@/components/smoothScroll";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/sections/Footer";
import { FadeIn } from "@/components/motion-primitives/fade-in";
import { Download, Mail } from "lucide-react";

export default function PressPage() {
  const stats = [
    { label: "Community Members", value: "500+" },
    { label: "Hackathon Participants", value: "200+" },
    { label: "Partner Companies", value: "15+" },
    { label: "AI Projects Built", value: "30+" },
  ];

  const pressKit = [
    { name: "Since AI Full Logo (Black)", file: "/assets/logo/SINCE AI full black.png" },
    { name: "Since AI Full Logo (White)", file: "/assets/logo/SINCE AI full white.png" },
    { name: "Since AI Logo Mark (Black)", file: "/assets/logo/SINCE AI black.png" },
    { name: "Since AI Logo Mark (White)", file: "/assets/logo/SINCE AI white.png" },
  ];

  return (
    <SmoothScroll>
      <Navbar />
      
      <main className="flex flex-col w-full bg-black min-h-screen">
        <div className="max-w-4xl mx-auto px-6 py-32 md:py-40">
          <FadeIn>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight leading-tight">
              Press & Media
            </h1>
            
            <div className="prose prose-invert prose-neutral max-w-none">
              <p className="text-xl text-neutral-300 leading-relaxed mb-12">
                Since AI is Finland's largest AI developer community with 500+ members, based in Turku. 
                We organize hackathons bringing together 200+ developers and 15+ partner companies to 
                build real-world AI solutions. Founded in 2025, we're growing the AI ecosystem in Finland 
                and beyond.
              </p>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">
                  Quick Facts
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center p-6 rounded-xl border border-white/10 bg-white/[0.02]">
                      <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                        {stat.value}
                      </div>
                      <div className="text-sm text-neutral-500">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">
                  About Since AI
                </h2>
                <p className="text-neutral-300 leading-relaxed mb-4">
                  <strong className="text-white">Name:</strong> Since AI
                  <br />
                  <strong className="text-white">Legal Entity:</strong> Since AI ry (Business ID: 3593920-2)
                  <br />
                  <strong className="text-white">Founded:</strong> 2025
                  <br />
                  <strong className="text-white">Location:</strong> Turku, Finland
                  <br />
                  <strong className="text-white">Website:</strong>{" "}
                  <a href="https://sinceai.fi" className="text-white hover:text-neutral-300 underline">
                    sinceai.fi
                  </a>
                </p>
                <p className="text-neutral-400 leading-relaxed mb-4">
                  Since AI brings together AI developers, researchers, and companies to collaborate on 
                  real-world challenges. Our hackathons have produced projects in maritime safety, customer 
                  support automation, computer vision, and more. We're supported by leading organizations 
                  including the University of Turku, Turku University of Applied Sciences, City of Turku, 
                  and Business Turku.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">
                  Partner Companies
                </h2>
                <p className="text-neutral-300 leading-relaxed mb-4">
                  Since AI partners with leading companies including:
                </p>
                <div className="grid grid-cols-2 gap-3 text-neutral-400">
                  <div>
                    <strong className="text-white">• Valmet</strong> - Industrial technology
                  </div>
                  <div>
                    <strong className="text-white">• Sandvik</strong> - Engineering
                  </div>
                  <div>
                    <strong className="text-white">• Kongsberg</strong> - Maritime technology
                  </div>
                  <div>
                    <strong className="text-white">• ElevenLabs</strong> - AI voice technology
                  </div>
                  <div>
                    <strong className="text-white">• Antler</strong> - Venture capital
                  </div>
                  <div>
                    <strong className="text-white">• Featherless.ai</strong> - AI infrastructure
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">
                  Recent Highlights
                </h2>
                <ul className="space-y-4 text-neutral-300">
                  <li className="flex items-start gap-3">
                    <span className="text-white font-bold mt-1">•</span>
                    <span>Organized flagship AI hackathon with 260 builders in 2025</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-white font-bold mt-1">•</span>
                    <span>Built 30+ AI projects addressing real company challenges</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-white font-bold mt-1">•</span>
                    <span>Grew community from 0 to 500+ members in 18 months</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-white font-bold mt-1">•</span>
                    <span>Partnered with 15+ companies including Fortune 500 enterprises</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-white font-bold mt-1">•</span>
                    <span>Created pathways for developers to access jobs and career opportunities</span>
                  </li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">
                  Press Kit
                </h2>
                <p className="text-neutral-400 mb-6">
                  Download our logos and brand assets for media use:
                </p>
                <div className="space-y-3">
                  {pressKit.map((item, index) => (
                    <a
                      key={index}
                      href={item.file}
                      download
                      className="flex items-center gap-3 p-4 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-colors"
                    >
                      <Download className="w-5 h-5 text-neutral-400" />
                      <span className="text-neutral-300">{item.name}</span>
                    </a>
                  ))}
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">
                  Media Contact
                </h2>
                <div className="p-6 rounded-xl border border-white/10 bg-white/[0.02]">
                  <p className="text-neutral-300 mb-4">
                    For press inquiries, interviews, or media partnerships:
                  </p>
                  <div className="space-y-3">
                    <p className="text-neutral-300">
                      <Mail className="inline w-4 h-4 mr-2" />
                      <strong className="text-white">Email:</strong>{" "}
                      <a href="mailto:info@sinceai.fi" className="text-white hover:text-neutral-300 underline">
                        info@sinceai.fi
                      </a>
                    </p>
                    <p className="text-neutral-300">
                      <strong className="text-white">Response time:</strong> Within 24 hours
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">
                  Social Media
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <a
                    href="https://discord.gg/6PC74zW68v"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-colors text-neutral-300 hover:text-white"
                  >
                    <strong>Discord</strong>
                    <br />
                    <span className="text-sm text-neutral-500">500+ members</span>
                  </a>
                  <a
                    href="https://t.me/sinceaihq"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-colors text-neutral-300 hover:text-white"
                  >
                    <strong>Telegram</strong>
                    <br />
                    <span className="text-sm text-neutral-500">@sinceaihq</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/sinceai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-colors text-neutral-300 hover:text-white"
                  >
                    <strong>LinkedIn</strong>
                    <br />
                    <span className="text-sm text-neutral-500">@sinceai</span>
                  </a>
                  <a
                    href="https://www.instagram.com/sinceaihq"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-colors text-neutral-300 hover:text-white"
                  >
                    <strong>Instagram</strong>
                    <br />
                    <span className="text-sm text-neutral-500">@sinceaihq</span>
                  </a>
                  <a
                    href="https://x.com/sinceaihq"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-colors text-neutral-300 hover:text-white"
                  >
                    <strong>X (Twitter)</strong>
                    <br />
                    <span className="text-sm text-neutral-500">@sinceaihq</span>
                  </a>
                  <a
                    href="https://github.com/sinceaihq"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-colors text-neutral-300 hover:text-white"
                  >
                    <strong>GitHub</strong>
                    <br />
                    <span className="text-sm text-neutral-500">@sinceaihq</span>
                  </a>
                  <a
                    href="https://www.youtube.com/@sinceaihq"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-colors text-neutral-300 hover:text-white"
                  >
                    <strong>YouTube</strong>
                    <br />
                    <span className="text-sm text-neutral-500">@sinceaihq</span>
                  </a>
                  <a
                    href="https://www.tiktok.com/@sinceaihq"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-colors text-neutral-300 hover:text-white"
                  >
                    <strong>TikTok</strong>
                    <br />
                    <span className="text-sm text-neutral-500">@sinceaihq</span>
                  </a>
                  <a
                    href="https://www.facebook.com/sinceai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-colors text-neutral-300 hover:text-white"
                  >
                    <strong>Facebook</strong>
                    <br />
                    <span className="text-sm text-neutral-500">@sinceai</span>
                  </a>
                </div>
              </section>

              <section className="p-8 rounded-2xl border border-white/10 bg-white/[0.02]">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Learn More
                </h2>
                <div className="space-y-3 text-neutral-300">
                  <p>
                    <Link href="/about" className="text-white hover:text-neutral-300 underline">
                      Read our full story
                    </Link> to learn about our mission, team, and impact.
                  </p>
                  <p>
                    <Link href="/faq" className="text-white hover:text-neutral-300 underline">
                      Browse our FAQ
                    </Link> for answers to common questions.
                  </p>
                  <p>
                    <Link href="/contact" className="text-white hover:text-neutral-300 underline">
                      Contact our team
                    </Link> for partnerships or collaboration opportunities.
                  </p>
                </div>
              </section>
            </div>
          </FadeIn>
        </div>

        <Footer discordUrl="https://discord.gg/6PC74zW68v" />
      </main>
    </SmoothScroll>
  );
}
