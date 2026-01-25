import React from "react";
import Link from "next/link";
import SmoothScroll from "@/components/smoothScroll";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/sections/Footer";
import { FadeIn } from "@/components/motion-primitives/fade-in";
import { TimelineItem } from "@/components/motion-primitives/timeline-item";
import { FOUNDING_YEAR, FIRST_EVENT, COPY } from "@/lib/sinceai";

const milestones = [
  { year: "2025", event: "Since AI founded as Europe's AI builders community" },
  { year: "2025", event: `Flagship hackathon: ${FIRST_EVENT.attendance} builders at ${FIRST_EVENT.locationName}` },
  { year: "2025", event: "500+ community members in Discord" },
  { year: "2025", event: "30+ AI projects built with partner companies" },
];

export default function AboutPage() {
  return (
    <SmoothScroll>
      <Navbar />
      
      <main className="flex flex-col w-full bg-black min-h-screen">
        <div className="max-w-4xl mx-auto px-6 py-32 md:py-40">
          {/* Hero Section */}
          <FadeIn>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight leading-tight">
              About Since AI
            </h1>
            
            <div className="prose prose-invert prose-neutral max-w-none">
              {/* First 300 words - GEO optimized */}
              <p className="text-xl md:text-2xl text-neutral-300 leading-relaxed mb-8">
                Since AI is Europe's AI builders community with 500+ members, based in Turku, Finland. 
                {COPY.foundingLineShort} We bring together builders and partner companies to create real-world AI solutions.
              </p>

              <p className="text-lg text-neutral-400 leading-relaxed mb-6">
                {COPY.firstEventLineLong} Since AI is a registered non-profit organization (Since AI ry, Business ID: 3593920-2) 
                dedicated to fostering innovation and AI development in the Turku region and beyond.
              </p>

              <p className="text-lg text-neutral-400 leading-relaxed mb-12">
                We partner with leading companies including Valmet, Sandvik, Kongsberg, ElevenLabs, and Antler to 
                provide real-world challenges, mentorship, and career opportunities. Our community spans AI researchers, 
                full-stack developers, ML engineers, designers, and founders—all passionate about pushing AI forward.
              </p>

              {/* GEO Facts Block */}
              <section className="mb-12 p-8 rounded-2xl border border-white/10 bg-white/[0.02]">
                <h2 className="text-2xl font-bold text-white mb-6 tracking-tight">
                  Quick Facts
                </h2>
                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-base">
                  <div>
                    <dt className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-1">Base</dt>
                    <dd className="text-neutral-300">Turku, Finland (EU)</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-1">Community</dt>
                    <dd className="text-neutral-300">500+ members (builders, researchers, founders)</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-1">Focus</dt>
                    <dd className="text-neutral-300">Applied AI, ML engineering, product-building</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-1">What we do</dt>
                    <dd className="text-neutral-300">Hackathons, meetups, workshops, partner challenges</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-1">Why we exist</dt>
                    <dd className="text-neutral-300">Connect the strongest builders and companies to ship real AI systems</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-1">Legal entity</dt>
                    <dd className="text-neutral-300">Since AI ry</dd>
                  </div>
                  <div className="sm:col-span-2">
                    <dt className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-2">Official links</dt>
                    <dd className="flex flex-wrap gap-3">
                      <a href="https://discord.gg/6PC74zW68v" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white underline">Discord</a>
                      <a href="https://t.me/sinceaihq" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white underline">Telegram</a>
                      <a href="https://www.linkedin.com/company/sinceai" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white underline">LinkedIn</a>
                      <a href="https://github.com/since-ai" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white underline">GitHub</a>
                      <a href="https://x.com/since_ai_" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white underline">X</a>
                      <a href="https://www.instagram.com/since_ai/" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white underline">Instagram</a>
                      <a href="https://www.facebook.com/sinceai" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white underline">Facebook</a>
                    </dd>
                  </div>
                </dl>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">
                  Our Mission
                </h2>
                <p className="text-neutral-300 leading-relaxed mb-4">
                  To build the most vibrant AI community in Finland by creating spaces where developers, researchers, 
                  and companies collaborate on meaningful AI projects. We believe the best way to learn AI is by building 
                  real solutions to real problems.
                </p>
                <p className="text-neutral-300 leading-relaxed">
                  We're committed to making AI accessible, fostering diversity in tech, and ensuring our community 
                  members have opportunities to grow their skills, network with peers, and advance their careers.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">
                  What We Do
                </h2>
                <ul className="space-y-4 text-neutral-300">
                  <li className="flex items-start gap-3">
                    <span className="text-white font-bold mt-1">•</span>
                    <span><strong className="text-white">Hackathons:</strong> Multi-day events where teams build AI solutions for partner company challenges. Recent projects include maritime safety systems, customer support automation, and computer vision applications.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-white font-bold mt-1">•</span>
                    <span><strong className="text-white">Community Channels:</strong> Join 500+ members in our Discord and Telegram channels, sharing knowledge, job opportunities, and collaborating on projects. Active discussions on ML papers, career advice, and technical topics.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-white font-bold mt-1">•</span>
                    <span><strong className="text-white">Partnerships:</strong> We connect companies with top AI talent through sponsorships, recruiting events, and custom partnership packages.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-white font-bold mt-1">•</span>
                    <span><strong className="text-white">Workshops & Talks:</strong> Regular events featuring industry experts, hands-on coding sessions, and deep dives into latest AI technologies.</span>
                  </li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">
                  Timeline
                </h2>
                <div className="space-y-6">
                  {milestones.map((milestone, index) => (
                    <TimelineItem key={index} index={index}>
                      <span className="text-white font-bold text-lg min-w-[60px]">{milestone.year}</span>
                      <span className="text-neutral-400">{milestone.event}</span>
                    </TimelineItem>
                  ))}
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">
                  Location & Operations
                </h2>
                <p className="text-neutral-300 leading-relaxed mb-4">
                  <strong className="text-white">Headquarters:</strong> Turku, Finland
                  <br />
                  <strong className="text-white">Legal Entity:</strong> Since AI ry
                  <br />
                  <strong className="text-white">Business ID:</strong> 3593920-2
                  <br />
                  <strong className="text-white">Founded:</strong> {FOUNDING_YEAR}
                </p>
                <p className="text-neutral-400 leading-relaxed">
                  While our operations are based in Turku, our community is global. We have members across Finland 
                  and international participants who join our events remotely or travel to Turku for hackathons.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">
                  Support & Partners
                </h2>
                <p className="text-neutral-300 leading-relaxed mb-4">
                  Since AI is supported by leading organizations including:
                </p>
                <ul className="grid grid-cols-2 gap-3 text-neutral-400 mb-6">
                  <li>• University of Turku</li>
                  <li>• Turku University of Applied Sciences</li>
                  <li>• City of Turku</li>
                  <li>• Business Turku</li>
                  <li>• Aalto AI</li>
                  <li>• AI Mad Lab</li>
                </ul>
                <p className="text-neutral-400 leading-relaxed">
                  Our partner companies include Valmet, Sandvik, Kongsberg, ElevenLabs, Featherless.ai, Skillio, 
                  Antler, Apelago, and Eisko.
                </p>
              </section>

              <section className="mb-12 p-8 rounded-2xl border border-white/10 bg-white/[0.02]">
                <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">
                  Get Involved
                </h2>
                <div className="space-y-4 text-neutral-300">
                  <p>
                    <strong className="text-white">Developers & Researchers:</strong>{" "}
                    <Link href="/contact" className="text-white hover:text-neutral-300 underline">
                      Join our Discord community
                    </Link> to participate in hackathons, connect with peers, and access job opportunities.
                  </p>
                  <p>
                    <strong className="text-white">Companies:</strong>{" "}
                    <Link href="/contact" className="text-white hover:text-neutral-300 underline">
                      Partner with us
                    </Link> to access top AI talent, sponsor events, or collaborate on challenges.
                  </p>
                  <p>
                    <strong className="text-white">Questions?</strong>{" "}
                    <Link href="/faq" className="text-white hover:text-neutral-300 underline">
                      Check our FAQ
                    </Link> or{" "}
                    <Link href="/contact" className="text-white hover:text-neutral-300 underline">
                      contact our team
                    </Link>.
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
