"use client";

import Image from "next/image";

const logos = [
  {
    src: "https://www.pulse-clinic.co.uk/wp-content/uploads/2024/07/Aesthetics-Journal-Logo-1.png",
    alt: "Aesthetics Journal",
  },
  {
    src: "https://www.pulse-clinic.co.uk/wp-content/uploads/2024/07/s1df.png",
    alt: "Media logo",
  },
  {
    src: "https://www.pulse-clinic.co.uk/wp-content/uploads/2024/07/zdf23.png",
    alt: "Media logo",
  },
  {
    src: "https://www.pulse-clinic.co.uk/wp-content/uploads/2024/07/Aesthetics-Journal-Logo-2.png",
    alt: "Aesthetics Journal",
  },
  {
    src: "https://www.pulse-clinic.co.uk/wp-content/uploads/2025/09/images.png",
    alt: "Media logo",
  },
  {
    src: "https://www.pulse-clinic.co.uk/wp-content/uploads/2025/09/Forbes-Emblem-scaled.png",
    alt: "Forbes",
  },
  {
    src: "https://www.pulse-clinic.co.uk/wp-content/uploads/2025/09/bespokeblackbook.webp",
    alt: "Bespoke Black Book",
  },
];

export default function AsSeenIn() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Centered heading with "As Seen In" subtitle */}
        <div className="text-center mb-10 md:mb-12">
          <span className="pulse-subtitle text-lg font-medium text-gray-600 tracking-wide uppercase">
            As Seen In
          </span>
        </div>

        {/* Marquee container with top/bottom borders */}
        <div className="relative border-t border-b border-gray-200 py-8 md:py-10 lg:py-12">
          <div className="overflow-hidden">
            <div
              className="flex animate-marquee whitespace-nowrap will-change-transform hover:[animation-play-state:paused]"
              style={{
                animation: "marquee 45s linear infinite",
              }}
            >
              {/* First set of logos */}
              {logos.map((logo, idx) => (
                <div
                  key={`logo-1-${idx}`}
                  className="shrink-0 mx-6 sm:mx-8 md:mx-10 lg:mx-12"
                >
                  <div className="w-32 sm:w-40 md:w-48 lg:w-56 h-16 sm:h-20 flex items-center justify-center transition-all duration-400 grayscale hover:grayscale-0 hover:scale-110 hover:brightness-110">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={220}
                      height={100}
                      className="max-w-full max-h-full object-contain"
                      quality={85}
                      priority={idx < 4}
                    />
                  </div>
                </div>
              ))}

              {/* Duplicate set for seamless infinite loop */}
              {logos.map((logo, idx) => (
                <div
                  key={`logo-2-${idx}`}
                  className="shrink-0 mx-6 sm:mx-8 md:mx-10 lg:mx-12"
                >
                  <div className="w-32 sm:w-40 md:w-48 lg:w-56 h-16 sm:h-20 flex items-center justify-center transition-all duration-400 grayscale hover:grayscale-0 hover:scale-110 hover:brightness-110">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={220}
                      height={100}
                      className="max-w-full max-h-full object-contain"
                      quality={85}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
