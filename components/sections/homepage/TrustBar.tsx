"use client";
import React from "react";
import Image from "next/image";

export function TrustBar() {
  // All logos mixed together (partners + supporters)
  const allLogos = [
    { name: "Valmet", logo: "/assets/sponsors/valmet.png" },
    { name: "University of Turku", logo: "/assets/supports/universityofturku.png" },
    { name: "Sandvik", logo: "/assets/sponsors/sandvik.png" },
    { name: "Turku AMK", logo: "/assets/supports/turkuamk.png" },
    { name: "Kongsberg", logo: "/assets/sponsors/kongsberg.png" },
    { name: "ElevenLabs", logo: "/assets/sponsors/elevenlabs.png" },
    { name: "City of Turku", logo: "/assets/supports/cityofturku.png" },
    { name: "Antler", logo: "/assets/sponsors/antler.png" },
    { name: "Boost Turku", logo: "/assets/supports/boost.svg" },
    { name: "Featherless.ai", logo: "/assets/sponsors/featherless.svg" },
  ];

  return (
    <section className="py-16 px-6 bg-black border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <p className="text-xs uppercase tracking-wider text-neutral-600 font-semibold text-center mb-10">
          Trusted & Supported By
        </p>

        {/* Infinite scrolling logos */}
        <div className="relative w-full">
          <div className="flex gap-16 animate-scroll">
            {/* First set */}
            {allLogos.map((logo, index) => (
              <div
                key={`logo-1-${index}`}
                className="flex items-center justify-center flex-shrink-0 w-32 h-16"
              >
                <Image
                  src={logo.logo}
                  alt={`${logo.name} logo`}
                  width={120}
                  height={60}
                  style={{ width: 'auto', height: 'auto', maxWidth: '100%', maxHeight: '100%' }}
                  className="object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {allLogos.map((logo, index) => (
              <div
                key={`logo-2-${index}`}
                className="flex items-center justify-center flex-shrink-0 w-32 h-16"
              >
                <Image
                  src={logo.logo}
                  alt={`${logo.name} logo`}
                  width={120}
                  height={60}
                  style={{ width: 'auto', height: 'auto', maxWidth: '100%', maxHeight: '100%' }}
                  className="object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}

            {/* Third set for extra smoothness */}
            {allLogos.map((logo, index) => (
              <div
                key={`logo-3-${index}`}
                className="flex items-center justify-center flex-shrink-0 w-32 h-16"
              >
                <Image
                  src={logo.logo}
                  alt={`${logo.name} logo`}
                  width={120}
                  height={60}
                  style={{ width: 'auto', height: 'auto', maxWidth: '100%', maxHeight: '100%' }}
                  className="object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3));
          }
        }

        .animate-scroll {
          animation: scroll 40s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
